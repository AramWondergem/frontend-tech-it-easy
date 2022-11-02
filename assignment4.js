function nameGenerator(brand, type, name) {
    return `${brand} ${type} - ${name}`;
}

function priceGenerator(price){
    return `&euro;${price},-`
}

function inchesToCm (inches) {
    return inches*2.54;
}

function screensizeGenerator (array) {
    let placeholderString = '';
    for (let i = 0; i < array.length; i++) {
        placeholderString += `${array[i]}inch(${inchesToCm(array[i])}cm)`;

        if ((array.length - 1) > i) {
            placeholderString += `|| `;
        }

    }
    return placeholderString
}

const boxWithTvs = document.getElementById('boxes-with-tvs');

function boxWithTvGenerator (array) {

    boxWithTvs.innerHTML = ``;

    // added a class to style the divs with css and added a value to be able to sort them, see assignmentbonus.js.
    array.map((tv) => {
        boxWithTvs.innerHTML += `
    <div class='tv-box' value="${tv.price}">${nameGenerator(tv.brand, tv.type, tv.name)}
    ${priceGenerator(tv.price)} 
    ${screensizeGenerator(tv.availableSizes)}
    </div>`
    });

}

boxWithTvGenerator(inventory);

