const templateModal = document.createElement("template");
templateModal.innerHTML = `
    <link rel="stylesheet" href="/css/general.css" />
    <style>
          wrapper {
            opacity: 0;
            transition: visibility 0s, opacity 0.25s ease-in;
          }
          .wrapper:not(open) {
            visibility: hidden;
          }
          .wrapper.open {
            height: 100vh;
            display: flex;
            justify-content: end;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 1;
            visibility: visible;
          }
          .overlay {
            background-color: rgba(0, 0, 0, 0.8);
            height: 100%;
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
          }
          .modal-container {
            background-color: #ffffff;
            width: 35%;
            height: 100%;
            position: fixed;
          }
          .modal-container header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 3.2rem;
          }
          .modal-container header button {
            border: none;
            background-color: inherit;
          }
          .close-btn {
            height: 32px;
            width: 32px;
            --ionicon-stroke-width: 56px;
            cursor: pointer;
          }
          
          .cart-divider {
            border: 0.3px solid #999;
            opacity: 0.4;
          }
          .cart-list {
            display:flex;
            flex-direction:column;
            gap:1.6rem;
            min-height: 73%;
          }
          .cart-item {
            display: flex;
            gap: 2.8rem;
          }
          .cart-text-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .cart-count {
            height: 50px;
            width: 60px;
            padding: 16px 12px;
            border-radius: 9px;
            border: 1px solid #ddd;
            background-color: #fafafa;
          }
          .cart-item img {
            height: 56px;
            width: 56px;
          }
          .cart-remove {
            border: none;
            background-color: inherit;
            color: orange;
            cursor: pointer;
          }
          .cart-footer {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: start;
          }
          .cart-price {
            justify-self: end;
          }
          .checkout-btn {
            grid-column: 1/-1;
            text-align: center;
            border-radius: 5px;
          }
    
    </style>
    <div class="wrapper">
      <div class="overlay"></div>
      <div class="modal-container">
        <header class="pt-300 px-500">
          <h1 class="text-neutral-900 fw-700 h-scale">Your Order</h1>

          <button class="btn-close">
            <ion-icon
              name="close-outline"
              class="text-neutral-900 close-btn"
            ></ion-icon>
          </button>
        </header>
        <div class="cart-divider mt-300"></div>
        <ul role="list" class="cart-list mt-400 px-500">
          <li class="cart-item" data-id="">
            <img src="img/burgers/burger-1.png" alt="food-item" />
            <div class="cart-text-container">
              <div class="cart-text fs-200 text-neutral-900">
                <h3 class="cart-food fw-700">Burger Dreams</h3>
                <p class="price">$ 9.20 USD</p>
                <button class="cart-remove">Remove</button>
              </div>
              <input
                type="number"
                name="quantity"
                value="1"
                min="0"
                class="cart-count fs-200 mr-200"
              />
            </div>
          </li>
        </ul>
        <div class="cart-divider"></div>
        <footer class="cart-footer pt-300 pb-300 px-500">
          <p class="fs-200">Subtotal</p>
          <p class="cart-price fs-200 text-neutral-900 fw-600">$ 9.20 USD</p>
          <a href="#" class="checkout-btn mt-100 fs-300 bg-primary-600"
            ><p class="text-neutral-100 py-300">Proceed to checkout</p></a
          >
        </footer>
      </div>
    </div>
`;

class modalCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.close = this.close.bind(this);
    this._watchEscape = this._watchEscape.bind(this);
  }
  static get observedAttributes() {
    return ["open"];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (newValue !== oldValue) {
      this[attrName] = this.hasAttribute(attrName);
    }
  }
  connectedCallback() {
    this.shadowRoot.appendChild(templateModal.content.cloneNode(true));

    this.shadowRoot
      .querySelector(".close-btn")
      .addEventListener("click", this.close);
    this.shadowRoot
      .querySelector(".overlay")
      .addEventListener("click", this.close);
  }
  disconnectedCallback() {
    this.shadowRoot
      .querySelector(".close-btn")
      .removeEventListener("click", this.close);
    this.shadowRoot
      .querySelector(".overlay")
      .removeEventListener("click", this.close);
  }
  get open() {
    return this.hasAttribute("open");
  }
  set open(isOpen) {
    // console.log(isOpen);
    this.shadowRoot.querySelector(".wrapper").classList.toggle("open", isOpen);
    this.shadowRoot
      .querySelector(".wrapper")
      .setAttribute("aria-hidden", !isOpen);

    if (isOpen) {
      this.setAttribute("open", "");
      document.addEventListener("keydown", this._watchEscape);
    } else {
      this.removeAttribute("open");
      document.removeEventListener("keydown", this._watchEscape);
      this.close();
    }
  }
  close() {
    // console.log(this.open);
    if (this.open !== false) {
      this.open = false;
    }
    const closeEvent = new CustomEvent("dialog-closed");
    this.dispatchEvent(closeEvent);
  }
  _watchEscape(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }
}
window.customElements.define("custom-modal", modalCard);
