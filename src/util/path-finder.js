// @flow

import PriorityQueue from './priority-queue'

class PathFinder {
  deals: Array<Object>;
  from: string;
  to: string;
  type: string;

  constructor(DEALS: Array<Object>, FROM: string, TO: string, TYPE: string) {
    this.deals = DEALS;
    this.from = FROM;
    this.to = TO;
    this.type = TYPE;
  }

  // build correct Graph for Dijkstra algorithm
  static createVertices(data: Array<Object>, type: string) {
    let vertices: Object = {}; // put all our nodes and weights here

    if (!data) throw new Error('No trips data received');

    data.forEach(item => {
      const from: string = item.departure;
      const to: string = item.arrival;
      const ref: string = item.reference;

      const cost: number = item.cost * (1 - (item.discount / 100));
      const time: number = parseInt(item.duration.h + item.duration.m, 10);
      let weight: number = 0;

      switch (type) {
        case 'cheapest':
          weight = cost;
          break;
        case 'fastest':
          weight = time;
          break;
        default:
          throw new Error('Unsupported trip type')
      }

      if (!vertices[from]) vertices[from] = [];

      if(!vertices[from][to] || weight < vertices[from][to].weight) vertices[from][to] = { weight, ref }
    });

    return vertices
  }

  // Dijkstra algorithm to find shortest path
  static runDijkstra(Graph, from ,to) {
    let nodes = new PriorityQueue();
    let dist = {};
    let prev = {};
    let refTripMap = {};

    // Assign initial values:
    // 0 - for departure city
    // infinity - for all other nodes
    for (let vertex in Graph) {
      if (Graph.hasOwnProperty(vertex)) {
        if (vertex === from) {
          dist[vertex] = 0;
          nodes.add(vertex, 0);
        } else {
          dist[vertex] = Infinity;
          nodes.add(vertex, Infinity);
        }
        prev[vertex] = null;
      }
    }

    while(!nodes.isEmpty()) {
      // u - current FROM node
      let u = nodes.ejectSmallest();

      // exit if we reached destination
      if (u === to) break;

      // continue if we've got nodes to check
      if (!u || dist[u] === Infinity) continue;

      // v - current TO node
      for (let v in Graph[u]) {
        if (Graph[u].hasOwnProperty(v)) {
          const alt = dist[u] + Graph[u][v].weight;
          if (alt < dist[v]) {
            dist[v] = alt;
            prev[v] = u;
            nodes.add(v, alt);
            refTripMap[`${u}-${v}`] = Graph[u][v].ref;
          }
        }
      }
    }

    return { prev, refTripMap }
  }

  static getBestTrip(dijkstraOutput, to) {
    let trips = [];
    let arrival = to;
    let departure = dijkstraOutput.prev[arrival];

    while (departure) {
      trips.push(dijkstraOutput.refTripMap[`${departure}-${arrival}`]);
      arrival = departure;
      departure = dijkstraOutput.prev[departure];
    }

    return trips.reverse();
  }

  find() {
    const Graph = this.constructor.createVertices(this.deals, this.type);
    const DijkstraOutput = this.constructor.runDijkstra(Graph, this.from, this.to);
    return this.constructor.getBestTrip(DijkstraOutput, this.to);
  }
}

export default PathFinder
