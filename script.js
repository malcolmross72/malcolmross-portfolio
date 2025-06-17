const readAllBtn = document.getElementById("readAllBtn");
const stopBtn = document.getElementById("stopBtn");

let speech = new SpeechSynthesisUtterance();
let isReading = false;

readAllBtn.addEventListener("click", () => {
  if (isReading) return;

  const text = document.body.innerText;
  speech.text = text;
  speech.lang = "en-US";
  speech.rate = 1;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
  isReading = true;
  stopBtn.style.display = "inline-block";
});

stopBtn.addEventListener("click", () => {
  speechSynthesis.cancel();
  isReading = false;
  stopBtn.style.display = "none";
});

speech.onend = () => {
  isReading = false;
  stopBtn.style.display = "none";
};