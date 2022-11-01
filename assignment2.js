//2a + 2c
let soldTVs = 0;
let stockTVs =0;
for (let i = 0; i < inventory.length; i++) {
    soldTVs += inventory[i].sold;
    stockTVs+= inventory[i].originalStock
}
console.log(soldTVs);
//2b + 2d
const tvSold = document.getElementById('tvSold');
tvSold.textContent = soldTVs;

const TVStock = document.getElementById('tvStock');
TVStock.textContent = stockTVs;
//2e
const TVavailable = document.getElementById('tvAvailable');
TVavailable.textContent = stockTVs - soldTVs;
