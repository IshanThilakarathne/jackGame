function main() {

    let confirm = document.getElementById("mainResult").innerHTML;
    if (confirm == "You have Lost") {
        alert("Game over");
    } else {
        let x;
    do {
     x = Math.floor(Math.random() * 100 / 7.6);
    } while (x == 0);

    let currentTT = parseInt(document.getElementById("result").innerHTML);
    let total = currentTT + x;
    document.getElementById('result').innerHTML = total;

    if (total == 21) {
        alert("You have Won!!!")
        document.getElementById("mainResult").innerHTML = "You have won!"
        document.getElementById("btn-rest").style.display = "block"
    } else if (total < 21) {
        document.getElementById("mainResult").innerHTML = "Try another Card"
    } else if (total > 21) {
        document.getElementById("mainResult").innerHTML = "You have Lost"
        alert("You have lost")
        document.getElementById("btn-rest").style.display = "block"
    }
    var img = document.createElement("img");
    img.src = "images/" + x + ".png";
    img.height = 300;

    document.body.appendChild(img);

    }

    
}
function restart() {
    location.reload();
}