# GymLund.teddyprojekt.se
## Vad är detta?
Detta projektet började med att jag själv ville besöka alla Pokémon Go gymmen i min stad. För detta gjorde jag en lista som gick att checka av. Under denna perioden implementerades även Gym Badges i Pokémon Go, så lade till dem på sidan. I olika forum jag deltog i var det ständigt användare som frågade var gymmet befann sig. Jag löste problemet genom att göra lite justeringar och sedan blev GymLund.teddyprojekt.se det den är idag!

## Var kommer informationen ifrån?
Alla bilder från Gym Badges är från mitt konto. Visas en gymbadge med ett frågetecken innebär det att jag hört att det ska finnas ett gym men ännu inte besökt den.

Gymmens lokalisation hittar jag dels genom Facebook grupper men även via följande sidor:
* [PokemonGoMap](https://www.pokemongomap.info/)
* [Ingress - Intel](https://www.ingress.com/intel)

**OBS! Risk finns att gym saknas, då denna sida inte drivs av bottar utan spelares observationer**

## Stödjer i nuläget följande städer:
* Lund [https://gymlund.teddyprojekt.se/](https://gymlund.teddyprojekt.se/)
* Malmö [https://gymlund.teddyprojekt.se/malmo.html](https://gymlund.teddyprojekt.se/malmo.html)
* Göteborg [https://gymlund.teddyprojekt.se/gbg.html](https://gymlund.teddyprojekt.se/gbg.html)
* Växjö [https://gymlund.teddyprojekt.se/vaxjo.html](https://gymlund.teddyprojekt.se/vaxjo.html)
* Landskrona [https://gymlund.teddyprojekt.se/landskrona.html](https://gymlund.teddyprojekt.se/landskrona.html)

## API för GymLund
GymLund stödjer nu jsonp! Om du vill få information är det bara att skicka en "GET" request enligt följande:
### Gym
Följande parametrar tas mot:

ID | Variabel | Förklaring
--- | --- | ---
rip | true / false | Om borttagna gym ska visas
ex | true / false | Om bara ex-raid gym ska visas
lat | nummer | Var du är i latitud
lon | nummer | Var du är i longitud
todo | "km" / "normal" | Vilken ordning gymmen ska ha i listan. OBS om inte lat & lon är med kommer det automatiskt bli "normal"
question | sökord | Tar bort alla gym som inte innehåller sökningen. Om inga gym matchar retuneras false.

Använd följande url struktur:
```
https://gymlund.teddyprojekt.se/script/[area].json?[id]=[variabel]
```
Exempel:
* Bra ex-raid: [https://gymlund.teddyprojekt.se/script/gymlund.json?ex=true](https://gymlund.teddyprojekt.se/script/gymlund.json?ex=true)
* Närmast: [https://gymlund.teddyprojekt.se/script/gymlund.json?todo=km&lat=55.719353&lon=13.1845240](https://gymlund.teddyprojekt.se/script/gymlund.json?todo=km&lat=55.719353&lon=13.1845240)
* Bokstavsordning men med distans: [https://gymlund.teddyprojekt.se/script/gymlund.json?todo=normal&lat=55.719353&lon=13.1845240](https://gymlund.teddyprojekt.se/script/gymlund.json?todo=normal&lat=55.719353&lon=13.1845240)
* Hittar gym som börjar med "Hal": [https://gymlund.teddyprojekt.se/script/gymlund.json?question=Hal](https://gymlund.teddyprojekt.se/script/gymlund.json?question=Hal)

### Pokémon information
Följande parametrar tas mot:

ID | Variabel | Förklaring
--- | --- | ---
to | "all" / nummer | Alla Pokémon eller till satt nummer
from | nummer | Begränsar ovan genom att hoppa över till satt nummer
spec | nummer | Enbart info från specifik pokemon. Om Pokémonen har fler versioner (Alolan) behöver nummer avslutas med "a" eller "b"
fast & charge | text | Attackernas namn

Använd följande url struktur
```
https://gymlund.teddyprojekt.se/script/pokedata/pokemon.json?[id]=[variabel]
```

Exempel:
* Alla Pokémon!: [https://gymlund.teddyprojekt.se/script/pokedata/pokemon.json?to=all](https://gymlund.teddyprojekt.se/script/pokedata/pokemon.json?to=all)
* Första 20 Pokémon: [https://gymlund.teddyprojekt.se/script/pokedata/pokemon.json?to=20](https://gymlund.teddyprojekt.se/script/pokedata/pokemon.json?to=20)
* Pokémon mellan 18 och 20: [https://gymlund.teddyprojekt.se/script/pokedata/pokemon.json?to=20](https://gymlund.teddyprojekt.se/script/pokedata/pokemon.json?to=20&from=18)
* Information om "Ninetales" (Normal) : [https://gymlund.teddyprojekt.se/script/pokedata/pokemon.json?spec=038a](https://gymlund.teddyprojekt.se/script/pokedata/pokemon.json?spec=038a)
* Information om "Ninetales" (Alolan) : [https://gymlund.teddyprojekt.se/script/pokedata/pokemon.json?spec=038b](https://gymlund.teddyprojekt.se/script/pokedata/pokemon.json?spec=038b)
* Kontrollerar "Bulbasaurs" moveset: [https://gymlund.teddyprojekt.se/script/pokedata/pokemon.json?spec=001&fast=Vine%20Whip&charge=Power%20Whip](https://gymlund.teddyprojekt.se/script/pokedata/pokemon.json?spec=001&fast=Vine%20Whip&charge=Power%20Whip)

## Hur får jag GymLund till min stad?
Lämna en pull request där du skickar "gym" och din stads namn med filformatet ".json". (Exempel gymlund.json)
Strukturen är följande:
```javascript
[
  {
		"namn": "[Gymmets namn]",
		"id": "",
		"location": {
			"lon": "[longitude]",
			"lat": "[latitude]"
		},
		"exraid": [true eller false],
		"rip": [true eller false]
  },{
		"namn": "The Ufo",            //Exempel
		"id": "",
		"location": {
			"lon": "57.625",     //Exempel
			"lat": "11.9"         //Exempel
	  	},
		"exraid": false,              //Exempel om exraid gym är det true
		"rip": false                  //Exempel true om gymmet blivit borttaget
  },
  ...
]
```
