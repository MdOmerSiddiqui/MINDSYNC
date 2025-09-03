const text = "MindSync";
let i = 0;
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing");

  if (!isDeleting && i < text.length) {
    typingElement.innerHTML = text.substring(0, i + 1);
    i++;
    setTimeout(typeEffect, 150);
  } 
  else if (isDeleting && i > 0) {
    typingElement.innerHTML = text.substring(0, i - 1);
    i--;
    setTimeout(typeEffect, 100);
  } 
  else {
    isDeleting = !isDeleting;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();
