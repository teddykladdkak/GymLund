# GymLund.tk
## Vad är detta?
Detta projektet började med att jag själv ville besöka alla Pokémon Go gymmen i min stad. För detta gjorde jag en lista som gick att checka av. Under denna perioden implementerades även Gym Badges i Pokémon Go, så lade till dem på sidan. I olika forum jag deltog i var det ständigt användare som frågade var gymmet befann sig. Jag löste problemet genom att göra lite justeringar och sedan blev GymLund.tk det den är idag!

## Var kommer informationen ifrån?
Alla bilder från Gym Badges är från mitt konto. Visas en gymbadge med ett frågetecken innebär det att jag hört att det ska finnas ett gym men ännu inte besökt den.

Gymmens lokalisation hittar jag dels genom Facebook grupper men även via följande sidor:
* [PokemonGoMap](https://www.pokemongomap.info/)
* [Ingress - Intel](https://www.ingress.com/intel)

**OBS! Risk finns att gym saknas, då denna sida inte drivs av bottar utan spelares observationer**

## Stödjer i nuläget följande städer:
* Lund
* Malmö
* Göteborg
* Växjö
* Landskrona

## Hur kan jag använda datan?
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

Använd följande url struktur:
```
https://www.gymlund.tk/script/[area].json?[id]=[variabel]
```
Exempel:
* Bra ex-raid: [https://www.gymlund.tk/script/gymlund.json?ex=true](https://www.gymlund.tk/script/gymlund.json?ex=true)
* Närmast: [https://www.gymlund.tk/script/gymlund.json?todo=km&lat=55.719353&lon=13.1845240](https://www.gymlund.tk/script/gymlund.json?todo=km&lat=55.719353&lon=13.1845240)
* Bokstavsordning men med distans: [https://www.gymlund.tk/script/gymlund.json?todo=normal&lat=55.719353&lon=13.1845240](https://www.gymlund.tk/script/gymlund.json?todo=normal&lat=55.719353&lon=13.1845240)

### Pokémon information
Följande parametrar tas mot:

ID | Variabel | Förklaring
--- | --- | ---
to | "all" / nummer | Alla Pokémon eller till satt nummer
spec | nummer | Enbart info från specifik pokemon. Om Pokémonen har fler versioner (Alolan) behöver nummer avslutas med "a" eller "b"

Använd följande url struktur
```
https://www.gymlund.tk/script/pokedata/pokemon.json?[id]=[variabel]
```

Exempel:
* Alla Pokémon!: [https://www.gymlund.tk/script/pokedata/pokemon.json?to=all](https://www.gymlund.tk/script/pokedata/pokemon.json?to=all)
* Första 20 Pokémon: [https://www.gymlund.tk/script/pokedata/pokemon.json?to=20](https://www.gymlund.tk/script/pokedata/pokemon.json?to=20)
* Information om "Ninetales" (Normal) : [https://www.gymlund.tk/script/pokedata/pokemon.json?spec=038a](https://www.gymlund.tk/script/pokedata/pokemon.json?spec=038a)
* Information om "Ninetales" (Alolan) : [https://www.gymlund.tk/script/pokedata/pokemon.json?spec=038b](https://www.gymlund.tk/script/pokedata/pokemon.json?spec=038b)

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
