console.log("Helloww");

//buttons
document.querySelector("#zoekenKnop").addEventListener("click", toonZoekbalk);
document
  .querySelector("#zoekenSluiten")
  .addEventListener("click", sluitZoekbalk);
document.querySelector("#extraZoeken").addEventListener("click", sluitZoekbalk);
document.querySelector("#extraZoeken").addEventListener("click", scrollFunctie);
document.querySelector("#openAbout").addEventListener("click", toonAbout);
document.querySelector("#sluitAbout").addEventListener("click", sluitAbout);
document
  .querySelector("#resultatenResetten")
  .addEventListener("click", resetZoekgegevens);
document.querySelector("#belKnop").addEventListener("click", openFavorieten);
document
  .querySelector("#sluitFavorieten")
  .addEventListener("click", sluitFavorieten);
document.querySelector("#coinKnop").addEventListener("click", scrollFunctie);

//About openen
function toonAbout() {
  document.querySelector(".aboutPage").classList.remove("aboutsluitenAnimatie");
  document.querySelector(".aboutPage").classList.add("aboutOpenanimatie");
}

//About sluiten
function sluitAbout() {
  document.querySelector(".aboutPage").classList.remove("aboutOpenanimatie");
  document.querySelector(".aboutPage").classList.add("aboutsluitenAnimatie");
}

//Favorieren openen
function openFavorieten() {
  document
    .querySelector(".favorieten")
    .classList.remove("favorietensluitenAnimatie");
  document.querySelector(".favorieten").classList.add("favorietenOpenanimatie");
}

//Favorieten sluiten
function sluitFavorieten() {
  document
    .querySelector(".favorieten")
    .classList.remove("favorietenOpenanimatie");
  document
    .querySelector(".favorieten")
    .classList.add("favorietensluitenAnimatie");
}

//Huidig jaar ophalen
function huidigJaar() {
  const jaar = new Date().getFullYear();
  document.querySelector("#huidigJaar").innerHTML = jaar;
}

//Scrollen functie
function scrollFunctie() {
  document.querySelector(".cryptoInfo").scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
  document.querySelector("#zoekVeld").value = "";
}

//zoeken
document.querySelector("#zoekVeld").addEventListener("keyup", function () {
  console.log("onkeyup ", this.value);
  filterOnClass("cryptoGegevens", this.value);
});

//Zoekbalk tonen
function toonZoekbalk() {
  document.querySelector(".zoekbalk").style.display = "block";
  document
    .querySelector(".zoekbalk")
    .classList.remove("zoekbalkAnimatieSluiten");
  document.querySelector(".zoekbalk").classList.add("zoekbalkAnimatie");
}

//Zoekbalk sluiten
function sluitZoekbalk() {
  document.querySelector(".zoekbalk").classList.add("zoekbalkAnimatieSluiten");
  document.querySelector(".zoekbalk").classList.remove("zoekbalkAnimatie");

  setTimeout(() => {
    document.querySelector(".zoekbalk").style.display = "none";
  }, 130);
}

//Filter zoek gegevens resetten
function resetZoekgegevens() {
  document.querySelector("#resultatenResetten").style.display = "none";
  document.querySelector("#zoekVeld").value = "";
  window.location.reload();
}

//Filter zoek functie
function filterOnClass(baseClass, s) {
  console.log("s", s);
  document.querySelector("#resultatenResetten").style.display = "block";
  let re = new RegExp(s.trim(), "i");
  document.querySelectorAll("." + "cryptoContainer").forEach((node) => {
    let cNames = Array.from(node.classList);
    if (s.trim() == "") {
      node.style.display = "none";
    } else if (cNames.some((cName) => re.test(cName))) {
      node.style.display = "block";
    } else {
      node.style.display = "none";
    }
  });
}

//huidig jaar ophalen voor de footer copyright
huidigJaar();

//als er op een crypto geklikt wordt, wordt er een classlist getoggeld met aparte css properties
let cryptoToggle = document.querySelectorAll(".cryptoGegevens");

for (let i = 0; i < cryptoToggle.length; i++) {
  cryptoToggle[i].addEventListener("click", voegClasstoe);

  function voegClasstoe() {
    cryptoToggle[i].classList.toggle("cryptoPagina");
  }
}

//als er op de favorietknop geklikt wordt, wordt de crypto munt aan de favorieten lijst met een aparte array toegevoegd.
let buttons = document.querySelectorAll(".cryptobutton");

function voegFavorietToe() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", favorietFunctie);

    function favorietFunctie() {
      let favorietArray = [];
      favorietArray.push(buttons[i].value);
      favorietArray.slice(0, 1);
      document.querySelector(".favorietLijst").innerHTML = favorietArray;
      openFavorieten();
    }
  }
}

voegFavorietToe();

let cryptoContainer = document.getElementsByClassName("cryptoContainer");
for (var i = 0; i < cryptoContainer.length; i += 1) {
  cryptoContainer[i].style.display = "none";
}

function timeOutFunction() {
  let cryptoContainer = document.getElementsByClassName("cryptoContainer");
  for (var i = 0; i < cryptoContainer.length; i += 1) {
    cryptoContainer[i].style.display = "block";
  }
}

setTimeout(() => {
  timeOutFunction();
  document.querySelector(".emptyState").style.display = "none";
}, 2500);
