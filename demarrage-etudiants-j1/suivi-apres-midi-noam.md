# Suivi — après-midi J1

**Noté. Un fichier par étudiant, écrit avec vos mots.** Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») rapporte plus qu'une phrase parfaite recopiée.

- Nom : BAROUKH Noam
- Binôme : CULLIER Théo
- Atelier utilisé (le mien, celui du binôme, la reprise) : Le mien

## Pour chaque TP abordé

Recopiez ce bloc autant de fois que nécessaire.

### TP 6

- J'ai prédit :
  RAS
- Nous avons fait :
  Commit des fichiers de l'après midi dans le github
- J'ai observé :
    Une interface qui marche avec un statut qui change après l'envoie
- J'ai compris :
  RAS
- Je n'ai pas compris :
  RAS
- Réponse à la question « Dans le suivi » du TP :
  Ce qui pose problème pour le rechargement de la page est le "event.preventDefault()"

### TP 7

- J'ai prédit :
  Un affichage des valeurs tapé dans la liste (actuellement vide) et un compteur qui s'incrémente en fonction du nombre de caractère
- Nous avons fait :
  Une fonction pour afficher des messages et vider le champs de message a envoyer et une autre pour le compteur.
  De plus si un message avec espace est envoyé un message de status s'active sans mettre les espaces dans la discussion.
- J'ai observé :
  Des messages qui apparaissent dans la liste et le compteur qui monte.
- J'ai compris :
  La différence entre textContent et innerHTML
- Je n'ai pas compris :
  RAS
- Réponse à la question « Dans le suivi » du TP :
  innerHTML permet d’ajouter une chaîne de caractères dans du HTML mais il interprète aussi les balises HTML présentes dans cette chaîne. Si du code HTML ou JavaScript malveillant est injecté, il peut donc être exécuté, ce qui peut créer une faille XSS.
  textContent considère ce qui est ajouté comme du simple texte et n’interprète pas les balises HTML. Il est donc plus sûr de l'utilisé

### TP 8

- J'ai prédit :
  Une réponse suivant des messages prédéfinis ainsi que les messages d'erreur.
- Nous avons fait :
  Deux fonctions dans le fichier "brain.js" pour la validation de la chaine de caractère et pour la réponse.
- J'ai observé :
  Testé differentes réponses afin de voir les differentes réponses valide et des messages d'erreurs en rapport avec l'erreur prédéfinie.
- J'ai compris :
  RAS
- Je n'ai pas compris :
  RAS
- Réponse à la question « Dans le suivi » du TP :
  Le fichier `brain.js` contient la logique de l’application et reste séparé de l’interface gérée dans `app.js`. Cela facilite sa réutilisation tout en limitant l’exposition de données sensibles. Une liste vide est donc utilisée afin de restreindre l’accès aux fichiers.

### TP 9

- J'ai prédit :
  Une réponse suivant des messages prédéfinis et des messages d'erreurs se gérant grâce à des fonctions exportées comme pour le TP 8 mais cette fois ci en ayant importé "view.js"
- Nous avons fait :
  Une fonction dans "view.js" permettant de savoir le role de chaque message et d'y attribuer les réponses nécessaires.
- J'ai observé :
  Des réponses valide et des messages d'erreurs en rapport avec l'erreur observée toujours comme dans le TP 8 mais cette fois ci grâce à la fonction dans "view.js"
- J'ai compris :
  L'utilisation de "dataset"
- Je n'ai pas compris :
  RAS
- Réponse à la question « Dans le suivi » du TP :
  "app.js" : gère les interactions avec l'user et l'historique des messages
  "brain.js" : contient les règles de validation des messages et les réponses
  "view.js" : tranforme l'historique en élément HTML et gère leur affichage
  "index.html" : permet de savoir ce qui va s'afficher sur la page et d'importer le style et le js
  "style.css" : permet d'appliquer le style sur toute la page

### TP 10

- J'ai prédit :
  Un affichage de la conversation qui reste dans l'historique même après un rechargement de la page sur "http://127.0.0.1:3000/"
- Nous avons fait :
  Une fonction dans `app.js` permet d’ajouter un événement au bouton « Effacer » et qu’une autre gère la sauvegarde de l’historique et les erreurs liées à des données invalides.
- J'ai observé :
  Un affichage qui reste même après un reload et une suppression qui fonctionne.
- J'ai compris :
  L'utilisation de "localStarage" que ce soit pour mettre des item avec "setItem" ou même pour les récupérer avec "getItem"
- Je n'ai pas compris :
  RAS
- Réponse à la question « Dans le suivi » du TP :
  Après vérification, la conversation apparaît uniquement à l’adresse `http://127.0.0.1:3000/`. Le `localStorage` stocke les données selon l’origine utilisée pour lancer l’application. Ainsi, si elle est ouverte via `http://localhost:3000`, une autre conversation sera enregistrée pour cette adresse. Pour la navigation privée elle utilise un stockage différent.

### TP 11

- J'ai prédit :
  Un affichage des tests vert avec un seul rouge qui est créer exprès.
- Nous avons fait :
  Des tests dans `brain.test.js` permettent de vérifier différentes variables, notamment la longueur de la chaîne de caractères et sa présence.
- J'ai observé :
  Des tests qui fonctionnent tous avec comme prevu un seul est en rouge.
- J'ai compris :
  L'utilisation de "assert" avec "equal", "notequal" et "deepequal" pour faire les tests en fonction de ce qui était demandé.
- Je n'ai pas compris :
  RAS
- Réponse à la question « Dans le suivi » du TP :
  Voici le message en rouge :

  ✖ failing tests:

  test at tests/brain.test.js:27:5
  ✖ ne repond pas a une phrase inconnue 2 (2.017709ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  actual expected

  "Pour l'instant jJe pneux comprepondre à ces messpages : bvonjour, salut, aidre, tmest en minuscule ou majusculge"'

  Cela m’a permis de vérifier que le test d’une chaîne connue, comme « aide », ne renvoyait pas le message prévu pour une chaîne inconnue. Le test a donc été bloqué, car la valeur indiquée dans `equal` ne correspondait pas à celle attendue pour la chaîne « aide ».

## Épreuve de l'explication (TP12)

- Ce que je n'ai pas su expliquer :
- Ce que mon binôme n'a pas su expliquer :

## Trois questions

1. Pourquoi `textContent` et pas `innerHTML` ?
   Parce que `textContent` affiche uniquement du texte, contrairement à `innerHTML` qui peut interpréter du code HTML. Cela évite les injections XSS.
2. Pourquoi trois fichiers plutôt qu'un seul ?
    Pour séparer la logique de l’application, l’interface et la gestion des vues. Cela facilite la maintenance et la réutilisation du code. Mais aussi pour éviter d’avoir un code monolithique.
3. Si demain une IA écrit une partie du code, comment saurai-je qu'il est correct ?
   En vérifiant son fonctionnement avec des tests et en comparant les résultats obtenus avec ceux attendus.

## Aides utilisées

- Indices, aide-mémoire, voisins :
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse :
