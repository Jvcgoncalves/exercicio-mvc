export default class CounterController { 
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    console.log({
      "this.#model": this.#model,
      "this.#view": this.#view,
    })

    this.#view.showCount(this.#model.getCount)
    console.log(this)
    this.#view.bindIncreaseEvent(this.#handleIncrease.bind(this))
    this.#view.bindResetEvent(this.#handleReset.bind(this))
  }
  
  #handleIncrease() {
    this.#model.increment();
    this.#view.showCount(this.#model.getCount);
  }

  #handleReset() {
    this.#model.reset();
    this.#view.showCount(this.#model.getCount);
  }
}