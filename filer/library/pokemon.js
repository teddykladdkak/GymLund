/*https://pokemon.gameinfo.io/*/
var allpokemon = [
	{
		nummer: '001',
		namn: 'Bulbasaur',
		type: ['Grass', 'Poison'],
		moves: ['Vine Whip', 'Tackle', 'Sludge Bomb', 'Power Whip', 'Seed Bomb'],
		attack: ['Vine Whip', 'Power Whip'],
		defend: ['Vine Whip', 'Sludge Bomb'],
		lastevolve: false
	},{
		nummer: '002',
		namn: 'Ivysaur',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Vine Whip', 'Solar Beam', 'Sludge Bomb', 'Power Whip'],
		attack: ['Vine Whip', 'Solar Beam'],
		defend: ['Razor Leaf', 'Solar Beam'],
		lastevolve: false
	},{
		nummer: '003',
		namn: 'Venusaur',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Vine Whip', 'Petal Blizzard', 'Solar Beam', 'Sludge Bomb'],
		attack: ['Vine Whip', 'Solar Beam'],
		defend: ['Razor Leaf', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '004',
		namn: 'Charmander',
		type: ['Fire'],
		moves: ['Scratch', 'Ember', 'Flamethrower', 'Flame Burst', 'Flame Charge'],
		attack: ['Ember', 'Flamethrower'],
		defend: ['Ember', 'Flame Charge'],
		lastevolve: false
	},{
		nummer: '005',
		namn: 'Charmeleon',
		type: ['Fire'],
		moves: ['Fire Fang', 'Scratch', 'Ember', 'Flamethrower', 'Flame Burst', 'Fire Punch'],
		attack: ['Fire Fang', 'Flamethrower'],
		defend: ['Ember', 'Flamethrower'],
		lastevolve: false
	},{
		nummer: '006',
		namn: 'Charizard',
		type: ['Fire', 'Flying'],
		moves: ['Fire Spin', 'Air Slash', 'Wing Attack', 'Ember', 'Overheat', 'Fire Blast', 'Flamethrower', 'Dragon Claw'],
		attack: ['Fire Spin', 'Overheat'],
		defend: ['Fire Spin', 'Overheat'],
		lastevolve: true
	},{
		nummer: '007',
		namn: 'Squirtle',
		type: ['Water'],
		moves: ['Bubble', 'Tackle', 'Aqua Tail', 'Water Pulse', 'Aqua Jet'],
		attack: ['Bubble', 'Aqua Tail'],
		defend: ['Bubble', 'Aqua Tail'],
		lastevolve: false
	},{
		nummer: '008',
		namn: 'Wartortle',
		type: ['Water'],
		moves: ['Bite', 'Water Gun', 'Hydro Pump', 'Ice Beam', 'Aqua Jet'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Water Gun', 'Ice Beam'],
		lastevolve: false
	},{
		nummer: '009',
		namn: 'Blastoise',
		type: ['Water'],
		moves: ['Bite', 'Water Gun', 'Hydro Pump', 'Flash Cannon', 'Ice Beam'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Water Gun', 'Ice Beam'],
		lastevolve: true
	},{
		nummer: '010',
		namn: 'Caterpie',
		type: ['Bug'],
		moves: ['Bug Bite', 'Tackle', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		lastevolve: false
	},{
		nummer: '011',
		namn: 'Metapod',
		type: ['Bug'],
		moves: ['Bug Bite', 'Tackle', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		lastevolve: false
	},{
		nummer: '012',
		namn: 'Butterfree',
		type: ['Bug', 'Flying'],
		moves: ['Confusion', 'Bug Bite', 'Struggle Bug', 'Psychic', 'Signal Beam', 'Bug Buzz'],
		attack: ['Struggle Bug', 'Bug Buzz'],
		defend: ['Confusion', 'Bug Buzz'],
		lastevolve: true
	},{
		nummer: '013',
		namn: 'Weedle',
		type: ['Bug', 'Poison'],
		moves: ['Bug Bite', 'Poison Sting', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		lastevolve: false
	},{
		nummer: '014',
		namn: 'Kakuna',
		type: ['Bug', 'Poison'],
		moves: ['Bug Bite', 'Poison Sting', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		lastevolve: false
	},{
		nummer: '015',
		namn: 'Beedrill',
		type: ['Bug', 'Poison'],
		moves: ['Poison Jab', 'Bug Bite', 'Infestation', 'Sludge Bomb', 'X-Scissor', 'Aerial Ace'],
		attack: ['Poison Jab', 'Sludge Bomb'],
		defend: ['Infestation', 'Sludge Bomb'],
		lastevolve: true
	},{
		nummer: '016',
		namn: 'Pidgey',
		type: ['Normal', 'Flying'],
		moves: ['Quick Attack', 'Tackle', 'Aerial Ace', 'Air Cutter', 'Twister'],
		attack: ['Quick Attack', 'Aerial Ace'],
		defend: ['Quick Attack', 'Aerial Ace'],
		lastevolve: false
	},{
		nummer: '017',
		namn: 'Pidgeotto',
		type: ['Normal', 'Flying'],
		moves: ['Steel Wing', 'Wing Attack', 'Aerial Ace', 'Air Cutter', 'Twister'],
		attack: ['Wing Attack', 'Aerial Ace'],
		defend: ['Wing Attack', 'Aerial Ace'],
		lastevolve: false
	},{
		nummer: '018',
		namn: 'Pidgeot',
		type: ['Normal', 'Flying'],
		moves: ['Air Slash', 'Steel Wing', 'Wing Attack', 'Brave Bird', 'Hurricane', 'Aerial Ace', 'Air Cutter'],
		attack: ['Air Slash', 'Hurricane'],
		defend: ['Air Slash', 'Aerial Ace'],
		lastevolve: true
	},{
		nummer: '019',
		namn: 'Rattata',
		type: ['Normal'],
		moves: ['Quick Attack', 'Tackle', 'Hyper Fang', 'Body Slam', 'Dig'],
		attack: ['Quick Attack', 'Hyper Fang'],
		defend: ['Quick Attack', 'Hyper Fang'],
		lastevolve: false
	},{
		nummer: '020',
		namn: 'Raticate',
		type: ['Normal'],
		moves: ['Bite', 'Quick Attack', 'Hyper Beam', 'Hyper Fang', 'Dig'],
		attack: ['Quick Attack', 'Hyper Beam'],
		defend: ['Quick Attack', 'Hyper Beam'],
		lastevolve: true
	},{
		nummer: '021',
		namn: 'Spearow',
		type: ['Normal', 'Flying'],
		moves: ['Peck', 'Quick Attack', 'Sky Attack', 'Drill Peck', 'Aerial Ace', 'Twister'],
		attack: ['Quick Attack', 'Sky Attack'],
		defend: ['Peck', 'Drill Peck'],
		lastevolve: false
	},{
		nummer: '022',
		namn: 'Fearow',
		type: ['Normal', 'Flying'],
		moves: ['Steel Wing', 'Peck', 'Sky Attack', 'Drill Run', 'Aerial Ace', 'Twister'],
		attack: ['Steel Wing', 'Sky Attack'],
		defend: ['Peck', 'Aerial Ace'],
		lastevolve: true
	},{
		nummer: '023',
		namn: 'Ekans',
		type: ['Poison'],
		moves: ['Acid', 'Poison Sting', 'Gunk Shot', 'Sludge Bomb', 'Poison Fang', 'Wrap'],
		attack: ['Acid', 'Sludge Bomb'],
		defend: ['Acid', 'Sludge Bomb'],
		lastevolve: false
	},{
		nummer: '024',
		namn: 'Arbok',
		type: ['Poison'],
		moves: ['Acid', 'Bite', 'Gunk Shot', 'Sludge Wave', 'Dark Pulse'],
		attack: ['Acid', 'Gunk Shot'],
		defend: ['Acid', 'Gunk Shot'],
		lastevolve: true
	},{
		nummer: '025',
		namn: 'Pikachu',
		type: ['Electric'],
		moves: ['Quick Attack', 'Thunder Shock', 'Thunder', 'Wild Charge', 'Thunderbolt', 'Discharge'],
		attack: ['Thunder Shock', 'Wild Charge'],
		defend: ['Quick Attack', 'Wild Charge'],
		lastevolve: false
	},{
		nummer: '026',
		namn: 'Raichu',
		type: ['Electric'],
		moves: ['Volt Switch', 'Spark', 'Thunder Shock', 'Thunder', 'Wild Charge', 'Thunder Punch', 'Brick Break'],
		attack: ['Spark', 'Wild Charge'],
		defend: ['Volt Switch', 'Wild Charge'],
		lastevolve: true
	},{
		nummer: '027',
		namn: 'Sandshrew',
		type: ['Ground'],
		moves: ['Scratch', 'Mud Shot', 'Rock Slide', 'Dig', 'Sand Tomb', 'Rock Tomb'],
		attack: ['Scratch', 'Dig'],
		defend: ['Mud Shot', 'Dig'],
		lastevolve: false
	},{
		nummer: '028a',
		namn: 'Sandslash',
		type: ['Ground'],
		moves: ['Metal Claw', 'Mud Shot', 'Earthquake', 'Bulldoze', 'Rock Tomb'],
		attack: ['Metal Claw', 'Earthquake'],
		defend: ['Metal Claw', 'Bulldoze'],
		lastevolve: true
	},{
		nummer: '028b',
		namn: 'Sandslash - Alola Form',
		type: ['Ice', 'Steel'],
		moves: ['Metal Claw', 'Powder Snow', 'Blizzard', 'Bulldoze', 'Gyro Ball'],
		attack: ['Metal Claw', 'Blizzard'],
		defend: ['Powder Snow', 'Blizzard'],
		lastevolve: true
	},{
		nummer: '029',
		namn: 'Nidoran♀',
		type: ['Poison'],
		moves: ['Bite', 'Poison Sting', 'Sludge Bomb', 'Body Slam', 'Poison Fang'],
		attack: ['Poison Sting', 'Sludge Bomb'],
		defend: ['Poison Sting', 'Sludge Bomb'],
		lastevolve: false
	},{
		nummer: '030',
		namn: 'Nidorina',
		type: ['Poison'],
		moves: ['Bite', 'Poison Sting', 'Sludge Bomb', 'Poison Fang', 'Dig'],
		attack: ['Poison Sting', 'Sludge Bomb'],
		defend: ['Poison Sting', 'Sludge Bomb'],
		lastevolve: false
	},{
		nummer: '031',
		namn: 'Nidoqueen',
		type: ['Poison', 'Ground'],
		moves: ['Poison Jab', 'Bite', 'Stone Edge', 'Sludge Wave', 'Earthquake'],
		attack: ['Poison Jab', 'Earthquake'],
		defend: ['Poison Jab', 'Earthquake'],
		lastevolve: true
	},{
		nummer: '032',
		namn: 'Nidoran♂',
		type: ['Poison'],
		moves: ['Peck', 'Poison Sting', 'Sludge Bomb', 'Body Slam', 'Horn Attack'],
		attack: ['Poison Sting', 'Sludge Bomb'],
		defend: ['Peck', 'Sludge Bomb'],
		lastevolve: false
	},{
		nummer: '033',
		namn: 'Nidorino',
		type: ['Poison'],
		moves: ['Poison Jab', 'Poison Sting', 'Sludge Bomb', 'Horn Attack', 'Dig'],
		attack: ['Poison Jab', 'Sludge Bomb'],
		defend: ['Poison Jab', 'Sludge Bomb'],
		lastevolve: false
	},{
		nummer: '034',
		namn: 'Nidoking',
		type: ['Poison', 'Ground'],
		moves: ['Poison Jab', 'Iron Tail', 'Fury Cutter', 'Sludge Wave', 'Megahorn', 'Earthquake'],
		attack: ['Poison Jab', 'Earthquake'],
		defend: ['Iron Tail', 'Earthquake'],
		lastevolve: true
	},{
		nummer: '035',
		namn: 'Clefairy',
		type: ['Fairy'],
		moves: ['Pound', 'Zen Headbutt', 'Moonblast', 'Body Slam', 'Disarming Voice'],
		attack: ['Pound', 'Moonblast'],
		defend: ['Zen Headbutt', 'Disarming Voice'],
		lastevolve: false
	},{
		nummer: '036',
		namn: 'Clefable',
		type: ['Fairy'],
		moves: ['Pound', 'Zen Headbutt', 'Charge Beam', 'Moonblast', 'Psychic', 'Dazzling Gleam'],
		attack: ['Charge Beam', 'Dazzling Gleam'],
		defend: ['Charge Beam', 'Dazzling Gleam'],
		lastevolve: true
	},{
		nummer: '037',
		namn: 'Vulpix',
		type: ['Fire'],
		moves: ['Ember', 'Quick Attack', 'Flamethrower', 'Body Slam', 'Flame Charge'],
		attack: ['Ember', 'Flamethrower	'],
		defend: ['Ember', 'Flame Charge'],
		lastevolve: false
	},{
		nummer: '038',
		namn: 'Ninetales',
		type: ['Fire'],
		moves: ['Fire Spin', 'Ember', 'Feint Attack', 'Overheat', 'Fire Blast', 'Flamethrower', 'Heat Wave', 'Solar Beam'],
		attack: ['Fire Spin', 'Overheat'],
		defend: ['Fire Spin', 'Overheat'],
		lastevolve: true
	},{
		nummer: '039',
		namn: 'Jigglypuff',
		type: ['Normal', 'Fairy'],
		moves: ['Pound', 'Feint Attack', 'Play Rough', 'Dazzling Gleam', 'Body Slam', 'Gyro Ball', 'Disarming Voice'],
		attack: ['Pound', 'Dazzling Gleam'],
		defend: ['Feint Attack', 'Dazzling Gleam'],
		lastevolve: false
	},{
		nummer: '040',
		namn: 'Wigglytuff',
		type: ['Normal', 'Fairy'],
		moves: ['Pound', 'Feint Attack', 'Hyper Beam', 'Play Rough', 'Dazzling Gleam'],
		attack: ['Pound', 'Hyper Beam'],
		defend: ['Feint Attack', 'Play Rough'],
		lastevolve: true
	},{
		nummer: '041',
		namn: 'Zubat',
		type: ['Poison', 'Flying'],
		moves: ['Bite', 'Quick Attack', 'Sludge Bomb', 'Air Cutter', 'Poison Fang', 'Swift'],
		attack: ['Quick Attack', 'Air Cutter'],
		defend: ['Quick Attack', 'Air Cutter'],
		lastevolve: false
	},{
		nummer: '042',
		namn: 'Golbat',
		type: ['Poison', 'Flying'],
		moves: ['Bite', 'Wing Attack', 'Shadow Ball', 'Air Cutter', 'Poison Fang', 'Ominous Wind'],
		attack: ['Wing Attack', 'Shadow Ball'],
		defend: ['Wing Attack', 'Shadow Ball'],
		lastevolve: false
	},{
		nummer: '043',
		namn: 'Oddish',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Acid', 'Sludge Bomb', 'Moonblast', 'Seed Bomb'],
		attack: ['Razor Leaf', 'Sludge Bomb'],
		defend: ['Razor Leaf', 'Sludge Bomb'],
		lastevolve: false
	},{
		nummer: '044',
		namn: 'Gloom',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Acid', 'Petal Blizzard', 'Sludge Bomb', 'Moonblast'],
		attack: ['Razor Leaf', 'Sludge Bomb'],
		defend: ['Razor Leaf', 'Sludge Bomb'],
		lastevolve: false
	},{
		nummer: '045',
		namn: 'Vileplume',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Acid', 'Petal Blizzard', 'Solar Beam', 'Moonblast'],
		attack: ['Acid', 'Solar Beam'],
		defend: ['Razor Leaf', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '046',
		namn: 'Paras',
		type: ['Bug', 'Grass'],
		moves: ['Bug Bite', 'Scratch', 'X-Scissor', 'Seed Bomb', 'Cross Poison'],
		attack: ['Bug Bite', 'Seed Bomb'],
		defend: ['Bug Bite', 'Seed Bomb'],
		lastevolve: false
	},{
		nummer: '047',
		namn: 'Parasect',
		type: ['Bug', 'Grass'],
		moves: ['Bug Bite', 'Struggle Bug', 'Fury Cutter', 'Solar Beam', 'X-Scissor', 'Cross Poison'],
		attack: ['Fury Cutter', 'Solar Beam'],
		defend: ['Struggle Bug', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '048',
		namn: 'Venonat',
		type: ['Bug', 'Poison'],
		moves: ['Confusion', 'Bug Bite', 'Signal Beam', 'Poison Fang', 'Psybeam'],
		attack: ['Bug Bite', 'Signal Beam'],
		defend: ['Confusion', 'Signal Beam'],
		lastevolve: false
	},{
		nummer: '049',
		namn: 'Venomoth',
		type: ['Bug', 'Poison'],
		moves: ['Confusion', 'Bug Bite', 'Infestation', 'Psychic', 'Bug Buzz', 'Poison Fang', 'Silver Wind'],
		attack: ['Infestation', 'Bug Buzz'],
		defend: ['Confusion', 'Bug Buzz'],
		lastevolve: true
	},{
		nummer: '050',
		namn: 'Diglett',
		type: ['Ground'],
		moves: ['Mud Slap', 'Scratch', 'Mud Shot', 'Mud Bomb', 'Dig', 'Rock Tomb'],
		attack: ['Mud Slap', 'Dig'],
		defend: ['Mud Slap', 'Dig'],
		lastevolve: false
	},{
		nummer: '051',
		namn: 'Dugtrio',
		type: ['Ground'],
		moves: ['Mud Slap', 'Sucker Punch', 'Mud Shot', 'Stone Edge', 'Earthquake', 'Mud Bomb'],
		attack: ['Mud Slap', 'Earthquake'],
		defend: ['Mud Slap', 'Earthquake'],
		lastevolve: true
	},{
		nummer: '052',
		namn: 'Meowth',
		type: ['Normal'],
		moves: ['Scratch', 'Bite', 'Foul Play', 'Body Slam', 'Dark Pulse', 'Night Slash'],
		attack: ['Scratch', 'Foul Play'],
		defend: ['Scratch', 'Night Slash'],
		lastevolve: false
	},{
		nummer: '053',
		namn: 'Persian',
		type: ['Normal'],
		moves: ['Scratch', 'Feint Attack', 'Foul Play', 'Play Rough', 'Power Gem', 'Night Slash'],
		attack: ['Scratch', 'Play Rough'],
		defend: ['Feint Attack', 'Play Rough'],
		lastevolve: true
	},{
		nummer: '054',
		namn: 'Psyduck',
		type: ['Water'],
		moves: ['Water Gun', 'Zen Headbutt', 'Cross Chop', 'Aqua Tail', 'Psybeam'],
		attack: ['Water Gun', 'Aqua Tail'],
		defend: ['Zen Headbutt', 'Aqua Tail'],
		lastevolve: false
	},{
		nummer: '055',
		namn: 'Golduck',
		type: ['Water'],
		moves: ['Confusion', 'Water Gun', 'Hydro Pump', 'Psychic', 'Ice Beam'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Confusion', 'Hydro Pump'],
		lastevolve: true
	},{
		nummer: '056',
		namn: 'Mankey',
		type: ['Fighting'],
		moves: ['Scratch', 'Karate Chop', 'Cross Chop', 'Brick Break', 'Low Sweep'],
		attack: ['Karate Chop', 'Cross Chop'],
		defend: ['Karate Chop', 'Cross Chop'],
		lastevolve: false
	},{
		nummer: '057',
		namn: 'Primeape',
		type: ['Fighting'],
		moves: ['Counter', 'Karate Chop', 'Low Kick', 'Close Combat', 'Cross Chop', 'Low Sweep', 'Night Slash'],
		attack: ['Counter', 'Close Combat'],
		defend: ['Counter', 'Close Combat'],
		lastevolve: true
	},{
		nummer: '058',
		namn: 'Growlithe',
		type: ['Fire'],
		moves: ['Ember', 'Bite', 'Flamethrower', 'Flame Wheel', 'Body Slam'],
		attack: ['Ember', 'Flamethrower'],
		defend: ['Ember', 'Flamethrower'],
		lastevolve: false
	},{
		nummer: '059',
		namn: 'Arcanine',
		type: ['Fire'],
		moves: ['Fire Fang', 'Bite', 'Snarl', 'Fire Blast', 'Flamethrower', 'Wild Charge', 'Bulldoze', 'Crunch'],
		attack: ['Fire Fang', 'Fire Blast'],
		defend: ['Snarl', 'Fire Blast'],
		lastevolve: true
	},{
		nummer: '060',
		namn: 'Poliwag',
		type: ['Water'],
		moves: ['Bubble', 'Mud Shot', 'Bubble Beam', 'Body Slam', 'Mud Bomb'],
		attack: ['Bubble', 'Bubble Beam'],
		defend: ['Bubble', 'Bubble Beam'],
		lastevolve: false
	},{
		nummer: '061',
		namn: 'Poliwhirl',
		type: ['Water'],
		moves: ['Bubble', 'Mud Shot', 'Bubble Beam', 'Water Pulse', 'Scald', 'Mud Bomb'],
		attack: ['Bubble', 'Bubble Beam'],
		defend: ['Bubble', 'Water Pulse'],
		lastevolve: false
	},{
		nummer: '062',
		namn: 'Poliwrath',
		type: ['Water', 'Fighting'],
		moves: ['Rock Smash', 'Bubble', 'Mud Shot', 'Hydro Pump', 'Dynamic Punch', 'Submission', 'Ice Punch'],
		attack: ['Bubble', 'Dynamic Punch'],
		defend: ['Bubble', 'Dynamic Punch'],
		lastevolve: true
	},{
		nummer: '063',
		namn: 'Abra',
		type: ['Psychic'],
		moves: ['Zen Headbutt', 'Charge Beam', 'Shadow Ball', 'Psyshock', 'Signal Beam'],
		attack: ['Zen Headbutt', 'Shadow Ball'],
		defend: ['Zen Headbutt', 'Shadow Ball'],
		lastevolve: false
	},{
		nummer: '064',
		namn: 'Kadabra',
		type: ['Psychic'],
		moves: ['Confusion', 'Psycho Cut', 'Shadow Ball', 'Dazzling Gleam', 'Psybeam'],
		attack: ['Confusion', 'Shadow Ball'],
		defend: ['Confusion', 'Shadow Ball'],
		lastevolve: false
	},{
		nummer: '065',
		namn: 'Alakazam',
		type: ['Psychic'],
		moves: ['Confusion', 'Psycho Cut', 'Future Sight', 'Psychic', 'Focus Blast', 'Shadow Ball', 'Dazzling Gleam'],
		attack: ['Confusion', 'Future Sight'],
		defend: ['Confusion', 'Shadow Ball'],
		lastevolve: true
	},{
		nummer: '066',
		namn: 'Machop',
		type: ['Fighting'],
		moves: ['Rock Smash', 'Karate Chop', 'Low Kick', 'Cross Chop', 'Brick Break', 'Low Sweep'],
		attack: ['Karate Chop', 'Cross Chop'],
		defend: ['Rock Smash', 'Cross Chop'],
		lastevolve: false
	},{
		nummer: '067',
		namn: 'Machoke',
		type: ['Fighting'],
		moves: ['Karate Chop', 'Low Kick', 'Cross Chop', 'Dynamic Punch', 'Submission', 'Brick Break'],
		attack: ['Karate Chop', 'Dynamic Punch'],
		defend: ['Karate Chop', 'Dynamic Punch'],
		lastevolve: false
	},{
		nummer: '068',
		namn: 'Machamp',
		type: ['Fighting'],
		moves: ['Counter', 'Karate Chop', 'Bullet Punch', 'Close Combat', 'Stone Edge', 'Cross Chop', 'Dynamic Punch', 'Heavy Slam', 'Submission'],
		attack: ['Counter', 'Dynamic Punch'],
		defend: ['Counter', 'Dynamic Punch'],
		lastevolve: true
	},{
		nummer: '069',
		namn: 'Bellsprout',
		type: ['Grass', 'Poison'],
		moves: ['Vine Whip', 'Acid', 'Sludge Bomb', 'Power Whip', 'Wrap'],
		attack: ['Vine Whip', 'Power Whip'],
		defend: ['Acid', 'Power Whip'],
		lastevolve: false
	},{
		nummer: '070',
		namn: 'Weepinbell',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Acid', 'Bullet Seed', 'Sludge Bomb', 'Power Whip', 'Seed Bomb'],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '071',
		namn: 'Victreebel',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Acid', 'Solar Beam', 'Sludge Bomb', 'Leaf Blade'],
		attack: ['Acid', 'Solar Beam'],
		defend: ['Razor Leaf', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '072',
		namn: 'Tentacool',
		type: ['Water', 'Poison'],
		moves: ['Bubble', 'Poison Sting', 'Bubble Beam', 'Water Pulse', 'Wrap'],
		attack: ['Bubble', 'Bubble Beam'],
		defend: ['Bubble', 'Water Pulse'],
		lastevolve: false
	},{
		nummer: '073',
		namn: 'Tentacruel',
		type: ['Water', 'Poison'],
		moves: ['Poison Jab', 'Acid', 'Hydro Pump', 'Blizzard', 'Sludge Wave'],
		attack: ['Poison Jab', 'Hydro Pump'],
		defend: ['Poison Jab', 'Hydro Pump'],
		lastevolve: true
	},{
		nummer: '074',
		namn: 'Geodude',
		type: ['Rock', 'Ground'],
		moves: ['Rock Throw', 'Tackle', 'Rock Slide', 'Rock Tomb', 'Dig'],
		attack: ['Rock Throw', 'Rock Slide'],
		defend: ['Rock Throw', 'Rock Slide'],
		lastevolve: false
	},{
		nummer: '075',
		namn: 'Graveler',
		type: ['Rock', 'Ground'],
		moves: ['Rock Throw', 'Mud Slap', 'Mud Shot', 'Stone Edge', 'Rock Slide', 'Rock Blast', 'Dig'],
		attack: ['Rock Throw', 'Stone Edge'],
		defend: ['Mud Slap', 'Dig'],
		lastevolve: false
	},{
		nummer: '076',
		namn: 'Golem',
		type: ['Rock', 'Ground'],
		moves: ['Rock Throw', 'Mud Slap', 'Mud Shot', 'Stone Edge', 'Earthquake', 'Rock Blast', 'Ancient Power'],
		attack: ['Rock Throw', 'Stone Edge'],
		defend: ['Mud Slap', 'Earthquake'],
		lastevolve: true
	},{
		nummer: '077',
		namn: 'Ponyta',
		type: ['Fire'],
		moves: ['Ember', 'Tackle', 'Fire Blast', 'Stomp', 'Flame Wheel', 'Flame Charge'],
		attack: ['Ember', 'Flame Charge'],
		defend: ['Ember', 'Flame Charge'],
		lastevolve: false
	},{
		nummer: '078',
		namn: 'Rapidash',
		type: ['Fire'],
		moves: ['Fire Spin', 'Ember', 'Low Kick', 'Fire Blast', 'Heat Wave', 'Drill Run'],
		attack: ['Fire Spin', 'Fire Blast'],
		defend: ['Fire Spin', 'Fire Blast'],
		lastevolve: true
	},{
		nummer: '079',
		namn: 'Slowpoke',
		type: ['Water', 'Psychic'],
		moves: ['Confusion', 'Water Gun', 'Psychic', 'Psyshock', 'Water Pulse'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Psyshock'],
		lastevolve: false
	},{
		nummer: '080',
		namn: 'Slowbro',
		type: ['Water', 'Psychic'],
		moves: ['Confusion', 'Water Gun', 'Psychic', 'Ice Beam', 'Water Pulse'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Ice Beam'],
		lastevolve: true
	},{
		nummer: '081',
		namn: 'Magnemite',
		type: ['Electric', 'Steel'],
		moves: ['Spark', 'Thunder Shock', 'Thunderbolt', 'Discharge', 'Magnet Bomb'],
		attack: ['Thunder Shock', 'Thunderbolt'],
		defend: ['Spark', 'Magnet Bomb'],
		lastevolve: false
	},{
		nummer: '082',
		namn: 'Magneton',
		type: ['Electric', 'Steel'],
		moves: ['Spark', 'Thunder Shock', 'Charge Beam', 'Zap Cannon', 'Flash Cannon', 'Discharge', 'Magnet Bomb'],
		attack: ['Spark', 'Zap Cannon'],
		defend: ['Charge Beam', 'Magnet Bomb'],
		lastevolve: true
	},{
		nummer: '083',
		namn: 'Farfetch\'d',
		type: ['Normal', 'Flying'],
		moves: ['Air Slash', 'Cut', 'Fury Cutter', 'Leaf Blade', 'Aerial Ace', 'Air Cutter'],
		attack: ['Air Slash', 'Leaf Blade'],
		defend: ['Air Slash', 'Leaf Blade'],
		lastevolve: true
	},{
		nummer: '084',
		namn: 'Doduo',
		type: ['Normal', 'Flying'],
		moves: ['Peck', 'Quick Attack', 'Brave Bird', 'Drill Peck', 'Aerial Ace', 'Swift'],
		attack: ['Quick Attack', 'Brave Bird'],
		defend: ['Peck', 'Drill Peck'],
		lastevolve: false
	},{
		nummer: '085',
		namn: 'Dodrio',
		type: ['Normal', 'Flying'],
		moves: ['Steel Wing', 'Feint Attack', 'Brave Bird', 'Drill Peck', 'Aerial Ace', 'Air Cutter'],
		attack: ['Steel Wing', 'Drill Peck'],
		defend: ['Feint Attack', 'Drill Peck'],
		lastevolve: true
	},{
		nummer: '086',
		namn: 'Seel',
		type: ['Water'],
		moves: ['Water Gun', 'Lick', 'Ice Shard', 'Aqua Tail', 'Aurora Beam', 'Aqua Jet', 'Icy Wind'],
		attack: ['Lick', 'Aqua Tail'],
		defend: ['Ice Shard', 'Aqua Tail'],
		lastevolve: false
	},{
		nummer: '087',
		namn: 'Dewgong',
		type: ['Water', 'Ice'],
		moves: ['Iron Tail', 'Frost Breath', 'Ice Shard', 'Blizzard', 'Aurora Beam', 'Water Pulse', 'Icy Wind', 'Aqua Jet'],
		attack: ['Frost Breath', 'Blizzard'],
		defend: ['Iron Tail', 'Blizzard'],
		lastevolve: true
	},{
		nummer: '088',
		namn: 'Grimer',
		type: ['Poison'],
		moves: ['Poison Jab', 'Acid', 'Mud Slap', 'Sludge Bomb', 'Sludge', 'Mud Bomb'],
		attack: ['Poison Jab', 'Sludge Bomb'],
		defend: ['Mud Slap', 'Sludge Bomb'],
		lastevolve: false
	},{
		nummer: '089',
		namn: 'Muk',
		type: ['Poison'],
		moves: ['Poison Jab', 'Acid', 'Lick', 'Infestation', 'Gunk Shot', 'Sludge Wave', 'Dark Pulse'],
		attack: ['Poison Jab', 'Gunk Shot'],
		defend: ['Infestation', 'Gunk Shot'],
		lastevolve: true
	},{
		nummer: '090',
		namn: 'Shellder',
		type: ['Water'],
		moves: ['Tackle', 'Ice Shard', 'Bubble Beam', 'Water Pulse', 'Icy Wind'],
		attack: ['Tackle', 'Water Pulse'],
		defend: ['Ice Shard', 'Water Pulse'],
		lastevolve: false
	},{
		nummer: '091',
		namn: 'Cloyster',
		type: ['Water', 'Ice'],
		moves: ['Frost Breath', 'Ice Shard', 'Blizzard', 'Hydro Pump', 'Avalanche', 'Aurora Beam', 'Icy Wind'],
		attack: ['Frost Breath', 'Avalanche'],
		defend: ['Ice Shard', 'Avalanche'],
		lastevolve: true
	},{
		nummer: '092',
		namn: 'Gastly',
		type: ['Ghost', 'Poison'],
		moves: ['Lick', 'Sucker Punch', 'Astonish', 'Sludge Bomb', 'Night Shade', 'Dark Pulse', 'Ominous Wind'],
		attack: ['Lick', 'Sludge Bomb'],
		defend: ['Astonish', 'Sludge Bomb'],
		lastevolve: false
	},{
		nummer: '093',
		namn: 'Haunter',
		type: ['Ghost', 'Poison'],
		moves: ['Shadow Claw', 'Lick', 'Astonish', 'Sludge Bomb', 'Shadow Ball', 'Shadow Punch', 'Dark Pulse'],
		attack: ['Shadow Claw', 'Sludge Bomb'],
		defend: ['Astonish', 'Sludge Bomb'],
		lastevolve: false
	},{
		nummer: '094',
		namn: 'Gengar',
		type: ['Ghost', 'Poison'],
		moves: ['Shadow Claw', 'Sucker Punch', 'Hex', 'Sludge Bomb', 'Sludge Wave', 'Focus Blast', 'Shadow Ball', 'Dark Pulse'],
		attack: ['Hex', 'Shadow Ball'],
		defend: ['Hex', 'Shadow Ball'],
		lastevolve: true
	},{
		nummer: '095',
		namn: 'Onix',
		type: ['Rock', 'Ground'],
		moves: ['Rock Throw', 'Tackle', 'Stone Edge', 'Rock Slide', 'Heavy Slam', 'Iron Head', 'Sand Tomb'],
		attack: ['Rock Throw', 'Stone Edge'],
		defend: ['Rock Throw', 'Sand Tomb'],
		lastevolve: false
	},{
		nummer: '096',
		namn: 'Drowzee',
		type: ['Psychic'],
		moves: ['Confusion', 'Pound', 'Psychic', 'Psyshock', 'Psybeam'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Psyshock'],
		lastevolve: false
	},{
		nummer: '097',
		namn: 'Hypno',
		type: ['Psychic'],
		moves: ['Confusion', 'Zen Headbutt', 'Future Sight', 'Psychic', 'Focus Blast', 'Shadow Ball', 'Psyshock'],
		attack: ['Confusion', 'Future Sight'],
		defend: ['Confusion', 'Future Sight'],
		lastevolve: true
	},{
		nummer: '098',
		namn: 'Krabby',
		type: ['Water'],
		moves: ['Bubble', 'Mud Shot', 'Bubble Beam', 'Water Pulse', 'Vice Grip'],
		attack: ['Bubble', 'Bubble Beam'],
		defend: ['Bubble', 'Water Pulse'],
		lastevolve: false
	},{
		nummer: '099',
		namn: 'Kingler',
		type: ['Water'],
		moves: ['Bubble', 'Metal Claw', 'Mud Shot', 'X-Scissor', 'Water Pulse', 'Vice Grip'],
		attack: ['Bubble', 'Water Pulse'],
		defend: ['Bubble', 'Water Pulse'],
		lastevolve: true
	},{
		nummer: '100',
		namn: 'Voltorb',
		type: ['Electric'],
		moves: ['Spark', 'Tackle', 'Thunderbolt', 'Discharge', 'Signal Beam', 'Gyro Ball'],
		attack: ['Spark', 'Thunderbolt'],
		defend: ['Spark', 'Discharge'],
		lastevolve: false
	},{
		nummer: '101',
		namn: 'Electrode',
		type: ['Electric'],
		moves: ['Volt Switch', 'Spark', 'Tackle', 'Hyper Beam', 'Thunderbolt', 'Discharge'],
		attack: ['Spark', 'Thunderbolt'],
		defend: ['Volt Switch', 'Thunderbolt'],
		lastevolve: true
	},{
		nummer: '102',
		namn: 'Exeggcute',
		type: ['Grass', 'Psychic'],
		moves: ['Confusion', 'Bullet Seed', 'Psychic', 'Seed Bomb', 'Ancient Power'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Seed Bomb'],
		lastevolve: false
	},{
		nummer: '103',
		namn: 'Exeggutor',
		type: ['Grass', 'Psychic'],
		moves: ['Confusion', 'Zen Headbutt', 'Extrasensory', 'Bullet Seed', 'Solar Beam', 'Psychic', 'Seed Bomb'],
		attack: ['Extrasensory', 'Solar Beam'],
		defend: ['Extrasensory', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '104',
		namn: 'Cubone',
		type: ['Ground'],
		moves: ['Mud Slap', 'Rock Smash', 'Bone Club', 'Bulldoze', 'Dig'],
		attack: ['Mud Slap', 'Dig'],
		defend: ['Mud Slap', 'Dig'],
		lastevolve: false
	},{
		nummer: '105',
		namn: 'Marowak',
		type: ['Ground'],
		moves: ['Mud Slap', 'Rock Smash', 'Earthquake', 'Bone Club', 'Dig'],
		attack: ['Mud Slap', 'Earthquake'],
		defend: ['Mud Slap', 'Dig'],
		lastevolve: true
	},{
		nummer: '106',
		namn: 'Hitmonlee',
		type: ['Fighting'],
		moves: ['Rock Smash', 'Low Kick', 'Close Combat', 'Stone Edge', 'Stomp', 'Brick Break', 'Low Sweep'],
		attack: ['Rock Smash', 'Rock Smash'],
		defend: ['Rock Smash', 'Rock Smash'],
		lastevolve: true
	},{
		nummer: '107',
		namn: 'Hitmonchan',
		type: ['Fighting'],
		moves: ['Counter', 'Rock Smash', 'Bullet Punch', 'Close Combat', 'Brick Break', 'Ice Punch', 'Thunder Punch', 'Fire Punch'],
		attack: ['Counter', 'Close Combat'],
		defend: ['Counter', 'Fire Punch'],
		lastevolve: true
	},{
		nummer: '108',
		namn: 'Lickitung',
		type: ['Normal'],
		moves: ['Zen Headbutt', 'Lick', 'Hyper Beam', 'Stomp', 'Power Whip'],
		attack: ['Lick', 'Hyper Beam'],
		defend: ['Zen Headbutt', 'Power Whip'],
		lastevolve: true
	},{
		nummer: '109',
		namn: 'Koffing',
		type: ['Poison'],
		moves: ['Acid', 'Tackle', 'Infestation', 'Sludge Bomb', 'Sludge', 'Dark Pulse'],
		attack: ['Infestation', 'Sludge Bomb'],
		defend: ['Infestation', 'Sludge Bomb'],
		lastevolve: false
	},{
		nummer: '110',
		namn: 'Weezing',
		type: ['Poison'],
		moves: ['Acid', 'Tackle', 'Infestation', 'Sludge Bomb', 'Shadow Ball', 'Dark Pulse'],
		attack: ['Acid', 'Power Whip'],
		defend: ['Bullet Seed', 'Power Whip'],
		lastevolve: true
	},{
		nummer: '111',
		namn: 'Rhyhorn',
		type: ['Ground', 'Rock'],
		moves: ['Mud Slap', 'Rock Smash', 'Stomp', 'Bulldoze', 'Horn Attack'],
		attack: ['Mud Slap', 'Bulldoze'],
		defend: ['Mud Slap', 'Bulldoze'],
		lastevolve: false
	},{
		nummer: '112',
		namn: 'Rhydon',
		type: ['Ground', 'Rock'],
		moves: ['Mud Slap', 'Rock Smash', 'Stone Edge', 'Megahorn', 'Earthquake', 'Surf'],
		attack: ['Mud Slap', 'Earthquake'],
		defend: ['Mud Slap', 'Earthquake'],
		lastevolve: true
	},{
		nummer: '113',
		namn: 'Chansey',
		type: ['Normal'],
		moves: ['Pound', 'Zen Headbutt', 'Hyper Beam', 'Psychic', 'Dazzling Gleam', 'Psybeam'],
		attack: ['Pound', 'Hyper Beam'],
		defend: ['Zen Headbutt', 'Dazzling Gleam'],
		lastevolve: false
	},{
		nummer: '114',
		namn: 'Tangela',
		type: ['Grass'],
		moves: ['Vine Whip', 'Infestation', 'Solar Beam', 'Power Whip', 'Grass Knot', 'Sludge Bomb'],
		attack: ['Vine Whip', 'Solar Beam'],
		defend: ['Infestation', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '115',
		namn: 'Kangaskhan',
		type: ['Normal'],
		moves: ['Mud Slap', 'Low Kick', 'Stomp', 'Earthquake', 'Outrage', 'Brick Break', 'Crunch'],
		attack: ['Mud Slap', 'Outrage'],
		defend: ['Mud Slap', 'Outrage'],
		lastevolve: true
	},{
		nummer: '116',
		namn: 'Horsea',
		type: ['Water'],
		moves: ['Water Gun', 'Bubble', 'Flash Cannon', 'Bubble Beam', 'Dragon Pulse'],
		attack: ['Bubble', 'Dragon Pulse'],
		defend: ['Bubble', 'Dragon Pulse'],
		lastevolve: false
	},{
		nummer: '117',
		namn: 'Seadra',
		type: ['Water'],
		moves: ['Dragon Breath', 'Water Gun', 'Hydro Pump', 'Blizzard', 'Dragon Pulse', 'Aurora Beam'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Water Gun', 'Dragon Pulse'],
		lastevolve: true
	},{
		nummer: '118',
		namn: 'Goldeen',
		type: ['Water'],
		moves: ['Peck', 'Mud Shot', 'Aqua Tail', 'Water Pulse', 'Horn Attack'],
		attack: ['Peck', 'Aqua Tail'],
		defend: ['Peck', 'Aqua Tail'],
		lastevolve: false
	},{
		nummer: '119',
		namn: 'Seaking',
		type: ['Water'],
		moves: ['Waterfall', 'Poison Jab', 'Peck', 'Megahorn', 'Drill Run', 'Ice Beam', 'Water Pulse', 'Icy Wind'],
		attack: ['Waterfall', 'Ice Beam'],
		defend: ['Waterfall', 'Ice Beam'],
		lastevolve: true
	},{
		nummer: '120',
		namn: 'Staryu',
		type: ['Water'],
		moves: ['Water Gun', 'Quick Attack', 'Tackle', 'Bubble Beam', 'Power Gem', 'Swift'],
		attack: ['Water Gun', 'Power Gem'],
		defend: ['Water Gun', 'Bubble Beam'],
		lastevolve: false
	},{
		nummer: '121',
		namn: 'Starmie',
		type: ['Water', 'Psychic'],
		moves: ['Water Gun', 'Quick Attack', 'Tackle', 'Hidden Power', 'Hydro Pump', 'Psychic', 'Power Gem', 'Psybeam'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Hidden Power', 'Hydro Pump'],
		lastevolve: true
	},{
		nummer: '122',
		namn: 'Mr. Mime',
		type: ['Psychic', 'Fairy'],
		moves: ['Confusion', 'Zen Headbutt', 'Psychic', 'Shadow Ball', 'Psybeam'],
		attack: ['Confusion', 'Shadow Ball'],
		defend: ['Confusion', 'Shadow Ball'],
		lastevolve: true
	},{
		nummer: '123',
		namn: 'Scyther',
		type: ['Bug', 'Flying'],
		moves: ['Air Slash', 'Steel Wing', 'Fury Cutter', 'X-Scissor', 'Bug Buzz', 'Aerial Ace', 'Night Slash'],
		attack: ['Air Slash', 'X-Scissor'],
		defend: ['Air Slash', 'Aerial Ace'],
		lastevolve: false
	},{
		nummer: '124',
		namn: 'Jynx',
		type: ['Ice', 'Psychic'],
		moves: ['Confusion', 'Frost Breath', 'Pound', 'Avalanche', 'Ice Punch', 'Psyshock', 'Draining Kiss'],
		attack: ['Confusion', 'Avalanche'],
		defend: ['Confusion', 'Avalanche'],
		lastevolve: true
	},{
		nummer: '125',
		namn: 'Electabuzz',
		type: ['Electric'],
		moves: ['Low Kick', 'Thunder Shock', 'Thunder', 'Thunderbolt', 'Thunder Punch'],
		attack: ['Thunder Shock', 'Thunderbolt'],
		defend: ['Thunder Shock', 'Thunderbolt'],
		lastevolve: true
	},{
		nummer: '126',
		namn: 'Magmar',
		type: ['Fire'],
		moves: ['Ember', 'Karate Chop', 'Fire Blast', 'Flamethrower', 'Fire Punch'],
		attack: ['Ember', 'Fire Blast'],
		defend: ['Ember', 'Flamethrower'],
		lastevolve: true
	},{
		nummer: '127',
		namn: 'Pinsir',
		type: ['Bug'],
		moves: ['Bug Bite', 'Rock Smash', 'Fury Cutter', 'Close Combat', 'X-Scissor', 'Submission', 'Vice Grip'],
		attack: ['Bug Bite', 'Close Combat'],
		defend: ['Rock Smash', 'X-Scissor'],
		lastevolve: true
	},{
		nummer: '128',
		namn: 'Tauros',
		type: ['Normal'],
		moves: ['Tackle', 'Zen Headbutt', 'Earthquake', 'Iron Head', 'Horn Attack'],
		attack: ['Tackle', 'Earthquake'],
		defend: ['Zen Headbutt', 'Horn Attack'],
		lastevolve: true
	},{
		nummer: '129',
		namn: 'Magikarp',
		type: ['Water'],
		moves: ['Splash', 'Struggle'],
		attack: ['Splash', 'Struggle'],
		defend: ['Splash', 'Struggle'],
		lastevolve: false
	},{
		nummer: '130',
		namn: 'Gyarados',
		type: ['Water', 'Flying'],
		moves: ['Waterfall', 'Dragon Tail', 'Bite', 'Dragon Breath', 'Hydro Pump', 'Outrage', 'Dragon Pulse', 'Crunch', 'Twister'],
		attack: ['Waterfall', 'Hydro Pump'],
		defend: ['Waterfall', 'Outrage'],
		lastevolve: true
	},{
		nummer: '131',
		namn: 'Lapras',
		type: ['Water', 'Ice'],
		moves: ['Frost Breath', 'Ice Shard', 'Water Gun', 'Blizzard', 'Hydro Pump', 'Ice Beam', 'Dragon Pulse', 'Surf'],
		attack: ['Water Gun', 'Blizzard'],
		defend: ['Frost Breath', 'Ice Beam'],
		lastevolve: true
	},{
		nummer: '132',
		namn: 'Ditto',
		type: ['Normal'],
		moves: ['Pound', 'Transform', 'Struggle'],
		attack: ['Transform', 'Struggle'],
		defend: ['Transform', 'Struggle'],
		lastevolve: true
	},{
		nummer: '133',
		namn: 'Eevee',
		type: ['Normal'],
		moves: ['Quick Attack', 'Tackle', 'Body Slam', 'Swift', 'Dig'],
		attack: ['Quick Attack', 'Swift'],
		defend: ['Quick Attack', 'Dig'],
		lastevolve: false
	},{
		nummer: '134',
		namn: 'Vaporeon',
		type: ['Water'],
		moves: ['Water Gun', 'Hydro Pump', 'Aqua Tail', 'Water Pulse'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Water Gun', 'Aqua Tail'],
		lastevolve: true
	},{
		nummer: '135',
		namn: 'Jolteon',
		type: ['Electric'],
		moves: ['Volt Switch', 'Thunder Shock', 'Thunder', 'Thunderbolt', 'Discharge'],
		attack: ['Thunder Shock', 'Thunderbolt'],
		defend: ['Volt Switch', 'Thunderbolt'],
		lastevolve: true
	},{
		nummer: '136',
		namn: 'Flareon',
		type: ['Fire'],
		moves: ['Fire Spin', 'Ember', 'Overheat', 'Fire Blast', 'Flamethrower', 'Heat Wave'],
		attack: ['Fire Spin', 'Overheat'],
		defend: ['Fire Spin', 'Overheat'],
		lastevolve: true
	},{
		nummer: '137',
		namn: 'Porygon',
		type: ['Normal'],
		moves: ['Tackle', 'Quick Attack', 'Hidden Power', 'Zen Headbutt', 'Charge Beam', 'Hyper Beam', 'Zap Cannon', 'Solar Beam', 'Discharge', 'Signal Beam', 'Psybeam'],
		attack: ['Hidden Power', 'Hyper Beam'],
		defend: ['Hidden Power', 'Hyper Beam'],
		lastevolve: false
	},{
		nummer: '138',
		namn: 'Omanyte',
		type: ['Rock', 'Water'],
		moves: ['Water Gun', 'Mud Shot', 'Brine', 'Rock Blast', 'Bubble Beam', 'Rock Tomb', 'Ancient Power'],
		attack: ['Water Gun', 'Ancient Power'],
		defend: ['Mud Shot', 'Ancient Power'],
		lastevolve: false
	},{
		nummer: '139',
		namn: 'Omastar',
		type: ['Rock', 'Water'],
		moves: ['Rock Throw', 'Water Gun', 'Mud Shot', 'Hydro Pump', 'Rock Slide', 'Rock Blast', 'Ancient Power'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Mud Shot', 'Ancient Power'],
		lastevolve: true
	},{
		nummer: '140',
		namn: 'Kabuto',
		type: ['Rock', 'Water'],
		moves: ['Scratch', 'Mud Shot', 'Rock Tomb', 'Ancient Power', 'Aqua Jet'],
		attack: ['Scratch', 'Ancient Power'],
		defend: ['Mud Shot', 'Ancient Power'],
		lastevolve: false
	},{
		nummer: '141',
		namn: 'Kabutops',
		type: ['Rock', 'Water'],
		moves: ['Rock Smash', 'Mud Shot', 'Fury Cutter', 'Stone Edge', 'Water Pulse', 'Ancient Power'],
		attack: ['Rock Smash', 'Stone Edge'],
		defend: ['Rock Smash', 'Ancient Power'],
		lastevolve: true
	},{
		nummer: '142',
		namn: 'Aerodactyl',
		type: ['Rock', 'Flying'],
		moves: ['Steel Wing', 'Bite', 'Hyper Beam', 'Iron Head', 'Ancient Power'],
		attack: ['Steel Wing', 'Hyper Beam'],
		defend: ['Steel Wing', 'Ancient Power'],
		lastevolve: true
	},{
		nummer: '143',
		namn: 'Snorlax',
		type: ['Normal'],
		moves: ['Zen Headbutt', 'Lick', 'Hyper Beam', 'Earthquake', 'Heavy Slam', 'Body Slam'],
		attack: ['Lick', 'Hyper Beam'],
		defend: ['Zen Headbutt', 'Hyper Beam'],
		lastevolve: true
	},{
		nummer: '144',
		namn: 'Articuno',
		type: ['Ice', 'Flying'],
		moves: ['Frost Breath', 'Blizzard', 'Ice Beam', 'Icy Wind'],
		attack: ['Frost Breath', 'Blizzard'],
		defend: ['Frost Breath', 'Ice Beam'],
		lastevolve: true
	},{
		nummer: '145',
		namn: 'Zapdos',
		type: ['Electric', 'Flying'],
		moves: ['Thunder Shock', 'Charge Beam', 'Thunder', 'Zap Cannon', 'Thunderbolt', 'Discharge'],
		attack: ['Charge Beam', 'Zap Cannon'],
		defend: ['Charge Beam', 'Zap Cannon'],
		lastevolve: true
	},{
		nummer: '146',
		namn: 'Moltres',
		type: ['Fire', 'Flying'],
		moves: ['Fire Spin', 'Ember', 'Overheat', 'Fire Blast', 'Flamethrower', 'Heat Wave'],
		attack: ['Fire Spin', 'Overheat'],
		defend: ['Fire Spin', 'Overheat'],
		lastevolve: true
	},{
		nummer: '147',
		namn: 'Dratini',
		type: ['Dragon'],
		moves: ['Dragon Breath', 'Iron Tail', 'Aqua Tail', 'Wrap', 'Twister'],
		attack: ['Dragon Breath', 'Aqua Tail'],
		defend: ['Iron Tail', 'Wrap'],
		lastevolve: false
	},{
		nummer: '148',
		namn: 'Dragonair',
		type: ['Dragon'],
		moves: ['Dragon Breath', 'Iron Tail', 'Dragon Pulse', 'Aqua Tail', 'Wrap'],
		attack: ['Dragon Breath', 'Dragon Pulse'],
		defend: ['Iron Tail', 'Dragon Pulse'],
		lastevolve: false
	},{
		nummer: '149',
		namn: 'Dragonite',
		type: ['Dragon', 'Flying'],
		moves: ['Dragon Tail', 'Dragon Breath', 'Steel Wing', 'Hurricane', 'Hyper Beam', 'Dragon Claw', 'Outrage', 'Dragon Pulse'],
		attack: ['Dragon Tail', 'Outrage'],
		defend: ['Dragon Tail', 'Outrage'],
		lastevolve: true
	},{
		nummer: '150',
		namn: 'Mewtwo',
		type: ['Psychic'],
		moves: ['Confusion', 'Psycho Cut', 'Psychic', 'Focus Blast', 'Hyper Beam', 'Shadow Ball'],
		attack: ['Confusion', 'Shadow Ball'],
		defend: ['Confusion', 'Shadow Ball'],
		lastevolve: true
	},{
		nummer: '151',
		namn: 'Mew',
		type: ['Psychic'],
		moves: ['Pound', 'Psychic', 'Blizzard', 'Thunder', 'Hurricane', 'Focus Blast', 'Hyper Beam', 'Solar Beam', 'Earthquake', 'Moonblast', 'Fire Blast', 'Dragon Pulse'],
		attack: ['Pound', 'Solar Beam'],
		defend: ['Pound', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '152',
		namn: 'Chikorita',
		type: ['Grass'],
		moves: ['Razor Leaf', 'Vine Whip', 'Tackle', 'Grass Knot', 'Energy Ball', 'Body Slam'],
		attack: ['Vine Whip', 'Grass Knot'],
		defend: ['Vine Whip', 'Grass Knot'],
		lastevolve: false
	},{
		nummer: '153',
		namn: 'Bayleef',
		type: ['Grass'],
		moves: ['Razor Leaf', 'Tackle', 'Grass Knot', 'Energy Ball', 'Ancient Power'],
		attack: ['Razor Leaf', 'Grass Knot'],
		defend: ['Razor Leaf', 'Grass Knot'],
		lastevolve: false
	},{
		nummer: '154',
		namn: 'Meganium',
		type: ['Grass'],
		moves: ['Razor Leaf', 'Vine Whip', 'Petal Blizzard', 'Solar Beam', 'Earthquake'],
		attack: ['Vine Whip', 'Solar Beam'],
		defend: ['Razor Leaf', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '155',
		namn: 'Cyndaquil',
		type: ['Fire'],
		moves: ['Ember', 'Tackle', 'Flamethrower', 'Flame Charge', 'Swift'],
		attack: ['Ember', 'Flamethrower	'],
		defend: ['Ember', 'Flame Charge'],
		lastevolve: false
	},{
		nummer: '156',
		namn: 'Quilava',
		type: ['Fire'],
		moves: ['Ember', 'Tackle', 'Flamethrower', 'Flame Charge', 'Dig'],
		attack: ['Ember', 'Flamethrower'],
		defend: ['Ember', 'Flame Charge'],
		lastevolve: false
	},{
		nummer: '157',
		namn: 'Typhlosion',
		type: ['Fire'],
		moves: ['Shadow Claw', 'Ember', 'Overheat', 'Fire Blast', 'Solar Beam'],
		attack: ['Ember', 'Overheat'],
		defend: ['Ember', 'Overheat'],
		lastevolve: true
	},{
		nummer: '158',
		namn: 'Totodile',
		type: ['Water'],
		moves: ['Scratch', 'Water Gun', 'Water Pulse', 'Crunch', 'Aqua Jet'],
		attack: ['Water Gun', 'Water Pulse'],
		defend: ['Water Gun', 'Crunch'],
		lastevolve: false
	},{
		nummer: '159',
		namn: 'Croconaw',
		type: ['Water'],
		moves: ['Scratch', 'Water Gun', 'Ice Punch', 'Water Pulse', 'Crunch'],
		attack: ['Water Gun', 'Water Pulse'],
		defend: ['Water Gun', 'Crunch'],
		lastevolve: false
	},{
		nummer: '160',
		namn: 'Feraligatr',
		type: ['Water'],
		moves: ['Waterfall', 'Bite', 'Water Gun', 'Hydro Pump', 'Ice Beam', 'Crunch'],
		attack: ['Waterfall', 'Hydro Pump'],
		defend: ['Waterfall', 'Hydro Pump'],
		lastevolve: true
	},{
		nummer: '161',
		namn: 'Sentret',
		type: ['Normal'],
		moves: ['Scratch', 'Quick Attack', 'Grass Knot', 'Brick Break', 'Dig'],
		attack: ['Quick Attack', 'Grass Knot'],
		defend: ['Quick Attack', 'Dig'],
		lastevolve: false
	},{
		nummer: '162',
		namn: 'Furret',
		type: ['Normal'],
		moves: ['Quick Attack', 'Sucker Punch', 'Hyper Beam', 'Brick Break', 'Dig'],
		attack: ['Quick Attack', 'Hyper Beam'],
		defend: ['Quick Attack', 'Hyper Beam'],
		lastevolve: true
	},{
		nummer: '163',
		namn: 'Hoothoot',
		type: ['Normal', 'Flying'],
		moves: ['Peck', 'Feint Attack', 'Sky Attack', 'Aerial Ace', 'Night Shade'],
		attack: ['Peck', 'Sky Attack'],
		defend: ['Peck', 'Aerial Ace'],
		lastevolve: false
	},{
		nummer: '164',
		namn: 'Noctowl',
		type: ['Normal', 'Flying'],
		moves: ['Peck', 'Wing Attack', 'Extrasensory', 'Sky Attack', 'Psychic', 'Night Shade'],
		attack: ['Wing Attack', 'Sky Attack'],
		defend: ['Extrasensory', 'Sky Attack'],
		lastevolve: true
	},{
		nummer: '165',
		namn: 'Ledyba',
		type: ['Bug', 'Flying'],
		moves: ['Bug Bite', 'Tackle', 'Aerial Ace', 'Silver Wind', 'Swift'],
		attack: ['Bug Bite', 'Aerial Ace'],
		defend: ['Bug Bite', 'Silver Wind'],
		lastevolve: false
	},{
		nummer: '166',
		namn: 'Ledian',
		type: ['Bug', 'Flying'],
		moves: ['Bug Bite', 'Struggle Bug', 'Bug Buzz', 'Aerial Ace', 'Silver Wind'],
		attack: ['Bug Bite', 'Bug Buzz'],
		defend: ['Struggle Bug', 'Bug Buzz'],
		lastevolve: true
	},{
		nummer: '167',
		namn: 'Spinarak',
		type: ['Bug', 'Poison'],
		moves: ['Bug Bite', 'Poison Sting', 'Cross Poison', 'Signal Beam', 'Night Slash'],
		attack: ['Bug Bite', 'Signal Beam'],
		defend: ['Bug Bite', 'Signal Beam'],
		lastevolve: false
	},{
		nummer: '168',
		namn: 'Ariados',
		type: ['Bug', 'Poison'],
		moves: ['Bug Bite', 'Infestation', 'Poison Sting', 'Megahorn', 'Cross Poison', 'Shadow Sneak'],
		attack: ['Infestation', 'Megahorn'],
		defend: ['Infestation', 'Cross Poison'],
		lastevolve: true
	},{
		nummer: '169',
		namn: 'Crobat',
		type: ['Poison', 'Flying'],
		moves: ['Air Slash', 'Bite', 'Wing Attack', 'Sludge Bomb', 'Shadow Ball', 'Air Cutter'],
		attack: ['Air Slash', 'Sludge Bomb'],
		defend: ['Air Slash', 'Shadow Ball'],
		lastevolve: true
	},{
		nummer: '170',
		namn: 'Chinchou',
		type: ['Water', 'Electric'],
		moves: ['Bubble', 'Spark', 'Thunderbolt', 'Bubble Beam', 'Water Pulse'],
		attack: ['Bubble', 'Thunderbolt'],
		defend: ['Bubble', 'Thunderbolt'],
		lastevolve: false
	},{
		nummer: '171',
		namn: 'Lanturn',
		type: ['Water', 'Electric'],
		moves: ['Water Gun', 'Spark', 'Charge Beam', 'Thunder', 'Hydro Pump', 'Thunderbolt'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Charge Beam', 'Thunderbolt'],
		lastevolve: true
	},{
		nummer: '172',
		namn: 'Pichu',
		type: ['Electric'],
		moves: ['Quick Attack', 'Thunder Shock', 'Thunderbolt', 'Thunder Punch', 'Disarming Voice'],
		attack: ['Thunder Shock', 'Thunderbolt'],
		defend: ['Thunder Shock', 'Thunderbolt'],
		lastevolve: false
	},{
		nummer: '173',
		namn: 'Cleffa',
		type: ['Fairy'],
		moves: ['Pound', 'Zen Headbutt', 'Psychic', 'Grass Knot', 'Body Slam', 'Signal Beam', 'Psyshock'],
		attack: ['Pound', 'Grass Knot'],
		defend: ['Zen Headbutt', 'Grass Knot'],
		lastevolve: false
	},{
		nummer: '174',
		namn: 'Igglybuff',
		type: ['Normal', 'Fairy'],
		moves: ['Pound', 'Feint Attack', 'Psychic', 'Wild Charge', 'Shadow Ball', 'Body Slam'],
		attack: ['Pound', 'Shadow Ball'],
		defend: ['Feint Attack', 'Shadow Ball'],
		lastevolve: false
	},{
		nummer: '175',
		namn: 'Togepi',
		type: ['Fairy'],
		moves: ['Zen Headbutt', 'Peck', 'Hidden Power', 'Dazzling Gleam', 'Psyshock', 'Ancient Power'],
		attack: ['Peck', 'Dazzling Gleam'],
		defend: ['Hidden Power', 'Dazzling Gleam'],
		lastevolve: false
	},{
		nummer: '176',
		namn: 'Togetic',
		type: ['Fairy', 'Flying'],
		moves: ['Steel Wing', 'Zen Headbutt', 'Extrasensory', 'Hidden Power', 'Dazzling Gleam', 'Aerial Ace', 'Ancient Power'],
		attack: ['Extrasensory', 'Dazzling Gleam'],
		defend: ['Hidden Power', 'Dazzling Gleam'],
		lastevolve: true
	},{
		nummer: '177',
		namn: 'Natu',
		type: ['Psychic', 'Flying'],
		moves: ['Peck', 'Quick Attack', 'Drill Peck', 'Psyshock', 'Night Shade'],
		attack: ['Peck', 'Drill Peck'],
		defend: ['Peck', 'Psyshock'],
		lastevolve: false
	},{
		nummer: '178',
		namn: 'Xatu',
		type: ['Psychic', 'Flying'],
		moves: ['Air Slash', 'Feint Attack', 'Future Sight', 'Aerial Ace', 'Ominous Wind'],
		attack: ['Air Slash', 'Future Sight'],
		defend: ['Air Slash', 'Aerial Ace'],
		lastevolve: true
	},{
		nummer: '179',
		namn: 'Mareep',
		type: ['Electric'],
		moves: ['Tackle', 'Thunder Shock', 'Thunderbolt', 'Discharge', 'Body Slam'],
		attack: ['Thunder Shock', 'Thunderbolt'],
		defend: ['Thunder Shock', 'Thunderbolt'],
		lastevolve: false
	},{
		nummer: '180',
		namn: 'Flaaffy',
		type: ['Electric'],
		moves: ['Tackle', 'Charge Beam', 'Thunderbolt', 'Discharge', 'Power Gem'],
		attack: ['Charge Beam', 'Thunderbolt'],
		defend: ['Charge Beam', 'Discharge'],
		lastevolve: false
	},{
		nummer: '181',
		namn: 'Ampharos',
		type: ['Electric'],
		moves: ['Volt Switch', 'Charge Beam', 'Thunder', 'Zap Cannon', 'Focus Blast'],
		attack: ['Charge Beam', 'Zap Cannon'],
		defend: ['Volt Switch', 'Zap Cannon'],
		lastevolve: true
	},{
		nummer: '182',
		namn: 'Bellossom',
		type: ['Grass'],
		moves: ['Razor Leaf', 'Acid', 'Petal Blizzard', 'Leaf Blade', 'Dazzling Gleam'],
		attack: ['Razor Leaf', 'Leaf Blade'],
		defend: ['Razor Leaf', 'Leaf Blade'],
		lastevolve: true
	},{
		nummer: '183',
		namn: 'Marill',
		type: ['Water', 'Fairy'],
		moves: ['Bubble', 'Tackle', 'Aqua Tail', 'Bubble Beam', 'Body Slam'],
		attack: ['Bubble', 'Aqua Tail'],
		defend: ['Bubble', 'Aqua Tail'],
		lastevolve: false
	},{
		nummer: '184',
		namn: 'Azumarill',
		type: ['Water', 'Fairy'],
		moves: ['Bubble', 'Rock Smash', 'Hydro Pump', 'Play Rough', 'Ice Beam'],
		attack: ['Bubble', 'Play Rough'],
		defend: ['Bubble', 'Play Rough'],
		lastevolve: true
	},{
		nummer: '185',
		namn: 'Sudowoodo',
		type: ['Rock'],
		moves: ['Rock Throw', 'Counter', 'Stone Edge', 'Rock Slide', 'Earthquake'],
		attack: ['Rock Throw', 'Stone Edge'],
		defend: ['Rock Throw', 'Rock Slide'],
		lastevolve: true
	},{
		nummer: '186',
		namn: 'Politoed',
		type: ['Water'],
		moves: ['Bubble', 'Mud Shot', 'Hydro Pump', 'Blizzard', 'Earthquake', 'Surf'],
		attack: ['Bubble', 'Surf'],
		defend: ['Bubble', 'Hydro Pump'],
		lastevolve: true
	},{
		nummer: '187',
		namn: 'Hoppip',
		type: ['Grass', 'Flying'],
		moves: ['Tackle', 'Bullet Seed', 'Grass Knot', 'Seed Bomb', 'Dazzling Gleam'],
		attack: ['Bullet Seed', 'Grass Knot'],
		defend: ['Bullet Seed', 'Grass Knot'],
		lastevolve: false
	},{
		nummer: '188',
		namn: 'Skiploom',
		type: ['Grass', 'Flying'],
		moves: ['Tackle', 'Bullet Seed', 'Grass Knot', 'Dazzling Gleam', 'Energy Ball'],
		attack: ['Bullet Seed', 'Grass Knot'],
		defend: ['Bullet Seed', 'Grass Knot'],
		lastevolve: false
	},{
		nummer: '189',
		namn: 'Jumpluff',
		type: ['Grass', 'Flying'],
		moves: ['Infestation', 'Bullet Seed', 'Solar Beam', 'Dazzling Gleam', 'Energy Ball'],
		attack: ['Infestation', 'Solar Beam'],
		defend: ['Infestation', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '190',
		namn: 'Aipom',
		type: ['Normal'],
		moves: ['Scratch', 'Astonish', 'Swift', 'Aerial Ace', 'Low Sweep'],
		attack: ['Scratch', 'Swift'],
		defend: ['Astonish', 'Swift'],
		lastevolve: true
	},{
		nummer: '191',
		namn: 'Sunkern',
		type: ['Grass'],
		moves: ['Razor Leaf', 'Cut', 'Grass Knot', 'Seed Bomb', 'Energy Ball'],
		attack: ['Razor Leaf', 'Grass Knot'],
		defend: ['Razor Leaf', 'Grass Knot'],
		lastevolve: false
	},{
		nummer: '192',
		namn: 'Sunflora',
		type: ['Grass'],
		moves: ['Razor Leaf', 'Bullet Seed', 'Petal Blizzard', 'Solar Beam', 'Sludge Bomb'],
		attack: ['Razor Leaf', 'Solar Beam'],
		defend: ['Bullet Seed', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '193',
		namn: 'Yanma',
		type: ['Bug', 'Flying'],
		moves: ['Wing Attack', 'Quick Attack', 'Aerial Ace', 'Silver Wind', 'Ancient Power'],
		attack: ['Wing Attack', 'Aerial Ace'],
		defend: ['Quick Attack', 'Silver Wind'],
		lastevolve: true
	},{
		nummer: '194',
		namn: 'Wooper',
		type: ['Water', 'Ground'],
		moves: ['Water Gun', 'Mud Shot', 'Mud Bomb', 'Body Slam', 'Dig'],
		attack: ['Water Gun', 'Dig'],
		defend: ['Mud Shot', 'Dig'],
		lastevolve: false
	},{
		nummer: '195',
		namn: 'Quagsire',
		type: ['Water', 'Ground'],
		moves: ['Water Gun', 'Mud Shot', 'Stone Edge', 'Earthquake', 'Sludge Bomb'],
		attack: ['Water Gun', 'Earthquake'],
		defend: ['Mud Shot', 'Sludge Bomb'],
		lastevolve: true
	},{
		nummer: '196',
		namn: 'Espeon',
		type: ['Psychic'],
		moves: ['Confusion', 'Zen Headbutt', 'Future Sight', 'Psychic', 'Psybeam'],
		attack: ['Confusion', 'Future Sight'],
		defend: ['Confusion', 'Future Sight'],
		lastevolve: true
	},{
		nummer: '197',
		namn: 'Umbreon',
		type: ['Dark'],
		moves: ['Bite', 'Feint Attack', 'Snarl', 'Foul Play', 'Dark Pulse'],
		attack: ['Snarl', 'Foul Play'],
		defend: ['Snarl', 'Foul Play'],
		lastevolve: true
	},{
		nummer: '198',
		namn: 'Murkrow',
		type: ['Dark', 'Flying'],
		moves: ['Feint Attack', 'Peck', 'Foul Play', 'Dark Pulse', 'Drill Peck'],
		attack: ['Feint Attack', 'Foul Play'],
		defend: ['Peck', 'Drill Peck'],
		lastevolve: true
	},{
		nummer: '199',
		namn: 'Slowking',
		type: ['Water', 'Psychic'],
		moves: ['Confusion', 'Water Gun', 'Psychic', 'Blizzard', 'Fire Blast'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Fire Blast'],
		lastevolve: true
	},{
		nummer: '200',
		namn: 'Misdreavus',
		type: ['Ghost'],
		moves: ['Hex', 'Astonish', 'Dark Pulse', 'Ominous Wind', 'Shadow Sneak'],
		attack: ['Hex', 'Dark Pulse'],
		defend: ['Hex', 'Ominous Wind'],
		lastevolve: true
	},{
		nummer: '201',
		namn: 'Unown',
		type: ['Psychic'],
		moves: ['Hidden Power', 'Struggle'],
		attack: ['Hidden Power', 'Struggle'],
		defend: ['Hidden Power', 'Struggle'],
		lastevolve: true
	},{
		nummer: '202',
		namn: 'Wobbuffet',
		type: ['Psychic'],
		moves: ['Counter', 'Splash', 'Mirror Coat'],
		attack: ['Counter', 'Mirror Coat'],
		defend: ['Counter', 'Mirror Coat'],
		lastevolve: true
	},{
		nummer: '203',
		namn: 'Girafarig',
		type: ['Normal', 'Psychic'],
		moves: ['Confusion', 'Tackle', 'Psychic', 'Thunderbolt', 'Mirror Coat'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Thunderbolt'],
		lastevolve: true
	},{
		nummer: '204',
		namn: 'Pineco',
		type: ['Bug'],
		moves: ['Bug Bite', 'Tackle', 'Gyro Ball', 'Rock Tomb', 'Sand Tomb'],
		attack: ['Bug Bite', 'Gyro Ball'],
		defend: ['Bug Bite', 'Gyro Ball'],
		lastevolve: false
	},{
		nummer: '205',
		namn: 'Forretress',
		type: ['Bug', 'Steel'],
		moves: ['Bug Bite', 'Struggle Bug', 'Heavy Slam', 'Earthquake', 'Rock Tomb'],
		attack: ['Bug Bite', 'Heavy Slam'],
		defend: ['Struggle Bug', 'Heavy Slam'],
		lastevolve: true
	},{
		nummer: '206',
		namn: 'Dunsparce',
		type: ['Normal'],
		moves: ['Bite', 'Astonish', 'Rock Slide', 'Drill Run', 'Dig'],
		attack: ['Bite', 'Rock Slide'],
		defend: ['Astonish', 'Dig'],
		lastevolve: true
	},{
		nummer: '207',
		namn: 'Gligar',
		type: ['Ground', 'Flying'],
		moves: ['Wing Attack', 'Fury Cutter', 'Aerial Ace', 'Dig', 'Night Slash'],
		attack: ['Wing Attack', 'Dig'],
		defend: ['Wing Attack', 'Dig'],
		lastevolve: true
	},{
		nummer: '208',
		namn: 'Steelix',
		type: ['Steel', 'Ground'],
		moves: ['Iron Tail', 'Dragon Tail', 'Earthquake', 'Heavy Slam', 'Crunch'],
		attack: ['Iron Tail', 'Heavy Slam'],
		defend: ['Iron Tail', 'Earthquake'],
		lastevolve: true
	},{
		nummer: '209',
		namn: 'Snubbull',
		type: ['Fairy'],
		moves: ['Bite', 'Tackle', 'Dazzling Gleam', 'Brick Break', 'Crunch'],
		attack: ['Bite', 'Dazzling Gleam'],
		defend: ['Tackle', 'Dazzling Gleam'],
		lastevolve: false
	},{
		nummer: '210',
		namn: 'Granbull',
		type: ['Fairy'],
		moves: ['Bite', 'Snarl', 'Close Combat', 'Play Rough', 'Crunch'],
		attack: ['Snarl', 'Play Rough'],
		defend: ['Snarl', 'Play Rough'],
		lastevolve: true
	},{
		nummer: '211',
		namn: 'Qwilfish',
		type: ['Water', 'Poison'],
		moves: ['Water Gun', 'Poison Sting', 'Sludge Wave', 'Aqua Tail', 'Ice Beam'],
		attack: ['Water Gun', 'Sludge Wave'],
		defend: ['Poison Sting', 'Ice Beam'],
		lastevolve: true
	},{
		nummer: '212',
		namn: 'Scizor',
		type: ['Bug', 'Steel'],
		moves: ['Bullet Punch', 'Fury Cutter', 'Iron Head', 'X-Scissor', 'Night Slash'],
		attack: ['Bullet Punch', 'Iron Head'],
		defend: ['Bullet Punch', 'Iron Head'],
		lastevolve: true
	},{
		nummer: '213',
		namn: 'Shuckle',
		type: ['Bug', 'Rock'],
		moves: ['Rock Throw', 'Struggle Bug', 'Stone Edge', 'Rock Blast', 'Gyro Ball'],
		attack: ['Rock Throw', 'Stone Edge'],
		defend: ['Struggle Bug', 'Rock Blast'],
		lastevolve: true
	},{
		nummer: '214',
		namn: 'Heracross',
		type: ['Bug', 'Fighting'],
		moves: ['Counter', 'Struggle Bug', 'Close Combat', 'Megahorn', 'Earthquake'],
		attack: ['Counter', 'Close Combat'],
		defend: ['Struggle Bug', 'Close Combat'],
		lastevolve: true
	},{
		nummer: '215',
		namn: 'Sneasel',
		type: ['Dark', 'Ice'],
		moves: ['Feint Attack', 'Ice Shard', 'Foul Play', 'Avalanche', 'Ice Punch'],
		attack: ['Feint Attack', 'Avalanche'],
		defend: ['Ice Shard', 'Avalanche'],
		lastevolve: true
	},{
		nummer: '216',
		namn: 'Teddiursa',
		type: ['Normal'],
		moves: ['Scratch', 'Lick', 'Cross Chop', 'Play Rough', 'Crunch'],
		attack: ['Scratch', 'Play Rough'],
		defend: ['Lick', 'Play Rough'],
		lastevolve: false
	},{
		nummer: '217',
		namn: 'Ursaring',
		type: ['Normal'],
		moves: ['Counter', 'Metal Claw', 'Hyper Beam', 'Close Combat', 'Play Rough'],
		attack: ['Counter', 'Hyper Beam'],
		defend: ['Counter', 'Hyper Beam'],
		lastevolve: true
	},{
		nummer: '218',
		namn: 'Slugma',
		type: ['Fire'],
		moves: ['Rock Throw', 'Ember', 'Flame Burst', 'Rock Slide', 'Flame Charge'],
		attack: ['Ember', 'Flame Burst'],
		defend: ['Ember', 'Flame Charge	'],
		lastevolve: false
	},{
		nummer: '219',
		namn: 'Magcargo',
		type: ['Fire', 'Rock'],
		moves: ['Rock Throw', 'Ember', 'Stone Edge', 'Overheat', 'Heat Wave'],
		attack: ['Rock Throw', 'Overheat'],
		defend: ['Rock Throw', 'Overheat'],
		lastevolve: true
	},{
		nummer: '220',
		namn: 'Swinub',
		type: ['Ice', 'Ground'],
		moves: ['Tackle', 'Powder Snow', 'Rock Slide', 'Body Slam', 'Icy Wind'],
		attack: ['Powder Snow', 'Rock Slide'],
		defend: ['Powder Snow', 'Icy Wind'],
		lastevolve: false
	},{
		nummer: '221',
		namn: 'Piloswine',
		type: ['Ice', 'Ground'],
		moves: ['Ice Shard', 'Powder Snow', 'Stone Edge', 'Avalanche', 'Bulldoze'],
		attack: ['Ice Shard', 'Avalanche'],
		defend: ['Powder Snow', 'Avalanche'],
		lastevolve: true
	},{
		nummer: '222',
		namn: 'Corsola',
		type: ['Water', 'Rock'],
		moves: ['Bubble', 'Tackle', 'Power Gem', 'Rock Blast', 'Bubble Beam'],
		attack: ['Bubble', 'Power Gem'],
		defend: ['Bubble', 'Power Gem'],
		lastevolve: true
	},{
		nummer: '223',
		namn: 'Remoraid',
		type: ['Water'],
		moves: ['Water Gun', 'Mud Shot', 'Water Pulse', 'Rock Blast', 'Aurora Beam'],
		attack: ['Water Gun', 'Water Pulse'],
		defend: ['Mud Shot', 'Water Pulse'],
		lastevolve: false
	},{
		nummer: '224',
		namn: 'Octillery',
		type: ['Water'],
		moves: ['Water Gun', 'Mud Shot', 'Gunk Shot', 'Water Pulse', 'Aurora Beam'],
		attack: ['Water Gun', 'Gunk Shot'],
		defend: ['Mud Shot', 'Water Pulse'],
		lastevolve: true
	},{
		nummer: '225',
		namn: 'Delibird',
		type: ['Ice', 'Flying'],
		moves: ['Ice Shard', 'Quick Attack', 'Ice Punch', 'Aerial Ace', 'Icy Wind'],
		attack: ['Ice Shard', 'Ice Punch'],
		defend: ['Ice Shard', 'Aerial Ace'],
		lastevolve: true
	},{
		nummer: '226',
		namn: 'Mantine',
		type: ['Water', 'Flying'],
		moves: ['Bubble', 'Wing Attack', 'Aerial Ace', 'Ice Beam', 'Water Pulse'],
		attack: ['Wing Attack', 'Ice Beam'],
		defend: ['Bubble', 'Ice Beam'],
		lastevolve: true
	},{
		nummer: '227',
		namn: 'Skarmory',
		type: ['Steel', 'Flying'],
		moves: ['Steel Wing', 'Air Slash', 'Brave Bird', 'Flash Cannon', 'Sky Attack'],
		attack: ['Steel Wing', 'Sky Attack'],
		defend: ['Air Slash', 'Sky Attack'],
		lastevolve: true
	},{
		nummer: '228',
		namn: 'Houndour',
		type: ['Dark', 'Fire'],
		moves: ['Feint Attack', 'Ember', 'Flamethrower', 'Dark Pulse', 'Crunch'],
		attack: ['Feint Attack', 'Flamethrower'],
		defend: ['Feint Attack', 'Crunch'],
		lastevolve: false
	},{
		nummer: '229',
		namn: 'Houndoom',
		type: ['Dark', 'Fire'],
		moves: ['Fire Fang', 'Snarl', 'Foul Play', 'Fire Blast', 'Crunch'],
		attack: ['Fire Fang', 'Fire Blast'],
		defend: ['Snarl', 'Fire Blast'],
		lastevolve: true
	},{
		nummer: '230',
		namn: 'Kingdra',
		type: ['Water', 'Dragon'],
		moves: ['Waterfall', 'Dragon Breath', 'Water Gun', 'Hydro Pump', 'Blizzard', 'Outrage'],
		attack: ['Waterfall', 'Outrage'],
		defend: ['Waterfall', 'Outrage'],
		lastevolve: true
	},{
		nummer: '231',
		namn: 'Phanpy',
		type: ['Ground'],
		moves: ['Rock Smash', 'Tackle', 'Rock Slide', 'Bulldoze', 'Body Slam'],
		attack: ['Tackle', 'Bulldoze'],
		defend: ['Rock Smash', 'Rock Slide'],
		lastevolve: false
	},{
		nummer: '232',
		namn: 'Donphan',
		type: ['Ground'],
		moves: ['Counter', 'Tackle', 'Earthquake', 'Heavy Slam', 'Play Rough'],
		attack: ['Counter', 'Earthquake'],
		defend: ['Counter', 'Play Rough'],
		lastevolve: true
	},{
		nummer: '233',
		namn: 'Porygon2',
		type: ['Normal'],
		moves: ['Hidden Power', 'Charge Beam', 'Hyper Beam', 'Zap Cannon', 'Solar Beam'],
		attack: ['Hidden Power', 'Hyper Beam'],
		defend: ['Hidden Power', 'Hyper Beam'],
		lastevolve: true
	},{
		nummer: '234',
		namn: 'Stantler',
		type: ['Normal'],
		moves: ['Tackle', 'Zen Headbutt', 'Megahorn', 'Stomp', 'Wild Charge'],
		attack: ['Tackle', 'Wild Charge'],
		defend: ['Zen Headbutt', 'Wild Charge'],
		lastevolve: true
	},{
		nummer: '235',
		namn: 'Smeargle',
		type: ['Normal'],
		moves: ['Tackle', 'Struggle'],
		attack: ['Tackle', 'Struggle'],
		defend: ['Tackle', 'Struggle'],
		lastevolve: true
	},{
		nummer: '236',
		namn: 'Tyrogue',
		type: ['Fighting'],
		moves: ['Rock Smash', 'Low Kick', 'Tackle', 'Brick Break', 'Rock Slide', 'Body Slam', 'Low Sweep'],
		attack: ['Rock Smash', 'Rock Slide'],
		defend: ['Rock Smash', 'Rock Slide'],
		lastevolve: false
	},{
		nummer: '237',
		namn: 'Hitmontop',
		type: ['Fighting'],
		moves: ['Counter', 'Rock Smash', 'Close Combat', 'Stone Edge', 'Gyro Ball'],
		attack: ['Counter', 'Close Combat'],
		defend: ['Rock Smash', 'Gyro Ball'],
		lastevolve: true
	},{
		nummer: '238',
		namn: 'Smoochum',
		type: ['Ice', 'Psychic'],
		moves: ['Frost Breath', 'Pound', 'Powder Snow', 'Ice Beam', 'Ice Punch', 'Psyshock'],
		attack: ['Pound', 'Ice Beam'],
		defend: ['Powder Snow', 'Psyshock'],
		lastevolve: false
	},{
		nummer: '239',
		namn: 'Elekid',
		type: ['Electric'],
		moves: ['Low Kick', 'Thunder Shock', 'Thunderbolt', 'Discharge', 'Thunder Punch', 'Brick Break'],
		attack: ['Thunder Shock', 'Discharge'],
		defend: ['Thunder Shock', 'Discharge'],
		lastevolve: false
	},{
		nummer: '240',
		namn: 'Magby',
		type: ['Fire'],
		moves: ['Ember', 'Karate Chop', 'Flamethrower', 'Flame Burst', 'Fire Punch', 'Brick Break'],
		attack: ['Ember', 'Flame Burst'],
		defend: ['Ember', 'Fire Punch'],
		lastevolve: false
	},{
		nummer: '241',
		namn: 'Miltank',
		type: ['Normal'],
		moves: ['Tackle', 'Zen Headbutt', 'Stomp', 'Body Slam', 'Gyro Ball'],
		attack: ['Tackle', 'Stomp'],
		defend: ['Zen Headbutt', 'Body Slam'],
		lastevolve: true
	},{
		nummer: '242',
		namn: 'Blissey',
		type: ['Normal'],
		moves: ['Pound', 'Zen Headbutt', 'Hyper Beam', 'Psychic', 'Dazzling Gleam'],
		attack: ['Pound', 'Hyper Beam'],
		defend: ['Zen Headbutt', 'Dazzling Gleam'],
		lastevolve: true
	},{
		nummer: '243',
		namn: 'Raikou',
		type: ['Electric'],
		moves: ['Volt Switch', 'Thunder Shock', 'Thunder', 'Wild Charge', 'Thunderbolt'],
		attack: ['Thunder Shock', 'Wild Charge'],
		defend: ['Volt Switch', 'Wild Charge'],
		lastevolve: true
	},{
		nummer: '244',
		namn: 'Entei',
		type: ['Fire'],
		moves: ['Fire Spin', 'Fire Fang', 'Overheat', 'Fire Blast', 'Flamethrower'],
		attack: ['Fire Spin', 'Overheat'],
		defend: ['Fire Spin', 'Overheat'],
		lastevolve: true
	},{
		nummer: '245',
		namn: 'Suicune',
		type: ['Water'],
		moves: ['Hidden Power', 'Extrasensory', 'Snarl', 'Hydro Pump', 'Bubble Beam', 'Water Pulse'],
		attack: ['Extrasensory', 'Hydro Pump'],
		defend: ['Hidden Power', 'Hydro Pump'],
		lastevolve: true
	},{
		nummer: '246',
		namn: 'Larvitar',
		type: ['Rock', 'Ground'],
		moves: ['Bite', 'Rock Smash', 'Stomp', 'Ancient Power', 'Crunch'],
		attack: ['Bite', 'Ancient Power'],
		defend: ['Rock Smash', 'Ancient Power'],
		lastevolve: false
	},{
		nummer: '247',
		namn: 'Pupitar',
		type: ['Rock', 'Ground'],
		moves: ['Bite', 'Rock Smash', 'Dig', 'Ancient Power', 'Crunch'],
		attack: ['Bite', 'Dig'],
		defend: ['Rock Smash', 'Dig'],
		lastevolve: false
	},{
		nummer: '248',
		namn: 'Tyranitar',
		type: ['Rock', 'Dark'],
		moves: ['Bite', 'Iron Tail', 'Stone Edge', 'Fire Blast', 'Crunch'],
		attack: ['Bite', 'Stone Edge'],
		defend: ['Iron Tail', 'Crunch'],
		lastevolve: true
	},{
		nummer: '249',
		namn: 'Lugia',
		type: ['Psychic', 'Flying'],
		moves: ['Dragon Tail', 'Extrasensory', 'Future Sight', 'Sky Attack', 'Hydro Pump'],
		attack: ['Extrasensory', 'Future Sight'],
		defend: ['Extrasensory', 'Sky Attack'],
		lastevolve: true
	},{
		nummer: '250',
		namn: 'Ho-Oh',
		type: ['Fire', 'Flying'],
		moves: ['Steel Wing', 'Extrasensory', 'Brave Bird', 'Fire Blast', 'Solar Beam'],
		attack: ['Steel Wing', 'Solar Beam'],
		defend: ['Extrasensory', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '251',
		namn: 'Celebi',
		type: ['Psychic', 'Grass'],
		moves: ['Confusion', 'Charge Beam', 'Psychic', 'Hyper Beam', 'Dazzling Gleam'],
		attack: ['Confusion', 'Hyper Beam'],
		defend: ['Confusion', 'Dazzling Gleam'],
		lastevolve: true
	},{
		nummer: '252',
		namn: 'Treecko',
		type: ['Grass'],
		moves: ['Pound', 'Bullet Seed', 'Aerial Ace', 'Grass Knot', 'Energy Ball'],
		attack: ['Pound', 'Grass Knot'],
		defend: ['Bullet Seed', 'Grass Knot'],
		lastevolve: false
	},{
		nummer: '253',
		namn: 'Grovyle',
		type: ['Grass'],
		moves: ['Quick Attack', 'Bullet Seed', 'Aerial Ace', 'Leaf Blade', 'Grass Knot'],
		attack: ['Quick Attack', 'Grass Knot'],
		defend: ['Bullet Seed', 'Leaf Blade'],
		lastevolve: false
	},{
		nummer: '254',
		namn: 'Sceptile',
		type: ['Grass'],
		moves: ['Fury Cutter', 'Bullet Seed', 'Earthquake', 'Aerial Ace', 'Leaf Blade'],
		attack: ['Fury Cutter', 'Leaf Blade'],
		defend: ['Bullet Seed', 'Leaf Blade'],
		lastevolve: true
	},{
		nummer: '255',
		namn: 'Torchic',
		type: ['Fire'],
		moves: ['Ember', 'Scratch', 'Flamethrower', 'Rock Tomb', 'Flame Charge'],
		attack: ['Ember', 'Flamethrower'],
		defend: ['Ember', 'Flame Charge'],
		lastevolve: false
	},{
		nummer: '256',
		namn: 'Combusken',
		type: ['Fire', 'Fighting'],
		moves: ['Ember', 'Peck', 'Flamethrower', 'Rock Slide', 'Flame Charge'],
		attack: ['Ember', 'Flamethrower'],
		defend: ['Ember', 'Flame Charge'],
		lastevolve: false
	},{
		nummer: '257',
		namn: 'Blaziken',
		type: ['Fire', 'Fighting'],
		moves: ['Counter', 'Fire Spin', 'Stone Edge', 'Brave Bird', 'Overheat'],
		attack: ['Counter', 'Overheat'],
		defend: ['Fire Spin', 'Overheat'],
		lastevolve: true
	},{
		nummer: '258',
		namn: 'Mudkip',
		type: ['Water'],
		moves: ['Tackle', 'Water Gun', 'Sludge', 'Dig', 'Stomp'],
		attack: ['Water Gun', 'Stomp'],
		defend: ['Water Gun', 'Dig'],
		lastevolve: false
	},{
		nummer: '259',
		namn: 'Marshtomp',
		type: ['Water', 'Ground'],
		moves: ['Mud Shot', 'Water Gun', 'Sludge', 'Mud Bomb', 'Surf'],
		attack: ['Water Gun', 'Surf'],
		defend: ['Mud Shot', 'Mud Bomb'],
		lastevolve: false
	},{
		nummer: '260',
		namn: 'Swampert',
		type: ['Water', 'Ground'],
		moves: ['Mud Shot', 'Water Gun', 'Earthquake', 'Sludge Wave', 'Surf'],
		attack: ['Water Gun', 'Surf'],
		defend: ['Mud Shot', 'Surf'],
		lastevolve: true
	},{
		nummer: '261',
		namn: 'Poochyena',
		type: ['Dark'],
		moves: ['Tackle', 'Snarl', 'Dig', 'Poison Fang', 'Crunch'],
		attack: ['Snarl', 'Crunch'],
		defend: ['Snarl', 'Crunch'],
		lastevolve: false
	},{
		nummer: '262',
		namn: 'Mightyena',
		type: ['Dark'],
		moves: ['Bite', 'Fire Fang', 'Poison Fang', 'Play Rough', 'Crunch'],
		attack: ['Bite', 'Play Rough'],
		defend: ['Fire Fang', 'Crunch'],
		lastevolve: true
	},{
		nummer: '263',
		namn: 'Zigzagoon',
		type: ['Normal'],
		moves: ['Tackle', 'Rock Smash', 'Dig', 'Thunderbolt', 'Grass Knot'],
		attack: ['Tackle', 'Grass Knot'],
		defend: ['Rock Smash', 'Grass Knot'],
		lastevolve: false
	},{
		nummer: '264',
		namn: 'Linoone',
		type: ['Normal'],
		moves: ['Shadow Claw', 'Tackle', 'Dig', 'Thunder', 'Grass Knot'],
		attack: ['Shadow Claw', 'Grass Knot'],
		defend: ['Shadow Claw', 'Dig'],
		lastevolve: true
	},{
		nummer: '265',
		namn: 'Wurmple',
		type: ['Bug'],
		moves: ['Bug Bite', 'Tackle', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		lastevolve: false
	},{
		nummer: '266',
		namn: 'Silcoon',
		type: ['Bug'],
		moves: ['Bug Bite', 'Poison Sting', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		lastevolve: false
	},{
		nummer: '267',
		namn: 'Beautifly',
		type: ['Bug', 'Flying'],
		moves: ['Infestation', 'Struggle Bug', 'Bug Buzz', 'Air Cutter', 'Silver Wind'],
		attack: ['Infestation', 'Bug Buzz'],
		defend: ['Struggle Bug', 'Bug Buzz'],
		lastevolve: true
	},{
		nummer: '268',
		namn: 'Cascoon',
		type: ['Bug'],
		moves: ['Bug Bite', 'Poison Sting', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		lastevolve: false
	},{
		nummer: '269',
		namn: 'Dustox',
		type: ['Bug', 'Poison'],
		moves: ['Confusion', 'Struggle Bug', 'Bug Buzz', 'Sludge Bomb', 'Silver Wind'],
		attack: ['Confusion', 'Sludge Bomb'],
		defend: ['Confusion', 'Bug Buzz'],
		lastevolve: true
	},{
		nummer: '270',
		namn: 'Lotad',
		type: ['Water', 'Grass'],
		moves: ['Razor Leaf', 'Water Gun', 'Bubble Beam', 'Energy Ball'],
		attack: ['Razor Leaf', 'Energy Ball'],
		defend: ['Razor Leaf', 'Energy Ball'],
		lastevolve: false
	},{
		nummer: '271',
		namn: 'Lombre',
		type: ['Water', 'Grass'],
		moves: ['Razor Leaf', 'Bubble', 'Ice Beam', 'Bubble Beam', 'Grass Knot'],
		attack: ['Bubble', 'Grass Knot'],
		defend: ['Bubble', 'Grass Knot'],
		lastevolve: false
	},{
		nummer: '272',
		namn: 'Ludicolo',
		type: ['Water', 'Grass'],
		moves: ['Razor Leaf', 'Bubble', 'Blizzard', 'Hydro Pump', 'Solar Beam'],
		attack: ['Razor Leaf', 'Solar Beam'],
		defend: ['Bubble', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '273',
		namn: 'Seedot',
		type: ['Grass'],
		moves: ['Quick Attack', 'Bullet Seed', 'Grass Knot', 'Energy Ball', 'Foul Play'],
		attack: ['Quick Attack', 'Grass Knot'],
		defend: ['Bullet Seed', 'Grass Knot'],
		lastevolve: false
	},{
		nummer: '274',
		namn: 'Nuzleaf',
		type: ['Grass', 'Dark'],
		moves: ['Razor Leaf', 'Feint Attack', 'Leaf Blade', 'Grass Knot', 'Foul Play'],
		attack: ['Feint Attack', 'Grass Knot'],
		defend: ['Feint Attack', 'Leaf Blade'],
		lastevolve: false
	},{
		nummer: '275',
		namn: 'Shiftry',
		type: ['Grass', 'Dark'],
		moves: ['Razor Leaf', 'Feint Attack', 'Leaf Blade', 'Hurricane', 'Foul Play'],
		attack: ['Razor Leaf', 'Leaf Blade'],
		defend: ['Feint Attack', 'Leaf Blade'],
		lastevolve: true
	},{
		nummer: '276',
		namn: 'Taillow',
		type: ['Normal', 'Flying'],
		moves: ['Peck', 'Quick Attack', 'Aerial Ace'],
		attack: ['Quick Attack', 'Aerial Ace'],
		defend: ['Peck', 'Aerial Ace'],
		lastevolve: false
	},{
		nummer: '277',
		namn: 'Swellow',
		type: ['Normal', 'Flying'],
		moves: ['Wing Attack', 'Steel Wing', 'Aerial Ace', 'Brave Bird', 'Sky Attack'],
		attack: ['Wing Attack', 'Sky Attack'],
		defend: ['Wing Attack', 'Aerial Ace'],
		lastevolve: true
	},{
		nummer: '278',
		namn: 'Wingull',
		type: ['Water', 'Flying'],
		moves: ['Quick Attack', 'Water Gun', 'Ice Beam', 'Water Pulse', 'Air Cutter'],
		attack: ['Water Gun', 'Ice Beam'],
		defend: ['Quick Attack', 'Ice Beam'],
		lastevolve: false
	},{
		nummer: '279',
		namn: 'Pelipper',
		type: ['Water', 'Flying'],
		moves: ['Wing Attack', 'Water Gun', 'Blizzard', 'Hydro Pump', 'Hurricane'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Wing Attack', 'Hydro Pump'],
		lastevolve: true
	},{
		nummer: '280',
		namn: 'Ralts',
		type: ['Psychic', 'Fairy'],
		moves: ['Confusion', 'Charge Beam', 'Psyshock', 'Shadow Sneak', 'Disarming Voice'],
		attack: ['Confusion', 'Psyshock'],
		defend: ['Confusion', 'Psyshock'],
		lastevolve: false
	},{
		nummer: '281',
		namn: 'Kirlia',
		type: ['Psychic', 'Fairy'],
		moves: ['Confusion', 'Charge Beam', 'Shadow Sneak', 'Disarming Voice', 'Psychic'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Disarming Voice'],
		lastevolve: false
	},{
		nummer: '282',
		namn: 'Gardevoir',
		type: ['Psychic', 'Fairy'],
		moves: ['Confusion', 'Charge Beam', 'Shadow Ball', 'Dazzling Gleam', 'Psychic'],
		attack: ['Confusion', 'Dazzling Gleam'],
		defend: ['Confusion', 'Dazzling Gleam'],
		lastevolve: true
	},{
		nummer: '283',
		namn: 'Surskit',
		type: ['Bug', 'Water'],
		moves: ['Bug Bite', 'Bubble', 'Bubble Beam', 'Aqua Jet', 'Signal Beam'],
		attack: ['Bug Bite', 'Signal Beam'],
		defend: ['Bubble', 'Signal Beam'],
		lastevolve: false
	},{
		nummer: '284',
		namn: 'Masquerain',
		type: ['Bug', 'Flying'],
		moves: ['Air Slash', 'Infestation', 'Ominous Wind', 'Air Cutter', 'Silver Wind'],
		attack: ['Air Slash', 'Silver Wind'],
		defend: ['Infestation', 'Silver Wind'],
		lastevolve: true
	},{
		nummer: '285',
		namn: 'Shroomish',
		type: ['Grass'],
		moves: ['Tackle', 'Bullet Seed', 'Seed Bomb', 'Grass Knot', 'Energy Ball'],
		attack: ['Bullet Seed', 'Grass Knot'],
		defend: ['Bullet Seed', 'Grass Knot'],
		lastevolve: false
	},{
		nummer: '286',
		namn: 'Breloom',
		type: ['Grass', 'Fighting'],
		moves: ['Counter', 'Bullet Seed', 'Seed Bomb', 'Sludge Bomb', 'Dynamic Punch'],
		attack: ['Counter', 'Dynamic Punch'],
		defend: ['Bullet Seed', 'Dynamic Punch'],
		lastevolve: true
	},{
		nummer: '287',
		namn: 'Slakoth',
		type: ['Normal'],
		moves: ['Yawn', 'Night Slash', 'Brick Break', 'Body Slam'],
		attack: ['Yawn', 'Body Slam'],
		defend: ['Yawn', 'Body Slam'],
		lastevolve: false
	},{
		nummer: '288',
		namn: 'Vigoroth',
		type: ['Normal'],
		moves: ['Scratch', 'Counter', 'Bulldoze', 'Brick Break', 'Body Slam'],
		attack: ['Scratch', 'Body Slam'],
		defend: ['Counter', 'Body Slam'],
		lastevolve: false
	},{
		nummer: '289',
		namn: 'Slaking',
		type: ['Normal'],
		moves: ['Yawn', 'Hyper Beam', 'Earthquake', 'Play Rough'],
		attack: ['Yawn', 'Hyper Beam'],
		defend: ['Yawn', 'Play Rough'],
		lastevolve: true
	},{
		nummer: '290',
		namn: 'Nincada',
		type: ['Bug', 'Ground'],
		moves: ['Bug Bite', 'Scratch', 'Aerial Ace', 'Bug Buzz', 'Night Slash'],
		attack: ['Bug Bite', 'Bug Buzz'],
		defend: ['Bug Bite', 'Bug Buzz'],
		lastevolve: false
	},{
		nummer: '291',
		namn: 'Ninjask',
		type: ['Bug', 'Flying'],
		moves: ['Fury Cutter', 'Metal Claw', 'Aerial Ace', 'Bug Buzz', 'Shadow Ball'],
		attack: ['Fury Cutter', 'Shadow Ball'],
		defend: ['Metal Claw', 'Bug Buzz'],
		lastevolve: true
	},{
		nummer: '292',
		namn: 'Shedinja',
		type: ['Bug', 'Ghost'],
		moves: ['Bite', 'Struggle Bug', 'Dig', 'Aerial Ace', 'Shadow Sneak'],
		attack: ['Struggle Bug', 'Dig'],
		defend: ['Struggle Bug', 'Dig'],
		lastevolve: true
	},{
		nummer: '293',
		namn: 'Whismur',
		type: ['Normal'],
		moves: ['Pound', 'Astonish', 'Flamethrower', 'Disarming Voice', 'Stomp'],
		attack: ['Pound', 'Stomp'],
		defend: ['Astonish', 'Disarming Voice'],
		lastevolve: false
	},{
		nummer: '294',
		namn: 'Loudred',
		type: ['Normal'],
		moves: ['Bite', 'Rock Smash', 'Flamethrower', 'Disarming Voice', 'Crunch'],
		attack: ['Bite', 'Flamethrower'],
		defend: ['Rock Smash', 'Crunch'],
		lastevolve: false
	},{
		nummer: '295',
		namn: 'Exploud',
		type: ['Normal'],
		moves: ['Bite', 'Astonish', 'Disarming Voice', 'Fire Blast', 'Crunch'],
		attack: ['Bite', 'Fire Blast'],
		defend: ['Astonish', 'Crunch'],
		lastevolve: true
	},{
		nummer: '296',
		namn: 'Makuhita',
		type: ['Fighting'],
		moves: ['Tackle', 'Rock Smash', 'Cross Chop', 'Low Sweep', 'Heavy Slam'],
		attack: ['Rock Smash', 'Heavy Slam'],
		defend: ['Rock Smash', 'Heavy Slam'],
		lastevolve: false
	},{
		nummer: '297',
		namn: 'Hariyama',
		type: ['Fighting'],
		moves: ['Bullet Punch', 'Counter', 'Close Combat', 'Dynamic Punch', 'Heavy Slam'],
		attack: ['Counter', 'Dynamic Punch'],
		defend: ['Counter', 'Dynamic Punch'],
		lastevolve: true
	},{
		nummer: '298',
		namn: 'Azurill',
		type: ['Normal', 'Fairy'],
		moves: ['Splash', 'Bubble', 'Ice Beam', 'Bubble Beam', 'Body Slam'],
		attack: ['Bubble', 'Body Slam'],
		defend: ['Bubble', 'Ice Beam'],
		lastevolve: false
	},{
		nummer: '299',
		namn: 'Nosepass',
		type: ['Rock'],
		moves: ['Spark', 'Rock Throw', 'Rock Slide', 'Thunderbolt', 'Rock Blast'],
		attack: ['Rock Throw', 'Rock Slide'],
		defend: ['Rock Throw', 'Rock Slide'],
		lastevolve: true
	},{
		nummer: '300',
		namn: 'Skitty',
		type: ['Normal'],
		moves: ['Tackle', 'Feint Attack', 'Dig', 'Disarming Voice', 'Wild Charge'],
		attack: ['Tackle', 'Wild Charge'],
		defend: ['Feint Attack', 'Wild Charge'],
		lastevolve: false
	},{
		nummer: '301',
		namn: 'Delcatty',
		type: ['Normal'],
		moves: ['Zen Headbutt', 'Feint Attack', 'Disarming Voice', 'Play Rough', 'Wild Charge'],
		attack: ['Feint Attack', 'Wild Charge'],
		defend: ['Zen Headbutt', 'Wild Charge'],
		lastevolve: true
	},{
		nummer: '302',
		namn: 'Sableye',
		type: ['Dark', 'Ghost'],
		moves: ['Shadow Claw', 'Feint Attack', 'Power Gem', 'Shadow Sneak', 'Foul Play'],
		attack: ['Shadow Claw', 'Foul Play'],
		defend: ['Feint Attack', 'Foul Play'],
		lastevolve: true
	},{
		nummer: '303',
		namn: 'Mawile',
		type: ['Steel', 'Fairy'],
		moves: ['Bite', 'Astonish', 'Vice Grip', 'Iron Head', 'Play Rough'],
		attack: ['Bite', 'Play Rough'],
		defend: ['Astonish', 'Play Rough'],
		lastevolve: true
	},{
		nummer: '304',
		namn: 'Aron',
		type: ['Steel', 'Rock'],
		moves: ['Tackle', 'Metal Claw', 'Rock Tomb', 'Iron Head', 'Body Slam'],
		attack: ['Metal Claw', 'Iron Head'],
		defend: ['Metal Claw', 'Rock Tomb'],
		lastevolve: false
	},{
		nummer: '305',
		namn: 'Lairon',
		type: ['Steel', 'Rock'],
		moves: ['Metal Claw', 'Iron Tail', 'Rock Slide', 'Body Slam', 'Heavy Slam'],
		attack: ['Iron Tail', 'Rock Slide'],
		defend: ['Iron Tail', 'Rock Slide'],
		lastevolve: false
	},{
		nummer: '306',
		namn: 'Aggron',
		type: ['Steel', 'Rock'],
		moves: ['Dragon Tail', 'Iron Tail', 'Stone Edge', 'Thunder', 'Heavy Slam'],
		attack: ['Iron Tail', 'Heavy Slam'],
		defend: ['Iron Tail', 'Stone Edge'],
		lastevolve: true
	},{
		nummer: '307',
		namn: 'Meditite',
		type: ['Fighting', 'Psychic'],
		moves: ['Confusion', 'Rock Smash', 'Ice Punch', 'Low Sweep', 'Psyshock'],
		attack: ['Confusion', 'Psyshock'],
		defend: ['Confusion', 'Psyshock'],
		lastevolve: false
	},{
		nummer: '308',
		namn: 'Medicham',
		type: ['Fighting', 'Psychic'],
		moves: ['Psycho Cut', 'Counter', 'Ice Punch', 'Psychic', 'Dynamic Punch'],
		attack: ['Counter', 'Dynamic Punch'],
		defend: ['Counter', 'Dynamic Punch'],
		lastevolve: true
	},{
		nummer: '309',
		namn: 'Electrike',
		type: ['Electric'],
		moves: ['Spark', 'Quick Attack', 'Discharge', 'Thunderbolt', 'Swift'],
		attack: ['Spark', 'Thunderbolt'],
		defend: ['Quick Attack', 'Discharge'],
		lastevolve: false
	},{
		nummer: '310',
		namn: 'Manectric',
		type: ['Electric'],
		moves: ['Charge Beam', 'Snarl', 'Thunder', 'Flame Burst', 'Wild Charge'],
		attack: ['Charge Beam', 'Wild Charge'],
		defend: ['Charge Beam', 'Wild Charge'],
		lastevolve: true
	},{
		nummer: '311',
		namn: 'Plusle',
		type: ['Electric'],
		moves: ['Spark', 'Quick Attack', 'Discharge', 'Thunderbolt', 'Swift'],
		attack: ['Spark', 'Thunderbolt'],
		defend: ['Quick Attack', 'Discharge'],
		lastevolve: true
	},{
		nummer: '312',
		namn: 'Minun',
		type: ['Electric'],
		moves: ['Spark', 'Quick Attack', 'Discharge', 'Thunderbolt', 'Swift'],
		attack: ['Spark', 'Thunderbolt'],
		defend: ['Quick Attack', 'Discharge'],
		lastevolve: true
	},{
		nummer: '313',
		namn: 'Volbeat',
		type: ['Bug'],
		moves: ['Tackle', 'Struggle Bug', 'Bug Buzz', 'Thunderbolt', 'Signal Beam'],
		attack: ['Struggle Bug', 'Bug Buzz'],
		defend: ['Struggle Bug', 'Bug Buzz'],
		lastevolve: true
	},{
		nummer: '314',
		namn: 'Illumise',
		type: ['Bug'],
		moves: ['Tackle', 'Struggle Bug', 'Bug Buzz', 'Dazzling Gleam', 'Silver Wind'],
		attack: ['Struggle Bug', 'Bug Buzz'],
		defend: ['Struggle Bug', 'Bug Buzz'],
		lastevolve: true
	},{
		nummer: '315',
		namn: 'Roselia',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Poison Jab', 'Petal Blizzard', 'Dazzling Gleam', 'Sludge Bomb'],
		attack: ['Poison Jab', 'Sludge Bomb'],
		defend: ['Razor Leaf', 'Sludge Bomb'],
		lastevolve: true
	},{
		nummer: '316',
		namn: 'Gulpin',
		type: ['Poison'],
		moves: ['Pound', 'Rock Smash', 'Sludge', 'Ice Beam', 'Gunk Shot'],
		attack: ['Pound', 'Gunk Shot'],
		defend: ['Rock Smash', 'Gunk Shot'],
		lastevolve: false
	},{
		nummer: '317',
		namn: 'Swalot',
		type: ['Poison'],
		moves: ['Rock Smash', 'Infestation', 'Ice Beam', 'Sludge Bomb', 'Gunk Shot'],
		attack: ['Infestation', 'Sludge Bomb'],
		defend: ['Rock Smash', 'Sludge Bomb'],
		lastevolve: true
	},{
		nummer: '318',
		namn: 'Carvanha',
		type: ['Water', 'Dark'],
		moves: ['Bite', 'Snarl', 'Poison Fang', 'Aqua Jet', 'Crunch'],
		attack: ['Snarl', 'Crunch'],
		defend: ['Snarl', 'Crunch'],
		lastevolve: false
	},{
		nummer: '319',
		namn: 'Sharpedo',
		type: ['Water', 'Dark'],
		moves: ['Bite', 'Waterfall', 'Poison Fang', 'Hydro Pump', 'Crunch'],
		attack: ['Waterfall', 'Hydro Pump'],
		defend: ['Waterfall', 'Crunch'],
		lastevolve: true
	},{
		nummer: '320',
		namn: 'Wailmer',
		type: ['Water'],
		moves: ['Water Gun', 'Splash', 'Water Pulse', 'Body Slam', 'Heavy Slam'],
		attack: ['Water Gun', 'Heavy Slam'],
		defend: ['Splash', 'Water Pulse'],
		lastevolve: false
	},{
		nummer: '321',
		namn: 'Wailord',
		type: ['Water'],
		moves: ['Water Gun', 'Zen Headbutt', 'Hyper Beam', 'Blizzard', 'Surf'],
		attack: ['Water Gun', 'Surf'],
		defend: ['Zen Headbutt', 'Surf'],
		lastevolve: true
	},{
		nummer: '322',
		namn: 'Numel',
		type: ['Fire', 'Ground'],
		moves: ['Ember', 'Tackle', 'Heat Wave', 'Bulldoze', 'Stomp'],
		attack: ['Ember', 'Bulldoze'],
		defend: ['Ember', 'Bulldoze'],
		lastevolve: false
	},{
		nummer: '323',
		namn: 'Camerupt',
		type: ['Fire', 'Ground'],
		moves: ['Ember', 'Rock Smash', 'Earthquake', 'Solar Beam', 'Overheat'],
		attack: ['Ember', 'Overheat'],
		defend: ['Rock Smash', 'Overheat'],
		lastevolve: true
	},{
		nummer: '324',
		namn: 'Torkoal',
		type: ['Fire'],
		moves: ['Ember', 'Fire Spin', 'Earthquake', 'Solar Beam', 'Overheat'],
		attack: ['Fire Spin', 'Overheat'],
		defend: ['Fire Spin', 'Overheat'],
		lastevolve: true
	},{
		nummer: '325',
		namn: 'Spoink',
		type: ['Psychic'],
		moves: ['Splash', 'Zen Headbutt', 'Psybeam', 'Shadow Ball', 'Mirror Coat'],
		attack: ['Zen Headbutt', 'Shadow Ball'],
		defend: ['Zen Headbutt', 'Shadow Ball'],
		lastevolve: false
	},{
		nummer: '326',
		namn: 'Grumpig',
		type: ['Psychic'],
		moves: ['Charge Beam', 'Extrasensory', 'Shadow Ball', 'Psychic', 'Mirror Coat'],
		attack: ['Extrasensory', 'Shadow Ball'],
		defend: ['Extrasensory', 'Shadow Ball'],
		lastevolve: true
	},{
		nummer: '327',
		namn: 'Spinda',
		type: ['Normal'],
		moves: ['Sucker Punch', 'Psycho Cut', 'Dig', 'Rock Tomb', 'Icy Wind'],
		attack: ['Sucker Punch', 'Dig'],
		defend: ['Sucker Punch', 'Dig'],
		lastevolve: true
	},{
		nummer: '328',
		namn: 'Trapinch',
		type: ['Ground'],
		moves: ['Mud Shot', 'Struggle Bug', 'Dig', 'Sand Tomb', 'Crunch'],
		attack: ['Mud Shot', 'Dig'],
		defend: ['Struggle Bug', 'Dig'],
		lastevolve: false
	},{
		nummer: '329',
		namn: 'Vibrava',
		type: ['Ground', 'Dragon'],
		moves: ['Dragon Breath', 'Mud Shot', 'Bug Buzz', 'Bulldoze', 'Sand Tomb'],
		attack: ['Dragon Breath', 'Bulldoze'],
		defend: ['Mud Shot', 'Bulldoze'],
		lastevolve: false
	},{
		nummer: '330',
		namn: 'Flygon',
		type: ['Ground', 'Dragon'],
		moves: ['Mud Shot', 'Dragon Tail', 'Earthquake', 'Stone Edge', 'Dragon Claw'],
		attack: ['Dragon Tail', 'Earthquake'],
		defend: ['Dragon Tail', 'Dragon Claw'],
		lastevolve: true
	},{
		nummer: '331',
		namn: 'Cacnea',
		type: ['Grass'],
		moves: ['Sucker Punch', 'Poison Sting', 'Seed Bomb', 'Brick Break', 'Grass Knot'],
		attack: ['Sucker Punch', 'Grass Knot'],
		defend: ['Sucker Punch', 'Grass Knot'],
		lastevolve: false
	},{
		nummer: '332',
		namn: 'Cacturne',
		type: ['Grass', 'Dark'],
		moves: ['Sucker Punch', 'Poison Jab', 'Dark Pulse', 'Dynamic Punch', 'Grass Knot'],
		attack: ['Sucker Punch', 'Grass Knot'],
		defend: ['Poison Jab', 'Grass Knot'],
		lastevolve: true
	},{
		nummer: '333',
		namn: 'Swablu',
		type: ['Normal', 'Flying'],
		moves: ['Peck', 'Astonish', 'Ice Beam', 'Aerial Ace', 'Disarming Voice'],
		attack: ['Peck', 'Aerial Ace'],
		defend: ['Peck', 'Aerial Ace'],
		lastevolve: false
	},{
		nummer: '334',
		namn: 'Altaria',
		type: ['Dragon', 'Flying'],
		moves: ['Dragon Breath', 'Peck', 'Dragon Pulse', 'Dazzling Gleam', 'Sky Attack'],
		attack: ['Dragon Breath', 'Sky Attack'],
		defend: ['Peck', 'Dragon Pulse'],
		lastevolve: true
	},{
		nummer: '335',
		namn: 'Zangoose',
		type: ['Normal'],
		moves: ['Fury Cutter', 'Shadow Claw', 'Dig', 'Night Slash', 'Close Combat'],
		attack: ['Shadow Claw', 'Close Combat'],
		defend: ['Shadow Claw', 'Dig'],
		lastevolve: true
	},{
		nummer: '336',
		namn: 'Seviper',
		type: ['Poison'],
		moves: ['Poison Jab', 'Iron Tail', 'Wrap', 'Poison Fang', 'Crunch'],
		attack: ['Poison Jab', 'Crunch'],
		defend: ['Iron Tail', 'Crunch'],
		lastevolve: true
	},{
		nummer: '337',
		namn: 'Lunatone',
		type: ['Rock', 'Psychic'],
		moves: ['Rock Throw', 'Confusion', 'Rock Slide', 'Moonblast', 'Psychic'],
		attack: ['Rock Throw', 'Rock Slide'],
		defend: ['Confusion', 'Rock Slide'],
		lastevolve: true
	},{
		nummer: '338',
		namn: 'Solrock',
		type: ['Rock', 'Psychic'],
		moves: ['Rock Throw', 'Confusion', 'Rock Slide', 'Psychic', 'Solar Beam'],
		attack: ['Confusion', 'Solar Beam'],
		defend: ['Confusion', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '339',
		namn: 'Barboach',
		type: ['Water', 'Ground'],
		moves: ['Mud Shot', 'Water Gun', 'Ice Beam', 'Aqua Tail', 'Mud Bomb'],
		attack: ['Water Gun', 'Aqua Tail'],
		defend: ['Mud Shot', 'Mud Bomb'],
		lastevolve: false
	},{
		nummer: '340',
		namn: 'Whiscash',
		type: ['Water', 'Ground'],
		moves: ['Mud Shot', 'Water Gun', 'Blizzard', 'Mud Bomb', 'Water Pulse'],
		attack: ['Water Gun', 'Blizzard'],
		defend: ['Mud Shot', 'Mud Bomb'],
		lastevolve: true
	},{
		nummer: '341',
		namn: 'Corphish',
		type: ['Water'],
		moves: ['Bubble', 'Rock Smash', 'Vice Grip', 'Bubble Beam', 'Aqua Jet'],
		attack: ['Bubble', 'Bubble Beam'],
		defend: ['Bubble', 'Bubble Beam'],
		lastevolve: false
	},{
		nummer: '342',
		namn: 'Crawdaunt',
		type: ['Water', 'Dark'],
		moves: ['Snarl', 'Waterfall', 'Vice Grip', 'Night Slash', 'Bubble Beam'],
		attack: ['Waterfall', 'Night Slash'],
		defend: ['Waterfall', 'Night Slash'],
		lastevolve: true
	},{
		nummer: '343',
		namn: 'Baltoy',
		type: ['Ground', 'Psychic'],
		moves: ['Confusion', 'Extrasensory', 'Dig', 'Psybeam', 'Gyro Ball'],
		attack: ['Confusion', 'Dig'],
		defend: ['Confusion', 'Dig'],
		lastevolve: false
	},{
		nummer: '344',
		namn: 'Claydol',
		type: ['Ground', 'Psychic'],
		moves: ['Confusion', 'Extrasensory', 'Earthquake', 'Psychic', 'Gyro Ball'],
		attack: ['Confusion', 'Earthquake'],
		defend: ['Confusion', 'Earthquake'],
		lastevolve: true
	},{
		nummer: '345',
		namn: 'Lileep',
		type: ['Rock', 'Grass'],
		moves: ['Acid', 'Infestation', 'Ancient Power', 'Grass Knot', 'Mirror Coat'],
		attack: ['Infestation', 'Grass Knot'],
		defend: ['Infestation', 'Grass Knot'],
		lastevolve: false
	},{
		nummer: '346',
		namn: 'Cradily',
		type: ['Rock', 'Grass'],
		moves: ['Acid', 'Infestation', 'Stone Edge', 'Bulldoze', 'Grass Knot'],
		attack: ['Infestation', 'Grass Knot'],
		defend: ['Infestation', 'Grass Knot'],
		lastevolve: true
	},{
		nummer: '347',
		namn: 'Anorith',
		type: ['Rock', 'Bug'],
		moves: ['Scratch', 'Struggle Bug', 'Aqua Jet', 'Ancient Power', 'Cross Poison'],
		attack: ['Struggle Bug', 'Ancient Power'],
		defend: ['Struggle Bug', 'Ancient Power'],
		lastevolve: false
	},{
		nummer: '348',
		namn: 'Armaldo',
		type: ['Rock', 'Bug'],
		moves: ['Fury Cutter', 'Struggle Bug', 'Cross Poison', 'Water Pulse', 'Rock Blast'],
		attack: ['Struggle Bug', 'Rock Blast'],
		defend: ['Struggle Bug', 'Rock Blast'],
		lastevolve: true
	},{
		nummer: '349',
		namn: 'Feebas',
		type: ['Water'],
		moves: ['Tackle', 'Splash', 'Mirror Coat'],
		attack: ['Tackle', 'Mirror Coat'],
		defend: ['Splash', 'Mirror Coat'],
		lastevolve: false
	},{
		nummer: '350',
		namn: 'Milotic',
		type: ['Water'],
		moves: ['Dragon Tail', 'Waterfall', 'Water Gun', 'Hyper Beam', 'Blizzard', 'Surf'],
		attack: ['Waterfall', 'Surf'],
		defend: ['Waterfall', 'Hyper Beam'],
		lastevolve: true
	},{
		nummer: '351',
		namn: 'Castform',
		type: ['Normal'],
		moves: ['Bite', 'Rock Smash', 'Ancient Power', 'Stomp', 'Crunch'],
		attack: ['Bite', 'Stomp'],
		defend: ['Rock Smash', 'Crunch'],
		lastevolve: true
	},{
		nummer: '352',
		namn: 'Kecleon',
		type: ['Normal'],
		moves: ['Sucker Punch', 'Lick', 'Flamethrower', 'Ice Beam', 'Aerial Ace', 'Shadow Sneak', 'Thunder', 'Foul Play'],
		attack: ['Lick', 'Foul Play'],
		defend: ['Sucker Punch', 'Ice Beam'],
		lastevolve: true
	},{
		nummer: '353',
		namn: 'Shuppet',
		type: ['Ghost'],
		moves: ['Feint Attack', 'Astonish', 'Shadow Sneak', 'Ominous Wind', 'Night Shade'],
		attack: ['Feint Attack', 'Ominous Wind'],
		defend: ['Astonish', 'Ominous Wind'],
		lastevolve: false
	},{
		nummer: '354',
		namn: 'Banette',
		type: ['Ghost'],
		moves: ['Shadow Claw', 'Hex', 'Shadow Ball', 'Thunder', 'Dazzling Gleam'],
		attack: ['Shadow Claw', 'Shadow Ball'],
		defend: ['Hex', 'Shadow Ball'],
		lastevolve: true
	},{
		nummer: '355',
		namn: 'Duskull',
		type: ['Ghost'],
		moves: ['Astonish', 'Hex', 'Shadow Sneak', 'Ominous Wind', 'Night Shade'],
		attack: ['Hex', 'Ominous Wind'],
		defend: ['Hex', 'Ominous Wind'],
		lastevolve: false
	},{
		nummer: '356',
		namn: 'Dusclops',
		type: ['Ghost'],
		moves: ['Feint Attack', 'Hex', 'Ice Punch', 'Shadow Punch', 'Fire Punch'],
		attack: ['Feint Attack', 'Shadow Punch'],
		defend: ['Hex', 'Fire Punch'],
		lastevolve: true
	},{
		nummer: '357',
		namn: 'Tropius',
		type: ['Grass', 'Flying'],
		moves: ['Razor Leaf', 'Air Slash', 'Aerial Ace', 'Leaf Blade', 'Stomp'],
		attack: ['Razor Leaf', 'Leaf Blade'],
		defend: ['Air Slash', 'Leaf Blade'],
		lastevolve: true
	},{
		nummer: '358',
		namn: 'Chimecho',
		type: ['Psychic'],
		moves: ['Astonish', 'Extrasensory', 'Psyshock', 'Shadow Ball', 'Energy Ball'],
		attack: ['Extrasensory', 'Shadow Ball'],
		defend: ['Extrasensory', 'Psyshock'],
		lastevolve: true
	},{
		nummer: '359',
		namn: 'Absol',
		type: ['Dark'],
		moves: ['Psycho Cut', 'Snarl', 'Dark Pulse', 'Megahorn', 'Thunder'],
		attack: ['Snarl', 'Dark Pulse'],
		defend: ['Snarl', 'Dark Pulse'],
		lastevolve: true
	},{
		nummer: '360',
		namn: 'Wynaut',
		type: ['Psychic'],
		moves: ['Splash', 'Counter', 'Mirror Coat'],
		attack: ['Counter', 'Mirror Coat'],
		defend: ['Counter', 'Mirror Coat'],
		lastevolve: false
	},{
		nummer: '361',
		namn: 'Snorunt',
		type: ['Ice'],
		moves: ['Powder Snow', 'Hex', 'Shadow Ball', 'Icy Wind', 'Avalanche'],
		attack: ['Powder Snow', 'Avalanche'],
		defend: ['Powder Snow', 'Avalanche'],
		lastevolve: false
	},{
		nummer: '362',
		namn: 'Glalie',
		type: ['Ice'],
		moves: ['Ice Shard', 'Frost Breath', 'Shadow Ball', 'Avalanche', 'Gyro Ball'],
		attack: ['Frost Breath', 'Avalanche'],
		defend: ['Ice Shard', 'Avalanche'],
		lastevolve: true
	},{
		nummer: '363',
		namn: 'Spheal',
		type: ['Ice', 'Water'],
		moves: ['Water Gun', 'Rock Smash', 'Water Pulse', 'Body Slam', 'Aurora Beam'],
		attack: ['Water Gun', 'Aurora Beam'],
		defend: ['Rock Smash', 'Aurora Beam'],
		lastevolve: false
	},{
		nummer: '364',
		namn: 'Sealeo',
		type: ['Ice', 'Water'],
		moves: ['Water Gun', 'Powder Snow', 'Water Pulse', 'Body Slam', 'Aurora Beam'],
		attack: ['Water Gun', 'Aurora Beam'],
		defend: ['Powder Snow', 'Aurora Beam'],
		lastevolve: false
	},{
		nummer: '365',
		namn: 'Walrein',
		type: ['Ice', 'Water'],
		moves: ['Frost Breath', 'Waterfall', 'Earthquake', 'Blizzard', 'Water Pulse'],
		attack: ['Waterfall', 'Blizzard'],
		defend: ['Waterfall', 'Blizzard'],
		lastevolve: true
	},{
		nummer: '366',
		namn: 'Clamperl',
		type: ['Water'],
		moves: ['Water Gun', 'Ice Beam', 'Water Pulse', 'Body Slam'],
		attack: ['Water Gun', 'Ice Beam'],
		defend: ['Water Gun', 'Ice Beam'],
		lastevolve: false
	},{
		nummer: '367',
		namn: 'Huntail',
		type: ['Water'],
		moves: ['Bite', 'Water Gun', 'Ice Beam', 'Aqua Tail', 'Crunch'],
		attack: ['Water Gun', 'Aqua Tail'],
		defend: ['Water Gun', 'Aqua Tail'],
		lastevolve: true
	},{
		nummer: '368',
		namn: 'Gorebyss',
		type: ['Water'],
		moves: ['Water Gun', 'Confusion', 'Draining Kiss', 'Water Pulse', 'Psychic'],
		attack: ['Confusion', 'Water Pulse'],
		defend: ['Confusion', 'Water Pulse'],
		lastevolve: true
	},{
		nummer: '369',
		namn: 'Relicanth',
		type: ['Water', 'Rock'],
		moves: ['Water Gun', 'Zen Headbutt', 'Aqua Tail', 'Ancient Power', 'Hydro Pump'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Zen Headbutt', 'Ancient Power'],
		lastevolve: true
	},{
		nummer: '370',
		namn: 'Luvdisc',
		type: ['Water'],
		moves: ['Water Gun', 'Splash', 'Aqua Jet', 'Draining Kiss', 'Water Pulse'],
		attack: ['Water Gun', 'Water Pulse'],
		defend: ['Splash', 'Water Pulse'],
		lastevolve: true
	},{
		nummer: '371',
		namn: 'Bagon',
		type: ['Dragon'],
		moves: ['Bite', 'Ember', 'Flamethrower', 'Twister', 'Crunch'],
		attack: ['Bite', 'Flamethrower'],
		defend: ['Ember', 'Crunch'],
		lastevolve: false
	},{
		nummer: '372',
		namn: 'Shelgon',
		type: ['Dragon'],
		moves: ['Dragon Breath', 'Ember', 'Flamethrower', 'Twister', 'Dragon Pulse'],
		attack: ['Dragon Breath', 'Dragon Pulse'],
		defend: ['Ember', 'Dragon Pulse'],
		lastevolve: false
	},{
		nummer: '373',
		namn: 'Salamence',
		type: ['Dragon', 'Flying'],
		moves: ['Fire Fang', 'Dragon Tail', 'Fire Blast', 'Hydro Pump', 'Draco Meteor'],
		attack: ['Dragon Tail', 'Draco Meteor'],
		defend: ['Dragon Tail', 'Draco Meteor'],
		lastevolve: true
	},{
		nummer: '374',
		namn: 'Beldum',
		type: ['Steel', 'Psychic'],
		moves: ['Take Down', 'Struggle'],
		attack: ['Take Down', 'Struggle'],
		defend: ['Take Down', 'Struggle'],
		lastevolve: false
	},{
		nummer: '375',
		namn: 'Metang',
		type: ['Steel', 'Psychic'],
		moves: ['Metal Claw', 'Zen Headbutt', 'Psyshock', 'Psychic', 'Gyro Ball'],
		attack: ['Metal Claw', 'Psychic'],
		defend: ['Zen Headbutt', 'Gyro Ball'],
		lastevolve: false
	},{
		nummer: '376',
		namn: 'Metagross',
		type: ['Steel', 'Psychic'],
		moves: ['Bullet Punch', 'Zen Headbutt', 'Earthquake', 'Flash Cannon', 'Psychic'],
		attack: ['Zen Headbutt', 'Flash Cannon'],
		defend: ['Bullet Punch', 'Flash Cannon'],
		lastevolve: true
	},{
		nummer: '377',
		namn: 'Regirock',
		type: ['Rock'],
		moves: ['Rock Throw', 'Rock Smash', 'Stone Edge', 'Focus Blast', 'Zap Cannon'],
		attack: ['Rock Throw', 'Stone Edge'],
		defend: ['Rock Throw', 'Focus Blast'],
		lastevolve: true
	},{
		nummer: '378',
		namn: 'Regice',
		type: ['Ice'],
		moves: ['Frost Breath', 'Rock Smash', 'Earthquake', 'Blizzard', 'Focus Blast'],
		attack: ['Frost Breath', 'Blizzard'],
		defend: ['Rock Smash', 'Blizzard'],
		lastevolve: true
	},{
		nummer: '379',
		namn: 'Registeel',
		type: ['Steel'],
		moves: ['Metal Claw', 'Rock Smash', 'Hyper Beam', 'Flash Cannon', 'Focus Blast'],
		attack: ['Metal Claw', 'Focus Blast'],
		defend: ['Rock Smash', 'Hyper Beam'],
		lastevolve: true
	},{
		nummer: '380',
		namn: 'Latias',
		type: ['Dragon', 'Psychic'],
		moves: ['Dragon Breath', 'Zen Headbutt', 'Thunder', 'Dragon Claw', 'Psychic'],
		attack: ['Dragon Breath', 'Psychic'],
		defend: ['Zen Headbutt', 'Dragon Claw'],
		lastevolve: true
	},{
		nummer: '381',
		namn: 'Latios',
		type: ['Dragon', 'Psychic'],
		moves: ['Dragon Breath', 'Zen Headbutt', 'Dragon Claw', 'Psychic', 'Solar Beam'],
		attack: ['Zen Headbutt', 'Solar Beam'],
		defend: ['Zen Headbutt', 'Dragon Claw'],
		lastevolve: true
	},{
		nummer: '382',
		namn: 'Kyogre',
		type: ['Water'],
		moves: ['Dragon Tail', 'Waterfall', 'Blizzard', 'Thunder', 'Hydro Pump'],
		attack: ['Waterfall', 'Hydro Pump'],
		defend: ['Waterfall', 'Hydro Pump'],
		lastevolve: true
	},{
		nummer: '383',
		namn: 'Groudon',
		type: ['Ground'],
		moves: ['Mud Shot', 'Dragon Tail', 'Earthquake', 'Fire Blast', 'Solar Beam'],
		attack: ['Dragon Tail', 'Solar Beam'],
		defend: ['Dragon Tail', 'Solar Beam'],
		lastevolve: true
	},{
		nummer: '384',
		namn: 'Rayquaza',
		type: ['Dragon', 'Flying'],
		moves: ['Dragon Tail', 'Air Slash', 'Aerial Ace', 'Ancient Power', 'Outrage'],
		attack: ['Dragon Tail', 'Outrage'],
		defend: ['Dragon Tail', 'Outrage'],
		lastevolve: true
	},{
		nummer: '385',
		namn: 'Jirachi',
		type: ['Steel', 'Psychic'],
		moves: ['Confusion', 'Charge Beam', 'Dazzling Gleam', 'Psychic', 'Doom Desire'],
		attack: ['Confusion', 'Doom Desire'],
		defend: ['Confusion', 'Doom Desire'],
		lastevolve: true
	},{
		nummer: '386',
		namn: 'Deoxys',
		type: ['Psychic'],
		moves: ['Zen Headbutt', 'Counter', 'Swift', 'Zap Cannon', 'Psycho Boost'],
		attack: ['Counter', 'Zap Cannon'],
		defend: ['Zen Headbutt', 'Psycho Boost'],
		lastevolve: true
	},{
		nummer: '387',
		namn: 'Turtwig',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '388',
		namn: 'Grotle',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '389',
		namn: 'Torterra',
		type: ['Grass', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '390',
		namn: 'Chimchar',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '391',
		namn: 'Monferno',
		type: ['Fire', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '392',
		namn: 'Infernape',
		type: ['Fire', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '393',
		namn: 'Piplup',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '394',
		namn: 'Prinplup',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '395',
		namn: 'Empoleon',
		type: ['Water', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '396',
		namn: 'Starly',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '397',
		namn: 'Staravia',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '398',
		namn: 'Staraptor',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '399',
		namn: 'Bidoof',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '400',
		namn: 'Bibarel',
		type: ['Normal', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '401',
		namn: 'Kricketot',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '402',
		namn: 'Kricketune',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '403',
		namn: 'Shinx',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '404',
		namn: 'Luxio',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '405',
		namn: 'Luxray',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '406',
		namn: 'Budew',
		type: ['Grass', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '407',
		namn: 'Roserade',
		type: ['Grass', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '408',
		namn: 'Cranidos',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '409',
		namn: 'Rampardos',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '410',
		namn: 'Shieldon',
		type: ['Rock', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '411',
		namn: 'Bastiodon',
		type: ['Rock', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '412',
		namn: 'Burmy',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '413',
		namn: 'Wormadam',
		type: ['Bug', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '413G',
		namn: 'Wormadam',
		type: ['Bug', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '413S',
		namn: 'Wormadam',
		type: ['Bug', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '414',
		namn: 'Mothim',
		type: ['Bug', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '415',
		namn: 'Combee',
		type: ['Bug', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '416',
		namn: 'Vespiquen',
		type: ['Bug', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '417',
		namn: 'Pachirisu',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '418',
		namn: 'Buizel',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '419',
		namn: 'Floatzel',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '420',
		namn: 'Cherubi',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '421',
		namn: 'Cherrim',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '422',
		namn: 'Shellos',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '423',
		namn: 'Gastrodon',
		type: ['Water', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '424',
		namn: 'Ambipom',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '425',
		namn: 'Drifloon',
		type: ['Ghost', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '426',
		namn: 'Drifblim',
		type: ['Ghost', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '427',
		namn: 'Buneary',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '428',
		namn: 'Lopunny',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '429',
		namn: 'Mismagius',
		type: ['Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '430',
		namn: 'Honchkrow',
		type: ['Dark', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '431',
		namn: 'Glameow',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '432',
		namn: 'Purugly',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '433',
		namn: 'Chingling',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '434',
		namn: 'Stunky',
		type: ['Poison', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '435',
		namn: 'Skuntank',
		type: ['Poison', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '436',
		namn: 'Bronzor',
		type: ['Steel', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '437',
		namn: 'Bronzong',
		type: ['Steel', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '438',
		namn: 'Bonsly',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '439',
		namn: 'Mime Jr.',
		type: ['Psychic', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '440',
		namn: 'Happiny',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '441',
		namn: 'Chatot',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '442',
		namn: 'Spiritomb',
		type: ['Ghost', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '443',
		namn: 'Gible',
		type: ['Dragon', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '444',
		namn: 'Gabite',
		type: ['Dragon', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '445',
		namn: 'Garchomp',
		type: ['Dragon', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '446',
		namn: 'Munchlax',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '447',
		namn: 'Riolu',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '448',
		namn: 'Lucario',
		type: ['Fighting', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '449',
		namn: 'Hippopotas',
		type: ['Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '450',
		namn: 'Hippowdon',
		type: ['Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '451',
		namn: 'Skorupi',
		type: ['Poison', 'Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '452',
		namn: 'Drapion',
		type: ['Poison', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '453',
		namn: 'Croagunk',
		type: ['Poison', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '454',
		namn: 'Toxicroak',
		type: ['Poison', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '455',
		namn: 'Carnivine',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '456',
		namn: 'Finneon',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '457',
		namn: 'Lumineon',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '458',
		namn: 'Mantyke',
		type: ['Water', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '459',
		namn: 'Snover',
		type: ['Grass', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '460',
		namn: 'Abomasnow',
		type: ['Grass', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '461',
		namn: 'Weavile',
		type: ['Dark', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '462',
		namn: 'Magnezone',
		type: ['Electric', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '463',
		namn: 'Lickilicky',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '464',
		namn: 'Rhyperior',
		type: ['Ground', 'Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '465',
		namn: 'Tangrowth',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '466',
		namn: 'Electivire',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '467',
		namn: 'Magmortar',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '468',
		namn: 'Togekiss',
		type: ['Fairy', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '469',
		namn: 'Yanmega',
		type: ['Bug', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '470',
		namn: 'Leafeon',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '471',
		namn: 'Glaceon',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '472',
		namn: 'Gliscor',
		type: ['Ground', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '473',
		namn: 'Mamoswine',
		type: ['Ice', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '474',
		namn: 'Porygon-Z',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '475',
		namn: 'Gallade',
		type: ['Psychic', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '476',
		namn: 'Probopass',
		type: ['Rock', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '477',
		namn: 'Dusknoir',
		type: ['Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '478',
		namn: 'Froslass',
		type: ['Ice', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '479',
		namn: 'Rotom',
		type: ['Electric', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '480',
		namn: 'Uxie',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '481',
		namn: 'Mesprit',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '482',
		namn: 'Azelf',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '483',
		namn: 'Dialga',
		type: ['Steel', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '484',
		namn: 'Palkia',
		type: ['Water', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '485',
		namn: 'Heatran',
		type: ['Fire', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '486',
		namn: 'Regigigas',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '487',
		namn: 'Giratina',
		type: ['Ghost', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '488',
		namn: 'Cresselia',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '489',
		namn: 'Phione',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '490',
		namn: 'Manaphy',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '491',
		namn: 'Darkrai',
		type: ['Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '492',
		namn: 'Shaymin',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '493',
		namn: 'Arceus',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '494',
		namn: 'Victini',
		type: ['Psychic', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '495',
		namn: 'Snivy',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '496',
		namn: 'Servine',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '497',
		namn: 'Serperior',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '498',
		namn: 'Tepig',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '499',
		namn: 'Pignite',
		type: ['Fire', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '500',
		namn: 'Emboar',
		type: ['Fire', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '501',
		namn: 'Oshawott',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '502',
		namn: 'Dewott',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '503',
		namn: 'Samurott',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '504',
		namn: 'Patrat',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '505',
		namn: 'Watchog',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '506',
		namn: 'Lillipup',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '507',
		namn: 'Herdier',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '508',
		namn: 'Stoutland',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '509',
		namn: 'Purrloin',
		type: ['Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '510',
		namn: 'Liepard',
		type: ['Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '511',
		namn: 'Pansage',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '512',
		namn: 'Simisage',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '513',
		namn: 'Pansear',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '514',
		namn: 'Simisear',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '515',
		namn: 'Panpour',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '516',
		namn: 'Simipour',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '517',
		namn: 'Munna',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '518',
		namn: 'Musharna',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '519',
		namn: 'Pidove',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '520',
		namn: 'Tranquill',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '521',
		namn: 'Unfezant',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '522',
		namn: 'Blitzle',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '523',
		namn: 'Zebstrika',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '524',
		namn: 'Roggenrola',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '525',
		namn: 'Boldore',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '526',
		namn: 'Gigalith',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '527',
		namn: 'Woobat',
		type: ['Psychic', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '528',
		namn: 'Swoobat',
		type: ['Psychic', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '529',
		namn: 'Drilbur',
		type: ['Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '530',
		namn: 'Excadrill',
		type: ['Ground', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '531',
		namn: 'Audino',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '532',
		namn: 'Timburr',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '533',
		namn: 'Gurdurr',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '534',
		namn: 'Conkeldurr',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '535',
		namn: 'Tympole',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '536',
		namn: 'Palpitoad',
		type: ['Water', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '537',
		namn: 'Seismitoad',
		type: ['Water', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '538',
		namn: 'Throh',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '539',
		namn: 'Sawk',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '540',
		namn: 'Sewaddle',
		type: ['Bug', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '541',
		namn: 'Swadloon',
		type: ['Bug', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '542',
		namn: 'Leavanny',
		type: ['Bug', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '543',
		namn: 'Venipede',
		type: ['Bug', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '544',
		namn: 'Whirlipede',
		type: ['Bug', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '545',
		namn: 'Scolipede',
		type: ['Bug', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '546',
		namn: 'Cottonee',
		type: ['Grass', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '547',
		namn: 'Whimsicott',
		type: ['Grass', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '548',
		namn: 'Petilil',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '549',
		namn: 'Lilligant',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '550',
		namn: 'Basculin',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '551',
		namn: 'Sandile',
		type: ['Ground', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '552',
		namn: 'Krokorok',
		type: ['Ground', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '553',
		namn: 'Krookodile',
		type: ['Ground', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '554',
		namn: 'Darumaka',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '555',
		namn: 'Darmanitan',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '556',
		namn: 'Maractus',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '557',
		namn: 'Dwebble',
		type: ['Bug', 'Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '558',
		namn: 'Crustle',
		type: ['Bug', 'Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '559',
		namn: 'Scraggy',
		type: ['Dark', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '560',
		namn: 'Scrafty',
		type: ['Dark', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '561',
		namn: 'Sigilyph',
		type: ['Psychic', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '562',
		namn: 'Yamask',
		type: ['Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '563',
		namn: 'Cofagrigus',
		type: ['Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '564',
		namn: 'Tirtouga',
		type: ['Water', 'Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '565',
		namn: 'Carracosta',
		type: ['Water', 'Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '566',
		namn: 'Archen',
		type: ['Rock', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '567',
		namn: 'Archeops',
		type: ['Rock', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '568',
		namn: 'Trubbish',
		type: ['Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '569',
		namn: 'Garbodor',
		type: ['Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '570',
		namn: 'Zorua',
		type: ['Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '571',
		namn: 'Zoroark',
		type: ['Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '572',
		namn: 'Minccino',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '573',
		namn: 'Cinccino',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '574',
		namn: 'Gothita',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '575',
		namn: 'Gothorita',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '576',
		namn: 'Gothitelle',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '577',
		namn: 'Solosis',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '578',
		namn: 'Duosion',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '579',
		namn: 'Reuniclus',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '580',
		namn: 'Ducklett',
		type: ['Water', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '581',
		namn: 'Swanna',
		type: ['Water', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '582',
		namn: 'Vanillite',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '583',
		namn: 'Vanillish',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '584',
		namn: 'Vanilluxe',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '585',
		namn: 'Deerling',
		type: ['Normal', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '586',
		namn: 'Sawsbuck',
		type: ['Normal', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '587',
		namn: 'Emolga',
		type: ['Electric', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '588',
		namn: 'Karrablast',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '589',
		namn: 'Escavalier',
		type: ['Bug', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '590',
		namn: 'Foongus',
		type: ['Grass', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '591',
		namn: 'Amoonguss',
		type: ['Grass', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '592',
		namn: 'Frillish',
		type: ['Water', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '593',
		namn: 'Jellicent',
		type: ['Water', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '594',
		namn: 'Alomomola',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '595',
		namn: 'Joltik',
		type: ['Bug', 'Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '596',
		namn: 'Galvantula',
		type: ['Bug', 'Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '597',
		namn: 'Ferroseed',
		type: ['Grass', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '598',
		namn: 'Ferrothorn',
		type: ['Grass', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '599',
		namn: 'Klink',
		type: ['Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '600',
		namn: 'Klang',
		type: ['Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '601',
		namn: 'Klinklang',
		type: ['Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '602',
		namn: 'Tynamo',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '603',
		namn: 'Eelektrik',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '604',
		namn: 'Eelektross',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '605',
		namn: 'Elgyem',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '606',
		namn: 'Beheeyem',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '607',
		namn: 'Litwick',
		type: ['Ghost', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '608',
		namn: 'Lampent',
		type: ['Ghost', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '609',
		namn: 'Chandelure',
		type: ['Ghost', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '610',
		namn: 'Axew',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '611',
		namn: 'Fraxure',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '612',
		namn: 'Haxorus',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '613',
		namn: 'Cubchoo',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '614',
		namn: 'Beartic',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '615',
		namn: 'Cryogonal',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '616',
		namn: 'Shelmet',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '617',
		namn: 'Accelgor',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '618',
		namn: 'Stunfisk',
		type: ['Ground', 'Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '619',
		namn: 'Mienfoo',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '620',
		namn: 'Mienshao',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '621',
		namn: 'Druddigon',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '622',
		namn: 'Golett',
		type: ['Ground', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '623',
		namn: 'Golurk',
		type: ['Ground', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '624',
		namn: 'Pawniard',
		type: ['Dark', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '625',
		namn: 'Bisharp',
		type: ['Dark', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '626',
		namn: 'Bouffalant',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '627',
		namn: 'Rufflet',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '628',
		namn: 'Braviary',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '629',
		namn: 'Vullaby',
		type: ['Dark', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '630',
		namn: 'Mandibuzz',
		type: ['Dark', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '631',
		namn: 'Heatmor',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '632',
		namn: 'Durant',
		type: ['Bug', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '633',
		namn: 'Deino',
		type: ['Dark', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '634',
		namn: 'Zweilous',
		type: ['Dark', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '635',
		namn: 'Hydreigon',
		type: ['Dark', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '636',
		namn: 'Larvesta',
		type: ['Bug', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '637',
		namn: 'Volcarona',
		type: ['Bug', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '638',
		namn: 'Cobalion',
		type: ['Steel', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '639',
		namn: 'Terrakion',
		type: ['Rock', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '640',
		namn: 'Virizion',
		type: ['Grass', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '641',
		namn: 'Tornadus',
		type: ['Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '642',
		namn: 'Thundurus',
		type: ['Electric', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '643',
		namn: 'Reshiram',
		type: ['Dragon', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '644',
		namn: 'Zekrom',
		type: ['Dragon', 'Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '645',
		namn: 'Landorus',
		type: ['Ground', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '646',
		namn: 'Kyurem',
		type: ['Dragon', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '647',
		namn: 'Keldeo',
		type: ['Water', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '648',
		namn: 'Meloetta',
		type: ['Normal', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '649',
		namn: 'Genesect',
		type: ['Bug', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '650',
		namn: 'Chespin',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '651',
		namn: 'Quilladin',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '652',
		namn: 'Chesnaught',
		type: ['Grass', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '653',
		namn: 'Fennekin',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '654',
		namn: 'Braixen',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '655',
		namn: 'Delphox',
		type: ['Fire', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '656',
		namn: 'Froakie',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '657',
		namn: 'Frogadier',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '658',
		namn: 'Greninja',
		type: ['Water', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '659',
		namn: 'Bunnelby',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '660',
		namn: 'Diggersby',
		type: ['Normal', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '661',
		namn: 'Fletchling',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '662',
		namn: 'Fletchinder',
		type: ['Fire', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '663',
		namn: 'Talonflame',
		type: ['Fire', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '664',
		namn: 'Scatterbug',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '665',
		namn: 'Spewpa',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '666',
		namn: 'Vivillon',
		type: ['Bug', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '667',
		namn: 'Litleo',
		type: ['Fire', 'Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '668',
		namn: 'Pyroar',
		type: ['Fire', 'Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '669',
		namn: 'Flabébé',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '670',
		namn: 'Floette',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '671',
		namn: 'Florges',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '672',
		namn: 'Skiddo',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '673',
		namn: 'Gogoat',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '674',
		namn: 'Pancham',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '675',
		namn: 'Pangoro',
		type: ['Fighting', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '676',
		namn: 'Furfrou',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '677',
		namn: 'Espurr',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '678',
		namn: 'Meowstic',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '679',
		namn: 'Honedge',
		type: ['Steel', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '680',
		namn: 'Doublade',
		type: ['Steel', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '681',
		namn: 'Aegislash',
		type: ['Steel', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '682',
		namn: 'Spritzee',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '683',
		namn: 'Aromatisse',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '684',
		namn: 'Swirlix',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '685',
		namn: 'Slurpuff',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '686',
		namn: 'Inkay',
		type: ['Dark', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '687',
		namn: 'Malamar',
		type: ['Dark', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '688',
		namn: 'Binacle',
		type: ['Rock', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '689',
		namn: 'Barbaracle',
		type: ['Rock', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '690',
		namn: 'Skrelp',
		type: ['Poison', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '691',
		namn: 'Dragalge',
		type: ['Poison', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '692',
		namn: 'Clauncher',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '693',
		namn: 'Clawitzer',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '694',
		namn: 'Helioptile',
		type: ['Electric', 'Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '695',
		namn: 'Heliolisk',
		type: ['Electric', 'Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '696',
		namn: 'Tyrunt',
		type: ['Rock', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '697',
		namn: 'Tyrantrum',
		type: ['Rock', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '698',
		namn: 'Amaura',
		type: ['Rock', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '699',
		namn: 'Aurorus',
		type: ['Rock', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '700',
		namn: 'Sylveon',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '701',
		namn: 'Hawlucha',
		type: ['Fighting', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '702',
		namn: 'Dedenne',
		type: ['Electric', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '703',
		namn: 'Carbink',
		type: ['Rock', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '704',
		namn: 'Goomy',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '705',
		namn: 'Sliggoo',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '706',
		namn: 'Goodra',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '707',
		namn: 'Klefki',
		type: ['Steel', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '708',
		namn: 'Phantump',
		type: ['Ghost', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '709',
		namn: 'Trevenant',
		type: ['Ghost', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '710',
		namn: 'Pumpkaboo',
		type: ['Ghost', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '711',
		namn: 'Gourgeist',
		type: ['Ghost', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '712',
		namn: 'Bergmite',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '713',
		namn: 'Avalugg',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '714',
		namn: 'Noibat',
		type: ['Flying', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '715',
		namn: 'Noivern',
		type: ['Flying', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '716',
		namn: 'Xerneas',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '717',
		namn: 'Yveltal',
		type: ['Dark', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '718',
		namn: 'Zygarde',
		type: ['Dragon', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '719',
		namn: 'Diancie',
		type: ['Rock', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '720',
		namn: 'Hoopa',
		type: ['Psychic', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '721',
		namn: 'Volcanion',
		type: ['Fire', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '722',
		namn: 'Rowlet',
		type: ['Grass', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '723',
		namn: 'Dartrix',
		type: ['Grass', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '724',
		namn: 'Decidueye',
		type: ['Grass', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '725',
		namn: 'Litten',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '726',
		namn: 'Torracat',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '727',
		namn: 'Incineroar',
		type: ['Fire', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '728',
		namn: 'Popplio',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '729',
		namn: 'Brionne',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '730',
		namn: 'Primarina',
		type: ['Water', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '731',
		namn: 'Pikipek',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '732',
		namn: 'Trumbeak',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '733',
		namn: 'Toucannon',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '734',
		namn: 'Yungoos',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '735',
		namn: 'Gumshoos',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '736',
		namn: 'Grubbin',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '737',
		namn: 'Charjabug',
		type: ['Bug', 'Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '738',
		namn: 'Vikavolt',
		type: ['Bug', 'Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '739',
		namn: 'Crabrawler',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '740',
		namn: 'Crabominable',
		type: ['Fighting', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '741',
		namn: 'Oricorio',
		type: ['Fire', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '742',
		namn: 'Cutiefly',
		type: ['Bug', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '743',
		namn: 'Ribombee',
		type: ['Bug', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '744',
		namn: 'Rockruff',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '745',
		namn: 'Lycanroc',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '746',
		namn: 'Wishiwashi',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '747',
		namn: 'Mareanie',
		type: ['Poison', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '748',
		namn: 'Toxapex',
		type: ['Poison', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '749',
		namn: 'Mudbray',
		type: ['Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '750',
		namn: 'Mudsdale',
		type: ['Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '751',
		namn: 'Dewpider',
		type: ['Water', 'Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '752',
		namn: 'Araquanid',
		type: ['Water', 'Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '753',
		namn: 'Fomantis',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '754',
		namn: 'Lurantis',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '755',
		namn: 'Morelull',
		type: ['Grass', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '756',
		namn: 'Shiinotic',
		type: ['Grass', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '757',
		namn: 'Salandit',
		type: ['Poison', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '758',
		namn: 'Salazzle',
		type: ['Poison', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '759',
		namn: 'Stufful',
		type: ['Normal', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '760',
		namn: 'Bewear',
		type: ['Normal', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '761',
		namn: 'Bounsweet',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '762',
		namn: 'Steenee',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '763',
		namn: 'Tsareena',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '764',
		namn: 'Comfey',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '765',
		namn: 'Oranguru',
		type: ['Normal', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '766',
		namn: 'Passimian',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '767',
		namn: 'Wimpod',
		type: ['Bug', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '768',
		namn: 'Golisopod',
		type: ['Bug', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '769',
		namn: 'Sandygast',
		type: ['Ghost', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '770',
		namn: 'Palossand',
		type: ['Ghost', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '771',
		namn: 'Pyukumuku',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '772',
		namn: 'Type: Null',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '773',
		namn: 'Silvally',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '774',
		namn: 'Minior',
		type: ['Rock', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '775',
		namn: 'Komala',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '776',
		namn: 'Turtonator',
		type: ['Fire', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '777',
		namn: 'Togedemaru',
		type: ['Electric', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '778',
		namn: 'Mimikyu',
		type: ['Ghost', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '779',
		namn: 'Bruxish',
		type: ['Water', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '780',
		namn: 'Drampa',
		type: ['Normal', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '781',
		namn: 'Dhelmise',
		type: ['Ghost', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '782',
		namn: 'Jangmo-o',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '783',
		namn: 'Hakamo-o',
		type: ['Dragon', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '784',
		namn: 'Kommo-o',
		type: ['Dragon', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '785',
		namn: 'Tapu Koko',
		type: ['Electric', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '786',
		namn: 'Tapu Lele',
		type: ['Psychic', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '787',
		namn: 'Tapu Bulu',
		type: ['Grass', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '788',
		namn: 'Tapu Fini',
		type: ['Water', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '789',
		namn: 'Cosmog',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '790',
		namn: 'Cosmoem',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '791',
		namn: 'Solgaleo',
		type: ['Psychic', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '792',
		namn: 'Lunala',
		type: ['Psychic', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '793',
		namn: 'Nihilego',
		type: ['Rock', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '794',
		namn: 'Buzzwole',
		type: ['Bug', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '795',
		namn: 'Pheromosa',
		type: ['Bug', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '796',
		namn: 'Xurkitree',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '797',
		namn: 'Celesteela',
		type: ['Steel', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '798',
		namn: 'Kartana',
		type: ['Grass', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '799',
		namn: 'Guzzlord',
		type: ['Dark', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '800',
		namn: 'Necrozma',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '801',
		namn: 'Magearna',
		type: ['Steel', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	},{
		nummer: '802',
		namn: 'Marshadow',
		type: ['Fighting', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		lastevolve: false
	}
];














