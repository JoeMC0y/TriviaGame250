
const easyBtn = document.getElementById('easy');
const mediumBtn = document.getElementById('medium');
const hardBtn = document.getElementById('hard');

var mode = null;

const setDifficulty = evt => {
    try{
        switch(evt.target.id){
            case 'easy':
                localStorage.clear();
                mode="https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";
                localStorage.setItem("mo", mode);
                localStorage.setItem("mode","easy")
                console.log(localStorage.getItem("mode"));
                //window.location.replace("Game.html");
            break;
            case 'medium':
                localStorage.clear();
                mode="https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
                localStorage.setItem("mode", "medium");
                localStorage.setItem("mo", mode);

                console.log(localStorage.getItem("mode"));
                window.location.replace("Game.html");

            break;
            case 'hard':
                localStorage.clear();
                mode="https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple";
                localStorage.setItem("mode", "hard");
                localStorage.setItem("mo", mode);
                console.log(localStorage.getItem("mode"));

                window.location.replace("Game.html");
                break;
            case 'randomMode':
                break;
        }
    }catch(e){}

};


export default function getMode(){
    console.log(mode);
    return mode;
}


easyBtn.addEventListener("click", setDifficulty);
mediumBtn.addEventListener("click", setDifficulty);
hardBtn.addEventListener("click", setDifficulty);

