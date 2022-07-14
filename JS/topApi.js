const topContainer = document.querySelector('.top__list')
const url = 'https://api.jikan.moe/v4/top/anime'

fetch(url)
.then(res => res.json())
.then(data => {
    data.data.forEach(element => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = 
        `
        <div class="top__item">
        <img class="top__image" src="${element.images.jpg.image_url}" alt="">
        <p class="top__text">${element.title}</p>
        <p class="top__text"> Episodios: ${element.episodes}</p>
        </div>
        `
        topContainer.appendChild(newDiv);
    })
})
