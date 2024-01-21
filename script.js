//* Carousel function
//& First Carousel
let items1 = document.querySelectorAll('.carousel-1 .carousel .carousel-item')
items1.forEach((el) => {
    const minPerSlide = 7
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items1[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

//& Second Carousel
let items2 = document.querySelectorAll('.carousel-2 .carousel .carousel-item')
items2.forEach((el) => {
    const minPerSlide = 7
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items2[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

//& Third Carousel
let items3 = document.querySelectorAll('.carousel-3 .carousel .carousel-item')
items3.forEach((el) => {
    const minPerSlide = 7
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items3[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

//* Appear film card
let filmCards = Array.from(document.getElementsByClassName("total-card"));
let info = Array.from(document.getElementsByClassName("info-card"));

for (let i = 0; i < filmCards.length; i++) {
    filmCards[i].addEventListener("mouseenter", () => {
        info[i].classList.add("card-show")
    })
}
for (let i = 0; i < filmCards.length; i++) {
    filmCards[i].addEventListener("mouseleave", () => {
        info[i].classList.remove("card-show")
    })
}

//* View on scroll
/* Check if any part of the element is in the viewport */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight);
    const elementInView = (rect.y <= windowHeight);
    return (elementInView);
}

function scrollHandler() {
    let sectionToView = document.querySelectorAll(".show-on-scroll");
    sectionToView.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains('is-visible')) {
            element.classList.add('is-visible');
        } else if (!isInViewport(element) && element.classList.contains('is-visible')){
            element.classList.remove('is-visible');
        }
    })
}

window.addEventListener('resize', scrollHandler);
window.addEventListener('scroll', scrollHandler);

/* Call the scroll handler function at first load to 
show elements that is already in the viewport */
scrollHandler();


//* Navbar search btn
document.getElementById("search-btn").addEventListener("mouseenter", ()=>{
    if(!document.getElementById("search-input").classList.contains("show-search-input")){
        document.getElementById("search-input").classList.add("show-search-input");
    } else {
        document.getElementById("search-input").classList.remove("show-search-input");
    }
})