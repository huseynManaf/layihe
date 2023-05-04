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