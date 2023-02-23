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

// Name Definitions
const offlaneName = document.getElementById("offlane-name");
const jungleName = document.getElementById("jungle-name");
const midName = document.getElementById("mid-name");
const carryName = document.getElementById("carry-name");
const supportName = document.getElementById("support-name");

// Disclaimer
const disclaimer = document.getElementById("disclaimer-message");


// Images
const randomImages = ["/assets/Countess.webp","/assets/Crunch.webp","/assets/Dekker.webp","/assets/Drongo.webp",
"/assets/Feng_Mao.webp","/assets/Gadget.webp","/assets/Gideon.webp","/assets/Howitzer.webp","/assets/Kallari.webp",
"/assets/Khaimera.webp","/assets/Lt_Belica.webp","/assets/Murdock.webp","/assets/Muriel.webp","/assets/Narbash.webp",
"/assets/Rampage.webp","/assets/Sevarog.webp","/assets/Sparrow.webp","/assets/Steel.webp","/assets/The_Fey.webp"];

// Images and names of characters in random order for random team generation
const randomTeamComp = {
    "/assets/Countess.webp" : "Countess",
    "/assets/Crunch.webp" : "Crunch",
    "/assets/Dekker.webp": "Dekker",
    "/assets/Drongo.webp" : "Drongo",
    "/assets/Feng_Mao.webp" : "Feng Mao",
    "/assets/Gadget.webp" : "Gadget",
    "/assets/Gideon.webp" : "Gideon",
    "/assets/Howitzer.webp" : "Howitzer",
    "/assets/Kallari.webp" : "Kallari",
    "/assets/Khaimera.webp" : "Khaimera",
    "/assets/Lt_Belica.webp" : " Lt Belica",
    "/assets/Murdock.webp" : "Murdock",
    "/assets/Muriel.webp" : "Muriel",
    "/assets/Narbash.webp" : "Narbash",
    "/assets/Rampage.webp" : "Rampage",
    "/assets/Sevarog.webp" : "Sevarog",
    "/assets/Sparrow.webp" : "Sparrow",
    "/assets/Steel.webp" : "Steel", 
    "/assets/The_Fey.webp" : "The Fey"
};



// Images and character names in correct roles

const offCharacter = {
    "/assets/Crunch.webp" : "Crunch",
    "/assets/Steel.webp" : "Steel",
    "/assets/Sevarog.webp" : "Sevarog"
};

const jgCharacter = {
    "/assets/Feng_Mao.webp" : "Feng Mao",
    "/assets/Kallari.webp" : "Kallari",
    "/assets/Khaimera.webp" : "Khaimera",
    "/assets/Rampage.webp" : "Rampage"
};

const midCharacter = {
    "/assets/Countess.webp" : "Countess",
    "/assets/Gadget.webp" : "Gadget",
    "/assets/Gideon.webp" : "Gideon",
    "/assets/Howitzer.webp" : "Howitzer",
    "/assets/The_Fey.webp" : "The Fey"
};

const carryCharacter = {
    "/assets/Sparrow.webp" : "Sparrow",
    "/assets/Murdock.webp" : "Murdock",
    "/assets/Drongo.webp" : "Drongo"
};

const suppCharacter = {
    "/assets/Muriel.webp" : "Muriel",
    "/assets/Narbash.webp" : "Narbash",
    "/assets/Dekker.webp": "Dekker",
    "/assets/Lt_Belica.webp" : " Lt Belica"
};




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
    /* 
    Temporarily Removing the display names function
    displayNames();
    */
    // Generate the random characters 
    randomIndex()
    // Display the characters 
    displayImages();
     
    
});



//Display the photos of the characters
function displayImages () {
    //display images
    offlaneImage.src = randomImages[imageIndex[0]];
    offlaneName.innerHTML = randomTeamComp[randomImages[imageIndex[0]]]
    jungleImage.src = randomImages[imageIndex[1]];
    jungleName.innerHTML = randomTeamComp[randomImages[imageIndex[1]]]
    midLaneImage.src = randomImages[imageIndex[2]];
    midName.innerHTML = randomTeamComp[randomImages[imageIndex[2]]]
    carryImage.src = randomImages[imageIndex[3]];
    carryName.innerHTML = randomTeamComp[randomImages[imageIndex[3]]]
    supportImage.src = randomImages[imageIndex[4]];
   supportName.innerHTML = randomTeamComp[randomImages[imageIndex[4]]]
}

// Dispalay the rule names as well as changing the title
// Testing how it looks with the lane names as a constant through HTML 
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


