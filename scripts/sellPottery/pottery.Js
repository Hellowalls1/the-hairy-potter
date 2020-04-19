export const Pottery = (potteryObject) => {
    return `
      <section id="pottery_to_sell">
          <div>${potteryObject.shape}<div>
          <div>${potteryObject.weight}<div>
          <div>${potteryObject.height}<div>
          <div>${potteryObject.price}<div>
          <button id="sell_Pottery">Sell</button>
      </section>
      `
     }
  
  