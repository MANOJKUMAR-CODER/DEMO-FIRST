const url =
  "https://script.google.com/macros/s/AKfycbzR8sjodfBh21Arojk9p9Gxc3Bun34vDE-S5rA4b188Fqy5oCI6SWd_HClZz9mmrbBksw/exec";
let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  let data = new FormData(form);
  fetch(url, {
    method: "POST",
    body: data,
  })
    .then((res) => res.text())
    .then((finalRes) => console.log(finalRes));
  e.preventDefault();
});
