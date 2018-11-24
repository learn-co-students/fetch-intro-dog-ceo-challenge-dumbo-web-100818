console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded",()=>{

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res => res.json())
    .then(json => showImagesAtStart(json.message))
    .catch(err => console.log(err))

  const allDogs = "https://dog.ceo/api/breeds/list/all"
    fetch(allDogs)
    .then(res => res.json())
    .then(json => allDogNames(json.message))
    .catch(err => console.log(err))

})

function showImagesAtStart(givenResponse) {
  const dogImageContainer = document.getElementById("dog-image-container")
  givenResponse.forEach((eachDog)=>{
    let newImg = `<img src="${eachDog}" height="250px" width="350px"></img>`
    dogImageContainer.innerHTML += newImg
  })
}

function allDogNames(givenBreeds) {

  const breedsContainer = document.getElementById("dog-breeds")
  for(breed in givenBreeds){
      let addBreed = `<li id="${breed}"onclick="changeTextColor(${breed})">${breed}</li>`
      breedsContainer.innerHTML += addBreed
    }

    const breedSelector = document.querySelector("#breed-dropdown")
    breedSelector.addEventListener("change", (event) =>{
      const breedsContainer = document.getElementById("dog-breeds")
      breedsContainer.innerHTML= ""
      for(breed in givenBreeds){
        if(breed.startsWith(event.target.value) ){
          let addBreed = `<li id="${breed}"onclick="changeTextColor(${breed})">${breed}</li>`
          breedsContainer.innerHTML += addBreed
        }
      }
    })



}

function changeTextColor(givenBreed) {
  const breedsContainer = document.getElementById("dog-breeds")
  const dogBreed = givenBreed.id
  let element = breedsContainer.children[dogBreed]
  element.style.color="blue"
}
