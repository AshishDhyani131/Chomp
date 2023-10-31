const templateHeader = document.createElement("template");
templateHeader.innerHTML = `
<link rel="stylesheet" href="/css/general.css" />
<style>
    .banner {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    .nav-container {
        display: flex;
        justify-content: space-between;
      }
    .nav-container nav{
        display: flex;
        gap: 3.2rem;
    }
    .cart-icon {
      position: relative;
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 9px;
    }
    .cart-items {
      position: absolute;
      top: 0;
      right: 0;
    }
</style>
<header>
    <header class="banner bg-primary-600 bg-img">
        <p class="fs-200 fw-100 py-200 text-neutral-100">
            We're open and available for takeaway & delivery.
            <strong class="fw-400">Order Now</strong>
        </p>
    </header>
    <main class="container nav-container py-400">
        <a href="#">
            <img src="logos/icon.svg" alt="logo" class="logo" />
        </a>
        <nav>
            <ul role="list" class="main-nav-list fs-300">
              <li><a id="1" class="main-nav-link nav-cta" href="#">Home</a></li>
              <li><a id="2" class="main-nav-link" href="#">Order</a></li>
              <li><a id="3" class="main-nav-link" href="#">Company</a></li>
              <li><a id="4" class="main-nav-link" href="#">FAQ</a></li>
              <li><a id="5" class="main-nav-link" href="#">Contact</a></li>

            </ul>
            <a href="#" class="class-container">
              <ion-icon
                name="cart"
                class="cart-icon text-neutral-100 bg-primary-600 bg-img p-300"
              >
              </ion-icon>
              <!-- <span class="cart-items">0</span> -->
            </a>
      
        </nav>
    </main>
</header>`;
class customHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(templateHeader.content.cloneNode(true));
    // const target = this.shadowRoot.querySelector(
    //   `#${this.getAttribute("data-id")}`
    // );
    console.log(this.shadowRoot);
  }
  // updatePage(event) {
  //   const target = event.target;
  //   console.log(target);
  // }
  // connectedCallback() {
  //   this.shadowRoot
  //     .querySelector(".main-nav-list")
  //     .addEventListener("click", this.updatePage);
  // }
}
window.customElements.define("custom-header", customHeader);
