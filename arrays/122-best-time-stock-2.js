// Leetcode #122 best time to buy and sell stock II

function maxProfit (prices) {
  var maxProfit = 0;

  for (i=0; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) {
      maxprofit += prices[i] - prices[i-1];
    }
  }

  return maxProfit;
}

var prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));