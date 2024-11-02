export default class CounterModel {
  #count = 0;

  increment() {
    this.#count++;
  }

  reset() {
    this.#count = 0;
  }

  get getCount() {
    return this.#count;
  }
}