const easyBtn = document.getElementById('easyMode');
const mediumBtn = document.getElementById('mediumMode');
const hardBtn = document.getElementById('hardMode');

let setDifficulty = evt => {
    try{
        switch(evt.target.id){
            case 'easyMode':
                url = `https://opentdb.com/api.php?amount=10&difficulty=easy`;
                return url;
            break;
            case 'mediumMode':
                url = `https://opentdb.com/api.php?amount=10&difficulty=medium`;
                return url;
            break;
            case 'hardMode':
                url=`https://opentdb.com/api.php?amount=10&difficulty=hard`;
                return url;
                break;
            case 'randomMode':
                break;
        }
    }catch(e){}

};

exports.URL = setDifficulty();

easyBtn.addEventListener("click", setDifficulty);
mediumBtn.addEventListener("click", setDifficulty);
hardBtn.addEventListener("click", setDifficulty);

