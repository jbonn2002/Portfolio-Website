
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



// xlarge:   [ '1281px',  '1680px' ],
// large:    [ '1025px',  '1280px' ],
// medium:   [ '737px',   '1024px' ],
// small:    [ '481px',   '736px'  ],
// xsmall:   [ null,      '480px'  ],