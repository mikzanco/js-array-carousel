const imagesArray = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
];

let imagesTags = '';

const slider = document.querySelector('.items-wrapper');


for(let i = 0; i < imagesArray.length; i++){
    
    imagesTags += `
        <img class="item" src="img/${imagesArray[i]}" alt="">
    `;
    
}

let counterImages = 0;
const next = document.querySelector('.down');
const prev = document.querySelector('.top');


slider.innerHTML += imagesTags;

const items = document.getElementsByClassName('item');



items[counterImages].classList.add('active');

next.addEventListener('click', function() {
    items[counterImages].classList.remove('active');

    items[++counterImages].classList.add('active');

    
})

prev.addEventListener('click', function() {
    items[counterImages].classList.remove('active');

    items[--counterImages].classList.add('active');
})
