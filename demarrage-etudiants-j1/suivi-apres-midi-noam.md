# Suivi — après-midi J1

**Noté. Un fichier par étudiant, écrit avec vos mots.** Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») rapporte plus qu'une phrase parfaite recopiée.

- Nom : BAROUKH Noam
- Binôme : CULLIER Théo
- Atelier utilisé (le mien, celui du binôme, la reprise) : Le mien

## Pour chaque TP abordé

Recopiez ce bloc autant de fois que nécessaire.

### TP 6

- J'ai prédit :
  N/A
- Nous avons fait :
  Commit des fichiers de l'après midi dans le github
- J'ai observé :
    Une interface qui marche avec un statut qui change après l'envoie
- J'ai compris :
  N/A
- Je n'ai pas compris :
  N/A
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
  N/A
- Réponse à la question « Dans le suivi » du TP :
  innerHTML permet d’ajouter une chaîne de caractères dans du HTML mais il interprète aussi les balises HTML présentes dans cette chaîne. Si du code HTML ou JavaScript malveillant est injecté, il peut donc être exécuté, ce qui peut créer une faille XSS.
  textContent considère ce qui est ajouté comme du simple texte et n’interprète pas les balises HTML. Il est donc plus sûr de l'utilisé

### TP 8

- J'ai prédit :
  Une réponse suivant des messages prédéfinis.
- Nous avons fait :
  Deux fonctions dans un fichier "brain.js" une pour la validation de la chaine de caractère et l'autre pour la réponse.
- J'ai observé :
  Des réponses valide et des messages d'erreurs en rapport avec l'erreur observée.
- J'ai compris :
  N/A
- Je n'ai pas compris :
  N/A
- Réponse à la question « Dans le suivi » du TP :
  Le fichier `brain.js` contient la logique de l’application et reste indépendant de l’interface dans `app.js`. Cela permet de le réutiliser et d’éviter d’exposer des données sensibles. Une liste vide est donc utilisée pour limiter les fichiers accessibles.


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
