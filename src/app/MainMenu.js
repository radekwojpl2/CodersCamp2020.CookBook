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
    searchBtn.innerText = 'Search'
    appendChildrenToElement(search, searchInput, searchBtn);

    appendChildrenToElement(navBox, navList, search)
    appendChildrenToElement(menu, logo, menuBtn, navBox)

    //CREATE STRUCTURE FOR SEARCH OUTPUT
    const backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');
    const modal = document.createElement('div');
    modal.classList.add('modal')

    appendChildrenToElement(backdrop, modal)

    //APPEND MENU AND SEARCH STRUCTURE TO PAGE
    const placeToAppend = document.getElementById('swquiz-app');
    document.body.insertBefore(menu, placeToAppend);
    document.body.insertBefore(backdrop, placeToAppend)

    //TOOGLE MENU
    const toggleBtn = document.querySelector('.navigationBtn');
    const navigationBox = document.querySelector('.navigationBox')

    toggleBtn.addEventListener('click', e => {
        navigationBox.classList.toggle('navigationBoxHidden');
    })

    //SEARCH
    //data to connect with spoonacular
    const API_KEY = 'a69c65ede3bb4ac3b262c5b425b4f835';
    const URL = `https://api.spoonacular.com/recipes/complexSearch?query=`

    const input = document.querySelector('form input');
    const button = document.querySelector('form button');  

    //send request and generate output 
    button.addEventListener( 'click' , e => {
      e.preventDefault();

      fetch(URL + input.value + `&apiKey=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ups...  Something went wrong!')
        } 
        return response.json()
      })
      .then(receips => {
        for (let receip in receips.results) {
          console.log(receips.results[receip])
        }
      })
      .catch(error => console.log(error))
      input.value = ''
      
  })
}