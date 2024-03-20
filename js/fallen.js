const fallen = {
  yes: document.querySelector('#fallen-yes'),
  no: document.querySelector('#fallen-no'),
  image: document.querySelector('#fallen-image'),
  message: document.querySelector('#fallen-message'),
};

function sendResponseCode(val) {
  return `send the message <br /><span class='text-sm bg-slate-300 p-1 rounded font-medium'>${val}</span> on WhatsApp <i class="fa-brands fa-whatsapp"></i>.`;
}

fallen.yes.addEventListener('click', () => {
  fallen.image.setAttribute('src', './success.gif');
  fallen.message.innerHTML = sendResponseCode("you'er my forever and after");
});

fallen.no.addEventListener('click', () => {
  fallen.image.setAttribute('src', './fail.gif');
  fallen.message.innerHTML = sendResponseCode('voetsek tineyi');
});
