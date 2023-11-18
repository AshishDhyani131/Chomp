import View from "./View.js";

class FoodCard extends View {
  _parentElement = document.querySelector(".food-card");
  fetchFoodCount() {}
  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      console.log(this._parentElement.shadowRoot);
      // console.log(e.target);
    });
  }
}
export default new FoodCard();
