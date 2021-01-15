import {API, MENU} from '../GlobalData.js';

const API_KEY = 'a69c65ede3bb4ac3b262c5b425b4f835';

//append children to element
export const appendChildrenToElement = (element, ...children) => {
  for (let child in children) {
    element.appendChild(children[child])
  }
  return element
}

//create navigation for menu
export const createNavigationList = (activePage) => {
  const navList = createElementWithClasses('ul', 'navigationList'); 
  for (let listItem in MENU) {
    console.log(MENU[listItem])
    if (MENU[listItem] !== activePage ) {
      const listElement = document.createElement('li');
      listElement.innerHTML = `<a href=${MENU[listItem].link} class='link'>${MENU[listItem].name}</a>`
      navList.appendChild(listElement)
    }
  }
  return navList
}

//create DOM element with included classes
export const createElementWithClasses = (element, ...classes) => {
  const newDOMElement = document.createElement(element);
  newDOMElement.classList.add(...classes);

  return newDOMElement
}

//create DOM element with inner text
export const createElementWithInnerText = (element, text, ...classes) => {
  let newDOMElement = document.createElement(element);
  newDOMElement.classList.add(...classes);
  newDOMElement.innerText = text;

  return newDOMElement
}

//create box for one result of search
export const createResultBox = (data, parentElement) => {
  data.forEach( dataElement => {
    const outputBox = document.createElement('article');
    outputBox.id = dataElement.id;
    const outputPhoto = document.createElement('img');
    outputPhoto.src = dataElement.image;
    const outputTitle = document.createElement('p');
    outputTitle.innerText = dataElement.title;
  
    appendChildrenToElement(outputBox, outputPhoto, outputTitle);
    appendChildrenToElement(parentElement, outputBox)
  })
}

//function to send request
 export const sendRequest = (value, parentElement) => {
  //prepare search text to send request
  const textToSearch = value.value.trim().replace('', '%20');

  fetch(API.searchFor(textToSearch, API_KEY))
  .then(response => {
    if (!response.ok) {
      throw new Error('Ups...  Something went wrong!');
    } 
    return response.json()
  })
  .then(recipes => {
    if (recipes.results.length === 0) {
      const noResultsInfo = document.createElement('p');
      noResultsInfo.innerText = `Sorry, there isn't any result for Your search`;
      parentElement.appendChild(noResultsInfo)
    } else {
      createResultBox(recipes.results, parentElement)
    }
  })
  .catch(error => {
    resultsSection.innerHTML = `<p>${error}</p>`;
    console.log(error)});
}

export const MainMenu = (activePage) => {

  //CREATE MENU STRUCTURE

  const menu = createElementWithClasses('nav', 'menu', 'container')
  const logo = createElementWithClasses('div', 'logo')
  logo.innerHTML =`<a href=${MENU.mainPage.link} class='link'>CookBook</a>`;
  //button to show and hide menu on mobile
  const menuBtn = createElementWithInnerText('button', 'Click', 'navigationBtn', 'btnStyle')
  //create box for navigation & search
  const navBox = createElementWithClasses('div', 'navigationBox', 'navigationBoxHidden')
  //create navigation list with items
  const navList = createNavigationList(activePage)

  //create search
  const search = createElementWithClasses('form', 'search')
  const searchInput = createElementWithClasses('input', 'inputStyle');
  const searchBtn = createElementWithInnerText('button', 'Search', 'btnStyle')
  const searchInfo = createElementWithInnerText('span', 'Please, insert text!', 'tooltip')
  appendChildrenToElement(search, searchInput, searchBtn, searchInfo);

  appendChildrenToElement(navBox, navList, search)
  appendChildrenToElement(menu, logo, menuBtn, navBox)

  //CREATE STRUCTURE FOR SEARCH OUTPUT
  const backdropForSearch = createElementWithClasses('div', 'backdrop');
  const modalForSearch = createElementWithClasses('div', 'modal', 'container');
  const closeModalButton = createElementWithInnerText('button', 'x', 'btnStyle');
  const boxForResults = document.createElement('section');

  appendChildrenToElement(modalForSearch, closeModalButton , boxForResults);
  appendChildrenToElement(backdropForSearch, modalForSearch);

  //APPEND MENU AND SEARCH STRUCTURE TO PAGE
  const placeToAppend = document.getElementById('swquiz-app');
  document.body.insertBefore(menu, placeToAppend);
  document.body.insertBefore(backdropForSearch, placeToAppend)

  //SEARCH

  //elements' of DOM to manipulate
  const inputForSearch = document.querySelector('form input');
  const buttonForSearch = document.querySelector('form button'); 
  const infoForEmptySearch = document.querySelector('.tooltip');
  const backdrop = document.querySelector('.backdrop');
  const closeSearchResultBtn = backdrop.firstElementChild.firstElementChild;
  const resultsSection = backdrop.firstElementChild.lastElementChild;
  const logoText = document.querySelector('.logo');

  //clear input value
  const clearInput = () => {
    inputForSearch.value = ''
  } 

  //clear search info (about empty value)
  const clearSearchInfo = () => {
    infoForEmptySearch.classList.remove('active')
  }

  inputForSearch.addEventListener('click', event => clearSearchInfo())

  //send request and generate output 
  buttonForSearch.addEventListener( 'click' , btnEvent => {
    btnEvent.preventDefault();

    if (inputForSearch.value !== '') {
    clearSearchInfo();

    //set backdrop visible
    backdrop.style.opacity = 1;
    backdrop.style.zIndex = 100;

    //create information about search value in modal
    const searchInfo = `Results for search: ${inputForSearch.value}`
    const searchTitle = document.createElement('h2');
    searchTitle.innerText = searchInfo;
    resultsSection.appendChild(searchTitle);

    sendRequest(inputForSearch, resultsSection)
    changeVisibilityForMenu();
    clearInput();  
    } else {
      infoForEmptySearch.classList.add('active')
    }
  });

  //close search results
  closeSearchResultBtn.addEventListener( 'click', closeEvent => {
    closeEvent.preventDefault();

    //set backdrop hidden
    backdrop.style.opacity = 0;
    backdrop.style.zIndex = -100;

    //clear search results
    resultsSection.innerText = ''
  })

  //redirect to recipe site
  resultsSection.addEventListener('click', redirectEvent => {
    window.location.replace(`/recipe.html?id=${redirectEvent.target.id}`)
  })

  //TOOGLE MENU
  const toggleBtn = document.querySelector('.navigationBtn');
  const navigationBox = document.querySelector('.navigationBox')

  //change visibility of menu for mobile
  const changeVisibilityForMenu = () => {
    navigationBox.classList.toggle('navigationBoxHidden');
  }

  toggleBtn.addEventListener('click', menuEvent => {
      changeVisibilityForMenu();
      clearSearchInfo();
  })

  //add animation to logo
  logoText.addEventListener( 'mouseenter', logoFocus => {
    console.log('hej')
    logoText.animate(
      [{ transform: 'rotateY(0deg)'},
      { transform: 'rotateY(360deg)' }],
      {duration: 500,
        iteration: 1
      }

    )
  })
}