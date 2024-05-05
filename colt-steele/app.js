const form = document.querySelector('form');
const productLabel = document.querySelector("#product")
const productQuantity = document.querySelector("#qty")
const list = document.querySelector("#list")


const printItems = (e) => {
    e.preventDefault();

    const listItem = document.createElement("li")

    listItem.textContent = productQuantity.value + ` ` + productLabel.value
    list.appendChild(listItem)

    productLabel.value = ""
    productQuantity.value = ""
}

form.addEventListener("submit", printItems)

