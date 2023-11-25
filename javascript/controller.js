import * as model from "./model.js";
import resultsView from "./Views/resultsView.js";
import searchView from "./Views/searchView.js";
import paginationView from "./Views/paginationView.js";
import overlayView from "./Views/overlayView.js";
let cartItems = {};
const loadRecipes = async function () {
  try {
    const query = searchView.fetchFoodItem();
    if (!query) return;
    resultsView.renderSpinner();
    // Load INITIAL food list
    await model.loadSearchResults(query);

    // Load INITIAL food list
    resultsView.render(model.loadResultsPage());

    // Load pagination
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const paginationRender = function (currPage) {
  // Load food list latest
  resultsView.render(model.loadResultsPage(currPage));

  // Load pagination
  paginationView.render(model.state.search);
};

const overlayRender = function (detail) {
  cartItems[`${detail.id}`] = detail.item;
  overlayView.render(cartItems);
};

const init = function () {
  searchView.addHandlerSubmit(loadRecipes);
  paginationView.addHandlerClick(paginationRender);
  resultsView.addHandlerClick(overlayRender);
};
init();
document.querySelector(".click").addEventListener("click", () => {
  document.querySelector("custom-modal").open = true;
});
