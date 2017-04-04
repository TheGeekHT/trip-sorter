// @flow

class FindBestTrip {
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

  static createVertices(data: Array<Object>, type: string) {
    let vertices: Object = {} // put all our nodes and weights here

    data.forEach(item => {
      const from: string = item.departure
      const to: string = item.arrival
      const ref: string = item.reference

      const cost: number = item.cost * (1 - (item.discount / 100))
      const time: number = parseInt(item.duration.h + item.duration.m, 10)
      let weight: number = 0

      switch (type) {
        case 'cheapest':
          weight = cost
          break
        case 'fastest':
          weight = time
          break
        default:
          throw new Error('Unsupported trip type')
      }

      if (!vertices[from]) vertices[from] = []

      if(!vertices[from][to] || weight < vertices[from][to].weight) vertices[from][to] = { weight, ref }
    })

    return vertices
  }

  find() {
    console.log('run finder')
    const vertices = this.constructor.createVertices(this.deals, this.type)
  }
}

export default FindBestTrip
