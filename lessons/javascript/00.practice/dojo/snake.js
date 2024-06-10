
class Square {
  coord =  {
    x: 1,
    y: 1,
  }
  constructor(x, y)  {
    this.coord.x = x;
    this.coord.y = y;
  }
  
}



const squareElement = {
  coord: {
    x: 1,
    y: 4,
  }
}

//dessiner un carree
const { square, board } = initBoard();



//pour creer un tableau et ou moouvement 
//il faut ajouter +10 au left selon si coordonnee 
//cord du board -> 10 x 10  11. 12. 13. 14..etc
// 2.1

//faire un la diff entre cord actuel et cord du mouvement
//calculer les pixels à rajouter 
//mettre à jour le square



function initBoard() {
  const square = document.createElement('div');
  square.classList.add('square');

  //init
  const board = document.querySelector('.board');
  board.appendChild(square);
  return { square, board };
}

function move(squareProp) {
  let squareX = squareProp.coord.x;
  let squareY = squareProp.coord.y;
  const xInitial = 8;
  const yInitial = 20//??


  console.log(squareProp);
  const newX = squareX * 40;

  console.log(squareProp);
  const newY = squareY * 40;

  square.style.left = newX + 'px';
  square.style.top = newY + 'px';
  board.appendChild(square);
}


document.onkeydown = function(e) {

  const keyName = e.key;
  if (keyName === "ArrowDown") {
    squareElement.coord.y = squareElement.coord.y + 1;
  } else if (keyName === "ArrowUp") {
    squareElement.coord.y = squareElement.coord.y - 1;
  }
  else if (keyName === "ArrowRight") {
    squareElement.coord.x = squareElement.coord.x + 1;
  } else if (keyName === "ArrowLeft") {
    squareElement.coord.x = squareElement.coord.x - 1;
  }
  move(squareElement);
}

//consitiué de squares 
const snakeBody = [new Square(1, 1)];

function printSnake(snakeBody) {


  const [firstTest] = snakeBody;
  move(firstTest);

}

printSnake(snakeBody);

//bouger arrow ene continue dans le dernier sens.

//ok a un un carre qui bouge
//il faut rajouter une liste de carree pour faire le snake

//ensuite rajouter un systeme de collision. en comparantles coord de la tete du snake
//avec celle de la pomme ? 

//si collision alors rajouter un square en fonction de la position du dernier carree

//limites du board pour mettre un message de fin de jeu




//pour lisntnat on passe, car on sait que on peut bouger un square 
/* for await (const i of [0,0,0,0]) {
  setTimeout(() => {}, 1000);
  const move = 10;
  const left = square.getBoundingClientRect().left;
  console.log(left);
  square.style.left = left + move + 'px';
  board.appendChild(square);
}
 */
