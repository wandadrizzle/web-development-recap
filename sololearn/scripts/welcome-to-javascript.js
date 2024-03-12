function changeWidth(newWidth) {
    // Get the reference to the image element
    var image = document.querySelector('img');

    // Change the width of the image
    image.style.width = newWidth + 'px';
}

function scaleImage() {
    // Get the reference to the image element
    var image = document.querySelector('img');

    // Apply the scaling transformation
    image.style.transform = 'scale(1.5)';
}

let city = "Pietermaritzburg";
let gender = "female";
let age = 27;

console.log (`Wanda, the ${age} year old ${gender} writing this is from ${city}.`)

let heading = document.getElementById('h1').textContent;
console.log(heading)