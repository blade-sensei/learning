## Visible scares
Html and content visible

```javascript
function solution() {
    
    const table = document.getElementsByTagName("table");
    const rows = table[0].rows;
    //conver to array
    const tableRows = Array.from(rows);
    
    
    
    let resultRow = [];
    
    tableRows.forEach(letterRow => {
        const letterRowFilter = getLettersFromRow(letterRow);

        const letters  = letterRowFilter.map(letterRow => {
            return letterRow.textContent;
        })

        resultRow = resultRow.concat(letters)
        
    });

       
    return resultRow.join('');
}

function isSameColor(element) {
    return (
        element.style.backgroundColor === element.style.color
    )
}

function getLettersFromRow(row) {
    const letters = Array.from(row.cells);
    return letters.filter(letter => {
            return !isSameColor(letter)
        });
}
```


```javascript

//amazon demo

// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function cellCompete(states, days)
{
    // WRITE YOUR CODE HERE 
    const nextDayStates = getNextDay(states);
    return nextDayStates;
}
// FUNCTION SIGNATURE ENDS

function isSameStatus(left, right) {
    return left === right;
}

function getNextDay(states) {
    const nextDayStates = [];
    
    for (let i = 0; i < states.length; i++) {
        const left = i === 0 ? 0 : states[i - 1];
        const right = i === states.length - 1 ? 0 : states[i + 1];
        console.log(left);
        if (isSameStatus(left, right)) {
            nextDayStates.push(0);
        } else {
            nextDayStates.push(1);
        }
    }
    return nextDayStates;
}

```