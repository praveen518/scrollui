var i = 0;

const cardOne = document.getElementById('card-one');
const cardTwo = document.getElementById('card-two');
const cardThree = document.getElementById('card-three');
const cardFour = document.getElementById('card-four');
const contentDiv = document.getElementById('content-div');
const secTwo = document.getElementById('sec-two');

var word = "Hello World again";

window.onscroll = (e) => {
    const para = document.getElementById('para');
    const paraOne = document.getElementById('para-one');
    const div = document.getElementById('card-container');

    console.log(window.innerHeight);
    console.log(window.scrollY);
    if (window.scrollY > (window.innerHeight)) {
        div.classList.remove('position');
        div.classList.add('modified-position');
        if (window.scrollY > window.innerHeight * 1 && window.scrollY <= window.innerHeight * 2) {
            transform(1, window.scrollY - window.innerHeight * 1);
        } else if (window.scrollY > window.innerHeight * 2 && window.scrollY <= window.innerHeight * 3) {
            transform(2, window.scrollY - window.innerHeight * 2);
        } else if (window.scrollY > window.innerHeight * 3 && window.scrollY <= window.innerHeight * 4) {
            transform(3, window.scrollY - window.innerHeight * 3);
        } else if (window.scrollY > window.innerHeight * 4 && window.scrollY <= window.innerHeight * 5) {
            transform(4, window.scrollY - window.innerHeight * 4);
        } else {
            contentDiv.classList.add('position-content-modified');
            let dist = Math.abs(secTwo.getBoundingClientRect().top);
            addWordOnScroll(contentDiv, dist);
        }
    } else {
        div.classList.add('position');
        div.classList.remove('modified-position');
        removeTransform();
    }
}

function transform(n, i) {
    if (n == 1) {
        i == 0 ? cardOne.style.transform = "translateY(0px)" : cardOne.style.transform = "translateY(-" + i + "px)";
    } else if (n == 2) {
        i == 0 ? cardTwo.style.transform = "translateY(0px)" : cardTwo.style.transform = "translateY(-" + i + "px)";
    } else if (n == 3) {
        i == 0 ? cardThree.style.transform = "translateY(0px)" : cardThree.style.transform = "translateY(-" + i + "px)";
    } else if (n == 4) {
        i == 0 ? cardFour.style.transform = "translateY(0px)" : cardFour.style.transform = "translateY(-" + i + "px)";
    }
}

function removeTransform() {
    cardOne.style.transform = "translateY(0px)";
    cardTwo.style.transform = "translateY(0px)";
    cardThree.style.transform = "translateY(0px)";
    cardFour.style.transform = "translateY(0px)";
}

function addWordOnScroll(ele, dist, item = word) {
    let num = Math.floor(dist * (item.length / 5) / 40);
    ele.firstElementChild ? ele.removeChild(ele.firstElementChild) : null;
    let spa = document.createElement('span');
    spa.innerText = item.substring(0, num);
    ele.appendChild(spa);

}