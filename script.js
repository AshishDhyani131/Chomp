const header = document.querySelector("#header");

async function loadHeader() {
  const res = await fetch("components/header.html");
  const data = await res.text();
  console.log(data);
  header.innerHTML = data;
}
loadHeader();
