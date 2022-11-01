//1a
const tvNames = inventory.map((tv) => tv.name);
console.log(tvNames);
//1b
const outOfStockTVs = inventory.filter((tv) => tv.originalStock === tv.sold);
console.log(outOfStockTVs);
//1c
const ambiLightTVs = inventory.filter((tv) => tv.options.ambiLight === true);
console.log(ambiLightTVs);
//1d
inventory.sort((a, b) => a.price - b.price);
console.log(inventory);