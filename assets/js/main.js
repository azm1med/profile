// active nav 
const id = document.getElementById('profile');

id.onscroll = function() {scrollNav()};

function scrollNav() {
    const get = document.getElementById('header');

    if(id.scrollTop > 80) {
        get.classList.add('scroll');
    } else {
        get.classList.remove('scroll');
    }
}

function lightTheme() {
    const btn = document.getElementById('btn');
    const check = document.getElementById('nav__check');
    const icon = document.getElementById('btn__icon');

    btn.onclick = function() {
        if (!check.checked) {
            id.classList.add('light-theme');
            icon.classList.remove('fa-eclipse-alt');
            icon.classList.add('fa-moon');
        } else {
            id.classList.remove('light-theme');
            icon.classList.add('fa-eclipse-alt');
            icon.classList.remove('fa-moon');
        }
    }
}
lightTheme();
// active nav 

