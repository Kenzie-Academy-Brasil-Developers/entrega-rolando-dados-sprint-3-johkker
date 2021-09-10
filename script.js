const dice1 = [1,2,3,4,5,6]
const dice2 = [1,2,3,4,5,6]
let count = [0,0,0,0,0,0,0,0,0,0,0]

function rollDice() {
    for(let i = 0; i <= 1000; i++) {
    let result1 = dice1[Math.floor(Math.random() * dice1.length)]
    let result2 = dice2[Math.floor(Math.random() * dice2.length)]
    let sum = result1 + result2
    if(sum === 2){
        count[0] += 1
    } 
    if(sum === 3){
        count[1] += 1
    }
    if(sum === 4){
        count[2] += 1
    }
    if(sum === 5){
        count[3] += 1
    }
    if(sum === 6){
        count[4] += 1
    }
    if(sum === 7){
        count[5] += 1
    }
    if(sum === 8){
        count[6] += 1
    }
    if(sum === 9){
        count[7] += 1
    }
    if(sum === 10){
        count[8] += 1
    }
    if(sum === 11){
        count[9] += 1
    }
    if(sum === 12){
        count[10] += 1
    }
    
  }
  
  return count
}

// as duas linhas abaixo fazem minha função rollDice ser ativada somente quando clicar no botão
const rollDiceButton = document.getElementById("rollDiceID");
rollDiceButton.addEventListener('click', rollDice);
rollDiceButton.addEventListener('click', rollAgainCount);
rollDiceButton.addEventListener('click', showList);

const resultSpace = document.getElementById("resultSpace");

let timesRolled = 0

function rollAgainCount() {
    timesRolled += 1
}

function showList () {
    const resultAll = document.createElement("ul");
    resultSpace.appendChild(resultAll);
    resultAll.style.listStyle = "none"
    resultAll.style.paddingLeft = "5px"
    resultAll.innerText = `Tentativa ${timesRolled}`
    
        for(let k = 0; k < count.length; k++) {
            const resultEach = document.createElement("li")
            resultEach.innerText = `O resultado ${k+2} apareceu ${count[k]} vezes.`
            resultAll.appendChild(resultEach)
  }

}