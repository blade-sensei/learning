function rotLeft(a, d) {

}

// [ 1, 2, 3, 4, 5 ], 4 [3, 4, 5, 1, 2]

// index 2 - decale 3 -> dest 4 -> taille 5
// de la soustraction limite - decalage correspond à la taille de l'array - le reste de cette soustraction

// limite ecart entre index et 0 (index courant)
// taille: 5, un element peut au maximum être calé de (sa place index) - (taille array - 1 = max index) - (0)
// si on depasse pas la limite on peut reduire l'index
// si on depasse 

// [ 1, 2, 3, 4, 5 ]

rotLeft([ 1, 2, 3, 4, 5 ], 4)
rotLeft([ 41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51 ], 10);
rotLeft([ 33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97 ], 13)