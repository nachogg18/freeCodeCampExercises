function checkCashRegister(price, cash, cid) {
  var change = cash - price
  var limit = 0
  var registered_total = 0
  var unit_table = [
    ["PENNY",0.01],
    ["NICKEL",0.05],
    ["DIME",0.1],
    ["QUARTER",0.25],
    ["ONE",1],
    ["FIVE",5],
    ["TEN",10],
    ["TWENTY",20],
    ["ONE HUNDRED",100]
  ]

  
  function obtain_limit() { 
    for (var index in unit_table) {
      if (unit_table[index][1] < change) {
        limit = unit_table[index][1]
      }
      else {
        break
      }
    }
  }

  function calculate_registered_total() {
    for (var currency in cid) {
      registered_total += cid[currency][1] 
    }
  }

  calculate_registered_total()

  if (change > registered_total ) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  else {
    if (change == registered_total) {

      return {status: "CLOSED", change: cid} 
    }

    else {

      return {status: "OPEN", change: []}

    }
  }

  

  
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
