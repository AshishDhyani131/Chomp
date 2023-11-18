import View from "./View.js";
class ResultsView extends View {
  _parentElement = document.querySelector(".food-items-container");
  _errorMessage = "No results found for your query. Please try again!";
  _message = "";

  _generateMarkup() {
    return this._data
      .map((recipe) => {
        return `
        <food-card class="food-card" source=${recipe.image}>
            <div slot="item-name">${recipe.title}</div>
            <div slot="item-price">$9.20 USD</div>
            <div slot="item-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
        </food-card>
        `;
      })
      .join("");
  }
  addHandlerClick(handler) {
    this._parentElement
      .getElementsByTagName("food-card")
      .forEach((foodCard) => {
        foodCard.shadowRoot.querySelector("");
      });

    // console.log(e.target);
  }
}

export default new ResultsView();
