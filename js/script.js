const imagesArray = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
];

let imagesTags = '';

const slider = document.querySelector('.items-wrapper');


for (let i = 0; i < imagesArray.length; i++) {
    
    imagesTags += `
        <img class="item" src="img/${imagesArray[i]}" alt="">
    `;
    
}

let counterImages = 0;

slider.innerHTML += imagesTags;