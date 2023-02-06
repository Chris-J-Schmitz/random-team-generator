// Variable Definitions
//Generate Button 
const generate = document.getElementById("generate-button");
//Generate Type Button
const correctButton = document.getElementById("correct-roles");
const randomButton = document.getElementById("random-button");
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
    

    // Display names of the roles
    displayNames();
    // Generate the random characters 
    randomIndex()
    // Display the characters 
    displayImages();

    for (let i = 0; i < 5; i ++ ) {
        console.log(imageIndex[i]);
    }

    disclaimer.innerHTML = "*this team composition is not meant to be ideal. This should only be done in a non ranked and a non competative environment with a premade team of 5 players";
    
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
    title.innerHTML = "Good Luck!"
    generate.innerHTML = "Generate Again"
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


}
