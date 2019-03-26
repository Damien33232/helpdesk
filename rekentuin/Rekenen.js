window.onload = function() {
    /*knoppen*/
    document.getElementById("toets1").onclick = function () { toets(1) }
    document.getElementById('toets2').onclick = function () { toets(2) }
    document.getElementById('toets3').onclick = function () { toets(3) }
    document.getElementById('toets4').onclick = function () { toets(4) }
    document.getElementById('toets5').onclick = function () { toets(5) }
    document.getElementById('toets6').onclick = function () { toets(6) }
    document.getElementById('toets7').onclick = function () { toets(7) }
    document.getElementById('toets8').onclick = function () { toets(8) }
    document.getElementById('toets9').onclick = function () { toets(9) }
    document.getElementById('toets10').onclick = function () { toets(10) }

    /* Functie toetsen*/
    function toets(x) {

        document.getElementById('oefenblad1').style.display = "none"
        document.getElementById('oefenblad2').style.display = "none"
        let tafelvan = x;
        let a = document.getElementById('toetsen');
        a.innerHTML = "";
        for (i = 1; i < 11; i++) {
            let id = "antwoord"+i;
            a.innerHTML += i + " x " + tafelvan + " = " + "<input style='text-align: right' type='text' maxlength='3' size='3' id='" + id + "' /><br>";
        }
        a.innerHTML += "<br><br><button id='Controleer' onclick='ControleerAntwoorden(" + tafelvan + ")' >Controleer alle antwoorden</button>";
    }
}

/* Check functie */
function ControleerAntwoorden(tafel) {

    let fout = 0
    for (i = 1; i < 11; i++) {
        let antwoord = document.getElementById("antwoord" + i);
            if (antwoord.value == (i * tafel)) {
            antwoord.style = "text-align: right; background-color: lightgreen"
//            alert("Antwoord" + i + " (" + antwoord.value + ") is GOED !");
        } else {
            antwoord.style = "text-align: right; background-color: red"
            fout++
//            alert("Antwoord" + i + " (" + antwoord.value + ") is helaas Fout.");
        }
     }
     if (fout >= 5) {
        document.getElementById('oefenblad1').style.display = "block"
        document.getElementById('oefenblad2').style.display = "block"
     }
}

