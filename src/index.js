function getDog() {
	const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

	fetch(imgUrl).then(resp => resp.json()).then(function(json) {
		for(const dogUrl of json.message){
			putImage(dogUrl)
		}
	})
}

function getDogUrl(url) {
	fetch(url).then(resp => resp.json()).then(function(json) {
		return json.message
	})
}

function putImage(url) {
	div = document.getElementById('dog-image-container')
	const img = document.createElement("img");
	img.src = url
	div.appendChild(img)
}

function getDogBreeds() {
	const breedUrl = 'https://dog.ceo/api/breeds/list/all'

	fetch(breedUrl).then(resp => resp.json()).then(function(json) {
		for(const breed of Object.keys(json.message)) {
			putBreed(breed)
		}
	})
}

function putBreed(breed) {
	ul = document.getElementById('dog-breeds')
	const a = document.createElement('a')
	const li = document.createElement('li')
	li.innerText = breed
	a.href = getDogUrl(`https://dog.ceo/api/breed/${breed}/images/random`)
	a.appendChild(li)
	ul.appendChild(a)
}


document.addEventListener("DOMContentLoaded", function() {
	getDog()
	getDogBreeds()
})