const LABELS = {
  drum: 'On drum view',
  usual: 'Usual view'
}
const METHODS = {
  add: 'add',
  remove: 'remove'
}
const buttons = document.querySelectorAll('.btn'),
  tumbler = document.querySelector('.tumbler'),
  container = document.querySelector('.container');
let isDrumView = false;

tumbler.addEventListener('click', () => {
  isDrumView = !isDrumView;
  tumbler.textContent = isDrumView ? LABELS.drum : LABELS.usual;
  const selectedMethod = isDrumView ? METHODS.add : METHODS.remove;

  buttons.forEach(button => {
    button.classList[selectedMethod](button.textContent.toLowerCase());
  });
});

document.addEventListener('keydown', (event) => {
  const { key } = event;
  selectAndPlay(key, handleButtons, key);
});

document.addEventListener('click', (event) => {
  const { target } = event;
  if (target.matches('.btn')) {
    selectAndPlay(target.textContent, activateButton, target);
  }
});

function selectAndPlay(key, callback, arg) {
  const audio = document.querySelector(`audio[data-key="${key.toUpperCase()}"]`)
  if (audio) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    }
    callback(arg);
  }
}

function handleButtons(key) {
  buttons.forEach(button => {
    if (button.textContent.toUpperCase() === key.toUpperCase()) {
      activateButton(button);
    }
  })
}

function activateButton(button) {
  activateStyle(button);
  setTimeout(() => deactivateStyle(button), 200);
}

function activateStyle(element) {
  element.classList.add('active');
}

function deactivateStyle(element) {
  element.classList.remove('active');
}