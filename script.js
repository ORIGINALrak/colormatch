var szinek = ['red','blue','green','yellow'];
var szinszoveg = ['RED','BLUE','GREEN','YELLOW']

function game(){
    let asd = Math.floor(Math.random() * 4)
    var szin = szinek[asd]

    document.getElementById('szovegszin').style.color = szin;
    console.log(szin)

    let asd2 = Math.floor(Math.random() * 4)
    var szoveg = szinek[asd2]

    document.getElementById('szin').innerHTML = szoveg;
    console.log(szoveg)

    let asd3 = Math.floor(Math.random() * 4)
    var bait = szinek[asd3]

    document.getElementById('szovegszin').innerHTML = bait;
    console.log(bait)
}
