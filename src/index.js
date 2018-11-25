console.log('%c HI', 'color: firebrick')

function fetchDogImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl).then(resp => resp.json()).then(renderDogs);
};

function renderDogs(json) {
  const dogImageContainer = document.querySelector("#dog-image-container");
  const imgUrls = json.message;

  for (url of imgUrls) {
    const imgElement = document.createElement("img");
    imgElement.src = url;
    dogImageContainer.appendChild(imgElement);
  };
};

function fetchDogBreeds(letter = "") {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';

  // fetch(breedUrl).then(resp => resp.json()).then(renderBreeds);

  fetch(breedUrl).then(resp => resp.json()).then(function(json) {
    const breeds = json.message;
    const filteredBreeds = []
    for (key in breeds) {
      if (key.startsWith(letter)) filteredBreeds.push(key);
    }
    renderBreeds(filteredBreeds);
  });
};

function renderBreeds(breeds) {
  const dogBreedsContainer = document.querySelector("#dog-breeds");
  dogBreedsContainer.innerHTML = "";
  for (breed of breeds) {
    const listElement = document.createElement("li");
    listElement.innerHTML = breed;
    dogBreedsContainer.appendChild(listElement);
  }
};

function changeTextColor(event) {
  event.target.style.color = "red";
}

function filterBreeds(event) {
  let letter = event.target.value;
  fetchDogBreeds(letter);
}

document.addEventListener("DOMContentLoaded", function(event) {
  const dogBreedsContainer = document.querySelector("#dog-breeds");
  const breedDropdownContainer = document.querySelector("#breed-dropdown");

  fetchDogImages();
  fetchDogBreeds();
  dogBreedsContainer.addEventListener("click", changeTextColor)
  breedDropdownContainer.addEventListener("change", filterBreeds)
});
