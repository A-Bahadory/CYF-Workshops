async function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  }).then((data) => {
    //console.log(data.json());
    return data.json();
  });
  console.log(response, "<---- should see response");
}

getJoke().then((joke) => {
  console.log(joke, "<--- joke");
  document.getElementById("joke").textContent = joke;
});
const button = document.querySelector("#joke-button");
button.addEventListener("click", getJoke);

window.onload = (event) => {
  getJoke;
  console.log("page is fully loaded");
};
