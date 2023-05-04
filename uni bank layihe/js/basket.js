function getproducts() {
    let items = JSON.parse(localStorage.getItem("products"));

    let alert_box = document.querySelector(".alert");

    if (items.length === 0) {
        alert_box.classList.remove("d-none");
        document.querySelector(".table").classList.add("d-none");
    } else {
        alert_box.classList.add("d-none");
        document.querySelector(".table").classList.remove("d-none");

        let x = "";
        items.forEach((item, index) => {
            x += `
                <tr>
                    <td>
                        <img src=${item.Image}>
                    </td>
                    <td>${item.Title}</td>
                    <td>${item.Price}AZN</td>
                    <td>
                        <input type="number" min="1" value="${item.Count}" class="count-input" data-index="${index}">
                    </td>
                    <td><span class="price-span">${(item.Count) * (item.Price)}AZN</span></td>
                    <td>
                        <button class="btn btn-danger delete-btn" data-index="${index}">Delete</button>
                    </td>
                </tr>
            `;
        });
        document.querySelector("tbody").innerHTML = x;

        let deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function () {
                let index = this.dataset.index;
                items.splice(index, 1);
                localStorage.setItem('products', JSON.stringify(items));
                getproducts();
            });
        });

        let countInputs = document.querySelectorAll('.count-input');
        countInputs.forEach(input => {
            input.addEventListener('change', function () {
                let index = this.dataset.index;
                let count = parseInt(this.value);
                items[index].Count = count;
                localStorage.setItem('products', JSON.stringify(items));
                let priceSpan = input.parentNode.nextElementSibling.querySelector('.price-span');
                priceSpan.textContent = `${(count) * (items[index].Price)}AZN`;
            });
        });
    }
}

getproducts();
