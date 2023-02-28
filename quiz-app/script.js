const quizData = [
    {
        question : 'How old is Kavish?',
        a : '10',
        b : '20',
        c : '30',
        d : '23',
        correct : 'd'
    },
    {
        question : 'What is his favorite language?',
        a : 'Python',
        b : 'Java',
        c : 'JavaScript',
        d : 'C',
        correct : 'a'
    },
    {
        question : 'What is his pet\'s name?',
        a : 'Champ',
        b : 'Damp',
        c : 'Lamp',
        d : 'Camp',
        correct : 'a'
    },
    {
        question : 'What is he learning currently?',
        a : 'MERN',
        b : 'C',
        c : 'C++',
        d : 'Nothing',
        correct : 'a '
    },
    {
        question : 'What is HTML full form?',
        a : 'html',
        b : 'c',
        c : 'hyper text markup lang',
        d : 'react',
        correct : 'c'
    }
]

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        // TODO - Show Results
        alert("You finished, Have Pizzaaaa!!!!");
    }
})