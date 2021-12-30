const inspect = Symbol.for('nodejs.util.inspect.custom');

export default class Status {
  constructor(name) {
    this.name = name;
  }
  toString() {
    console.log('-----------toString');
    return this.name;
  }

  get [Symbol.toStringTag]() {
    console.log('-----------Symbol.toStringTag');
    return this.toString();
  }

  [inspect]() {
    console.log('-----------inspect');
    return this.toString();
  }
}
