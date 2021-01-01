export const MainMenu = () => {

    //toogle menu
    const menuBtn = document.querySelector('.navigation__btn');
    const navigationMenu = document.querySelector('.navigation__menu')

    menuBtn.addEventListener('click', e => {
        navigationMenu.classList.toggle('navigation__menu--hidden');
    })
}