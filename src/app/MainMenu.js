
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


//append multi children to element
const appendChildrenToElement = (element, ...children) => {
  for (let child in children) {
    element.appendChild(children[child])
  }
  return element
}

export const MainMenu = () => {

    //CREATE MENU STRUCTURE
    const menu = document.createElement('nav');
    menu.classList.add('menu')

    //create logo
    const logo = document.createElement('div'); 
    logo.classList.add('logo');
    logo.innerText = 'CookBook';
    
    //create toogle button
    const menuBtn = document.createElement('button'); 
    menuBtn.innerText = 'Click';
    menuBtn.classList.add('navigationBtn')

    //create box for navigation & search
    const navBox = document.createElement('div'); 
    navBox.classList.add('navigationBox', 'navigationBoxHidden')

    //create navigation list with items
    const navList = document.createElement('ul'); 
    navList.classList.add('navigationList')
    const listElements = ['Main Page', 'Random Receip', 'Nutrition game', 'Calculator', 'Shopping list' ];
    for (let listItem in listElements) {
      const listElement = document.createElement('li');
      listElement.innerText = listElements[listItem];
      navList.appendChild(listElement)
    }

    //create search
    const search = document.createElement('form'); 
    search.classList.add('search')
    const searchInput = document.createElement('input');
    const searchBtn = document.createElement('button');
    appendChildrenToElement(search, searchInput, searchBtn);

    appendChildrenToElement(navBox, navList, search)
    appendChildrenToElement(menu, logo, menuBtn, navBox)

    //append menu to page 
    const placeToAppend = document.getElementById('swquiz-app');
    document.body.insertBefore(menu, placeToAppend)

    //TOOGLE MENU
    const toggleBtn = document.querySelector('.navigationBtn');
    const navigationBox = document.querySelector('.navigationBox')

    toggleBtn.addEventListener('click', e => {
        navigationBox.classList.toggle('navigationBoxHidden');
    })
}