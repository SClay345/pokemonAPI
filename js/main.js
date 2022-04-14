//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = "https://pokeapi.co/api/v2/pokemon/" + choice;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerHTML =
        data.name[0].toUpperCase() + data.name.substring(1);
      document.getElementById("front").src = data.sprites.front_default;
      document.getElementById("back").src = data.sprites.back_default;
      document.getElementById("frontShiny").src = data.sprites.front_shiny;
      document.getElementById("backShiny").src = data.sprites.back_shiny;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
