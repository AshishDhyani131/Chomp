export default class View {
  _data;

  render(Obj) {
    // if (!Obj || (Array.isArray(Obj) && Obj.length === 0)){
    //     return this.renderError()
    // }

    this._data = Obj;
    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
  renderSpinner() {
    const markup = `
        <div class="spinner">
            <img src="logos/loading.svg" alt="laoding-spinner" />;
        </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
