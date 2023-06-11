const words = ["Hello", "i present you", "my resume"];
const reversedShadow = ["Hello", "i present you", "my resume"];

function displayWords(i) {
  if (i >= words.length && i >= reversedShadow.length) {
    i = 0;
  }

  const animatedHeading = document.querySelector(".intro_title");
  const animatedShadow = document.querySelector(".reversed_shadow");

  animatedHeading.innerHTML = words[i];
  animatedShadow.innerHTML = reversedShadow[i];

  let timeouId = setTimeout(function () {
    if (i < 2) {
      displayWords(i + 1);
    } else {
      clearTimeout(timeouId);
      timeouId = null;
    }
  }, 1800);
}

displayWords(0);
