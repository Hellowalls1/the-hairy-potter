const potteryToSell = []


const newPotteryObject = ()

export let createPottery = (shape, weight, height) => {
    const pottery =  {
        id: 1,
        Shape: shape,
        Weight: weight,
        Height: height
    }
        potteryToSell.push(pottery)
    
}


export const potteryKiln = (potteryObject, kilnTemperature) => {
     if (kilnTemperature > 2200) {
        potteryObject.push("cracked = true")
    } else {
        if (kilnTemperature <= 2200 )
        potteryObject.push("cracked = false")
    }
        potteryToSell.push(potteryObject)
}


