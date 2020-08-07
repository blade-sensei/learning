My way to get clean git history
==


## Messy :cry: 

![](https://i.imgur.com/ByZN7OC.png)

Have you already get the same git history ?
Maybe if you work alone or work on small project/team not really, but i have already face this situation on standard projects (>10 members).

The problem here is not to have many branches, this is normal, but there is other problems to me.

### The problems here

Hard to read, look at the history even if you don't need to find or revert a commit, 
visually to feel bad, as you see your messy home... for example.

Find or back to a commit of our history will be also be annoying, this will even can create other conflicts... so a bug fixes and maintenance will be more complicated.


Filter, create bugs when merging work to the another branch why ? Take the followed example:


- we have branche B pulled from dev branch
- dev branch keep moving, meanwhile you work on feature
- now you finished and you will merge
- you fix conflicts..
- now it's merge
- the problem start here

Even if you fixed conflicts you don't even know if the merged (dev branch) is working, but this is late, you have already merge. Ok now you test, there is some bugs... 
now you will revert ? Ok revert but you will create another commit on dev.. you are pollute the branch with unecessary commit and potentially creating bugs. 

A good solution to me is the linar history.

----

## Linear History ! :+1: 

![](https://i.imgur.com/mK4IURp.png)

This is a google angular git history. I don't know exactly which internal rules or tools they use to get this.

But this is a example of what i prefer to get in my projects.


## How can we do that

Using rebase and avoiding --no-ff

## Avoid Merge --no-ff

![](https://i.imgur.com/hNZADrt.gif)


----

### Rebase

![](https://i.imgur.com/hlt8M5c.gif)

----

### Merge ff

![](https://i.imgur.com/e1pZ7xH.gif)



### Rules

- [x] 72 chars title 
- [x] Body explains why and what
- [x] Imperative (add, fix, change)
- [x] English
- [x] Avoid many changes in one commit (split commits)

----

### Source

[source des règles](https://hashnode.com/post/what-tips-and-guidelines-do-you-follow-while-writing-git-commit-messages-cimorctip0010oz53hibbt5a3)

----


## Naming

Respectez ce pattern :exclamation:  `[type] contexte ou scope: sujet (#ticket)`

- __type__: Type du commit (feat, docs, style...)  
- __scope__: Sur quoi le changement s'applique, une route, un composant, un fichier, une feature
- __sujet__: Expliquer quoi et pourquoi
- __ticket__: Numéro du ticket (facultatif)

`Le #ticket est facultatif.`

----

### Types


type(contexte): le sujet, résumé 

- __feat__: nouvelle fonctionnalités pour l'utilisateur
- __fix__: bug fix
- __docs__: documentations
- __style__: css, fonts, ajout de classes html
- __typo__: format, syntaxe, eslint, orthographe
- __refactor__: refactorisation, renommmage de fichier
- __test__: ajout/modification de tests
- __chore__: tâches de build, configurations, installation de libs (package.json, gitignore ...)


----

#### Exemples

```markdown
feat(comments): add edition page component (#253)
fix(login): fix redirection after sign in (#7311)
test(route user/news): add unit test with Jasmine
style(items): change font color ...
typo(comments) js: fix eslint object spaces 
refactor(user component): rename ...  
docs(changelog): add release feature for 3.0.0
chore(gitignore): add idea ignoring files 
```

----

### Angular commits

![](https://i.imgur.com/my0yxb4.png)

---

<!-- .slide: data-background="#1A237E" -->
# Gitflow

[gitflow](https://nvie.com/posts/a-successful-git-branching-model/)

---

<!-- .slide: data-background="#1A237E" -->
Git tips
==

----

## Git rebase

- Historique propre

```shell=
git checkout cible
git rebase branche origine
```

----

<!-- .slide: data-background="#1A237E" -->
## Git stash

----

### Cas d'utilisation
- Changer de branche et sauvegarder sont travail sans pour autant commit le travail en cours


```shell=
git stash save "mon stash"
git stash apply stash@{id}
git stash show stash@{id} -p
```

[liens utiles sur stash](https://medium.freecodecamp.org/useful-tricks-you-might-not-know-about-git-stash-e8a9490f0a1a)


----

## Git amend

- Changer le titre de mon __dernier commit__
- J'ai oublié de rajouter une changement dans __le dernier commit__

```shell=
git commit --amend
ou
git add -A
git commit --amend
```

----

## Git rebase iteratif

- Rassembler des commits en 1 seul
- Editer (renommer, rajouter) un ancien commit

```shell=
git squash 
git fixup //pareil que squash met ne garde pas les noms des commits à fusioner
git edit
```

----

## Git reset --soft --hard

- Revenir sur un commit précis et ne pas perdre les changements

```shell=
git reset --soft commitId
```