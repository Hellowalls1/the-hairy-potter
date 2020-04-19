import { getPottery } from "./sellPottery/potteryDataProvider.js"
import { renderPottery } from "./sellPottery/PotteryList.js"


getPottery()
    .then(renderPottery)