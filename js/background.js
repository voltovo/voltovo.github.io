const images = ["0.png", "1.png", "2.png", "3.png", "4.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");

document.body.appendChild(bgImage);
