const questions = [
    {
        question: "How many fruits name we have studied in fruits name topic ?",
        optionA: "10",
        optionB: "14",
        optionC: "5",
        optionD: "7",
        correctOption: "optionA"
    },

    {
        question: "how can you form APPLE ?",
        optionA: "a+P+P+le",
        optionB: "A+P+P+l+e",
        optionC: "a+p+p+l+e",
        optionD: "A+P+P+L+E",
        correctOption: "optionD"
    },

    {
        question: "what is the national fruit of india ?",
        optionA: "apple",
        optionB: "banana",
        optionC: "orange",
        optionD: "mango",
        correctOption: "optionD"
    },

    {
        question: "chikoo is  ______ in color ?",
        optionA: "yellow",
        optionB: "red",
        optionC: "brown",
        optionD: "orange",
        correctOption: "optionC"
    },

    {
        question: "which fruits we take in dozens ?",
        optionA: "banana",
        optionB: "pomegranate",
        optionC: "guava",
        optionD: "pineapple",
        correctOption: "optionA"
    },

    {
        question: "Among below which is a fruit ?",
        optionA: "grapes",
        optionB: "dog",
        optionC: "lotus",
        optionD: "peas",
        correctOption: "optionA"
    },

    {
        question: "_____ is the Domestic animal ?",
        optionA: "Dog",
        optionB: "zebra",
        optionC: "lion",
        optionD: "elephant",
        correctOption: "optionA"
    },

    {
        question: "Which wild animal is the largest among below mentioned animals ?",
        optionA: "lion",
        optionB: "elephant",
        optionC: "deer",
        optionD: "cheetah",
        correctOption: "optionB"
    },

    {
        question: "In many colors does the rose variety exists?",
        optionA: "Ten",
        optionB: "Twelve",
        optionC: "four",
        optionD: "Eleven",
        correctOption: "optionC"
    },

    {
        question: "which vegetable we used to make salad?",
        optionA: "brinjal",
        optionB: "potato",
        optionC: "bean",
        optionD: "tomato",
        correctOption: "optionD"
    },

    {
        question: "What is the color of marigold ?",
        optionA: "green",
        optionB: "red",
        optionC: "yellow or red",
        optionD: "white",
        correctOption: "optionC"
    },

    {
        question: "______fastest running animal?",
        optionA: "cheetah",
        optionB: "rabbit",
        optionC: "rat",
        optionD: "elephant",
        correctOption: "optionA"
    },


    {
        question: "_____the bird cannot fly due to heavy weight?",
        optionA: "crow",
        optionB: "ostrich",
        optionC: "hen",
        optionD: "peacock",
        correctOption: "optionB"
    },

    {
        question: "peacock is national ______of india ?",
        optionA: "fruit",
        optionB: "flower",
        optionC: "animal",
        optionD: "bird",
        correctOption: "optionD"
    },

    {
        question: "which birdlives in polar region ?",
        optionA: "penguin",
        optionB: "Crow",
        optionC: "ostrich",
        optionD: "owl",
        correctOption: "optionA"
    },

    {
        question: "which bird can see in night ?",
        optionA: "parrot",
        optionB: "mynnah",
        optionC: "owl",
        optionD: "hen",
        correctOption: "optionC"
    },

    {
        question: "____ is the king of flower ?",
        optionA: "rose",
        optionB: "lotus",
        optionC: "daisy",
        optionD: "orchids",
        correctOption: "optionA"
    },

    {
        question: "Lotus is also known as ?",
        optionA: "an animal",
        optionB: "flower which is yellow in color",
        optionC: "national flower of india",
        optionD: "a fruit",
        correctOption: "optionC"
    },

    {
        question: "what is the anwer for 12x4=_____ ?",
        optionA: "12",
        optionB: "34",
        optionC: "56",
        optionD: "48",
        correctOption: "optionD"
    },

    {
        question: "Arrange the 2,4,1,6,67,8,10 in ascending number ?",
        optionA: "1,2,4,6,8,10,67",
        optionB: "2,4,1,67,10,8,6",
        optionC: "6,8,10,2,4,1,67",
        optionD: "2,4,1,6,67,8,10",
        correctOption: "optionA"
    },

    {
        question: "which vegetable is white in color ?",
        optionA: "carrot",
        optionB: "lady-finger",
        optionC: "bottle-guard",
        optionD: "reddish",
        correctOption: "optionD"
    },

    {
        question: "what is the correct spelling for 42 ?",
        optionA: "forty-two",
        optionB: "fourty-two",
        optionC: "fourtytwo",
        optionD: "fortitwo",
        correctOption: "optionA"
    },

    {
        question: "what comes after 32 and before 34?",
        optionA: "32",
        optionB: "33",
        optionC: "34",
        optionD: "31",
        correctOption: "optionB"
    },

    {
        question: "which two bird have the same color ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "which bird is green in color ?",
        optionA: "pigeon",
        optionB: "crow",
        optionC: "parrot",
        optionD: "peacock.0",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}