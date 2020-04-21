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


potteryListTarget.addEventListener("click", clickEvent => {
    allPottery = usePottery()
    if (event.target.id.startsWith("sell--")){
        const [prefix, id] = clickEvent.target.id.split("--")
    
    const foundDelete = allPottery.find(potteryObject => {
         potteryObject.id === id
    })
}
 })

 
  

