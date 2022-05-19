# Progressive Web Apps @cmda-minor-web · 2021/22 

<img src="https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png" alt="PWA" width="200px"/>

## Single Page App - CryptoAbi
CryptoAbi is een app waarbij de gebruiker informatie kan ophalen van de top 20 grootste crypto valuta's. De gebruiker kan zoeken voor een specifieke coin en de gebruiker klikt dan op de coin waar de gebruiker naar op zoek was. Vervolgens ziet de gebruiker de huidige prijs, de huidige market cap, de huidige koers wijziging, de huidige laatste update en de afkorting naam van de coin. De gebruiker kan besluiten om de coin toe te voegen aan de favorietenlijst. 
<br/>

## Activity Diagram
<img src="https://i.ibb.co/Vw5K22y/Middel-3.png](https://i.ibb.co/VBvvFzX/activiydiagram.png" alt="diagram" width="700px"/>
<br/><br/>

## Service Worker
<img src="https://i.ibb.co/Vw5K22y/Middel-3.png](https://i.ibb.co/VBvvFzX/activiydiagram.png)](https://i.ibb.co/H4Lqpsz/serviceworker.png)" alt="diagram" width="700px"/>
<br/><br/>

### Caching
Op de screenshots hieronder zie je links de app met internet verbinding. Op de rechter screenshot zie je dat de app gecached is en er geen verbinding met het internet beschikbaar is.<br/><br/>
<img src="https://i.ibb.co/tcM7WHN/cache.png" alt="cache" width="500px"/><br/><br/>


### Cache, Service worker & manifest
De '/' route (html), CSS, JavaScript (voor de client side functies, zoals details pagina openen van crypto coins) en de afbeelding voor op de home pagina worden gecached<br/>
<img src="https://i.ibb.co/n1C44TG/gecaht.png" alt="cache" width="800px"/>
<br/><br/>

Niet HTML elementen worden gecached met 'max-age=31536000;<br/>
<img src="https://i.ibb.co/VtWM9Bd/Schermafbeelding-2022-04-08-om-13-30-48.png" alt="cache" width="400px"/>
<br/><br/>

Serivice worker<br/>
<img src="https://i.ibb.co/CmVHcLZ/serviceworker.png" alt="service worker" width="400px"/>
<br/><br/>

Manifest<br/>
<img src="https://i.ibb.co/gWvQss2/manifest.png" alt="manifest" width="400px"/>
<br/><br/>

## Lijst met optimalisaties
* Lighthouse rapport gemaakt en daaraan de verbeteringen aanbrengen
* Client side JavaScript/CSS/HTML minified
* Afbeeldingen uit de API met Probe kleinere waarde gegeven
* 20 coins per call met de API call uitvoeren in plaats van 200 zoals eerst
* "defer" toegevoeged op minder belangijke script bestanden en externe JS bestanden
* font-display swap gegeven
* Compression gebruikt
* Caching headers gebruikt 

Op de server side stel ik de route's in, haal ik de API op en fetch ik het. Vervolgens met EJS render ik de data die uit de API komt op de home pagina.
Om de performance van mijn app te verbeteren heb ik het een en ander gedaan. Ik heb bijvoorbeeld de afbeeldingen die uit de API worden gehaald eerst met de ware grote opgehaald met behulpt van Probe en vervolgens met logica JavaScript heb ik de waarde meegegeven en heb ik het later kleiner weergegeven
```
      Promise.all(
        array.map(async (item) => {
          let result = await probe(item.image);
          item.metadata = result;
          return item;
        })
      ).then((results) => {
        res.render("index", {
          array: results,
        });
      });
```

Before:<br/>
<img src="https://i.ibb.co/YP5TsxH/slecht-performance.png" width="350px"/>
<br/>
After:<br/>
<img src="https://i.ibb.co/9w09p7f/goed-performance.png" width="350px"/><br/>
<br/><br/>

## Client side
Op de client side JavaScript heb ik ervoor gezorgd dat de gebruiker kan zoeken tussen coins (op classnaam basis en met classlist toggle) en dat de gebruiker de coins in de favorietenlijst kan toevoegen. Verder kan de gebruiker klikken op buttons en dat er met classlist's getoggled worden. De client side JavaScript is om de user experience te verbeteren. Ik vind dus dat het zoeken op verschillende soorten coins op de client side juist is, omdat ik tussen classnamen filter en dat staat dus op de client en niet in de server side.
<br/><br/>

## Interface Elementen
<img src="https://i.ibb.co/ChZFcf9/schermen.png" alt="Interface elementen van de app" width="600px"/>

## Features List 🖇
* Zoeken & Filteren
* Crypto gegevens bekijken
* Favoriet toevoegen*
<br/>

## Dependencies
* NodeJS
* Express
* EJS
* Express-EJS-Layouts
* Probe
* Node-Fetch
* HTML, CSS & JS
* <a href="https://fontawesome.com/">Font Awesome</a>
* <a href="https://www.coingecko.com/en/api/documentation">Coingecko Crypto API</a>
* <a href="https://storyset.com/">Storyset Illustrations</a>
<br/>


## Installeren
1. Clone de repository<br/>
```
  git clone https://github.com/muhammet075/progressive-web-apps-2122
```

2. Navigeer naar het project<br/>
```
 cd progressive-web-apps-2122
```

3. Installeer NPM<br/>
```
  npm install
```

4. Start de app 🚀<br/>
```
  npm start
```

## Live Demo Heroku🚀
<a href="https://pwa-cmd.herokuapp.com/">https://pwa-cmd.herokuapp.com/</a>
<br/>


## Breakdown schetsen
<img src="https://i.ibb.co/jrDBhdz/schets1.jpg" alt="schets" width="400px"/>
<img src="https://i.ibb.co/9HnwG8K/schets2.jpg" alt="schets" width="300px"/>
<br/>

## Bronnen
* https://www.youtube.com/watch?v=kT3qSf7jG5c
* https://developer.chrome.com/docs/workbox/service-worker-overview/
* https://web.dev/progressive-web-apps/
* https://web.dev/why-speed-matters/
* https://web.dev/user-centric-performance-metrics/
