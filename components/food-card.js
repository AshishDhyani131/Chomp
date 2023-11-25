const templateCard = document.createElement("template");
templateCard.innerHTML = `
    
    <link rel="stylesheet" href="/css/general.css" />
    <style>
      .food-item {
        display: flex;
        gap: 3.6rem;
        border: 1.5px solid var(--clr-primary-100);
        border-radius: 9px;
        background-color: var(--clr-neutral-100);
        padding: 3.2rem 3.2rem;
        transition: border-color 0.3s;
      }
        .text-container {
        width: 90%;
      }
     .food-heading-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .food-item:hover {
        border: 1.5px solid var(--clr-primary-400);
      }
      .food-item img {
        width: 128px;
        height: 128px;
        border-radius: 9px;
        
      }
      .btn--cart {
        
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 300;
        padding: 1.6rem 2.4rem;
        border-radius: 9px;
        border: none;
        cursor: pointer;
        font-family: inherit;
        transition: all 0.3s;
      }
      .cart-count {
        height: 50px;
        width: 60px;
        padding: 16px 12px;
        border-radius: 9px;
        border: 1px solid #ddd;
        background-color: #fafafa;
      }
    
      .cart-count:active,
      .cart-count:focus {
        border: 1px solid var(--clr-primary-100);
      }
    </style>
    <div class="food-item">
        <img id="food-img" alt="food-img" />

        <div class="text-container">
          <div class="food-heading-container">
            <h3
              class="fs-tertiary-heading fw-500 text-neutral-900 letter-spacing-tertiary line-height-md"
            >
              <slot name="item-name"/>
            </h3>
            <span class="text-primary-600 fs-200"><slot name="item-price"/></span>
          </div>
          <p class="fs-200 mt-300">
            <slot name="item-description"/>
          </p>
          <form id="cart-form" class="mt-200">
            <input
              type="number"
              name="quantity"
              value="1"
              min="1"
              class="cart-count fs-200 mr-200"
            />
            <button href="#" class="btn--cart btn--primary bg-primary-600 bg-img text-neutral-100">Add to cart</button>
          </form>
        </div>
    </div>`;
class FoodCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._updateCart = this._updateCart.bind(this);
    this.imgElement = null;
  }
  static get observedAttributes() {
    return ["source"];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (newValue !== oldValue) {
      this._updateImageSource();
    }
  }
  connectedCallback() {
    this.shadowRoot.appendChild(templateCard.content.cloneNode(true));
    this.imgElement = this.shadowRoot.querySelector("#food-img");
    this._updateImageSource();
    this.shadowRoot
      .querySelector("#cart-form")
      .addEventListener("submit", this._updateCart);
  }
  disconnectedCallback() {
    this.shadowRoot
      .querySelector("#cart-form")
      .removeEventListener("submit", this._updateCart);
  }
  _updateCart(event) {
    event.preventDefault();
    const total = this.shadowRoot
      .querySelector("#cart-form")
      .querySelector("input").value;

    const itemNameSlot = this.shadowRoot.querySelector(
      'slot[name="item-name"]'
    );
    const itemPriceSlot = this.shadowRoot.querySelector(
      'slot[name="item-price"]'
    );

    // Accessing the actual content within the slot
    const itemName = itemNameSlot.assignedNodes()[0].innerText;
    const itemPrice = itemPriceSlot.assignedNodes()[0].innerText;
    const itemSrc = this.getAttribute("source");
    const id = this.dataset.id;
    const itemObj = {
      id,
      item: { total, itemName, itemPrice, itemSrc },
    };
    const submitEvent = new CustomEvent("formSubmit", { detail: itemObj });
    document.querySelector(".food-items-container").dispatchEvent(submitEvent);
    // this.dispatchEvent(submitEvent);
  }
  _updateImageSource() {
    if (this.imgElement) {
      this.imgElement.src = this.getAttribute("source");
    }
  }
}
window.customElements.define("food-card", FoodCard);
