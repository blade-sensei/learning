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