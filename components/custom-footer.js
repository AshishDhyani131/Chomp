const templateFooter = document.createElement("template");
templateFooter.innerHTML = `
    <link rel="stylesheet" href="/css/general.css">
    <style>
      .footer {
        background-color: var(--clr-primary-50);
        background-position: left bottom;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .footer-top {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: var(--sp-600);
      }
      .list-heading {
        text-transform: uppercase;
        letter-spacing: 1.75;
      }
      .list-item,
      .list-item:link,
      .list-item:visited {
        font-size: var(--fs-200);
        color: inherit;
        transition: all 0.3s;
      }
      .list-item:focus,
      .list-item:hover,
      .list-item:active {
        color: var(--clr-neutral-900);
      }
      .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .credit-links {
        display: flex;
        gap: var(--sp-300);
      }
      .social-links {
        display: flex;
      
        gap: 2.4rem;
      }
      .social-link,
      .social-link:link,
      .social-link:visited {
        border: 0.5px solid var(--clr-neutral-800);
        border-radius: 50%;
        padding: 8px;
        color: var(--clr-neutral-800);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;
      }
      .social-link:hover,
      .social-link:active {
        border: 0.5px solid var(--clr-neutral-400);
        color: var(--clr-neutral-400);
      }
      .social-icon {
        height: 20px;
        width: 20px;
      }
    </style>
    <footer class="footer mt-500">
        <div class="container py-900">
          <div class="footer-top">
            <div>
              <img src="logos/icon.svg" alt="logo" class="logo" />
              <p class="fs-300 mt-400">
                Takeaway & Delivery template for small - medium businesses.
              </p>
            </div>
            <ul role="list">
              <li>
                <p class="list-heading text-neutral-900 fs-100 fw-500">company</p>
              </li>
              <li class="mt-400"><a href="#" class="list-item">Home </a></li>
              <li class="mt-400"><a href="#" class="list-item">Order</a></li>
              <li class="mt-400"><a href="#" class="list-item">FAQ</a></li>
              <li class="mt-400"><a href="#" class="list-item">Contact</a></li>
            </ul>
            <ul role="list">
              <li>
                <p class="list-heading text-neutral-900 fs-100 fw-500">
                  template
                </p>
              </li>
              <li class="mt-400">
                <a href="#" class="list-item">Style Guide</a>
              </li>
              <li class="mt-400"><a href="#" class="list-item">Changelog</a></li>
              <li class="mt-400"><a href="#" class="list-item">Licence</a></li>
              <li class="mt-400">
                <a href="#" class="list-item">Webflow University</a>
              </li>
            </ul>
            <ul role="list">
              <li>
                <p class="list-heading text-neutral-900 fs-100 fw-500">
                  flowbase
                </p>
              </li>
              <li class="mt-400">
                <a href="#" class="list-item">More Cloneables</a>
              </li>
            </ul>
          </div>
          <div class="divider"></div>
          <div class="footer-bottom">
            <ul role="list" class="credit-links fs-200">
              <li>
                <p>
                  Built by
                  <a href="#" class="credit-link text-primary-600">Flowbase</a>
                </p>
              </li>
              <li>
                <p>
                  Powered by
                  <a href="#" class="credit-link text-primary-600">Webflow</a>
                </p>
              </li>
            </ul>
            <ul role="list" class="social-links">
              <li>
                <a href="#" class="social-link">
                  <ion-icon class="social-icon" name="logo-instagram"></ion-icon
                ></a>
              </li>
              <li>
                <a href="#" class="social-link">
                  <ion-icon class="social-icon" name="logo-twitter"></ion-icon
                ></a>
              </li>
              <li>
                <a href="#" class="social-link">
                  <ion-icon class="social-icon" name="logo-youtube"></ion-icon
                ></a>
              </li>
            </ul>
          </div>
        </div>
    </footer>`;
class customFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(templateFooter.content.cloneNode(true));
  }
}
window.customElements.define("custom-footer", customFooter);
