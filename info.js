let gombok = document.querySelectorAll(".kocka");
let valasz = document.getElementById("valasz");

gombok.forEach(gomb => {
    gomb.addEventListener("click", function() {
        let ertek = this.value;

        if (ertek == "6") {
            valasz.innerHTML = "<strong>AI alkalmazás fejlesztése:</strong> AI alkalmazás fejlesztése: Az AI alkalmazások fejlesztése során mesterséges intelligencia modelleket integrálnak szoftverekbe, hogy azok képesek legyenek automatizált döntésekre, mintafelismerésre vagy természetes nyelv feldolgozására.";
        }
        if (ertek == "7") {
            valasz.innerHTML = "<strong>AI a szoftvertesztelésben:</strong> AI a szoftvertesztelésben: A mesterséges intelligencia segíti a szoftvertesztelést hibák gyorsabb és pontosabb feltárásában, tesztesetek generálásában, regressziós tesztek automatizálásában, így növelve a fejlesztés hatékonyságát.";
        }
        if (ertek == "8") {
            valasz.innerHTML = "<strong>Gépi tanulás alapú alkalmazások:</strong> Gépi tanulás alapú alkalmazások: Ezek az alkalmazások adatokból tanulnak mintákat és predikciókat készítenek, például ajánlórendszerek, arcfelismerő rendszerek vagy prediktív karbantartási megoldások formájában..";
        }
        if (ertek == "9") {
            valasz.innerHTML = "<strong>AI fejlesztői eszközök:</strong> AI fejlesztői eszközök: Az AI fejlesztők speciális keretrendszereket és eszközöket használnak, mint a TensorFlow, PyTorch, vagy Hugging Face, amelyek segítik modellek építését, tanítását és implementálását.";
        }
    });
});