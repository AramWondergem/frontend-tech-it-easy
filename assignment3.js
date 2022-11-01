const tvBrands = new Set;
for (let i = 0; i < inventory.length; i++) {
    tvBrands.add(inventory[i].brand)
}
console.log(tvBrands)

function printTVbrands (set) {
    let listTVbrandsHTML = '';
    const elementTVBrands = document.getElementById('listTVbrands');
    for (const item of set) {
        listTVbrandsHTML += `<li>${item}</li>`
    }
    elementTVBrands.innerHTML = listTVbrandsHTML;
}

printTVbrands(tvBrands);