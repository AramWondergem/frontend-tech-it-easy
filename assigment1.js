//1a
function tvNames(array){
    return array.map((tv) => tv.name);
}
console.log(tvNames(inventory));
//1b
function outOfStockTVs(array){
   return array.filter((tv) => tv.originalStock === tv.sold);
}
console.log(outOfStockTVs(inventory));
//1c
function ambiLightTVs (array) {
    return array.filter((tv) => tv.options.ambiLight === true);
}
console.log(ambiLightTVs(inventory));
//1d
function priceLowToHigh(array) {
    array.sort((a, b) => a.price - b.price);
}

function priceHighTolow(array) {
    array.sort((a, b) => b.price - a.price);
}

console.log(inventory);