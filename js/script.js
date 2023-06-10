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

let arrCards = []

const addCards = document.querySelector('section')
const newCard = document.getElementById('new-card')

const generateCard = function (){ 
    let num = document.getElementById('player-card').value

    // genero il numero di cartelle indicate dal giocatore

    for(let y=0; y<num; y++){
     for(let i=0; i<24; i++){
        const numCell = document.createElement('p')
        numCell.classList.add('default')
        addCards.appendChild(numCell)
     }

    //  genero i 24 numeri random

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
    // metto i numeri random nelle varie celle di ogni cartella
     let divInSection = document.querySelectorAll('section>p')
     for(let i=0; i<24; i++){
        divInSection[i].innerText = arrCards[i]
     }
     const newDiv = document.createElement('div')
     divInSection.forEach((el)=>{
        newDiv.appendChild(el)
    })
    addCards.appendChild(newDiv)
    newDiv.classList.add('new-card')
    arrCards = [] 
    }
 }

newCard.addEventListener('click', function(e){
    generateCard()
    let num = document.getElementById('player-card')
    num.value = '' 
})


// estraggo i numeri

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
        const allP = document.querySelectorAll('section p')
        allP.forEach((el)=>{
        if(Number(el.innerText) === random ){
            el.classList.add('color')
            }    
        })       
    }
}

button.addEventListener('click', randomF)
