const message = `Happy valentines day Nami!.\n\nI’m glad to have you back in my life, I missed you so much. \n\nBeing around you still brings out my soft spot which isn't fair.\n\nI hope you know how much I truly love you Nami, I care about you and that hasn't ever changed.`;

function showLetter() {
   // Play background music
  document.getElementById("bgMusic").play();

  // Hide intro and button
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
