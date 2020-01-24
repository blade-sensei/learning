/*
* @param {string} s
* @return {number}
*/
function romanToInt (s) {
   let substraction = 0;
   const symbols = s.split('');
   const romanNumber = {
       'I': 1,
       'V': 5,
       'X': 10,
       'L': 50,
       'C': 100,
       'D': 500,
       'M': 1000
   }
   const combinations = {
       'I': {
           'V': 4,
           'X': 9,
       },
       'X': {
           'L': 40,
           'C': 90,
       },
       'C': {
           'D': 400,
           'M': 900,
       }
   }

   if (symbols.length > 1) {
       substraction = substractionValue(symbols, combinations);
       if (substraction !== 0) {
           symbols.splice(0, 2);
       }
   }
   return substraction + getDecimalValue(symbols, romanNumber);
};

function substractionValue([first, second], combinations) {
   if (combinations[first] && combinations[first][second]) {
       return combinations[first][second]
   }
   return 0;
}

function getDecimalValue(romanSymbols, mapper) {
   let total = 0;
   for (symbol of romanSymbols) {
       total += mapper[symbol];
   }
   return total;
}

romanToInt("MCMXCIV");