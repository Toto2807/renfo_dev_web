# Suivi — après-midi J1

**Noté. Un fichier par étudiant, écrit avec vos mots.** Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») rapporte plus qu'une phrase parfaite recopiée.

- Nom : CULLIER Théo
- Binôme : BAROUKH Noam
- Atelier utilisé (le mien, celui du binôme, la reprise) : Le mien

## Pour chaque TP abordé

Recopiez ce bloc autant de fois que nécessaire.

### TP 6

- J'ai prédit :
    Rien n'était à prévoir
- Nous avons fait :
    Ajout des fichiers de l'après midi dans le github
- J'ai observé :
    Une interface qui fonctionne avec un status qui change après l'envoie
- J'ai compris :
    Rien de nouveau 
- Je n'ai pas compris :
    Rien
- Réponse à la question « Dans le suivi » du TP :
    La ligne empéchant le rechargement est le "event.preventDefault()"

### TP 7

- J'ai prédit :
    Un affichage des valeurs tapé dans la liste (actuellement vide) et un compteur qui s'incrémente en fonction du nombre de caractère
- Nous avons fait :
    Une fonction pour l'affichage des messages et la remise à zéro de l'espace de message et une autre pour le compteur.
    De plus si un message avec espace est envoyé un message de status s'active sans mettre les espaces dans la discussion.
- J'ai observé :
    Des messages qui apparaissent dans la liste et un compteur qui augmente.
- J'ai compris :
    La différence entre 'innerHTML' et 'textContent'.
- Je n'ai pas compris :
    Rien
- Réponse à la question « Dans le suivi » du TP :
    Le 'innerHTML' fait en sorte de prendre la chaine de caractère et de l'inclure certe mais si une fonction ou un variable HTML est tapée dedans alors celle-ci va s'exécuter étant donnée que 'innerHTML' interprete le HTML
    Tandis qu'avec le 'textContent' lui fait en sorte de considéré les chaine de caractères tapées comme du texte évitant ainsi les attaque du type XSS.

### TP 8

- J'ai prédit :
    Une réponse suivant des messages prédéfinis et des messages d'erreurs se gérant grâce à des fonctions exportées.
- Nous avons fait :
    Deux fonctions dans un fichiers "brain.js" une pour la validation de la chaine de caractère et l'autre pour la réponse.
- J'ai observé :
    Des réponses valide et des messages d'erreurs en rapport avec l'erreur observée.
- J'ai compris :
    Rien de nouveau par rapport à ce que l'on savait déjà.
- Je n'ai pas compris :
    Rien n'a pas été compris.
- Réponse à la question « Dans le suivi » du TP :
    Le fichier "brain.js" contient la logique de l'application et doit rester indépendante de l'interface comprise dans le "app.js".
    Notamment pour le fait de le réutiliser et de faire en sorte de sécuriser des données sensibles qui pourraient s'y retrouver.
    D'où le fait d'utiliser une liste blanche pour "filtrer" les fichiers accessibles. 

### TP 9

- J'ai prédit :
    Une réponse suivant des messages prédéfinis et des messages d'erreurs se gérant grâce à des fonctions exportées comme pour le TP 8 mais cette fois ci en ayant importé notre "view.js"
- Nous avons fait :
    Une fonction dans "view.js" permettant de savoir le role de chaque message et d'y attribuer les réponses nécessaires en fonction.
- J'ai observé :
    Des réponses valide et des messages d'erreurs en rapport avec l'erreur observée toujours comme dans le TP 8 mais cette fois ci grâce à la fonction dans "view.js"
- J'ai compris :
    L'utilisation de "dataset"
- Je n'ai pas compris :
    Rien n'a pas été compris.
- Réponse à la question « Dans le suivi » du TP :
    "app.js" : gère les interactions avec l'utilisateur et l'historique des messages
    "brain.js" : contient les ègles de validation des messages et les réponses de Cap web
    "view.js" : tranforme l'historique en élément HTML et gère leur affichage
    "index.html" : permet de savoir ce qui va s'afficher sur la page et d'importer le style et le js
    "style.css" : permet d'appliquer le style sur toute la page

## Épreuve de l'explication (TP12)

- Ce que je n'ai pas su expliquer :
- Ce que mon binôme n'a pas su expliquer :

## Trois questions

1. Pourquoi `textContent` et pas `innerHTML` ?
2. Pourquoi trois fichiers plutôt qu'un seul ?
3. Si demain une IA écrit une partie du code, comment saurai-je qu'il est correct ?

## Aides utilisées

- Indices, aide-mémoire, voisins :
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse :
