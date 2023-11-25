class OverlayView {
  _parentElement = document.querySelector("custom-modal");
  _data;
  render(Obj) {
    this._data = Obj;
    const markup = this._generateMarkup();
    this._parentElement.shadowRoot.querySelector(".cart-list").innerHTML = "";
    this._parentElement.shadowRoot
      .querySelector(".cart-list")
      .insertAdjacentHTML("afterbegin", markup);

    this._parentElement.open = true;
  }
  _generateMarkup() {
    let markup = "";
    for (const key in this._data) {
      const obj = this._data[key];
      markup += `
        <li class="cart-item" data-id=${key}>
            <img src=${obj.itemSrc} alt="food-item" />
            <div class="cart-text-container">
            <div class="cart-text fs-200 text-neutral-900">
                <h3 class="cart-food fw-700">${obj.itemName}</h3>
                <p class="price">${obj.itemPrice}</p>
                <button class="cart-remove">Remove</button>
            </div>
            <input
                type="number"
                name="quantity"
                value=${obj.total}
                min="0"
                class="cart-count fs-200 mr-200"
            />
            </div>
        </li>`;
    }
    return markup;
  }
}
export default new OverlayView();
