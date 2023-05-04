let langs = document.querySelectorAll('.langside a')

for(let lang of langs) {
    lang.onclick = function() {
        for(let lang of langs) {
            this.classList.add('activeborder')
            lang.classList.remove('activeborder')

            if(lang.innerHTML == 'RUS') {
                this.classList.add('activeborder')
            }
        }
    }
}

let firstdot = document.querySelector('#firstdot')
let seconddot = document.querySelector('#seconddot')
let firstbanner = document.querySelector('#firstbanner')
let secondbanner = document.querySelector('#secondbanner')

firstdot.onclick = function() {
    firstdot.classList.add('activedot')
    seconddot.classList.remove('activedot')
    firstbanner.classList.remove('d-none')
    secondbanner.classList.add('d-none')
}

seconddot.onclick = function() {
    firstdot.classList.remove('activedot')
    seconddot.classList.add('activedot')
    firstbanner.classList.add('d-none')
    secondbanner.classList.remove('d-none')
}

let firstbtn = document.querySelector('#firstbtn')
let secondbtn = document.querySelector('#secondbtn')
let firstspan = document.querySelector('#firstspan')
let secondspan = document.querySelector('#secondspan')

firstbtn.onclick = function() {
    firstbtn.classList.add('activeborder360')
    secondbtn.classList.remove('activeborder360')
    firstspan.classList.add('activecoloredborder')
    secondspan.classList.remove('activecoloredborder')
}

secondbtn.onclick = function() {
    firstbtn.classList.remove('activeborder360')
    secondbtn.classList.add('activeborder360')
    firstspan.classList.remove('activecoloredborder')
    secondspan.classList.add('activecoloredborder')
}