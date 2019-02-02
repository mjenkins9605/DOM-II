// Your code goes here





let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mousedown', (event) => {
    logoHeading.style.color = 'red';
})

let topImage = document.querySelector('img');
topImage.addEventListener('dblclick', (event) => {
    topImage.style.border = "5px solid red";
})

let docWheel = document.querySelector('body');
docWheel.addEventListener('wheel', (event) => {
    docWheel.style.backgroundColor = 'teal';
})



let sunButton = document.getElementsByClassName('btn')[0];
sunButton.addEventListener('click', (event) => {
    alert('No Fun. No Sun. Just Cold.')
})

let mtnButton = document.getElementsByClassName('btn')[1];
mtnButton.addEventListener('click', (event) => {
    alert('Go climb the snow banks!')
})

let islandButton = document.getElementsByClassName('btn')[2];
islandButton.addEventListener('click', (event) => {
    alert('Dream On!')
})
