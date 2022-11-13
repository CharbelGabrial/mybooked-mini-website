let burger_menu = document.querySelector(".burger_menu");
let LetSpeak = false;
let msg = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
msg.voice = voices[0];
let tags = document.querySelectorAll("p, a, h1, h2, label, button, span");

let speech_wrapper = document.querySelector(".speech_wrapper button");

speech_wrapper.addEventListener("click", (e) => {
  if (LetSpeak == true) {
    LetSpeak = false;
    speech_wrapper.classList.remove("active");
    speech_wrapper.innerText = "Speech OFF";
  } else {
    LetSpeak = true;
    speech_wrapper.classList.add("active");
    speech_wrapper.innerText = "Speech ON";
  }
});

tags.forEach((EachTag) => {
  EachTag.addEventListener("focus", (e) => {
    if (LetSpeak) {
      msg.text = e.target.innerText;
      EachTag.style.border = "2px dotted #333";
      EachTag.style.backgroundColor = "#BEFFD6";
      EachTag.style.color = "#333";
      speechSynthesis.speak(msg);

      let intervel = setInterval(() => {
        if (!speechSynthesis.speaking) {
          EachTag.style.removeProperty("border");
          EachTag.style.removeProperty("background-color");
          EachTag.style.removeProperty("color");
          clearInterval(intervel);
        }
      }, 100);
    }
  });
});
burger_menu.addEventListener("click", (e) => {
  document.querySelector("header ul").classList.toggle("active");
});
