class SearchView {
  _parentElement = document.querySelector(".search-bar");
  fetchFoodItem() {
    const query = this._parentElement.querySelector(".search-field").value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._parentElement.querySelector(".search-field").value = "";
  }
  addHandlerSubmit(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
