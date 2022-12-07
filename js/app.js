const btn1 = document.getElementById('firstAnswer');
const btn2 = document.getElementById('secondAnswer');
const btn3 = document.getElementById('thirdAnswer');
const btn4 = document.getElementById('forthAnswer');
const cat = document.getElementById("category");
const difficulty = document.getElementById("difficulty");
const score = document.getElementById("score");

const progressTxt = document.getElementById("progressBarTxt");
const pgStatus = document.getElementById("progressStatus");
let myData = null;
let myAnswers = null;

let increment = 0;
let userScore = 0;

//const fs = require('fs');

var setURL = localStorage.getItem("mo");
var setMode = localStorage.getItem("mode");


const shuffleArr = myArr => {
    let a, b;
    for(let i=0; i<myArr.length; i++) {
        let rand=Math.floor(Math.random()*myArr.length);
        a = myArr[i];
        b = myArr[rand];
        myArr[i] = b;
        myArr[rand] = a;
    }
    return myArr;
};


const main = () => {
    document.getElementById('question').innerHTML = myData.results[increment].question; //Grabs 1 object in Results Arraylist and with questions and answers
    myAnswers = [
        [myData.results[increment].correct_answer, true],
        [myData.results[increment].incorrect_answers[0], false],
        [myData.results[increment].incorrect_answers[1], false],
        [myData.results[increment].incorrect_answers[2], false]
    ];
    myAnswers = shuffleArr(myAnswers);

    cat.innerHTML = myData.results[increment].category;
    difficulty.innerHTML = setMode;
    btn1.innerHTML = myAnswers[0][0];
    btn2.innerHTML = myAnswers[1][0];
    btn3.innerHTML = myAnswers[2][0];
    btn4.innerHTML = myAnswers[3][0];
}

let Checker = btn => {
    console.log(btn);
    console.log(myAnswers[btn][1])
    if(myAnswers[btn][1] == true)
    {
        userScore = userScore + 10;
        increment = increment + 1;
        let currentNum = increment +1;
        progressTxt.innerHTML = `${currentNum} out of 10`
        score.innerHTML = userScore;
        pgStatus.style.width = `${(currentNum/10)*100}%`;
        main();
        if(currentNum >= 10){
            localStorage.clear();
            localStorage.removeItem("mo");
            localStorage.removeItem("mode");
            window.location.assign('Home.html')
        }
    }
    else
    {
        userScore = userScore - 10;
        increment = increment + 1;
        let currentNum = increment +1;
        progressTxt.innerHTML = `${currentNum} out of 10`
        score.innerHTML = userScore;
        pgStatus.style.width = `${(currentNum/10)*100}%`;
        main();
        if(currentNum >= 10){
            localStorage.clear();
            localStorage.removeItem("mo");
            localStorage.removeItem("mode");
            window.location.assign('Home.html')
        }
    }
}


let check = evt => {
    try{
        switch(evt.target.id){
            case 'firstAnswer':
                console.log("Clicked 1 answer");
                Checker(0);
                break;
            case 'secondAnswer':
                console.log("Clicked 2 answer");
                Checker(1);
                break;
            case 'thirdAnswer':
                console.log("Clicked 3 answer");
                Checker(2);
                break;
            case 'forthAnswer':
                console.log("Clicked 4 answer");

                Checker(3);
                break;
        }
    }catch(e){}

};


fetch(setURL)
.then(response => response.json())
.then(data => {
    myData = data;
    main();
    saveToDB();
});


/*
const saveToDB = () =>{
    switch(myData.results[0].difficulty){
        case "easy":
            const easyJSON = JSON.stringify(myData);
            writeFile("./easy.json", easyJSON, err => {
            if (err) throw err}); 
                console.log("Done writing"); 
            break;
        case "medium":
            const mediumJSON = JSON.stringify(myData);
            writeFile("./medium.json", mediumJSON, err => {
                if (err) throw err}); 
                console.log("Done writing"); 
            break;
        case "hard":
            const hardJSON = JSON.stringify(myData);
            writeFile("./hard.json", hardJSON, err => {
                if (err) throw err}); 
                    console.log("Done writing"); 

            break;
}
}
saveToDB();

*/

btn1.addEventListener("click", check);
btn2.addEventListener("click", check);
btn3.addEventListener("click", check);
btn4.addEventListener("click", check);


