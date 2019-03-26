    /*knoppen*/
document.getElementById('tafel1').onclick = function () { tafel(1) }
document.getElementById('tafel2').onclick = function () { tafel(2) }
document.getElementById('tafel3').onclick = function () { tafel(3) }
document.getElementById('tafel4').onclick = function () { tafel(4) }
document.getElementById('tafel5').onclick = function () { tafel(5) }
document.getElementById('tafel6').onclick = function () { tafel(6) }
document.getElementById('tafel7').onclick = function () { tafel(7) }
document.getElementById('tafel8').onclick = function () { tafel(8) }
document.getElementById('tafel9').onclick = function () { tafel(9) }
document.getElementById('tafel10').onclick = function () { tafel(10) }

/* Functie tafels*/
    function tafel(x) {
    let number = x;
    let i = 0;
    let a = document.getElementById('tafel').innerHTML = i + " x " + number + " = " + i * number + "<br>"
    for (i = 1; i < 11; i++) {
        let a = document.getElementById('tafel').innerHTML += i + " x " + number + " = " + i * number + "<br>"
     }
 }