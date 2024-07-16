const images = [
    "01.jpeg",
    "02.jpeg",
    "03.jpeg",
]

const chosenImg = images[Math.floor(Math.random() * images.length)]
console.log(chosenImg);

const bgImge = document.createElement("img");

console.log(bgImge);
bgImge.id = "bg_img";
bgImge.src = `./img/${chosenImg}`;

document.body.prepend(bgImge);