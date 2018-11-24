const msg = new SpeechSynthesisUtterance();
const options = document.querySelectorAll('[type="range"], [name="text"]');
const voicesDropdown = document.querySelector('[name="voice"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
let voices = [];

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en') || voice.lang.includes('ru'))
    .map(voice => `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`)
    .join('')
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  startSpeak();
}

function startSpeak() {
  stopSpeak();
  speechSynthesis.speak(msg);
}

function stopSpeak() {
  speechSynthesis.cancel();
}

function setOption() {
  msg[this.name] = this.value;
  startSpeak();
}

options.forEach(option => option.addEventListener('change', setOption));
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
speakButton.addEventListener('click', startSpeak);
stopButton.addEventListener('click', stopSpeak);





