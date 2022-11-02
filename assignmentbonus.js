// script to make the reset button work

const reset = document.getElementById('reset');

reset.addEventListener("click", () => {boxWithTvGenerator(inventory)});

//script to make the outOfStock button work
const outOfStock = document.getElementById('outOfStock');

outOfStock.addEventListener("click", () => {
    boxWithTvGenerator(outOfStockTVs(inventory));
});

//script to make the ambilight button work
const ambiLIghtTVs = document.getElementById('ambiLightTVs');

ambiLIghtTVs.addEventListener("click", () => {
    boxWithTvGenerator(ambiLightTVs(inventory));
});



// --script to make the hoog naar laag en laag naar hoog button work. it takes the divs on the screen and sort them and inject them back into the DOM.--

// fuction to get the divs with tv's on the screen into a array
function getArrayOfDivBoxes (element) {
    const arrayTVsOnScreen = new Array();
    for (let i = 0; i < element.children.length; i++) {
        arrayTVsOnScreen [i] = new Array();
        arrayTVsOnScreen[i][0] = element.children[i].getAttribute('value');
        arrayTVsOnScreen[i][1] = element.children[i].textContent;
    }

    arrayTVsOnScreen.map((tvOnScreen) => {
        console.log(tvOnScreen[0]);
        console.log(tvOnScreen[1]);
    })
    return arrayTVsOnScreen;
}

// function to sort the array with the tv divs
function sortArrayOnPrice (array, highOrlow) {
    if (highOrlow === 'low') {
        array.sort((a, b) => a[0]-b[0]);
    } else if (highOrlow === 'high') {
        array.sort((a, b) => b[0]-a[0]);
    }
}

// fuction to inject the divs back into the dom
function printTVsOfScreen (array) {
    boxWithTvs.innerHTML = ``;



    array.map((TVonScreen) => {
        boxWithTvs.innerHTML+=`<div class='tv-box' value="${TVonScreen[0]}">${TVonScreen[1]}</div>`
    });
}

// to make the buttons work
const highToLow = document.getElementById('highToLow');
const lowToHigh = document.getElementById('lowToHigh');

highToLow.addEventListener('click', ()=> {
    const arrayTVsOnScreen = getArrayOfDivBoxes(boxWithTvs);
    sortArrayOnPrice(arrayTVsOnScreen,'high');
    printTVsOfScreen(arrayTVsOnScreen);

});

lowToHigh.addEventListener('click', ()=> {
    const arrayTVsOnScreen = getArrayOfDivBoxes(boxWithTvs);
    sortArrayOnPrice(arrayTVsOnScreen,'low');
    printTVsOfScreen(arrayTVsOnScreen);

});