// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


/**
 * 
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const binaryRepresentation = N.toString(2);
    
    const splitedBinary = binaryRepresentation.split('').map(bit => {
        return Number(bit);
    })
    
    
    if (hasSomeGap(splitedBinary)) {
        
        let gap = 0;
        let maxGap = 0;
        
        let gapClosed = false;
        
        for (index = 1; index < splitedBinary.length; index++)  {
            
            const binary = splitedBinary[index];
            
            gapClosed = isClosed(binary);
            if (gapClosed) {
                maxGap = getMaxGap(gap, maxGap);
                gap = 0;
            } else {
                gap++
            }
        }
        
        return maxGap;
        
    }
    
    return 0;
    
}

function isClosed(binary) {
    return binary === 1;
}


function hasSomeGap(binaryList) {
    return (
        hasOneEachExtremity(binaryList) &&
        hasAtLeastOneZero(binaryList)
    )
}

function hasAtLeastOneZero(binaryList) {
    return binaryList.some(bit => {
        return bit === 0
    });
}

function hasOneEachExtremity(binaryList) {
    const firstIndex = binaryList[0];
    const lastIndex = binaryList[binaryList.length -1]
    return (
        firstIndex === 1 &&
        lastIndex === 1
    )
}

function getMaxGap(currentGap, currentMaxGap) {
    return Math.max(currentGap, currentMaxGap);
}


//solution 2

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    

    const binaryRepresentation = N.toString(2);
    const binaryList = binaryRepresentation.split('').map(bit => {
        return Number(bit);
    });
    
    let status = {
        startedSegment: false,
        finishedSegment: false
    }
    
    let gap = 0;
    let maxGap = 0;
    
    binaryList.forEach(bit => {
        status = updateStatus(bit, status);
        
        if (status.startedSegment) {
            if (status.finishedSegment) {
                maxGap = getMaxGap(gap, maxGap) - 1;
                gap = 0;
                status = restartStatus() 
            } else {
                gap++
            }
        }
        
    })
    
    return maxGap;
}

function updateStatus(bit, status) {
    if (bit === 1) {
        if (status.startedSegment === true) {
            status.finishedSegment = true;
        } else {
            status.startedSegment = true;
        }
    } 
    return status;
}

function getMaxGap(currentGap, currentMaxGap) {
    if (currentGap > currentMaxGap) {
        return currentGap
    }
    return currentMaxGap;
}

function restartStatus() {
    return {
        startedSegment: true,
        finishedSegment: false,
    }
}

//sol

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    

    const binaryRepresentation = N.toString(2);
    const binaryList = binaryRepresentation.split('').map(bit => {
        return Number(bit);
    });
    
    let status = {
        startedSegment: false,
        finishedSegment: false
    }
    
    let gap = 0;
    let maxGap = 0;
    binaryList.forEach(bit => {
        status = updateStatus(bit, status);
        
        if (status.startedSegment) {
            if (status.finishedSegment) {
                maxGap = getMaxGap(gap, maxGap);
                gap = 0;
                status = restartStatus() 
            } else if (bit === 0) {
                gap++
            }
        }
        
    })
    
    return maxGap;
}

function updateStatus(bit, status) {
    if (bit === 1) {
        if (status.startedSegment === true) {
            status.finishedSegment = true;
        } else {
            status.startedSegment = true;
        }
    } 
    return status;
}

function getMaxGap(currentGap, currentMaxGap) {
    if (currentGap > currentMaxGap) {
        return currentGap
    }
    return currentMaxGap;
}

function restartStatus() {
    return {
        startedSegment: true,
        finishedSegment: false,
    }
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
    // write your code in Javascript
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementsByTagName
    // or using jQuery:
    //    $('some_tag')
    //
    // please note that element.innerText is not supported,
    // you can use element.textContent instead.
    
    //get all tr rows
    
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


/**
 * 
 * @param {*} A 
 * @param {*} K 
 * 
 * An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

function solution(A, K);

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
For another example, given

    A = [0, 0, 0]
    K = 1
the function should return [0, 0, 0]

Given

    A = [1, 2, 3, 4]
    K = 4
the function should return [1, 2, 3, 4]

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
 */

/** solution  */

// got 60%

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    

    if (K === A.length) {
        return A;
    }
    
    let rotatedArray = [];
    
    A.forEach((currentNumber, index) => {
        const nextIndex = getRotatedIndex(index, K, A.length);
        
        rotatedArray[nextIndex] = currentNumber;
    })
    
    return rotatedArray;
    
}

function getRotatedIndex(index, rotationNumber,lengthArray) {

    let newIndex = index + rotationNumber;
    if (newIndex > lengthArray - 1)  {
        return newIndex - lengthArray;
    }
    
    return newIndex;
    
}

/** better solution */
// quand le K fait trop dépasser le calcul de indexNew - Array
// il se peut qu'il dépasse encore l'index

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    

    if (K === A.length) {
        return A;
    }
    
    let rotatedArray = [];
    
    A.forEach((currentNumber, index) => {
        let newIndex = index + K
        newIndex = getRotatedIndex(newIndex, K, A.length);
        rotatedArray[newIndex] = currentNumber;
    })
    
    
    return rotatedArray;
    
}

function getRotatedIndex(index, rotationNumber,lengthArray) {
    if (index > lengthArray - 1)  {
         return getRotatedIndex(index - lengthArray, rotationNumber, lengthArray);
    }
    return index;
    
}


//recruitment 

// matrixe square -1  0  1

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'collectMax' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY mat as parameter.
 */

function collectMax(mat) {
    // Write your code here<
    console.debug(mat);
    let currentMap = clone(mat);
    let currentPosition = [0,0];
    let totalDiamonds = 0;
    while (!endOfFirstRoad(currentPosition, currentMap.length)) {
        const nextMove = getNextMove(currentPosition, currentMap);
        if (isThereDiamond(currentMap, nextMove)) {
            totalDiamonds++;
            currentMap[nextMove[0]][nextMove[1]] = 0;
        }
        currentPosition = nextMove;
    } 
    return totalDiamonds;
}

function clone(map) {
    return JSON.parse(JSON.stringify(map));
}

function move(map, [row, column]) {

}

function isThereDiamond(map, [row, column]) {
    //check if is a diamond
    return map[row][column] === 1;


}

function getNextMove(position, matrix) {
    const matrixLength = matrix.length;
    const row = position[0];
    const column = position[1];
    const nextMoveCoordinates = null;


    if (column < matrixLength - 1 && matrix[row][column + 1] !== - 1) {
        return [row, column + 1];
    }
    else if (row < matrixLength - 1 && matrix[row + 1][column] !== -1) {
        return [row +1 , column];
    }
    return [matrixLength - 1, matrixLength - 1];
}

function endOfFirstRoad(position, matrixLength) {
    console.log(position);
    return (
        position[0] === matrixLength &&
        position[1] === matrixLength
    )
}