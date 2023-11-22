import * as model from "./model.js";
import resultsView from "./Views/resultsView.js";
import searchView from "./Views/searchView.js";
import paginationView from "./Views/paginationView.js";
import foodCardView from "./Views/foodCardView.js";

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

const overlayRender = function () {};

const init = function () {
  searchView.addHandlerSubmit(loadRecipes);
  paginationView.addHandlerClick(paginationRender);
  // foodCardView.addHandlerClick(overlayRender);
  // resultsView.addHandlerClick(overlayRender);
};
init();
