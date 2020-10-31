console.log("Welcome To Gambler Simulation")

//Constants
const STAKE_FOR_EVERY_DAY = 100
const BET = 1
const UPPER_LIMIT=STAKE_FOR_EVERY_DAY+(STAKE_FOR_EVERY_DAY * 50 /100)
const LOWER_LIMIT=STAKE_FOR_EVERY_DAY-(STAKE_FOR_EVERY_DAY* 50 /100)

//Variables
var cash = STAKE_FOR_EVERY_DAY

/**
 * Function for checking Win or Loss
 */
function dialyGambling(){
    while(cash > LOWER_LIMIT && cash < UPPER_LIMIT){
    var randonValue = Math.random()
    if(randonValue < 0.5){
        console.log("Gambler Wins..!!!")
        cash +=BET
    }
    else
        console.log("Gambler Lose..!!!");    
        cash -=BET
    }
}
dialyGambling()