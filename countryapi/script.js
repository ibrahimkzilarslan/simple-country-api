const button = document.querySelector("#searchBut");
const input = document.querySelector("#searchInp");
const result = document.querySelector(".result");



function main() {
  button.addEventListener("click", () => {

    let countryName = input.value;
    let apiURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;



    fetch(apiURL)
      .then(res => res.json())
      .then(data => {

        console.log(data[0])

        result.innerHTML = `<img src="${data[0].flags.svg}" class="flagImg">
      <h2 class="name">${data[0].name.common}</h2>
      <div class="infoResult">

      <div class="infoResultWrapper">
       <h4>Capital : ${data[0].capital[0]}</h4>
       <h4>Languages : ${Object.values(data[0].languages).toString().split(",").join(", ")}</h4>
       <h4>Currencies : ${Object.keys(data[0].currencies)[0]}</h4>
       <h4 Continents : ${data[0].continents[0]}</h4>

      </div>
      </div>`

      })
      .catch(() => {
        if (countryName.length == 0) {
          result.innerHTML = `<h4 class="errorEmpty">The input field cannot be empty.<h4>`;
        } else {
          result.innerHTML = `<h4 class= "errorUndefined">Please enter a valid country name.<h4>`;

        }
      })

  })

}
main();





