const templateHero = document.createElement("template");
templateHero.innerHTML = `
        <link rel="stylesheet" href="/css/general.css" />
        <style>
            .hero-heading {
                text-align: center;
                vertical-align: middle;
            }
        </style>
        <section class="hero-section bg-primary-50">
        <h1
          class="hero-heading fs-primary-heading fw-700 text-neutral-900 letter-spacing-primary p-1200"
        >
          Get your food <span class="text-primary-600"> delivered</span>,<br />
          or <span class="text-primary-600"> pick-up</span> in store.
        </h1>
        </section>
        

            `;
class heroCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(heroCard.content.cloneNode(true));
  }
}
window.customElements.define("custom-hero", foodCard);
