// Your code goes here




let mainNav = document.querySelector('.main-navigation');
let logoHead = document.querySelector('.logo-heading');
let navLink = document.querySelectorAll('.nav-link');

mainNav.addEventListener('mousedown', (event) => {
    mainNav.style.backgroundColor = 'green';
    logoHead.style.fontSize = '.5em';
    navLink.forEach(navAnchor => navAnchor.style.fontSize = '2em');;
});
mainNav.addEventListener('mouseup', (event) => {
    mainNav.style.backgroundColor = '';
    logoHead.style.fontSize = '';
    navLink.forEach(navAnchor => navAnchor.style.fontSize = '');;
});

let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('click', (event) => {
    logoHeading.style.color = 'red';
    event.stopPropagation();
})

let topImage = document.querySelector('img');
topImage.addEventListener('dblclick', (event) => {
    topImage.style.border = "5px solid red";
})

let docWheel = document.querySelector('body');
docWheel.addEventListener('wheel', (event) => {
    docWheel.style.backgroundColor = 'teal';
})

let textColor = document.querySelector('body');
textColor.addEventListener('click', (event) => {
    event.target.style.color = 'yellow';
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


let pushKeyClear = document.querySelector('body', 'img');
pushKeyClear.addEventListener('keydown', (event) => {
    pushKeyClear.style.backgroundColor = '';
    textColor.style.color = '';
    topImage.style.border = '';
})

let prevDef = document.querySelector('a');
prevDef.addEventListener('click', (event) => {
event.preventDefault();
});