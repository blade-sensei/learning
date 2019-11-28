/**
 * Given a matrix of n*n. Each cell contain 0, 1, -1.
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

function main() {

    const map = [[0, 1, 0 ], [1, -1, 0 ],[1, 1, 1]];
    const max = collectMax(map);
    console.log(max);
}

/**
 
0  1  0
1 -1  0
1  1  1

0  0  0
1 -1  0
1  1  0

 */

main();