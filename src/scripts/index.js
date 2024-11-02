import CounterController from "./CounterController/CounterController.js";
import CounterModel from "./CounterModel/CounterModel.js"
import CounterView from "./CounterView/CounterView.js";

document.addEventListener("DOMContentLoaded", () => {
  const model = new CounterModel();
  const view = new CounterView();
  new CounterController(model, view);
})