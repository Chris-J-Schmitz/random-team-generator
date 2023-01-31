// Variable Definitions
//Button 
const generate = document.getElementById("generate-button");
// Title Definition
const title = document.getElementById("generate")
//Lane div definitions
const offlane = document.getElementById("offlane");
const jungle = document.getElementById("jungle");
const midLane = document.getElementById("mid-lane");
const carry = document.getElementById("carry");
const support = document.getElementById("support");

// Image definitions
const offlaneImage = document.getElementById("offlane-image");
const jungleImage = document.getElementById("jungle-image");
const midLaneImage = document.getElementById("mid-image");
const carryImage = document.getElementById("carry-image");
const supportImage = document.getElementById("support-image");


// Images
const images = ["/assets/Countess.webp","/assets/Crunch.webp","/assets/Dekker.webp","/assets/Drongo.webp",
"/assets/Feng_Mao.webp","/assets/Gadget.webp","/assets/Gideon.webp","/assets/Howitzer.webp","/assets/Kallari.webp",
"/assets/Khaimera.webp","/assets/Lt_Belica.webp","/assets/Murdock.webp","/assets/Muriel.webp","/assets/Narbash.webp",
"/assets/Rampage.webp","/assets/Sevarog.webp","/assets/Sparrow.webp","/assets/Steel.webp","/assets/The_Fey.webp"];

const imageIndexLength = 5;
let imageIndex = [];

// On button click 
generate.addEventListener("click", function () {
    // Display names of the roles
    displayNames();
    // Generate the random characters 
    randomIndex()
    // Display the characters 
    displayImages();

    for (let i = 0; i < 5; i ++ ) {
        console.log(imageIndex[i]);
    }
});



//Display the photos of the characters
function displayImages () {
    //display images
    offlaneImage.src = images[imageIndex[0]];
    jungleImage.src = images[imageIndex[1]];
    midLaneImage.src = images[imageIndex[2]];
    carryImage.src = images[imageIndex[3]];
    supportImage.src = images[imageIndex[4]];
}


// Dispalay the rule names as well as changing the title
function displayNames () {
    title.innerHTML = "Good Luck!"
    generate.innerHTML = "Generate Again"
    offlane.innerHTML = "Offlane";
    jungle.innerHTML = "Jungle";
    midLane.innerHTML = "Mid Lane";
    carry.innerHTML = "Carry";
    support.innerHTML = "Support";
}


//Generate a list of 5 numbers to store in the imageIndex array 
//to represent the 5 random characters
function randomIndex() {
    imageIndex = [];

    do {
        // generate random number 
        let temp = Math.floor(Math.random() * 19);
        // add to array if it doesn't already exist
        if (!imageIndex.includes(temp)) {
            imageIndex.push(temp);
        }
    } while (imageIndex.length < imageIndexLength);

   

}
