let data;
let level;
let array;

const optionBtns = document.getElementById('optionBtns');

const question = document.getElementById('question');
const firstAnswer = document.getElementById('firstAnswer');
const secondAnswer = document.getElementById('secondAnswer');
const thirdAnswer = document.getElementById('thirdAnswer');
const forthAnswer = document.getElementById('forthAnswer');

const finalP = document.getElementById('finalP');

const start = document.getElementById('startBtn');
const home = document.getElementById('homeBtn');

var audio = document.getElementById('audio');
audio.volume = 0.025;
audio.loop = true;

start.addEventListener('click', evt => {
    optionBtns.style.display = 'block';
    menuP.style.display = 'block';
    home.style.display = 'block';
    start.style.display = 'none';
    easyBtn.style.display = 'block';
    mediumBtn.style.display = 'block';
    hardBtn.style.display = 'block';
    randomBtn.style.display = 'block';
    document.getElementById('finalP').innerHTML = "";
});

home.addEventListener('click', evt => {
    optionBtns.style.display = 'none';
    menuP.style.display = 'none';
    home.style.display = 'none';
    start.style.display = 'block';
    easyBtn.style.display = 'none';
    mediumBtn.style.display = 'none';
    hardBtn.style.display = 'none';
    randomBtn.style.display = 'none';
    question.style.display = 'none';
    firstAnswer.style.display = 'none';
    secondAnswer.style.display = 'none';
    thirdAnswer.style.display = 'none';
    forthAnswer.style.display = 'none';
    document.getElementById('finalP').innerHTML = "";
});

const main = () => {
    console.log(data);
    question.innerHTML = data.results[0].question;

    array = [
            [data.results[0].correct_answer, "correct"],
            [data.results[0].incorrect_answers[0], "incorrect"],
            [data.results[0].incorrect_answers[1], "incorrect"],
            [data.results[0].incorrect_answers[2], "incorrect"]
        ];

        array.forEach((element, index) => {
                let rand = Math.floor(Math.random() * array.length);
                let a = array[index];
                let b = array[rand];
                console.log(index, rand);
                array[index] = b;
                array[rand] = a;
            });

            firstAnswer.innerHTML = array[0][0];
            secondAnswer.innerHTML = array[1][0];
            thirdAnswer.innerHTML = array[2][0];
            forthAnswer.innerHTML = array[3][0];
};

const fetchingUrl = (level) => {
    let url='https://opentdb.com/api.php?amount=1&' + level + 'type=multiple';

    fetch(url)
    .then(response => response.json())
    .then(promise_data => {
        data = promise_data;
        main(promise_data);
    });

    const handleClick = evt => {
        console.log(evt.target.id);
        if (array[0][1] == 'correct' && evt.target.id == 'firstAnswer') {
                console.log('you got it right!');
                finalP.style.display = 'block';
                document.getElementById('finalP').innerHTML = "Correct!";
            } else if (array[1][1] == 'correct' && evt.target.id == 'secondAnswer'){
                console.log('you got it right!');
                finalP.style.display = 'block';
                document.getElementById('finalP').innerHTML = "Correct!";
            } else if (array[2][1] == 'correct' && evt.target.id == 'thirdAnswer'){
                console.log('you got it right!');
                finalP.style.display = 'block';
                document.getElementById('finalP').innerHTML = "Correct!";
            } else if (array[3][1] == 'correct' && evt.target.id == 'forthAnswer'){
                console.log('you got it right!');
                finalP.style.display = 'block';
                document.getElementById('finalP').innerHTML = "Correct!";
            } else {
                console.log('you got it wrong!')
                finalP.style.display = 'block';
                document.getElementById('finalP').innerHTML = "Incorrect!";
            }
    };

    firstAnswer.addEventListener('click', handleClick);
    secondAnswer.addEventListener('click', handleClick);
    thirdAnswer.addEventListener('click', handleClick);
    forthAnswer.addEventListener('click', handleClick);
    
}