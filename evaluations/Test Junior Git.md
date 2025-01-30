# Test Junior Git

## Consignes: 

- Donnez des réponses claires, comme si vous donniez une instruction à l'ordinateur ou un enfant
- Dans les exercices où on vous demande d'écrire du code, veuillez donner toujours le code qui permet aussi de tester votre fonction/classe.
- Ne pas utiliser github, stackoverflow, chatgpt/autres IA ou tout autre support de cours de programmation, ce test évalue vos connaissances **actuelles** et non pas votre capacité à chercher.
- Vous trouverez un dossier /sandbox/git/project-test qui pourrait représenter un project web, à l'intérieur de ce dossier vous n'avez pas encore git, veuillez ajouter le gestionaire de versionning GIT à ce projet (dossier)
## Objectifs du test :

Ce test sert à évaluer la connaissance et la mise en pratique de certains concepts, qui sont nécessaires pour être (potentiellement) autonome dans la conception d'une API, App Web/Mobile qui utilise les principes de POO, Clean Architecture et Dependance d'injection. Aussi certains exercices évaluent les capacités de lecture, interprétation du code et détection des failles/bugs.
# Partie 1: Gestion de travail en groupe

Consignes:

- placez vous sur la branche master et créer une nouvelle branche feature/team-a
- placez vous sur la branche master et créer une nouvelle branche feature/team-b
- La team B ajoute 1 commit qui rajoute un film à la liste de films du fichier items.html
- La team A ajoute un footer juste en dessous du <header> pour mettre le texte suivant: "© copyright 2024-2025"
- la team A veut mettre à disposition son travail pour toute l'équipe, veuillez mettre le travail de la team B sur la branche master
- la team B veut se mettre à jour et récupèrer le travail de toute l'équipe (sur master), à vous de faire la manipulation nécessaire

# Partie 2: Gestion de conflits
Dans le dossier sandbox/git/conflict-local, deux branches existent, feature/team-a et feature/team-b, la team A a avancé plus vite que l'autre team et la team B souhaite maintenant intégrer les changements de l'autre team, essayez de merger et résoudre le conflits en prenant la version de la team-a.

# Partie 3: Gestion de conflits d'une branche remote stable
Le but de cet exercice de voir si savez résoudre un conflit entre deux branches lorsque vous souhaitez faire le merge sur l'interface web du repository remote (par example azure devops ou github).

Le manager vous demande de faire la monté de dev en preprod, vous allez sur l'interface web de Azure Devops, vous créer un pull request avec la branche de "dev" qui cible la branche de "preprod", lors de la création de la PR, vous vouez un messageur d'erreur "Conflits entre ces deux branches"

Comme vous ne pouvez pas règler ce conflit sur l'interface web, vous devez le faire sur votre poste

Veuillez faire les manips nécessaires sur le dossier /sandbox/git/conflict-remote

- les branches "prod" et "dev" existent déjà

# Partie 4: Commandes utiles (bonus)
- comment faire lors que vous avez du travail en cours et que vous voulez changer de branche sans faire un commit car il va polluer votre historique ? 
- un collègue à fais un petit commit de fix sur sa branche et ensuite il a continué à faire 3 autres commits, vous ne voulez "ramener" que le commit de fix dans votre branche, comment faire ?
- vous voulez effacer complétement le dernier de votre brache
- vous voulez effacer le dernier commit de votre branche MAIS vous voulez garder les changements que ce commit possède afin de modifier la feature et continuer à dev dessus
- vous voulez rassembler 3 commits en 1 seul
- vous voulez changer le titre/message du dernier commit que vous avez fait
- si vous voulez positioner les commits d'une branche de votre collègue par dessus votre branche SANS créer de commit de merge, quel commande il faut utiliser ?