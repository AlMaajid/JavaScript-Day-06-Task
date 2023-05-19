class Uber {
  constructor(bf, td, toll, cp) {
    this.base_fare = bf;
    this.total_distance = td;
    this.tolls = toll;
    this.costPerKm = cp;
    if (this.tolls == undefined || this.total_distance == undefined) {
      this.tolls = 0;
      this.total_distance = 0
    }
  }

  getBill() {
    let total = this.base_fare + (this.total_distance * this.costPerKm) + this.tolls;
    return `The total fare is : ${total}`
  }
}


let uber = new Uber(125, 35, 0, 5)
console.log(uber.getBill())