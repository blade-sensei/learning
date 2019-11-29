const dojos = require('./dojos');

function main() {

    const map = [[0, 1, 0 ], [1, -1, 0 ],[1, 1, 1]];
    const max = dojos.collectMax(map);
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