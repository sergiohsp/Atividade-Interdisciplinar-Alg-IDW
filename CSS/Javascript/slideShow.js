'use strict';

const images = [
    { 'id': '1', 'url':'../Imagens/tokyo1.jpg' },
    { 'id': '2', 'url':'../Imagens/tokyo2.jpg' },
    { 'id': '3', 'url':'../Imagens/tokyo3.jpg' },
    { 'id': '4', 'url':'../Imagens/tokyo4.jpg' },
    { 'id': '5', 'url':'../Imagens/tokyo5.jpg' },
    { 'id': '6', 'url':'../Imagens/tokyo6.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

 loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);