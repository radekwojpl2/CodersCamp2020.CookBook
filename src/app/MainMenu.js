
// <!-- <menu class="menu">   
// <div class="logo">CookBook</div>
// <nav class="navigation">
//     <div class="navigation__btn navigation__btn--hidden">
//         <i class="fas fa-bars"></i>
//     </div>
//     <div class="navigation__menu navigation__menu--hidden">
//         <ul class="navigation__list">
//             <li class="navigation__listItem">Main page</li>
//             <li class="navigation__listItem">Random recipe</li>
//             <li class="navigation__listItem">Nutrition game</li>
//             <li class="navigation__listItem">Calculator</li>
//             <li class="navigation__listItem">Shopping list</li>
//         </ul>
//     </div>
//     <div class="navigation__search">
//             <input type="text" class="navigation__searchInput" placeholder="Search...">
//             <button class="navigation__searchBtn">
//                 <i class="fas fa-search"></i>
//             </button>
//     </div>
// </nav>
// </menu> -->

const BREAKING_POINT = 1000;

//append multi children to element
const appendChildrenToElement = (element, ...children) => {
  for (let child in children) {
    element.appendChild(children[child])
  }
  return element
}

//create element and his childrens
const createElementWithChildren = (element, ...children) => {
  const mainElement = document.createElement(element);

  for (let child in children) {
    const childElement = document.createElement(children[child]);
    mainElement.appendChild(childElement)
  }

  return element
}


export const MainMenu = () => {

    //create menu structure
    const menu = document.createElement('nav');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerText = 'CookBook';

    const menuBtn = document.createElement('button');
    menuBtn.innerText = 'Click';
    menuBtn.classList.add('navigation__btn')

    const navList = document.createElement('ul');
    navList.classList.add('navigation__list')
    const listElements = ['Main Page', 'Random Receip', 'Nutrition game', 'Calculator', 'Shopping list' ];
    for (let listItem in listElements) {
      const listElement = document.createElement('li');
      listElement.innerText = listElements[listItem];
      listElement.classList.add('navigation__listItem')
      navList.appendChild(listElement)
    }

    const search = document.createElement('form');
    search.classList.add('search')
    const searchInput = document.createElement('input');
    searchInput.classList.add('search__input')
    const searchBtn = document.createElement('button');
    searchBtn.classList.add('search__button')
    appendChildrenToElement(search, searchInput, searchBtn)

    appendChildrenToElement(menu, logo, menuBtn, navList, search)

    //append menu to page 
    const placeToAppend = document.getElementById('swquiz-app');
    document.body.insertBefore(menu, placeToAppend)

    // //toogle menu
    // const menuBtn = document.querySelector('.navigation__btn');
    // const navigationMenu = document.querySelector('.navigation__menu')

    // menuBtn.addEventListener('click', e => {
    //     navigationMenu.classList.toggle('navigation__menu--hidden');
    // })
}