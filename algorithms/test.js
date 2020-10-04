function hasCorrectPosition(position, number) {
    return position === number - 1;
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    if (arr.length === 1) return 0;

    const list = [...arr];
    let swap = 0;
    let cursor = 0;
    while (cursor < list.length - 1); {
        const number = list[cursor];
        if (!hasCorrectPosition(cursor, number)) {
            const correctPosition = number - 1;
            const tempo = list[correctPosition];
            list[correctPosition] = number;
            list[cursor] = tempo;
            swap++
            cursor = 0
        } else {
            cursor++
        }
    }

    return swap;
}

console.log(minimumSwaps([4,3,1,2]));