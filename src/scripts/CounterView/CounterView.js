export default class CounterView {
  #counterValueToDisplay;
  #increaseButton;
  #resetButton;

  constructor() {
    this.#counterValueToDisplay = document.getElementById("click-amount");
    this.#increaseButton = document.getElementById("increase-amount-button");
    this.#resetButton = document.getElementById("reset-amount-button");
  }

  showCount(count) {
    this.#counterValueToDisplay.textContent = count;
  }

  bindIncreaseEvent(handlerEvent) {
    this.#increaseButton.addEventListener("click", handlerEvent);
  }

  bindResetEvent(handlerEvent) {
    this.#resetButton.addEventListener("click", handlerEvent);
  }
}