const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

let i = Math.floor(Math.random() * images.length);
const chosenImage = images[i];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImage}`;

document.body.appendChild(bgImg);
