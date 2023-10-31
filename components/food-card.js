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
        <img src="/img/burgers/burger-1.png" alt="food-img" />

        <div class="text-container">
          <div class="food-heading-container">
            <h3
              class="fs-tertiary-heading fw-500 text-neutral-900 letter-spacing-tertiary"
            >
              Burger Dreams
            </h3>
            <span class="text-primary-600 fs-200">$ 9.20 USD</span>
          </div>
          <p class="fs-200 mt-300">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <form action="" class="mt-200">
            <input
              type="number"
              name="quantity"
              value="1"
              min="1"
              class="cart-count fs-200 mr-200"
            />
            <a href="#" class="btn--cart btn--primary">Add to cart</a>
          </form>
        </div>
    </div>`;
class foodCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(templateCard.content.cloneNode(true));
  }
}
window.customElements.define("food-card", foodCard);
