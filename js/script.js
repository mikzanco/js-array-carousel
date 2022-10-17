const imagesArray = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
];

let imagesTags = '';

const slider = document.querySelector('.img-wrapper')


for (let i = 0; i < imagesArray.length; i++) {
    
    imagesTags += `
    <img src="img/01.jpg" alt="">
    `
    
}

slider.innerHTML += imagesTags;