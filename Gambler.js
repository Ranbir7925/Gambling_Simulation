console.log("Welcome To Gambler Simulation")
//Constants
const STAKE_FOR_EVERY_DAY = 100
const BET = 1
//Variables
var cash = STAKE_FOR_EVERY_DAY
var randonValue = Math.random()
/**
 * Function for checking Win or Loss
 */
function dialyGambling(){
    if(randonValue < 0.5){
        console.log("Gambler Wins..!!!")
        cash +=BET
    }
    else
        console.log("Gambler Lose..!!!");    
        cash -=BET
}
dialyGambling