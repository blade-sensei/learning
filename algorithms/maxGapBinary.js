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

module.exports = {
    maxGapBinary,
}