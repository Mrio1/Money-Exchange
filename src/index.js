module.exports = function makeExchange(currency) {
    let retObject ={};
    if (currency > 10000){
        return ({error: "You are rich, my friend! We don't have so much coins for exchange"})
    }
    else if (currency <= 0){
        return retObject
    }
    else {
        if (currency >= 50){
            let h = (currency - currency % 50) / 50;
            currency = currency % 50;
            retObject["H"] = h;
        }
        if (currency >= 25){
            let q = (currency - currency % 25) / 25;
            currency = currency % 25;
            retObject["Q"] = q;
        }
        if (currency >= 10){
            let d = (currency - currency % 10) / 10;
             currency = currency%10;
             retObject["D"] = d;
        }
        if (currency >= 5){
            let n = (currency - currency % 5) / 5;
            currency = currency % 5;
            retObject["N"] = n;
        }
        if (currency >= 1){
            retObject["P"] = currency;
        }
        return retObject;   
           }
}