const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    buyStock(state, {stockId, quantity, stockPrice}) {
         const record = state.stocks.find(elment => elment.id = stockId);
         if(record) {
             record.quantity += quantity;
         } else {
             state.stocks.push({
                 id: stockId,
                 quantity
             })
         }
    },
    sellStock(state, )
}