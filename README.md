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

## Hur får jag GymLund till min stad?
Lämna en pull request där du skickar "gym" och din stads namn med filformatet ".js". (Exempel gymlund.js)
Strukturen är följande:
```javascript
var gyms = [
  {
	  namn: '[Gymmets namn]',
	  id: '',
	  location: {
		  longitud: '[longitude]',
		  latitud: '[latitude]'
	  },
	  embed: '',
	  exraid: [true eller false],
	  rip: [true eller false]
  },{
	  namn: 'The Ufo',            //Exempel
	  id: '',
	  location: {
	  	longitud: 57.625,       //Exempel
	  	latitud: 11.9           //Exempel
  	},
	  embed: '',
	  exraid: false,              //Exempel om exraid gym är det true
	  rip: false                  //Exempel true om gymmet blivit borttaget
  },
  ...
];
```
