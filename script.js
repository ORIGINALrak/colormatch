var szinek = ['red','blue','green','yellow'];
var szinszoveg = ['RED','BLUE','GREEN','YELLOW']
var nem = 0;
var szoveg;
var szin;
var score = 0;
var highscore = 0;

function start(){
    if(nem == 0){
    document.getElementById('info').innerHTML = "play the game";
    let asd = Math.floor(Math.random() * 4)
    szin = szinek[asd]

    document.getElementById('szovegszin').style.color = szin;
    console.log(szin)

    let asd2 = Math.floor(Math.random() * 4)
    szoveg = szinek[asd2]

    document.getElementById('szin').innerHTML = szoveg;
    console.log(szoveg)

    let asd3 = Math.floor(Math.random() * 4)
    var bait = szinek[asd3]

    document.getElementById('szovegszin').innerHTML = bait;
    console.log(bait)
    document.getElementById('info').style.cursor = "default";
}
    nem = 1;
}
function hamis(){
    if(szin.toString() != szoveg){
        document.getElementById('info').innerHTML = "Good job :)";
        score++;
        document.getElementById('scor').innerHTML = "score: " + score
    }
    else{
        document.getElementById('info').innerHTML = "L :(";
        if(score > highscore){
        highscore = score
        document.getElementById('high').innerHTML = "highscore: " + score
        }
        score = 0;
        document.getElementById('scor').innerHTML = "score: " + score
    }
    let asd = Math.floor(Math.random() * 4)
    szin = szinek[asd]

    document.getElementById('szovegszin').style.color = szin;
    console.log(szin)

    let asd2 = Math.floor(Math.random() * 4)
    szoveg = szinek[asd2]

    document.getElementById('szin').innerHTML = szoveg;
    console.log(szoveg)

    let asd3 = Math.floor(Math.random() * 4)
    var bait = szinek[asd3]

    document.getElementById('szovegszin').innerHTML = bait;
    console.log(bait)
}
function igaz(){
    if(szin.toString() == szoveg){
        document.getElementById('info').innerHTML = "Good job :)";
        score++;
        document.getElementById('scor').innerHTML = "score: " + score
    }
    else{
        document.getElementById('info').innerHTML = "L :(";
        if(score > highscore){
        highscore = score
        document.getElementById('high').innerHTML = "highscore: " + score
        }
        score = 0;
        document.getElementById('scor').innerHTML = "score: " + score
    score = 0;
    document.getElementById('scor').innerHTML = "score: " + score
    }
    let asd = Math.floor(Math.random() * 4)
    szin = szinek[asd]

    document.getElementById('szovegszin').style.color = szin;
    console.log(szin)

    let asd2 = Math.floor(Math.random() * 4)
    szoveg = szinek[asd2]

    document.getElementById('szin').innerHTML = szoveg;
    console.log(szoveg)

    let asd3 = Math.floor(Math.random() * 4)
    var bait = szinek[asd3]

    document.getElementById('szovegszin').innerHTML = bait;
    console.log(bait)
}
