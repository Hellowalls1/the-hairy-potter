import { usePottery, getPottery } from "./potteryDataProvider.js"
import { Pottery } from "./pottery.Js"

const eventHub = document.querySelector(".container")
const potteryListTarget = document.querySelector(".pottery_Inventory")


export const renderPottery = () => {

    getPottery().then(() => {
      
        const potteryArray = usePottery()
    
    potteryListTarget.innerHTML = potteryArray.map(
        potteryObject => {
         
           return Pottery(potteryObject)

        }).join("")
    })
}


eventHub.