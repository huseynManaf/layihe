if (localStorage.getItem("products") === null) {
    localStorage.setItem("products", JSON.stringify([]))
}


let buttons = document.querySelectorAll(".btn");

for (let btn of buttons) {
    btn.onclick = function (e) {
        e.preventDefault()
        let id = this.parentElement.parentElement.parentElement.id
        let src = this.parentElement.parentElement.previousElementSibling.firstElementChild.src
        let title = this.parentElement.parentElement.firstElementChild.innerHTML
        let price = this.parentElement.previousElementSibling.previousElementSibling.firstElementChild.innerHTML

        let product_list = JSON.parse(localStorage.getItem("products"));
        let exist_product = product_list.find(item => item.Id == id);

        if (exist_product === undefined) {
            product_list.push({
                Id: id,
                Title: title,
                Price: price,
                Image: src,
                Count: 1
            })
        }
        else {
            exist_product.Count += 1;
        }



        localStorage.setItem("products", JSON.stringify(product_list))
        ShowCount()
    }
}

function ShowCount() {
    let items = JSON.parse(localStorage.getItem("products"))
    document.querySelector("#count").innerHTML = items.length
}
ShowCount()

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