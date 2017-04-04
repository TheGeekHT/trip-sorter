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

  find() {
    console.log('run')
    this.createVertices(this.deals, this.type)
  }

  createVertices(data: Array<Object>, type: string) {
    console.log(data);
  }
}

export default FindBestTrip
