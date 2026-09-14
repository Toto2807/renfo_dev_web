# Suivi J1 — Cap Web

Note ton avancée après chaque TP. Reste factuel, sans données personnelles. Ce fichier te sert pour la capsule et le bilan.

## TP00 — Diagnostic

- Hypothèse : 
    html : Problème d'affichage sur téléphone, les titres sont désordonnés, pas de label et le  bouton s'inscrire était une div pas un bouton
    css : taille en px et non par rapport a la largeur de l'écran + media absnet pour la redimmenssion de la fenêtre
- Action :
    html : correction des titre de section, ajout des label, ajout du "button"
    css : changement de px à taille de l'écran + ajout du media pour gérer l'affichage téléphonique
    js : ajout des deux fonctions
- Résultat :
    Page épuré et fonctionnelle sans défillement horizontal
- Point non compris :
    Aucun

## TP01 — Démarrer

- Hypothèse : 
    Une fois le serveur lance avec "npm start" nous devrions avoir un affichge avec le h1, le p et le js (si celui-ci est bien connecté)
- Action :
- Résultat :
    Comme dis dans l'hypothèse, nous avons bien un affichage avec les trois parties dont le js
- Point non compris : Aucun

## TP02 — HTML

- Hypothèse : 
    Si "main" est remplacé par "div" le css attaché à celui-ci ne s'applique plus
- Action :
- Résultat :
- Point non compris :

## TP03 — Formulaire

- Hypothèse :
    Si je tape sur "Entrée" dans le champ multiligne, cela devrait me faire sauter une ligne dans celui-ci
- Action :
    Test du champ vide, avec des espaces, et avec un texte de plus de 280 caractère
- Résultat :
    La touche espace dans le "textearea" nous fait bien sauter une ligne.
    Le champ vide est bloqué à cause du "required".
    Celui avec un espace ne l'est pas car un espace est considéré comme un caractère.
    Enfin le texte de plus de 280 caractère se bloque à 280 caractère sans nous laisser la possiblité d'en taper plus à cause du maxlength.
- Point non compris : 
    Aucun

## TP04 — Responsive

- Hypothèse :
    Si on rentre un mot trop long, celui - ci dépasse du conteneurs en continuant sur la même ligne
- Action :
    Ajout dans le css d'un "overflow-wrap : word-break" pour faire en sorte de "casser" le mot une fois la taille du conteneur dépassé
- Résultat :
    Mot cassé, conteneur respecté
- Point non compris, test 360 / 1280 : 
    Aucun, test réussi

## Commandes essayées

Note chaque commande avec son dossier de lancement et son résultat exact. Exemple d'état local, depuis la racine étudiante :

```sh
# depuis RACINE_ETUDIANT
git status
git diff
```

Mes essais :

- Dossier :
    Racine
- Commande et résultat : 
    ```sh
        cd atelier
        npm start 
    ```
    Pour aller dans le dossier concerné et lancer le projet
- Problème exact si blocage :
    Aucun

Si Node ou Git bloque, note le message exact et continue en local sans attendre. Le double-clic sur `diagnostic/index.html` ne remplace pas le serveur pour les modules et l'envoi du TP03.

## Auto-revue finale

- Ce qui s'affiche bien :
    Tout s'affiche bien et tout est fonctionnel
- Ce qui reste fragile au clavier ou à 360 px :
    Rien
- Ce que je veux revoir en capsule :
    Le css car certaines variables n'étaient pas connu donc a revoir.

## Rappel Git prudent

Git reste optionnel le matin. Vérifie l'état local, ne valide que des fichiers nommés un par un et seulement si Git est configuré. Reste en local ou en ZIP sauf si le formateur précise le circuit avec fork personnel. Aucune invitation ni demande de fusion requise le matin.

## Liens

- [README](README.md)
- [TP00](tp/00-diagnostic.md)
- [TP05](tp/05-bilan.md)
- [Aide-mémoire](ressources/aide-memoire.md)
