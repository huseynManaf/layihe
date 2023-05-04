const searchIcon = document.getElementById('glass');
const searchInput = document.querySelector('#list input');
const closeSearch = document.getElementById('close-search');
const searchBox = document.getElementById('list');

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('show');
    searchInput.focus();
});

closeSearch.addEventListener('click', () => {
    searchBox.classList.remove('show');
});


let chat_img = document.querySelector(".imaage")

let chatpage = document.querySelector(".chatpage")

let minus = document.querySelector("#minus")



chat_img.addEventListener('click', () => {
    chat_img.style.display = "none"
    chatpage.style.display = "block"

})

minus.addEventListener("click", () => {
    chatpage.style.display = "none"
    chat_img.style.display = "block"
})

let menu = document.querySelector('.menubar');
let mediaButton = document.querySelector('#media-menu');
let bottomm = document.querySelector(".bottomm");


mediaButton.addEventListener('click', (e) => {
    e.preventDefault()
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
        bottomm.style.display = "none";
    } else {
        bottomm.style.display = "block";
    }
});

let buttons = document.querySelectorAll(".sibling-links a");
for (let btn of buttons) {
    btn.onclick = function (e) {
        e.preventDefault();
        let active = document.querySelector('.active')
        if (!(btn.classList.contains('active'))) {
            btn.classList.add('active')
            active.classList.remove("active")
        }
    }
}











