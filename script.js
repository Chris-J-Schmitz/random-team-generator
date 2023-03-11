/**
 *  Predecessor team generator
 * 
 * Will Generate team compositions. 
 *  - Either a team with characters in the correct roles
 *  - Or characters in completely random roles. 
 * 
 * 
 */







// Variable Definitions
let randomTeam = false;
//Generate Button 
const generate = document.getElementById("generate-button");

//Generate Type Button
const correctButton = document.getElementById("correct-button");
const randomButton = document.getElementById("random-button");
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


// Images and names of characters in random order for random team generation
const randomTeamComp = [

    ["/assets/Countess.webp" , "Countess"],
    ["/assets/Crunch.webp" , "Crunch"],
    ["/assets/Dekker.webp", "Dekker"],
    ["/assets/Drongo.webp" , "Drongo"],
    ["/assets/Feng_Mao.webp" , "Feng Mao"],
    ["/assets/Gadget.webp" , "Gadget"],
    ["/assets/Gideon.webp" , "Gideon"],
    ["/assets/Howitzer.webp" , "Howitzer"],
    ["/assets/Kallari.webp" , "Kallari"],
    ["/assets/Khaimera.webp" , "Khaimera"],
    ["/assets/Lt_Belica.webp" , " Lt Belica"],
    ["/assets/Murdock.webp" , "Murdock"],
    ["/assets/Muriel.webp" , "Muriel"],
    ["/assets/Narbash.webp" , "Narbash"],
    ["/assets/Rampage.webp" , "Rampage"],
    ["/assets/Sevarog.webp" , "Sevarog"],
    ["/assets/Sparrow.webp" , "Sparrow"],
    ["/assets/Steel.webp" , "Steel"] ,
    ["/assets/The_Fey.webp" , "The Fey"],
    ["/assets/grux.webp" , "Grux"],
    ["/assets/Revenant.JPG" , "Revenant"],
    ["/assets/Riktor.JPG" , "Riktor"],
    ["/assets/Shinbi.JPG" , "Shinbi"]
];
const randomsize = randomTeamComp.length;





// Images and character names in correct roles
// Followed by the number of characters in each role

const offCharacter = [
    ["/assets/Countess.webp" , "Countess"],
    ["/assets/grux.webp" , "Grux"],
    ["/assets/Feng_Mao.webp" , "Feng Mao"],
    ["/assets/Crunch.webp" , "Crunch"],
    ["/assets/Riktor.JPG" , "Riktor"],
    ["/assets/Shinbi.JPG" , "Shinbi"],
    ["/assets/Steel.webp" , "Steel"],
    ["/assets/Kallari.webp" , "Kallari"],
    ["/assets/Sevarog.webp" , "Sevarog"]
];
const offLength = offCharacter.length;


const jgCharacter = [
    ["/assets/Crunch.webp" , "Crunch"],
    ["/assets/Feng_Mao.webp" , "Feng Mao"],
    ["/assets/Kallari.webp" , "Kallari"],
    ["/assets/grux.webp" , "Grux"],
    ["/assets/Khaimera.webp" , "Khaimera"],
    ["/assets/Rampage.webp" , "Rampage"]
];
const jgLength = jgCharacter.length;


const midCharacter = [
    ["/assets/Countess.webp" , "Countess"],
    ["/assets/Gadget.webp" , "Gadget"],
    ["/assets/Gideon.webp" , "Gideon"],
    ["/assets/Howitzer.webp" , "Howitzer"],
    ["/assets/Lt_Belica.webp" , " Lt Belica"],
    ["/assets/The_Fey.webp" , "The Fey"]
];
const midLength = midCharacter.length;


const carryCharacter = [
    ["/assets/Sparrow.webp" , "Sparrow"],
    ["/assets/Murdock.webp" , "Murdock"],
    ["/assets/Drongo.webp" , "Drongo"]
];
const carryLength = carryCharacter.length;


const suppCharacter = [
    ["/assets/Muriel.webp" , "Muriel"],
    ["/assets/Narbash.webp" , "Narbash"],
    ["/assets/Dekker.webp", "Dekker"],
    ["/assets/Lt_Belica.webp" , " Lt Belica"]
];
const suppLength = suppCharacter.length;



