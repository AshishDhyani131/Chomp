import View from "./View.js";
class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");
  _generateMarkup() {
    const currPage = this._data.page;
    const totalPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    if (totalPages === 1) {
      return `
            <button class="btn--inline btn--inline--active">
                <span class="py-200 px-300">1</span>
            </button>
        `;
    }
    let markup = "";
    for (let i = 1; i <= totalPages; i++) {
      markup += `
            <button data-page = ${i} class="btn--inline ${
        i === this._data.page ? "btn--inline--active" : ""
      }">
                <span class="py-200 px-300">${i}</span>
            </button>
            `;
    }
    return `
        <button class="btn--inline pagination__btn--prev">
            <ion-icon name="chevron-back-outline" class="p-200"></ion-icon>
        </button>
        ${markup}
        <button class="btn--inline pagination__btn--next">
            <ion-icon name="chevron-forward-outline" class="p-200"></ion-icon>
        </button>
    `;
  }
  _goToPage(btn) {
    const currPage = +this._parentElement.querySelector(".btn--inline--active")
      .dataset.page;
    const totalPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // console.log(currPage);
    let goToPage;
    if (btn.classList.contains("pagination__btn--next")) {
      goToPage = currPage + 1;
    } else if (btn.classList.contains("pagination__btn--prev")) {
      goToPage = currPage - 1;
    } else {
      goToPage = +btn.dataset.page;
    }
    console.log(totalPages);
    return goToPage > 0 && goToPage <= totalPages ? goToPage : currPage;
  }
  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      // console.log(btn);
      const goToPage = this._goToPage(btn);
      // console.log(goToPage);
      handler(goToPage);
    });
  }
}

export default new PaginationView();
