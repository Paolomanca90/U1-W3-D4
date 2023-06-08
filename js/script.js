const tabellone = document.getElementById('tabellone')

const generateTable = function(){
for(let i=0; i<76; i++){
    let cell = document.createElement('div')
    let number = document.createElement('p')
    number.innerText = i + 1

    cell.classList.add('cell')

    cell.appendChild(number)
    tabellone.appendChild(cell)
    }
}

generateTable()

const randomNumber = function(){
    const num = Math.floor(Math.random()*76)+1
    return num
}

const button = document.querySelector('button')
const cell = document.querySelectorAll('#tabellone div')

button.addEventListener('click', function(e){
    randomNumber()
    let random = randomNumber()
    // let arrNum = []
    // for(let y=0; y<arrNum;y++){
    //     if(arrNum[y] !== random){
    //         arrNum.push(random)
    //     }
    //     console.log(arrNum[0])
    // }
    cell.forEach((p) =>{
    if(Number(p.innerText) === random ){
        p.classList.add('color')
        }
    }) 
})

const addCards = document.getElementById('newCards div')

const generateCars = function (){ 
    let arrCard = []
    for(let i=0; i<24; i++){
        let num = Math.floor(Math.random()*76)+1
        const cardCell = document.createElement('div')
        cardCell.innerText = num
        addCards.appendChild(cardCell)
    }
}