/**
 * Defining the size of the team and initializeing the image index 
 * To store randomly generated numbers to use for the character arrays */ 
const teamSize = 5;
let imageIndex = [];







// On generate button click 
generate.addEventListener("click", function () {

    //Check if random or correct roles
    if(randomTeam) {
        disclaimer.innerHTML = '*This random team composition is not meant to be ideal. <br>' + 
        'This should only be done in a non ranked and a non competative environment with a premade team of 5 players';
        
        // Generate the random characters 
        randomIndex()
        // Display the randomcharacters 
        displayRandomImages();


    } else {
        // Remove disclaimer
        disclaimer.innerHTML = '';

        // Generate correct characters 
        correctIndex();
        // Display the characters
        displayCorrectImages();

    }

    
    
});



//Display the photos of the characters in random roles
function displayRandomImages () {
    offlaneImage.src = randomTeamComp[imageIndex[0]][0];
    offlaneName.innerHTML = randomTeamComp[imageIndex[0]][1];
    jungleImage.src = randomTeamComp[imageIndex[1]][0];
    jungleName.innerHTML = randomTeamComp[imageIndex[1]][1];
    midLaneImage.src = randomTeamComp[imageIndex[2]][0];
    midName.innerHTML = randomTeamComp[imageIndex[2]][1];
    carryImage.src =randomTeamComp[imageIndex[3]][0];
    carryName.innerHTML = randomTeamComp[imageIndex[3]][1];
    supportImage.src = randomTeamComp[imageIndex[4]][0];
   supportName.innerHTML = randomTeamComp[imageIndex[4]][1];
}

//Display the photos of the characters in the correct roles
function displayCorrectImages () {
    offlaneImage.src = offCharacter[imageIndex[0]][0];
    offlaneName.innerHTML = offCharacter[imageIndex[0]][1];
    jungleImage.src = jgCharacter[imageIndex[1]][0];
    jungleName.innerHTML = jgCharacter[imageIndex[1]][1];
    midLaneImage.src = midCharacter[imageIndex[2]][0];
    midName.innerHTML = midCharacter[imageIndex[2]][1];
    carryImage.src = carryCharacter[imageIndex[3]][0];
    carryName.innerHTML = carryCharacter[imageIndex[3]][1];
    supportImage.src = suppCharacter[imageIndex[4]][0];
   supportName.innerHTML = suppCharacter[imageIndex[4]][1];
}



/*Generate a list of 5 numbers to store in the imageIndex array 
    to represent the 5 random characters */ 
function randomIndex() {
    imageIndex = [];

    do {
        // generate random number 
        let temp = Math.floor(Math.random() * randomsize);
        // add to array if it doesn't already exist
        if (!imageIndex.includes(temp)) {
            imageIndex.push(temp);
        }
    } while (imageIndex.length < teamSize);
}

/**
 * Generate a list of numbers to represent characters in the correct lanes
 * NEED TO FIX SO IT DOESN'T CHOOSE THE SAME CHARACTER FOR THE DIFFERENT LANES */ 
function correctIndex() {
    imageIndex = [];

    //Generate Off Lane index
    let temp = Math.floor(Math.random() * offLength);
    imageIndex.push(temp);
    //Generate Jungle index
    temp = 0;
    temp = Math.floor(Math.random() * jgLength);
    imageIndex.push(temp);
    //Generate Mid Lane index
    temp = 0;
    temp = Math.floor(Math.random() * midLength);
    imageIndex.push(temp);
    //Generate Carry index
    temp = 0;
    temp = Math.floor(Math.random() * carryLength);
    imageIndex.push(temp);
    //Generate Support index
    temp = 0;
    temp = Math.floor(Math.random() * suppLength);
    imageIndex.push(temp);


    do {
        // generate random number 
        let temp = Math.floor(Math.random() * randomsize);
        // add to array if it doesn't already exist
        if (!imageIndex.includes(temp)) {
            imageIndex.push(temp);
        }
    } while (imageIndex.length < teamSize);
}


//Changes the active button between correct and random roles
//So user knows which type of team they are generating
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


