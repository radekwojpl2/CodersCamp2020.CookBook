//function to create element with classes
// constaddElement = (type, ...classes) => {
//     return document.createElement(type).classList.add(classes.join(' '))
// }

var my_div = null;
var newDiv = null;

function addElement()
{
  // tworzy nowy element div
  // i daje jego zawartość
  newDiv = document.createElement("div");
  newDiv.innerHTML = "<h1>Hi there and greetings!</h1>";

  // add the newly created element and it's content into the DOM
  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);
}

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
//         <div class="navigation__search">
//             <input type="text" class="navigation__searchInput" placeholder="Search...">
//             <button class="navigation__searchBtn">
//                 <i class="fas fa-search"></i>
//             </button>
//         </div>
//     </div>
// </nav>
// </menu> -->



export const MainMenu = () => {

    //create menu
    // const menu = createEl('menu', 'menu');
    // const logo = createEl('div', 'logo');
    // const naviagtionList = createEl('ul', 'navigation_list');
    // document.body.innerHtml = logo;

   addElement()

    // //toogle menu
    // const menuBtn = document.querySelector('.navigation__btn');
    // const navigationMenu = document.querySelector('.navigation__menu')

    // menuBtn.addEventListener('click', e => {
    //     navigationMenu.classList.toggle('navigation__menu--hidden');
    // })
}