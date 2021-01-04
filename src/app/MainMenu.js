//append multi children to element
const appendChildrenToElement = (element, ...children) => {
  for (let child in children) {
    element.appendChild(children[child])
  }
  return element
}

//create box for one result of search
const createResultBox = (data, parentElement) => {
  const outputBox = document.createElement('article');
  outputBox.id = data.id;
  const outputPhoto = document.createElement('img');
  outputPhoto.src = data.image;
  const outputTitle = document.createElement('p');
  outputTitle.innerText = data.title;

  appendChildrenToElement(outputBox, outputPhoto, outputTitle);

  parentElement.appendChild(outputBox)
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
    const backdropForSearch = document.createElement('div');
    backdropForSearch.classList.add('backdrop');
    const modalForSearch = document.createElement('div');
    modalForSearch.classList.add('modal');
    const closeModalButton = document.createElement('button');
    closeModalButton.innerText = 'x';
    const boxForResults = document.createElement('section')

    appendChildrenToElement(modalForSearch, closeModalButton , boxForResults);
    backdropForSearch.appendChild(modalForSearch);

    //APPEND MENU AND SEARCH STRUCTURE TO PAGE
    const placeToAppend = document.getElementById('swquiz-app');
    document.body.insertBefore(menu, placeToAppend);
    document.body.insertBefore(backdropForSearch, placeToAppend)

    //TOOGLE MENU
    const toggleBtn = document.querySelector('.navigationBtn');
    const navigationBox = document.querySelector('.navigationBox')

    //change visibility of menu for mobile
    const changeVisibilityForMenu = () => {
      navigationBox.classList.toggle('navigationBoxHidden');
    }

    toggleBtn.addEventListener('click', e => {
        changeVisibilityForMenu()
    })

    //SEARCH
    //data to connect with spoonacular
    const API_KEY = 'a69c65ede3bb4ac3b262c5b425b4f835';
    const URL = `https://api.spoonacular.com/recipes/complexSearch?query=`

    //elements' of DOM to manipulate
    const inputForSearch = document.querySelector('form input');
    const buttonForSearch = document.querySelector('form button'); 
    const backdrop = document.querySelector('.backdrop');
    const closeSearchResultBtn = backdrop.firstElementChild.firstElementChild;
    const resultsSection = backdrop.firstElementChild.lastElementChild;


    //clear input value
    const clearInput = () => {
      inputForSearch.value = ''
    } 

    //send request and generate output 
    buttonForSearch.addEventListener( 'click' , e => {
      e.preventDefault();

      //set backdrop visible
      backdrop.style.opacity = 1;
      backdrop.style.zIndex = 100;

      //create information about search value in modal
      const searchInfo = `Results for search: ${inputForSearch.value}`
      const searchTitle = document.createElement('h2');
      searchTitle.innerText = searchInfo;
      resultsSection.appendChild(searchTitle);
      
      //prepare search text to send request
      const textToSearch = inputForSearch.value.trim().replace('', '%20');

      fetch(URL + textToSearch + `&apiKey=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ups...  Something went wrong!')
        } 
        return response.json()
      })
      .then(receips => {
        for (let receip in receips.results) {
          createResultBox(receips.results[receip], resultsSection)
        }
      })
      .catch(error => {
        //dodać wyświetlanie błędu do modalu
        console.log(error)});
      
      changeVisibilityForMenu();
      clearInput();  
  });

  //close search results
  closeSearchResultBtn.addEventListener( 'click', e => {
    e.preventDefault();

    //set backdrop hidden
    backdrop.style.opacity = 0;
    backdrop.style.zIndex = -100;

    //clear search results
    resultsSection.innerText = ''
  })
}