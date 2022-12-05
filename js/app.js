const categorySelect = document.getElementById("category");
const content = document.getElementById('DisplayQuetion');
const score = document.getElementById('ShowScore');
const btn1 = document.getElementById('firstAnswer');
const btn2 = document.getElementById('secondAnswer');
const btn3 = document.getElementById('thirdAnswer');
const btn4 = document.getElementById('forthAnswer');
const easyBtn = document.getElementById('easyMode');
const mediumBtn = document.getElementById('mediumMode');
const hardBtn = document.getElementById('hardMode');

//Getting the ids of buttons

let increment = 0;
let userScore = 0;

let url = null;
//Indicating number and cat for questions



const shuffleArr = myArr => {
    let a, b;
    for(let i=0; i<myArr.length; i++) {
        rand=Math.floor(Math.random()*myArr.length);
        a = myArr[i];
        b = myArr[rand];
        myArr[i] = b;
        myArr[rand] = a;
    }
    return myArr;
};

//Shuffles my arraylist

const main = () => {
    document.getElementById('QuestionDisplay').innerHTML = myData.results[increment].question; //Grabs 1 object in Results Arraylist and with questions and answers
    myAnswers = [
        [myData.results[increment].correct_answer, true],
        [myData.results[increment].incorrect_answers[0], false],
        [myData.results[increment].incorrect_answers[1], false],
        [myData.results[increment].incorrect_answers[2], false]
    ];
    myAnswers = shuffleArr(myAnswers);
    btn1.innerHTML = myAnswers[0][0];
    btn2.innerHTML = myAnswers[1][0];
    btn3.innerHTML = myAnswers[2][0];
    btn4.innerHTML = myAnswers[3][0];
}


let gOver = () => {
    if(increment > 5){
        window.location.href="gOver.html";
    }
}

let Checker = btn => {
    if(myAnswers[btn][1] == true)
    {
        userScore = userScore + 10;
        increment = increment + 1;
        score.innerHTML = userScore;
        main();
        gOver;
    }
    else
    {
        userScore = userScore - 10;
        increment = increment + 1;
        score.innerHTML = userScore;
        main();
        gOver;
    }
}


//'This' is a reference to the object being clicked
let check = evt => {
    try{
        switch(evt.target.id){
            case 'firstAnswer':
                Checker(0);
                break;
            case 'secondAnswer':
                Checker(1);
                break;
            case 'thirdAnswer':
                Checker(2);
                break;
            case 'forthAnswer':
                Checker(3);
                break;
        }
    }catch(e){}

};

let setDifficulty = evt => {
    try{
        switch(evt.target.id){
            case 'easyMode':
                url = `https://opentdb.com/api.php?amount=10&difficulty=easy`
            break;
            case 'mediumMode':
                url = `https://opentdb.com/api.php?amount=10&difficulty=medium`
            break;
            case 'hardMode':
                url=`https://opentdb.com/api.php?amount=10&difficulty=hard`
                break;
            case 'randomMode':
                Checker(3);
                break;
        }
    }catch(e){}

};


fetch(url)
    .then(response => response.json())
    .then(data => {
        myData = data;
        main();
});

easyBtn.addEventListener("click", setDifficulty);
mediumBtn.addEventListener("click", setDifficulty);
hardBtn.addEventListener("click", setDifficulty);


btn1.addEventListener("click", check);
btn2.addEventListener("click", check);
btn3.addEventListener("click", check);
btn4.addEventListener("click", check);
//window.location.href = "file.html";