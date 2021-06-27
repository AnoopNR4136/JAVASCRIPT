let dice,currentPlayer, roundScore ,currentLocalScore,currentLocaLTotalScore ,scores;
dice = 0;
currentPlayer = 0;
roundScore = 0;
currentLocalScore=0
scores=[0,0]


// document.getElementById('current--'+currentPlayer).textContent = dice; //Select With Id
 //Select with CSS ID

document.querySelector('.dice').style.display = 'none'
document.getElementById('score--0').textContent = 0
document.getElementById('score--1').textContent = 0

document.getElementById('current--0').textContent = 0
document.getElementById('current--1').textContent = 0 

document.querySelector('.btn--roll').addEventListener('click', () => {
    // alert('clicked')
    document.querySelector('.dice').style.display = 'block'
    dice = Math.floor(Math.random() * 6) + 1
    document.querySelector('.dice').src = 'dice-' + dice +'.png';
    
    //  console.log(dice)

    if (dice !== 1 ) {
   //      console.log("!=1")
    currentLocalScore = document.querySelector('#current--' + currentPlayer).textContent
    currentLocaLTotalScore = parseInt(dice) + parseInt(currentLocalScore);
    document.querySelector('#current--' + currentPlayer).textContent = currentLocaLTotalScore;
        
        
    } else {
        (currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0)
        currentLocalScore = 0

        document.querySelector('#current--0' ).textContent = 0
        document.querySelector('#current--1').textContent = 0
        
        document.querySelector('.player--0').classList.toggle('active')
        document.querySelector('.player--1').classList.toggle('active')

        document.querySelector('.dice').style.display = 'none'
        
    }



})




document.querySelector('.btn--hold').addEventListener('click', () => {
   // alert(currentLocalScore)
    
   (scores[currentPlayer])  = parseInt(scores[currentPlayer])+ parseInt(currentLocaLTotalScore);
    document.querySelector("#score--" + currentPlayer).textContent = scores[currentPlayer]; 


    (currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0)
        currentLocalScore = 0

        document.querySelector('#current--0' ).textContent = 0
        document.querySelector('#current--1').textContent = 0
        
        document.querySelector('.player--0').classList.toggle('active')
        document.querySelector('.player--1').classList.toggle('active')

        document.querySelector('.dice').style.display = 'none'



})
//seclect by class
// var x = document.querySelector('#')