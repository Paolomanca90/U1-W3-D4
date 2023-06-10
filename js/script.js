// genero il tabellone

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

// funzione per i numeri casuali

const randomNumber = function(){
    const num = Math.floor(Math.random()*76)+1
    return num
}

// genero le cartelle

// numeri per le cartelle
let arrCards = []

const numInCard = function(){  
    for(let i=0; i<24; i++){
    const randomN = function(){
        let random = randomNumber()
        if(arrCards.includes(random)){
            randomN()
        }else{
            arrCards.push(random)
            }
        }
        randomN()
    } 
    return arrCards
}


// cartelle
const addCards = document.querySelector('section')
const newCard = document.getElementById('new-card')

const generateCard = function (){ 
    // for(let y=0; y<playerCard; y++){
     for(let i=0; i<24; i++){
        const numCell = document.createElement('p')
        addCards.appendChild(numCell)
     }
    
    }

//  }

newCard.addEventListener('click', function(e){
    generateCard()
    let divInSection = document.querySelectorAll('section>p')
    const newDiv = document.createElement('div')
    
    numInCard()
    for(let i=0; i<24; i++){
        divInSection[i].innerText = arrCards[i]
    }
    divInSection.forEach((el)=>{
        newDiv.appendChild(el)
    })
    addCards.appendChild(newDiv)
    newDiv.classList.add('new-card')
    arrCards = []
})

// estraggo i numeri

const button = document.querySelector('button')
const cell = document.querySelectorAll('#tabellone div')
const allP = document.querySelectorAll('section p')
console.log(allP)

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
        allP.forEach((el)=>{
        if(Number(el.innerText) === random ){
            el.classList.add('color')
            }    
        })       
    }
}

button.addEventListener('click', randomF)