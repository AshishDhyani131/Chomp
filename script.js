const AP_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";
const foodContainer = document.querySelector("#food-items-container");
const searchBar = document.querySelector("#search-bar");

function renderHTML(recipe) {
  const template = document.createElement("template");
  console.log(foodContainer);
  template.innerHTML = ` 
  <food-card source=${recipe.image}>
    <div slot="item-name">${recipe.title}</div>
    <div slot="item-price">$9.20 USD</div>
    <div slot="item-description">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
  </food-card
>`;
  foodContainer.appendChild(template.content.cloneNode(true));
}
async function loadFood(event) {
  event.preventDefault();
  console.log(event.srcElement[0]);
  // try {
  //   const res = await fetch(
  //     "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=80630200-6f85-4619-9c40-81529337ecb0"
  //   );

  //   const data = await res.json();
  //   console.log(data);
  //   if (!res.ok) {
  //     throw new Error("Food not found");
  //   }
  //   let { recipes } = data.data;

  //   recipes.forEach((recipe) => {
  //     recipe = {
  //       image: recipe.image_url,
  //       title: recipe.title,
  //       ingredients: recipe.ingredients,
  //     };
  //     renderHTML(recipe);
  //   });
  // } catch (err) {
  //   console.log(err);
  // }
}
searchBar.addEventListener("submit", loadFood);
