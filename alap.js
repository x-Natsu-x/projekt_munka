let gombok = document.querySelectorAll(".kocka");
let valasz = document.getElementById("valasz");

gombok.forEach(gomb => {
    gomb.addEventListener("click", function() {
        let ertek = this.value;

        if (ertek == "1") {
            valasz.innerHTML = "<strong>AI a szoftverfejlesztésben:</strong> Az AI segíti a szoftverfejlesztést azzal, hogy támogatja a programozókat a kód írásában és javításában. Képes kódrészleteket javasolni, magyarázatot adni a kód működésére, vagy segíteni egy funkció megvalósításában. Például a GitHub Copilot vagy a ChatGPT képes automatikusan kódot generálni vagy ötleteket adni egy program elkészítéséhez, így a fejlesztők gyorsabban tudnak dolgozni.";
        }
        if (ertek == "2") {
            valasz.innerHTML = "<strong>AI a szoftvertesztelésben:</strong> Az AI a szoftvertesztelés során a programok ellenőrzésében segít. Képes automatikusan teszteket futtatni, felismerni a hibákat és elemezni, hogy a program minden funkciója megfelelően működik-e. Például a Testim vagy az Applitools AI segítségével vizsgálja, hogy egy alkalmazás felülete és működése nem változott-e hibásan egy frissítés után.";
        }
        if (ertek == "3") {
            valasz.innerHTML = "<strong>AI eszközök:</strong> Számos AI-eszköz segíti a programozókat a mindennapi munkában. Ezek képesek kódot javasolni, hibákat keresni vagy magyarázatot adni egy program működésére. Például a GitHub Copilot, a ChatGPT vagy a Tabnine segít a kód írásában és kiegészítésében, így a fejlesztők gyorsabban és hatékonyabban tudnak dolgozni.";
        }
        if (ertek == "4") {
            valasz.innerHTML = "<strong>AI-alapú alkalmazások:</strong> AI-alapú alkalmazásokat úgy lehet fejleszteni, hogy a programba mesterséges intelligencia modelleket vagy szolgáltatásokat építünk be. Ehhez gyakran speciális könyvtárakat és keretrendszereket használnak. Például a TensorFlow vagy a PyTorch segítségével lehet gépi tanulási modelleket készíteni, amelyeket később egy alkalmazásban lehet használni.";
        }
        if (ertek == "5") {
            valasz.innerHTML = "<strong>AI és a fejlesztők jövője:</strong> Az AI korszakában a fejlesztők munkája várhatóan megváltozik, de nem fog eltűnni. Az AI sok ismétlődő feladatot átvehet, ezért a fejlesztők inkább a problémamegoldásra, a tervezésre és az összetettebb rendszerek kialakítására fognak koncentrálni. Az AI inkább segítő eszköz lesz, amely hatékonyabbá teszi a programozást.";
        }
    });
});