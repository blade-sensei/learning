
/** 

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

N = 1041 should return 5


 */

function maxGapBinary(N) {
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


/**
 * amazon interview
 * visible squares letters from 
 */

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

function rotateArray(A, K) {
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

/*
Complete the 'collectMax' function below.
The function is expected to return an INTEGER.
The function accepts 2D_INTEGER_ARRAY mat as parameter.
 Given a matrix of n*n. Each cell contain 0, 1, -1.
0 denotes there is no diamond but there is a path.
1 denotes there is diamond at that location with a path
-1 denotes that the path is blocked.
Now you have start from 0,0 and reach to last cell & then return back to 0,0 collecting maximum no of diamonds.
While going to last cell you can move only right and down.
While returning back you can move only left and up.
 */

function collectMax(mat) {
    // Write your code here<
    let currentMap = clone(mat);
    let currentPosition = [0,0];
    let totalDiamonds = 0;
    
    //first road
    while (!endOfFirstRoad(currentPosition, currentMap.length - 1)) {
        const nextMove = getNextMove(currentPosition, currentMap);
        if (isThereDiamond(currentMap, nextMove)) {
            totalDiamonds++;
            currentMap[nextMove[0]][nextMove[1]] = 0;
        }
        currentPosition = nextMove;
    }

    //second 
    while (!endOfSecondRoad(currentPosition)) {
        const nextMove = getNextMoveReturn(currentPosition, currentMap);
        console.log(nextMove);
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

function getNextMoveReturn(position, matrix) {
    const row = position[0];
    const column = position[1];

    if (row > 0 && matrix[row - 1][column] !== -1) {
        return [row - 1 , column];
    }
    else if (column > 0  && matrix[row][column - 1] !== - 1) {
        return [row, column - 1];
    }
    return [0, 0];
}

function endOfFirstRoad(position, matrixLength) {
    return (
        position[0] === matrixLength &&
        position[1] === matrixLength
    )
}


function endOfSecondRoad(position) {
    return (
        position[0] === 0 &&
        position[1] === 0
    )
}

module.exports = {
    maxGapBinary,
    rotateArray,
    collectMax,
};
