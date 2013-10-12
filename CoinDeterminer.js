/*

Using the JavaScript language, have the function CoinDeterminer(num) take the input, 
which will be an integer ranging from 1 to 250, and return an integer output that will 
specify the least number of coins, that when added, equal the input integer. Coins are 
based on a system as follows: there are coins representing the integers 1, 5, 7, 9, 
and 11. So for example: if num is 16, then the output should be 2 because you can achieve 
the number 16 with the coins 9 and 7. If num is 25, then the output should be 3 because you 
can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins. 
Input = 6Output = 2
Input = 16Output = 2
*/
function CoinDeterminer(num){
	var coinArr = [1,5,7,9,11];
	var count = 1;
	var newNum = num;
	var coinsUsed = [];
	var coinCount = 0;
	for (i = coinArr.length; i > -1; i--){
		coinCount = coinsUsed.length;
		if (newNum != 0) {
			var coin = coinArr[i-1];	
			//console.log("coinCount: " + coinCount);
			if (newNum - coin > -1 && coinsUsed.indexOf(coin) == -1){
				coinsUsed.push(coin);
				console.log("coinsUsed: "+ coinsUsed);
			}
			if (newNum - coin < 0) {
				count--;
				newNum += coin;
				i--;
				console.log(coin + " didn't work");

			}

			if (newNum > -1){
				newNum -= coin;
				count++;
				i++;
				console.log("coin: " + coin);
				console.log("newNum: " + newNum);
				
				//console.log("count: " + count);

			} else if (newNum == 0) {
				return coinCount;
			}
			console.log("coin: " + coin);
			console.log("newNum: " + newNum);
			
			//console.log("count: " + count);
		} else {
			return coinCount;
		}
	}
	return coinCount;
}

//CoinDeterminer(60);
//CoinDeterminer(16);
//CoinDeterminer(25);
//CoinDeterminer(12);
//CoinDeterminer(5);
//CoinDeterminer(4);
//CoinDeterminer(34);
//CoinDeterminer(37);
CoinDeterminer(100);


