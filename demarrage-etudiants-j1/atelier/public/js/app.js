const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const versionElt = document.querySelector('#version');
// Ceci correspond au label
const message = document.querySelector('#message');
// Ceci correspond à la liste des messages
const messages = document.querySelector('#messages');
// Ceci correspond au compteur de cractères
const compteur = document.querySelector('#compteur');

// J1 : interface seule, on bloque l’envoi et on l’explique.
formulaire?.addEventListener(`submit`, (event) => {
  event.preventDefault();
  const message_envoye = message.value.trim()
  if(message_envoye.length <= 0){
    statut.textContent = 'Le message ne doit pas être vide.' 
  }else{
    const li = document.createElement('li')
    li.textContent = `Vous : ${message_envoye}`
    messages.append(li)
    message.value = ''
    statut.textContent = ''
    compteur.textContent = '0 / 280'
    message.focus()
  }
  // if (statut) {
  //   statut.textContent = 'Interface prête ; les réponses arrivent au J2.';
  // }
});

message.addEventListener('input',() =>{
  compteur.textContent = `${message.value.length} / 280`
})


// Version du serveur local, échec discret si indisponible.
// fetch('/version.json', { headers: { accept: 'application/json' } })
//   .then((reponse) => (reponse.ok ? reponse.json() : null))
//   .then((donnees) => {
//     if (donnees && typeof donnees.version === 'string' && versionElt) {
//       versionElt.textContent = `version ${donnees.version}`;
//     }
//   })
//   .catch(() => {});
