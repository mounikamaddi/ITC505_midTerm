let currentStage = 0;
const gameStages = [
    {
        story: "You begin your adventure in a mysterious forest.",
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris",
        nextStage: 1,
        correctImage: "images/found the treasure.jpeg"
    },

    {
        story: "You cross the mysterious lake and find yourself in a dense, enchanted forest.",
        question: "Which tree is known as the 'King of the Forest'?",
        choices: ["Oak", "Pine", "Maple", "Birch"],
        correctAnswer: "Oak",
        nextStage: 2,
        correctImage: "images/hidden.jpeg"
    },

    {
        story: "Emerging from the forest, you discover an ancient temple.",
        question: "Which ancient civilization built the Pyramids of Giza?",
        choices: ["Romans", "Egyptians", "Mayans", "Aztecs"],
        correctAnswer: "Egyptians",
        nextStage: 3,
        correctImage: "images/secretTreasure.jpeg"
    },
    
    {
        story: "You find a hidden path leading to an ancient castle.",
        question: "Who wrote 'Hamlet'?",
        choices: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare",
        nextStage: 4,
        correctImage: "images/creaturepass.jpeg"
    },
    {
        story: "Inside the castle, you encounter a wise old sage.",
        question: "What is the largest planet in our Solar System?",
        choices: ["Jupiter", "Saturn", "Earth", "Mars"],
        correctAnswer: "Jupiter",
        nextStage: 5,
        correctImage: "images/TreasureMyth.jpeg"
    },
    {
        story: "The sage grants you a key to a secret chamber.",
        question: "What element does 'O' represent on the periodic table?",
        choices: ["Oxygen", "Gold", "Iron", "Osmium"],
        correctAnswer: "Oxygen",
        nextStage: 6,
        correctImage: "images/returnHome.jpeg"
    },
    {
        story: "In the chamber, you find a map with two paths.",
        question: "Choose your path:",
        choices: ["Path of Courage", "Path of Wisdom"],
        correctAnswer: "Path of Wisdom",
        nextStage: 7,
        correctImage: "images/friend.jpeg"
    },
    // This is the final question stage, leading to different endings.
    {
        story: "The Path of Wisdom leads to a mysterious lake.",
        question: "The lake is guarded by a mystical creature. How do you proceed?",
        choices: ["Negotiate with the creature", "Fight the creature", "Turn back"],
        correctAnswer: "Negotiate with the creature",
        nextStage: 8, // This will be the index for the first ending.
        correctImage: "images/found the treasure.jpeg"
    },
];

const endings = [
    {
        text: "You have found the treasure!",
        imageUrl: "images/found the treasure.jpeg"
    },

    {
        text: "In the temple, you uncover hidden knowledge lost to time, gaining wisdom beyond measure.",
        imageUrl: "images/hidden.jpeg"
    },

    {
        text: "As you decipher the temple's ancient texts, a secret passage opens, leading you to a room filled with historical treasures.",
        imageUrl: "images/secretTreasure.jpeg"
    },
    
    {
        text: "Oh no, it's a trap! Game Over.",
        imageUrl: "images/gameEnds.jpeg"
    },

    {
        text: "The creature allows you to pass, and you find the legendary treasure!",
        imageUrl: "images/creaturepass.jpeg"
    },
    {
        text: "The fight is fierce, but you are victorious. However, the treasure was a myth.",
        imageUrl: "images/TreasureMyth.jpeg"
    },
    {
        text: "You decide to leave the adventure for another day and return home.",
        imageUrl: "images/returnHome.jpeg"
    },
    {
        text: "You have found the treasure of wisdom, but the real treasure was the friends you made along the way.",
        imageUrl: "images/friend.jpeg"
    },
    // Add more endings as needed
];

function displayStage(stage) {
    const stageData = gameStages[stage];
    document.getElementById("story").innerText = stageData.story;
    document.getElementById("question").innerText = stageData.question;
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    stageData.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.onclick = () => answerQuestion(choice, stageData.correctAnswer, stageData.nextStage);
        choicesContainer.appendChild(button);
    });
}

// function answerQuestion(answer, correctAnswer, nextStage) {
//     if (answer === correctAnswer) {
//         alert("Correct Answer!");
//         currentStage = nextStage;
//         displayStage(currentStage);
//     } else {
//         alert("Wrong Answer. Game Over.");
//         displayEnding(1); // Assuming the second ending is for game over
//     }
// }

function answerQuestion(answer, correctAnswer, nextStage, stageData) {
    if (answer === correctAnswer) {
        displayCorrectAnswerImage(stageData.correctImage);
        setTimeout(() => {
            currentStage = nextStage;
            displayStage(currentStage);
        }, 3000); // Wait for 3 seconds before moving to the next stage
    } else {
        alert("Wrong Answer. Game Over.");
        displayEnding(1); // Assuming the second ending is for game over
    }
}

function displayCorrectAnswerImage(imageUrl) {
    const endingImage = document.getElementById("ending-image");
    endingImage.src = imageUrl;
    endingImage.style.display = "block";
}

// function displayStage(stage) {
//     if (stage < gameStages.length) {
//         // Displaying a regular game stage
//         const stageData = gameStages[stage];
//         document.getElementById("story").innerText = stageData.story;
//         document.getElementById("question").innerText = stageData.question;
//         displayChoices(stageData.choices, stageData.correctAnswer, stageData.nextStage);
//     } else {
//         // Displaying an ending
//         displayEnding(stage - gameStages.length);
//     }
// }

function displayStage(stage) {
    if (stage < gameStages.length) {
        const stageData = gameStages[stage];
        document.getElementById("story").innerText = stageData.story;
        document.getElementById("question").innerText = stageData.question;
        displayChoices(stageData.choices, stageData.correctAnswer, stageData.nextStage, stageData);
    } else {
        displayEnding(stage - gameStages.length);
    }
}

// function displayChoices(choices, correctAnswer, nextStage) {
//     const choicesContainer = document.getElementById("choices");
//     choicesContainer.innerHTML = "";
//     choices.forEach(choice => {
//         const button = document.createElement("button");
//         button.innerText = choice;
//         button.onclick = () => answerQuestion(choice, correctAnswer, nextStage);
//         choicesContainer.appendChild(button);
//     });
// }

function displayChoices(choices, correctAnswer, nextStage, stageData) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.onclick = () => answerQuestion(choice, correctAnswer, nextStage, stageData);
        choicesContainer.appendChild(button);
    });
}

function displayEnding(endingIndex) {
    const ending = endings[endingIndex];
    document.getElementById("story").innerText = ending.text;
    document.getElementById("question").innerText = "";
    document.getElementById("choices").innerHTML = "";
    const endingImage = document.getElementById("ending-image");
    endingImage.src = ending.imageUrl;
    endingImage.style.display = "block";
}

function nextStage() {
    // Logic to move to the next stage or end the game
}

displayStage(currentStage);
