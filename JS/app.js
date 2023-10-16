
const gridElement = document.querySelector('.grid');
console.log(gridElement);

const playBtnElement = document.getElementById('play-btn')
console.log(playBtnElement)



playBtnElement.addEventListener('click', function () {
    // svuota la griglia dalle celle generate in precedenza
    gridElement.innerHTML = ''
    const bombe = getArrayOfRandomIntBetween(1, 100, 16);
    console.log(bombe);

    let boxListHTML = '';
    for (let i = 0; i < 100; i++) {
        const n = i + 1;
        console.log(n);

        const htmlBox = `<div class="box">${n}</div>`;
        //console.log(htmlBox);

        boxListHTML += htmlBox;
    }

    gridElement.innerHTML += boxListHTML;

    // recupero tutti box che ho creato     
    const cellDomElements = document.querySelectorAll('.box');
    //console.log(cellDomElements);   

  

    // ciclando l'array con le caselle del dom
    for (let i = 0; i < cellDomElements.length; i++) {
        const currentCellElement = cellDomElements[i];
        //console.log(currentCellElement);

        // ad ogni casella aggiungo l'event listener
        currentCellElement.addEventListener('click', function () {
            currentCellElement.classList.add('bg-green');
            console.log(currentCellElement);

            if (bombsArray.includes(n) === true) {
                currentCellElement.classList.add('bg-red');
                console.log( "Hai perso!!!");
                } else { currentCellElement = currentCellElement + i;
            
            
                }
        })
    }
})

function getArrayOfRandomIntBetween(minRange, maxRange, number) {
    const bombsArray = []

    // scrivere dentro  l'array 16 numeri random non duplicati
    while (bombsArray.length < number) {

        // generare un numero random da rangeMin a rangeMAx
        const n = getRandomIntInclusive(minRange, maxRange);
        console.log(n);

        // SE n non è presente nell'array di bombe
        console.log(bombsArray.includes(n));
        if (bombsArray.includes(n) === false) {
            // pushare il numero nell'array di bombe
            bombsArray.push(n);
            console.log(bombsArray);
        }
    }

    // titolo.addEventListener('click', onCellClick);
    // return array di numeri generati
    return bombsArray;
}
// controllare se il numero cliccato è presente nella lista dei numeri generati


// paragrafo.addEventListener('click', onCellClick)    
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}