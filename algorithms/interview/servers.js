function minimumHours(rows, columns, grid) {
  // WRITE YOUR CODE HERE

  // we need to iterate for all server status and count how
  // much times we did it until we reach 1 every everywhere
  let serversStatus = grid;
  let counter = 0;
  while (!isFullReceive(serversStatus)) {
    counter++;
    serversStatus = updateAdjacentServers();
  }

  return counter;


  // we need matrix has 1 everywhere (each ij)
}

function updateAdjacentServers() {
  // return new matrix
  return [];
}

function isFullReceive() {
  // check matrix full of 1
}

minimumHours(
  5, 6,
  [[0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0]]
);
