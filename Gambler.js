
console.log("Welcome To Gambler Simulation")

//Constants
const STAKE_FOR_EVERY_DAY = 100
const BET = 1
const UPPER_LIMIT=STAKE_FOR_EVERY_DAY+(STAKE_FOR_EVERY_DAY * 50 /100)
const LOWER_LIMIT=STAKE_FOR_EVERY_DAY-(STAKE_FOR_EVERY_DAY* 50 /100)
const TOTAL_DAYS =20

//Variables
var cash = 0
var winnigCash = 0
var totalAmount = 0
var dictionary = {}

/**
 * Function for calculate daily gambling
 */
function dialyGambling(){
    winnigCash = 0
    cash = STAKE_FOR_EVERY_DAY
    while(cash > LOWER_LIMIT && cash < UPPER_LIMIT){
        var randonValue = Math.random()
        if(randonValue < 0.5)
            cash +=BET
        else
            cash -=BET
    }
    winnigCash = cash - STAKE_FOR_EVERY_DAY
    return winnigCash
}
function monthlyGambling() {
    for(day = 1;day<TOTAL_DAYS; day++){
        var cash = dialyGambling()
        dictionary[day] = cash
        totalAmount += dictionary[day]
        console.log(`Amount of Day ${day}: ${dictionary[day]}`)
        // console.log(`Day${day} winning ammount: ${dictionary[day]}`);
    }
    if(totalAmount > 0 )
        console.log("Total amount win of 20 days:" +totalAmount);
    else
        console.log("Total amount loss of 20 days:" +totalAmount);
}
monthlyGambling()