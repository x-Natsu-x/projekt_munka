let gombok = document.querySelectorAll(".kocka");
let valasz = document.getElementById("valasz");

gombok.forEach(gomb => {
    gomb.addEventListener("click", function() {
        let ertek = this.value;

        if (ertek == "10") {
            valasz.innerHTML = "<strong>Hogyan alakítja át az AI a szakmákat:</strong> Az AI egyre több rutinfeladatot képes elvégezni, például adatfeldolgozást vagy ügyfélszolgálati munkát. Emiatt egyes munkakörök átalakulnak vagy csökken a szükség rájuk, miközben új, technológiai jellegű állások jelennek meg. A dolgozóknak egyre fontosabb lesz a digitális tudás és az alkalmazkodóképesség.";
        }
        if (ertek == "11") {
            valasz.innerHTML = "<strong>AI jövője a munka világában:</strong> A jövőben az AI várhatóan segíti az emberek munkáját, nem teljesen helyettesíti őket. Sok területen együtt dolgozik majd az ember és a gép, ami hatékonyabbá teheti a munkát. Emellett egyre fontosabb lesz a folyamatos tanulás és az új készségek elsajátítása.";
        }
    });
});