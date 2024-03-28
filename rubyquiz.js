const allquestions = [
    {
        question: "Which is the largest continent",
        options: [
            { text: "Asia", correct: true },
            { text: "Australia", correct: false },
            { text: "Europe", correct: false },
            { text: "None of the above", correct: false },

        ]
    },
    {
        question: "Who created the earth",
        options: [
            { text: "Self created", correct: true },
            { text: "My mom", correct: false },
            { text: "God", correct: false },
            { text: "My friend", correct: false },

        ]
    },
    {
        question: "How many doors does Lotus temple have",
        options: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },

        ]
    },
    {
        question: "which among below is a computer language",
        options: [
            { text: "Sea", correct: false },
            { text: "Python", correct: true },
            { text: "giraffe", correct: false },
            { text: "Hap2", correct: false },

        ]
    }
];

const QuesElement = document.getElementById("myQ");
const ansElement = document.getElementById("myAns");
const nextbutton = document.getElementById("nextBtn");

let i = 0;
let score = 0;

function startmyquiz() {
    i = 0;// in case the quiz is retaken
    score = 0; // for retake of quiz
    nextbutton.innerHTML = "Next"
    showmyquestion();

}

function showmyquestion() {
    removequestionsinIndex();// in indiex,html clean it for display
    let currentquestion = allquestions[i];
    let questionNo = i + 1;
    QuesElement.innerHTML = questionNo + ". " + currentquestion.question;
    currentquestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option.text;
        button.classList.add("bQA");
        ansElement.appendChild(button);//myAns is the name of the div in html where answers are located
        //now lets add a dataset correct same way in allquetions into this const button
        if (option.correct) {// check if the corret exits in anselement
            button.dataset.correct = option.correct;//create a new dataset in button called correct
        }
        button.addEventListener("click", selectanswer);// click is predefined argument function name is selecanswer
    });
}
function removequestionsinIndex() {
    nextbutton.style.display = "none";
    while (ansElement.firstChild) {
        ansElement.removeChild(ansElement.firstChild);
    }
}

function showscore() {
    removequestionsinIndex();
    //QuesElement.innerHTML = 'Your Score is ${score} out of ${allquestions.length}';
    QuesElement.innerHTML = `Your Score is ${score} out of ${allquestions.length}`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";
}
function handleNextButton() {
    i++;
    if (i < allquestions.length) {
        showmyquestion();
    } else {
        showscore();
    }
}
function selectanswer(e) {
    const clickedAns = e.target;
    const yesCorrect = clickedAns.dataset.correct === "true";
    if (yesCorrect) {
        score++;
        clickedAns.classList.add("correct");//correct is the class name in css that changes the colot
    } else {
        clickedAns.classList.add("incorrect");// incorrect is the class name that changes the color
    }
    nextbutton.style.display = "block";
}

nextbutton.addEventListener("click", () => {
    if (i < allquestions.length) {
        handleNextButton();

    } else {
        startmyquiz();
    }
});
startmyquiz();
