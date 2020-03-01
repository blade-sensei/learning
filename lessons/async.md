Promises callback of executed in the JOB Queue
The rest of IO Asynchronous callbacks are placed in Task/Queue callback

Async fonctions are executed after the principal stack
Javascript doesnot provide async function - SetTimeout or Request are included by Browser API and NodeJS Packages

Promises Works

Les promeses sont des objets avec un Etats et des evenements à executer selon l'état

On les appeles des promses car elles donnent la promese que la valeur sera immutable

L'un des avantage des promeses par rapport au Callbacks sont les chaines avec then().then()


- Execution d'une fonction qui retourne une promeses
- Ajout des evenements avec then()


- L'object Promise va être crée avec les étapes à suivre pour optenir la valeur de retour RESOLVE, mais cette étaape peut prendre du temps si c'est un appel asynchrone

Il peut avoir 2 cas ICI. Soit l'instruction prend du temps dans ce cas c'est le THEN qui sera executé Avant le RESOLVE ou REJECT

Soit l'instruction est rapide et le resolve ou reject s'executent avant le THEN.

1. le then va ajouter le handle/callback dans la liste de la promese et va executer un doResolve pour vérifier l'état de la promeses Si elle est à l'état FILLED et va executer les handlers qu'elle vient de mettre en liste de même pour reject. Si elle est en Pending est va juste l'ajouter à la liste.. Après un certain temps notre fonction asynchrone est terminé et va effectuer soit un Resolve ou Reject, le doResolve va être executé et on va mettre en JOB Queu le handle. Ce qui signifie que l'event loop va la prendre lorsque la stack principal aura terminé les execution.

La promise possède une seule valeur qui ne peut être changé.

Quand on chaine avec d'autre the net des callbacks on récupère l'état de objet promese prcédédante avec la valeur immutable

Resolve ou Reject va changer l'état de notre Promese vont faire un doResolve 
doResolve vérifie l'état de la promese et éxecute les 
handlers