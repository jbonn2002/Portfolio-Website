
//Toggle Dropdown Code

const toggleButton = document.querySelector('.toggle-button')
const toggleButtonIcon = document.querySelector('.toggle-button i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleButton.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    
    toggleButtonIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}


//Headers for Scroll Effect
const headerOne = document.querySelector('.observe-one')
const headerTwo = document.querySelector('.observe-two')
const headerThree = document.querySelector('.observe-three')
const headerFour = document.querySelector('.observe-four')

//Sidebar items for Scroll Effect
const sideItemOne = document.querySelector('.side-item-one')
const sideItemTwo = document.querySelector('.side-item-two')
const sideItemThree = document.querySelector('.side-item-three')
const sideItemFour = document.querySelector('.side-item-four')

//Scroll effect code

const options = {
    rootMargin: "-220px 0px -355px 0px"
}

const optionThree = {
    rootMargin: "200px 0px -200px 0px"
}

const optionsFour = {
    rootMargin: "150px 0px -500px 0px"
}

const observerOne = new IntersectionObserver(function(entries){
    entries.forEach( entry => {
        if(entry.intersectionRatio > 0) {
            sideItemOne.classList.add('active')
        }else{
            sideItemOne.classList.remove('active')
        }

    })
});

observerOne.observe(headerOne)

const observerTwo = new IntersectionObserver(function(entries){
    entries.forEach( entry => {
        if(entry.intersectionRatio > 0) {
            sideItemTwo.classList.add('active')
        }else{
            sideItemTwo.classList.remove('active')
        }
    })
}, options);

observerTwo.observe(headerTwo)

const observerThree = new IntersectionObserver(function(entries){
    entries.forEach( entry => {
        if(entry.intersectionRatio > 0) {
            sideItemThree.classList.add('active')
        }else{
            sideItemThree.classList.remove('active')
        }
    })
}, optionThree);

observerThree.observe(headerThree)

const observerFour = new IntersectionObserver(function(entries){
    entries.forEach( entry => {
        if(entry.intersectionRatio > 0) {
            sideItemFour.classList.add('active')
        }else{
            sideItemFour.classList.remove('active')
        }
    })
}, optionsFour);

observerFour.observe(headerFour)
