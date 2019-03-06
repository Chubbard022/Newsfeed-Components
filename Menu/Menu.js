
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open')
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu')
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click',toggleMenu)



//why do you have to not include bracket in toggleMenu but in classes we do??