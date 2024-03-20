const passwordProtector = {
  screen: document.querySelector('#password-screen'),
  input: document.querySelector('#password-input'),
  unlockBtn: document.querySelector('#password-unlock-btn'),
  sensitiveSections: document.querySelectorAll('.password-protect'),
};

passwordProtector.unlockBtn.addEventListener('click', () => {
  const password = passwordProtector.input.value.trim().toLowerCase();

  // Checking password
  if (password === 'love_rhulani') {
    // closing password protector section
    passwordProtector.screen.classList.add('hidden');

    // displaying password protected sections
    passwordProtector.sensitiveSections.forEach((section) =>
      section.classList.remove('hidden')
    );
  }
});
