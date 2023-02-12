/**
 *  Predecessor team generator
 * 
 * Will Generate team compositions. 
 *  - Either a team with characters in the correct roles
 *  - Or characters in completely random roles. 
 * 
 * 
 *  CURRENT OBJ: 
 *  - Create a new array of photos for correct roles
 *    For when the user chooses a correct team. 
 * 
 * 
 * 
 * 
 */







// Variable Definitions
//Generate Button 
const generate = document.getElementById("generate-button");

//Generate Type Button
const correctButton = document.getElementById("correct-button");
const randomButton = document.getElementById("random-button");
let randomTeam = false;
const optionButtons = document.querySelectorAll("option-buttons");

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

// Disclaimer
const disclaimer = document.getElementById("disclaimer-message");


// Images
const randomImages = ["/assets/Countess.webp","/assets/Crunch.webp","/assets/Dekker.webp","/assets/Drongo.webp",
"/assets/Feng_Mao.webp","/assets/Gadget.webp","/assets/Gideon.webp","/assets/Howitzer.webp","/assets/Kallari.webp",
"/assets/Khaimera.webp","/assets/Lt_Belica.webp","/assets/Murdock.webp","/assets/Muriel.webp","/assets/Narbash.webp",
"/assets/Rampage.webp","/assets/Sevarog.webp","/assets/Sparrow.webp","/assets/Steel.webp","/assets/The_Fey.webp"];

const teamSize = 5;
let imageIndex = [];







// On generate button click 
generate.addEventListener("click", function () {

    //Check if random or correct roles
    if(randomTeam) {
        disclaimer.innerHTML = '*This random team composition is not meant to be ideal. <br>' + 
        'This should only be done in a non ranked and a non competative environment with a premade team of 5 players';
    } else {
        disclaimer.innerHTML = '';
    }

    // Display names of the roles
    displayNames();
    // Generate the random characters 
    randomIndex()
    // Display the characters 
    displayImages();
     
    
});



//Display the photos of the characters
function displayImages () {
    //display images
    offlaneImage.src = randomImages[imageIndex[0]];
    jungleImage.src = randomImages[imageIndex[1]];
    midLaneImage.src = randomImages[imageIndex[2]];
    carryImage.src = randomImages[imageIndex[3]];
    supportImage.src = randomImages[imageIndex[4]];
}


// Dispalay the rule names as well as changing the title
function displayNames () {
    offlane.innerHTML = "Offlane";
    jungle.innerHTML = "Jungle";
    midLane.innerHTML = "Mid Lane";
    carry.innerHTML = "Carry";
    support.innerHTML = "Support";
}


/*Generate a list of 5 numbers to store in the imageIndex array 
    to represent the 5 random characters */ 
function randomIndex() {
    imageIndex = [];

    do {
        // generate random number 
        let temp = Math.floor(Math.random() * 19);
        // add to array if it doesn't already exist
        if (!imageIndex.includes(temp)) {
            imageIndex.push(temp);
        }
    } while (imageIndex.length < teamSize);
}

/*
Need to work on setting active button as white and changing
the characters it chooses from. Depending on what button is active.  
*/
function activeOption()  {
    randomButton.addEventListener("click", function (){
        if (!randomTeam) {
            randomTeam = true;
            title.innerHTML = "Generate A Random Team";
            randomButton.className = "option option-2 active";
            correctButton.className = "option option-1 ";
        }
    })

    correctButton.addEventListener("click", function () {
        if (randomTeam) {
            randomTeam = false;
            title.innerHTML = "Generate A Team";
            correctButton.className = "option option-1 active";
            randomButton.className = "option option-2 ";
        }
    })

}
// Have active option always running. 
activeOption();


