console.log('griglia'); 

const gridElement = document.querySelector('.grid');
console.log(gridElement);

const playBtnElement = document.getElementById('play-btn')
console.log(playBtnElement)


playBtnElement.addEventListener('click', function () {
	// svuota la griglia dalle celle generate in precedenza
	gridElement.innerHTML = ''

    for (let i = 0; i < 100; i++) {
        const n = i + 1;
        console.log(n);

        const htmlBox = `<div class="box">${n}</div>`;
        console.log(htmlBox);

        gridElement.innerHTML += htmlBox;
    }

// recupero tutti box che ho creato     
    const cellDomElements = document.querySelectorAll('.box')
    console.log(cellDomElements)    

    // ciclando l'array con le caselle del dom
	for (let i = 0; i < cellDomElements.length; i++) {
		const currentCellElement = cellDomElements[i]
		// console.log(currentCellElement)

		// ad ogni casella aggiungo l'event listener
		    currentCellElement.addEventListener('click', function () {
			currentCellElement.classList.add('bg-green')
            // console.log(currentCellElement);
		})
	}
})

function onCellClick() {
    
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min);
}
