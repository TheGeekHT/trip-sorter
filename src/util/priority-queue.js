// @flow

class PriorityQueue {
  nodes: Array<Object>;

  constructor() {
    this.nodes = [];
  }

  add(key: string, priority: number) {
    this.nodes.push({key, priority});
    this.sort();
  }

  ejectSmallest = () => this.nodes.shift().key;

  isEmpty = () => !this.nodes.length;

  sort() {
    this.nodes.sort((a, b) => a.priority - b.priority);
  }
}

export default PriorityQueue
