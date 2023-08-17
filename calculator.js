
let total = 0;

function handleClickBtn(faisal) {
    const itemName = (faisal.parentNode.childNodes[1].innerText);
    const li = document.createElement("li");
    li.innerText = itemName;
    const itemContainer = document.getElementById('selected-items');
    itemContainer.appendChild(li);

    const price = (faisal.parentNode.childNodes[3].innerText.split(" ")[0]);

    total = parseInt(total) + parseInt(price);

    document.getElementById('total').innerText = total

    // const price = document.getElementById('price');
    // const priceString = price.innerText;
    // const priceNr = parseFloat.priceString;
    // console.log(priceNr);
}