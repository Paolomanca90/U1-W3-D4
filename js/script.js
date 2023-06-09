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
let arr =[]

const randomF = function(){
    let random = randomNumber()
    if(arr.includes(random)){
        randomF()
    }else{
        arr.push(random)   
        cell.forEach((p) =>{
        if(Number(p.innerText) === random ){
            p.classList.add('color')
            }
        })       
    }
}

button.addEventListener('click', randomF)

const addCards = document.querySelector('section')
const playerCard = document.getElementById('new-card')

// const playerSelection = document.getElementById('player-card')
// const value = playerSelection.value

let arrCard = []

const generateCard = function (){ 
     for(let i=0; i<24; i++){
        const cardCell = document.createElement('div')
        const numCell = document.createElement('p')
        cardCell.classList.add('card-cell')
        cardCell.appendChild(numCell)
     }
     const divInSection = document.querySelectorAll('section div')
     const newDiv = document.createElement('div')
        divInSection.forEach((el)=>{
        newDiv.appendChild(el)
    })
    newDiv.classList.add('new-card')
 }


 const blockDiv = function(){
    const newNewDiv = document.querySelectorAll('section div')
    newNewDiv.forEach((el)=>{
        addCards.appendChild(el)
    })
}

playerCard.addEventListener('click', function(e){
    generateCard()
    blockDiv()
})









