import View from "./View.js";
class ResultsView extends View {
  _parentElement = document.querySelector(".food-items-container");
  _errorMessage = "No results found for your query. Please try again!";
  _message = "";
  template = "";
  _generateMarkup() {
    this.template = this._data
      .map((recipe) => {
        return `
        <food-card class="food-card" source=${recipe.image} data-id=${recipe.id}>
            <div slot="item-name">${recipe.title}</div>
            <div slot="item-price">$9.20 USD</div>
            <div slot="item-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
        </food-card>
        `;
      })
      .join("");
    return this.template;
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener("formSubmit", (event) => {
      // console.log(event.detail);
      handler(event.detail);
    });

    // console.log(e.target);
  }
}

export default new ResultsView();
