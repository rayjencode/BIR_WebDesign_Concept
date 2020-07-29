// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 4,
//     centeredSlides: true,
//     spaceBetween: 30,
//     grabCursor: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });

const toggleSignIn = document.querySelector('.switch--signIn');
const toggleHome = document.querySelector('.switch--home');

const mainLeft = document.querySelector('.main__left');
const mainRight = document.querySelector('.main__right');

toggleSignIn.addEventListener('click', () => {
    mainRight.style.display = 'none';
    mainLeft.style.display = 'flex';
});
toggleHome.addEventListener('click', () => {
    mainRight.style.display = 'flex';
    mainLeft.style.display = 'none';
});

// News Toggle Sidebar
const toggleNavNews = document.querySelector('.main__right--navNews');
const toggleNavNewsClose = document.querySelector('.newsSidebar--close');
const showNewsSideBar = document.querySelector('.newsSidebar');

toggleNavNews.addEventListener('click', () => {
    showNewsSideBar.style.transform = 'translate(0)';
});
toggleNavNewsClose.addEventListener('click', () => {
    showNewsSideBar.style.transform = 'translate(100%)';
});

// Main Nav Sidebar
const toggleNavBtnSidebar = document.querySelector('.main__right--navBtn');
const showNavSidebar = document.querySelector('.menuSidebar');
const closeNavSidebar = document.querySelector('.menuSidebar--close');

toggleNavBtnSidebar.addEventListener('click', () => {
    showNavSidebar.style.transform = 'translateX(0)';
});
closeNavSidebar.addEventListener('click', () => {
    showNavSidebar.style.transform = 'translateX(100%)';
});

function reportWindowSize() {
    if (window.innerWidth < 800) {
        mainRight.style.display = 'none';
        mainLeft.style.display = 'flex';
        showNewsSideBar.style.transform = 'translate(100%)';
        showNavSidebar.style.transform = 'translateX(100%)';
    } else {
        mainRight.style.display = 'flex';
        showNewsSideBar.style.transform = 'translate(100%)';
    }
}

window.onresize = reportWindowSize;
