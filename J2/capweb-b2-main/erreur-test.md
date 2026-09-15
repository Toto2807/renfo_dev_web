✖ failing tests:

test at tests\brain.test.js:27:5
✖ ne repond pas a une phrase inconnue 2 (1.4816ms)
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
actual expected

"Pour l'instant jJe pneux comprepondre à ces messpages : bvonjour, salut, aidre, tmest en minuscule ou majusculge"'

      at TestContext.<anonymous> (file:///C:/Users/buste/Desktop/renfo_dev_web/J2/capweb-b2-main/tests/brain.test.js:28:16)
      at Test.runInAsyncScope (node:async_hooks:214:14)
      at Test.run (node:internal/test_runner/test:1106:25)
      at Suite.processPendingSubtests (node:internal/test_runner/test:788:18)
      at Test.postRun (node:internal/test_runner/test:1235:19)
      at Test.run (node:internal/test_runner/test:1163:12)
      at async Suite.processPendingSubtests (node:internal/test_runner/test:788:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: "Pour l'instant je peux repondre à ces message : bonjour, salut, aide, test en minuscule ou majuscule",
    expected: 'Je ne comprends pas votre message',
    operator: 'strictEqual',
    diff: 'simple'
}

test at tests\contrat\brain.contrat.test.js:37:3
✖ mesure la longueur après avoir retiré les espaces (0.642ms)
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

false !== true

      at TestContext.<anonymous> (file:///C:/Users/buste/Desktop/renfo_dev_web/J2/capweb-b2-main/tests/contrat/brain.contrat.test.js:38:12)
      at Test.runInAsyncScope (node:async_hooks:214:14)
      at Test.run (node:internal/test_runner/test:1106:25)
      at Suite.processPendingSubtests (node:internal/test_runner/test:788:18)
      at Test.postRun (node:internal/test_runner/test:1235:19)
      at Test.run (node:internal/test_runner/test:1163:12)
      at async Suite.processPendingSubtests (node:internal/test_runner/test:788:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: false,
    expected: true,
    operator: 'strictEqual',
    diff: 'simple'
}
PS C:\Users\buste\Desktop\renfo_dev_web\J2\capweb-b2-main> npm run lint

> cap-web-atelier@0.1.0 lint
> eslint .

PS C:\Users\buste\Desktop\renfo_dev_web\J2\capweb-b2-main> npm test

> cap-web-atelier@0.1.0 test
> node --test "tests/**/*.test.js"

▶ validateMessage
✔ refuser une chaine vide (0.57ms)
✔ nettoie les espaces autour d'une chaine (1.968ms)
✔ refuser une chaine de plus de 280 caractères (0.269ms)
✔ accepter une chaine de 280 caractères (0.2093ms)
✔ validateMessage (3.9715ms)
▶ replyTo
✔ repond a bonjour (0.3429ms)
✔ ne repond pas a une phrase inconnue (0.194ms)
✖ ne repond pas a une phrase inconnue 2 (2.3418ms)
✖ replyTo (3.2283ms)
▶ Contrat CP1 — validateMessage
✔ refuse ce qui n’est pas du texte, avec un message d’erreur (0.6406ms)
✔ refuse le vide et les espaces seuls (0.1213ms)
✔ accepte un message et retire les espaces autour (0.5354ms)
✔ accepte 280 caractères et refuse 281 (0.1211ms)
✖ mesure la longueur après avoir retiré les espaces (0.6851ms)
✖ Contrat CP1 — validateMessage (2.9603ms)
▶ Contrat CP1 — replyTo
✔ répond toujours par un texte non vide (0.1913ms)
✔ ignore la casse et les espaces autour (0.0922ms)
✔ donne la même réponse à « bonjour » et à « salut » (0.1046ms)
✔ donne une réponse distincte à salut, aide et test (0.0963ms)
✔ répond à une phrase inconnue par un repli distinct (0.1116ms)
✔ Contrat CP1 — replyTo (0.8123ms)
▶ Contrat CP1 — chaque module garde son rôle
✔ brain.js ne touche pas à la page (7.5145ms)
✔ view.js affiche du texte et ne décide pas des réponses (0.9779ms)
✔ app.js ne fabrique pas les lignes de la conversation (1.1372ms)
✔ app.js n’injecte jamais de HTML (0.6587ms)
✔ Contrat CP1 — chaque module garde son rôle (10.58ms)
✔ le serveur sert /js/app.js en JavaScript (23.9719ms)
✔ le serveur sert /js/brain.js en JavaScript (3.9053ms)
✔ le serveur sert /js/view.js en JavaScript (1.9308ms)
▶ build-static
✔ utilise le commit déployé en priorité (2.6792ms)
✔ indique « local » hors chaîne (0.2452ms)
✔ copie public dans dist et écrit version.json (22.0204ms)
✔ repart d’un dist vide à chaque construction (7.7406ms)
✔ build-static (33.8848ms)
▶ check-dependances
✔ accepte un package.json identique à la liste autorisée (1.5634ms)
✔ signale une dépendance ajoutée (0.2214ms)
✔ signale une version modifiée (0.1308ms)
✔ signale une dépendance retirée (0.1183ms)
✔ check-dependances (2.8228ms)
▶ check-tests
✔ lit la sortie de git diff --name-status, renommages compris (1.5978ms)
✔ autorise l’ajout de nouveaux tests sans justification (0.361ms)
✔ refuse un test existant modifié sans TEST-CHANGE (0.225ms)
✔ accepte un test modifié avec une justification précise (0.1204ms)
✔ refuse une justification trop courte (0.1047ms)
✔ ignore les justifications laissées en commentaire dans le modèle de PR (0.1257ms)
✔ exige HARNAIS-CHANGE pour la chaîne, les scripts, package.json et les configurations (0.1899ms)
✔ autorise la création d’AGENTS.md mais pas sa modification silencieuse (0.0874ms)
✔ contrôle aussi l’ancien chemin d’un test déplacé hors des tests (0.1189ms)
✔ check-tests (3.7634ms)
✔ GET / sert la page d’accueil en HTML (24.597ms)
✔ GET /styles.css sert la feuille de style en CSS (4.1964ms)
✔ GET /js/app.js sert le script en JavaScript (2.1555ms)
✔ HEAD / répond sans corps avec les mêmes en-têtes (4.133ms)
✔ GET /version.json renvoie la version fournie (2.2187ms)
✔ GET inconnu répond 404 (2.1482ms)
✔ POST sur une ressource statique est refusé avec 405 (1.8542ms)
✔ les chemins privés ne divulguent aucun fichier (4.3371ms)
✔ traversal et chemins encodés ne divulguent aucun fichier (4.3499ms)
ℹ tests 50
ℹ suites 8
ℹ pass 48
ℹ fail 2
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 200.0789

✖ failing tests:

test at tests\brain.test.js:27:5
✖ ne repond pas a une phrase inconnue 2 (2.3418ms)
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
actual expected

"Pour l'instant jJe pneux comprepondre à ces messpages : bvonjour, salut, aidre, tmest en minuscule ou majusculge"'

      at TestContext.<anonymous> (file:///C:/Users/buste/Desktop/renfo_dev_web/J2/capweb-b2-main/tests/brain.test.js:28:16)
      at Test.runInAsyncScope (node:async_hooks:214:14)
      at Test.run (node:internal/test_runner/test:1106:25)
      at Suite.processPendingSubtests (node:internal/test_runner/test:788:18)
      at Test.postRun (node:internal/test_runner/test:1235:19)
      at Test.run (node:internal/test_runner/test:1163:12)
      at async Suite.processPendingSubtests (node:internal/test_runner/test:788:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: "Pour l'instant je peux repondre à ces message : bonjour, salut, aide, test en minuscule ou majuscule",
    expected: 'Je ne comprends pas votre message',
    operator: 'strictEqual',
    diff: 'simple'
}

test at tests\contrat\brain.contrat.test.js:37:3
✖ mesure la longueur après avoir retiré les espaces (0.6851ms)
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

false !== true

      at TestContext.<anonymous> (file:///C:/Users/buste/Desktop/renfo_dev_web/J2/capweb-b2-main/tests/contrat/brain.contrat.test.js:38:12)
      at Test.runInAsyncScope (node:async_hooks:214:14)
      at Test.run (node:internal/test_runner/test:1106:25)
      at Suite.processPendingSubtests (node:internal/test_runner/test:788:18)
      at Test.postRun (node:internal/test_runner/test:1235:19)
      at Test.run (node:internal/test_runner/test:1163:12)
      at async Suite.processPendingSubtests (node:internal/test_runner/test:788:7) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: false,
    expected: true,
    operator: 'strictEqual',
    diff: 'simple'
}
PS C:\Users\buste\Desktop\renfo_dev_web\J2\capweb-b2-main> npm run test:browser

> cap-web-atelier@0.1.0 test:browser
> playwright test


Running 8 tests using 1 worker

ok 1 [chromium] › browser\contrat.spec.js:26:3 › Contrat CP1 — conversation › envoyer affiche le message puis la réponse du cerveau (389ms)
ok 2 [chromium] › browser\contrat.spec.js:37:3 › Contrat CP1 — conversation › un message fait d’espaces est refusé avec une erreur visible (157ms)
ok 3 [chromium] › browser\contrat.spec.js:44:3 › Contrat CP1 — conversation › le texte reste du texte, jamais du HTML (153ms)
ok 4 [chromium] › browser\contrat.spec.js:53:3 › Contrat CP1 — mémoire › la conversation survit au rechargement (175ms)
x  5 [chromium] › browser\contrat.spec.js:62:3 › Contrat CP1 — mémoire › la mémoire est rangée sous la clé capweb.historique (158ms)
ok 6 [chromium] › browser\contrat.spec.js:73:3 › Contrat CP1 — mémoire › une mémoire abîmée ne casse pas la page (204ms)
ok 7 [chromium] › browser\contrat.spec.js:85:3 › Contrat CP1 — mémoire › Effacer vide la conversation, même après rechargement (209ms)
ok 8 [chromium] › browser\contrat.spec.js:95:3 › Contrat CP1 — mémoire › annuler la confirmation garde la conversation (169ms)


1) [chromium] › browser\contrat.spec.js:62:3 › Contrat CP1 — mémoire › la mémoire est rangée sous la clé capweb.historique

    Error: expect(received).toEqual(expected) // deep equality

    - Expected  - 1
    + Received  + 1

      Object {
    +   "content": "salut",
        "role": "user",
    -   "text": "salut",
      }

      67 |     expect(Array.isArray(memoire)).toBe(true);
      68 |     expect(memoire).toHaveLength(2);
    > 69 |     expect(memoire[0]).toEqual({ role: 'user', text: 'salut' });
         |                        ^
      70 |     expect(memoire[1].role).toBe('assistant');
      71 |   });
      72 |
        at C:\Users\buste\Desktop\renfo_dev_web\J2\capweb-b2-main\browser\contrat.spec.js:69:24

    Error Context: test-results\contrat-Contrat-CP1-—-mémo-d9c67-us-la-clé-capweb-historique-chromium\error-context.md

1 failed
[chromium] › browser\contrat.spec.js:62:3 › Contrat CP1 — mémoire › la mémoire est rangée sous la clé capweb.historique
7 passed (3.2s)