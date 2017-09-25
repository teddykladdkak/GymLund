/*https://pokemongo.gamepress.gg/charge-moves*/
var mainmoves = [{
	id: 'aerial-ace',
	namn: 'Aerial Ace',
	energi: '3',
	element: 'Flying',
	cooldown: '2.40',
	damage: '55',
	movehits: '1.90'
},{
	id: 'air-cutter',
	namn: 'Air Cutter',
	energi: '2',
	element: 'Flying',
	cooldown: '2.70',
	damage: '60',
	movehits: '1.80'
},{
	id: 'ancient-power',
	namn: 'Ancient Power',
	energi: '3',
	element: 'Rock',
	cooldown: '3.50',
	damage: '70',
	movehits: '2.85'
},{
	id: 'aqua-jet',
	namn: 'Aqua Jet',
	energi: '3',
	element: 'Water',
	cooldown: '2.60',
	damage: '45',
	movehits: '1.70'
},{
	id: 'aqua-tail',
	namn: 'Aqua Tail',
	energi: '3',
	element: 'Water',
	cooldown: '1.90',
	damage: '50',
	movehits: '1.20'
},{
	id: 'aurora-beam',
	namn: 'Aurora Beam',
	energi: '2',
	element: 'Ice',
	cooldown: '3.55',
	damage: '>80',
	movehits: '3.35'
},{
	id: 'avalanche',
	namn: 'Avalanche',
	energi: '2',
	element: 'Ice',
	cooldown: '2.70',
	damage: '90',
	movehits: '1.70'
},{
	id: 'blizzard',
	namn: 'Blizzard',
	energi: '1',
	element: 'Ice',
	cooldown: '3.10',
	damage: '130',
	movehits: '1.50'
},{
	id: 'body-slam',
	namn: 'Body Slam',
	energi: '3',
	element: 'Normal',
	cooldown: '1.90',
	damage: '50',
	movehits: '1.20'
},{
	id: 'bone-club',
	namn: 'Bone Club',
	energi: '3',
	element: 'Ground',
	cooldown: '1.60',
	damage: '40',
	movehits: '1.00'
},{
	id: 'brave-bird',
	namn: 'Brave Bird',
	energi: '1',
	element: 'Flying',
	cooldown: '2.00',
	damage: '90',
	movehits: '1.00'
},{
	id: 'brick-break',
	namn: 'Brick Break',
	energi: '3',
	element: 'Fighting',
	cooldown: '1.60',
	damage: '40',
	movehits: '0.80'
},{
	id: 'brine',
	namn: 'Brine',
	energi: '2',
	element: 'Water',
	cooldown: '2.30',
	damage: '60',
	movehits: '1.50'
},{
	id: 'bubble-beam',
	namn: 'Bubble Beam',
	energi: '3',
	element: 'Water',
	cooldown: '1.90',
	damage: '45',
	movehits: '1.45'
},{
	id: 'bug-buzz',
	namn: 'Bug Buzz',
	energi: '2',
	element: 'Bug',
	cooldown: '3.70',
	damage: '90',
	movehits: '2.00'
},{
	id: 'bulldoze',
	namn: 'Bulldoze',
	energi: '2',
	element: 'Ground',
	cooldown: '3.50',
	damage: '80',
	movehits: '2.60'
},{
	id: 'close-combat',
	namn: 'Close Combat',
	energi: '1',
	element: 'Fighting',
	cooldown: '2.30',
	damage: '100',
	movehits: '1.00'
},{
	id: 'cross-chop',
	namn: 'Cross Chop',
	energi: '2',
	element: 'Fighting',
	cooldown: '>1.50',
	damage: '50',
	movehits: '0.80'
},{
	id: 'cross-poison',
	namn: 'Cross Poison',
	energi: '3',
	element: 'Poison',
	cooldown: '1.50',
	damage: '40',
	movehits: '0.90'
},{
	id: 'crunch',
	namn: 'Crunch',
	energi: '3',
	element: 'Dark',
	cooldown: '3.20',
	damage: '70',
	movehits: '1.30'
},{
	id: 'dark-pulse',
	namn: 'Dark Pulse',
	energi: '2',
	element: 'Dark',
	cooldown: '3.00',
	damage: '80',
	movehits: '1.40'
},{
	id: 'dazzling-gleam',
	namn: 'Dazzling Gleam',
	energi: '2',
	element: 'Fairy',
	cooldown: '3.50',
	damage: '100',
	movehits: '2.10'
},{
	id: 'dig',
	namn: 'Dig',
	energi: '2',
	element: 'Ground',
	cooldown: '4.70',
	damage: '100',
	movehits: '2.80'
},{
	id: 'disarming-voice',
	namn: 'Disarming Voice',
	energi: '3',
	element: 'Fairy',
	cooldown: '3.90',
	damage: '70',
	movehits: '3.20'
},{
	id: 'discharge',
	namn: 'Discharge',
	energi: '3',
	element: 'Electric',
	cooldown: '2.50',
	damage: '65',
	movehits: '1.70'
},{
	id: 'dragon-claw',
	namn: 'Dragon Claw',
	energi: '3',
	element: 'Dragon',
	cooldown: '1.70',
	damage: '50',
	movehits: '1.10'
},{
	id: 'dragon-pulse',
	namn: 'Dragon Pulse',
	energi: '2',
	element: 'Dragon',
	cooldown: '3.60',
	damage: '90',
	movehits: '2.15'
},{
	id: 'draining-kiss',
	namn: 'Draining Kiss',
	energi: '2',
	element: 'Fairy',
	cooldown: '2.60',
	damage: '60',
	movehits: '1.00'
},{
	id: 'drill-peck',
	namn: 'Drill Peck',
	energi: '3',
	element: 'Flying',
	cooldown: '2.30',
	damage: '60',
	movehits: '1.70'
},{
	id: 'drill-run',
	namn: 'Drill Run',
	energi: '2',
	element: 'Ground',
	cooldown: '2.80',
	damage: '80',
	movehits: '1.70'
},{
	id: 'dynamic-punch',
	namn: 'Dynamic Punch',
	energi: '2',
	element: 'Fighting',
	cooldown: '2.70',
	damage: '90',
	movehits: '1.20'
},{
	id: 'earthquake',
	namn: 'Earthquake',
	energi: '1',
	element: 'Ground',
	cooldown: '3.60',
	damage: '120',
	movehits: '2.70'
},{
	id: 'energy-ball',
	namn: 'Energy Ball',
	energi: '2',
	element: 'Grass',
	cooldown: '3.90',
	damage: '90',
	movehits: '3.00'
},{
	id: 'fire-blast',
	namn: 'Fire Blast',
	energi: '1',
	element: 'Fire',
	cooldown: '4.20',
	damage: '140',
	movehits: '3.10'
},{
	id: 'fire-punch',
	namn: 'Fire Punch',
	energi: '3',
	element: 'Fire',
	cooldown: '2.20',
	damage: '55',
	movehits:' 1.50'
},{
	id: 'flame-burst',
	namn: 'Flame Burst',
	energi: '2',
	element: 'Fire',
	cooldown: '2.60',
	damage: '70',
	movehits: '1.00'
},{
	id: 'flame-charge',
	namn: 'Flame Charge',
	energi: '3',
	element: 'Fire',
	cooldown: '3.80',
	damage: '70',
	movehits: '2.90'
},{
	id: 'flame-wheel',
	namn: 'Flame Wheel',
	energi: '2',
	element: 'Fire',
	cooldown: '2.70',
	damage: '60',
	movehits: '2.10'
},{
	id: 'flamethrower',
	namn: 'Flamethrower',
	energi: '2',
	element: 'Fire',
	cooldown: '2.20',
	damage: '70',
	movehits: '1.50'
},{
	id: 'flash-cannon',
	namn: 'Flash Cannon',
	energi: '1',
	element: 'Steel',
	cooldown: '2.70',
	damage: '100',
	movehits: '1.60'
},{
	id: 'focus-blast',
	namn: 'Focus Blast',
	energi: '1',
	element: 'Fighting',
	cooldown: '3.50',
	damage: '140',
	movehits: '3.00'
},{
	id: 'foul-play',
	namn: 'Foul Play',
	energi: '2',
	element: 'Dark',
	cooldown: '2.00',
	damage: '70',
	movehits: '1.70'
},{
	id: 'future-sight',
	namn: 'Future Sight',
	energi: '1',
	element: 'Psychic',
	cooldown: '2.70',
	damage: '120',
	movehits: '1.40'
},{
	id: 'grass-knot',
	namn: 'Grass Knot',
	energi: '2',
	element: 'Grass',
	cooldown: '2.60',
	damage: '90',
	movehits: '1.70'
},{
	id: 'gunk-shot',
	namn: 'Gunk Shot',
	energi: '1',
	element: 'Poison',
	cooldown: '3.10',
	damage: '130',
	movehits: '1.70'
},{
	id: 'gyro-ball',
	namn: 'Gyro Ball',
	energi: '2',
	element: 'Steel',
	cooldown: '3.30',
	damage: '80',
	movehits: '3.00'
},{
	id: 'heart-stamp',
	namn: 'Heart Stamp',
	energi: '3',
	element: 'Psychic',
	cooldown: '1.90',
	damage: '40',
	movehits: '1.10'
},{
	id: 'heat-wave',
	namn: 'Heat Wave',
	energi: '1',
	element: 'Fire',
	cooldown: '3.00',
	damage: '95',
	movehits: '1.70'
},{
	id: 'heavy-slam',
	namn: 'Heavy Slam',
	energi: '2',
	element: 'Steel',
	cooldown: '2.10',
	damage: '70',
	movehits: '1.50'
},{
	id: 'horn-attack',
	namn: 'Horn Attack',
	energi: '3',
	element: 'Normal',
	cooldown: '1.85',
	damage: '40',
	movehits: '0.80'
},{
	id: 'hurricane',
	namn: 'Hurricane',
	energi: '1',
	element: 'Flying',
	cooldown: '2.70',
	damage: '110',
	movehits: '1.20'
},{
	id: 'hydro-pump',
	namn: 'Hydro Pump',
	energi: '1',
	element: 'Water',
	cooldown: '3.30',
	damage: '130',
	movehits: '0.90'
},{
	id: 'hyper-beam',
	namn: 'Hyper Beam',
	energi: '1',
	element: 'Normal',
	cooldown: '3.80',
	damage: '150',
	movehits: '3.30'
},{
	id: 'hyper-fang',
	namn: 'Hyper Fang',
	energi: '2',
	element: 'Normal',
	cooldown: '2.50',
	damage: '80',
	movehits: '1.50'
},{
	id: 'ice-beam',
	namn: 'Ice Beam',
	energi: '2',
	element: 'Ice',
	cooldown: '3.30',
	damage: '90',
	movehits: '1.30'
},{
	id: 'ice-punch',
	namn: 'Ice Punch',
	energi: '3',
	element: 'Ice',
	cooldown: '1.90',
	damage: '50',
	movehits: '1.30'
},{
	id: 'icy-wind',
	namn: 'Icy Wind',
	energi: '3',
	element: 'Ice',
	cooldown: '3.30',
	damage: '60',
	movehits: '2.00'
},{
	id: 'iron-head',
	namn: 'Iron Head',
	energi: '2',
	element: 'Steel',
	cooldown: '1.90',
	damage: '60',
	movehits: '1.30'
},{
	id: 'leaf-blade',
	namn: 'Leaf Blade',
	energi: '3',
	element: 'Grass',
	cooldown: '2.40',
	damage: '70',
	movehits: '1.25'
},{
	id: 'low-sweep',
	namn: 'Low Sweep',
	energi: '3',
	element: 'Fighting',
	cooldown: '1.90',
	damage: '40',
	movehits: '1.30'
},{
	id: 'magnet-bomb',
	namn: 'Magnet Bomb',
	energi: '3',
	element: 'Steel',
	cooldown: '2.80',
	damage: '70',
	movehits: '2.20'
},{
	id: 'mega-drain',
	namn: 'Mega Drain',
	energi: '2',
	element: 'Grass',
	cooldown: '2.60',
	damage: '25',
	movehits: '0.95'
},{
	id: 'megahorn',
	namn: 'Megahorn',
	energi: '1',
	element: 'Bug',
	cooldown: '2.20',
	damage: '90',
	movehits: '1.70'
},{
	id: 'mirror-coat',
	namn: 'Mirror Coat',
	energi: '2',
	element: 'Psychic',
	cooldown: '2.60',
	damage: '60',
	movehits: '2.30'
},{
	id: 'moonblast',
	namn: 'Moonblast',
	energi: '1',
	element: 'Fairy',
	cooldown: '3.90',
	damage: '130',
	movehits: '2.20'
},{
	id: 'mud-bomb',
	namn: 'Mud Bomb',
	energi: '3',
	element: 'Ground',
	cooldown: '2.30',
	damage: '55',
	movehits: '1.70'
},{
	id: 'night-shade',
	namn: 'Night Shade',
	energi: '2',
	element: 'Ghost',
	cooldown: '2.60',
	damage: '60',
	movehits: '2.10'
},{
	id: 'night-slash',
	namn: 'Night Slash',
	energi: '3',
	element: 'Dark',
	cooldown: '2.20',
	damage: '50',
	movehits: '1.30'
},{
	id: 'ominous-wind',
	namn: 'Ominous Wind',
	energi: '3',
	element: 'Ghost',
	cooldown: '2.30',
	damage: '50',
	movehits: '1.85'
},{
	id: 'outrage',
	namn: 'Outrage',
	energi: '2',
	element: 'Dragon',
	cooldown: '3.90',
	damage: '110',
	movehits: '2.50'
},{
	id: 'overheat',
	namn: 'Overheat',
	energi: '1',
	element: 'Fire',
	cooldown: '4.00',
	damage: '160',
	movehits: '2.60'
},{
	id: 'parabolic-charge',
	namn: 'Parabolic Charge',
	energi: '2',
	element: 'Electric',
	cooldown: '2.80',
	damage: '25',
	movehits: '1.20'
},{
	id: 'petal-blizzard',
	namn: 'Petal Blizzard',
	energi: '1',
	element: 'Grass',
	cooldown: '2.60',
	damage: '110',
	movehits: '1.70'
},{
	id: 'play-rough',
	namn: 'Play Rough',
	energi: '2',
	element: 'Fairy',
	cooldown: '2.90',
	damage: '90',
	movehits: '1.30'
},{
	id: 'poison-fang',
	namn: 'Poison Fang',
	energi: '3',
	element: 'Poison',
	cooldown: '1.70',
	damage: '35',
	movehits: '0.90'
},{
	id: 'power-gem',
	namn: 'Power Gem',
	energi: '2',
	element: 'Rock',
	cooldown: '2.90',
	damage: '80',
	movehits: '1.95'
},{
	id: 'power-whip',
	namn: 'Power Whip',
	energi: '2',
	element: 'Grass',
	cooldown: '2.60',
	damage: '90',
	movehits: '1.25'
},{
	id: 'psybeam',
	namn: 'Psybeam',
	energi: '2',
	element: 'Psychic',
	cooldown: '3.20',
	damage: '70',
	movehits: '1.30'
},{
	id: 'psychic',
	namn: 'Psychic',
	energi: '1',
	element: 'Psychic',
	cooldown: '2.80',
	damage: '100',
	movehits: '1.30'
},{
	id: 'psyshock',
	namn: 'Psyshock',
	energi: '3',
	element: 'Psychic',
	cooldown: '2.70',
	damage: '65',
	movehits: '2.00'
},{
	id: 'psystrike',
	namn: 'Psystrike',
	energi: '2',
	element: 'Psychic',
	cooldown: '4.40',
	damage: '100',
	movehits: '3.00'
},{
	id: 'rest',
	namn: 'Rest',
	energi: '3',
	element: 'Normal',
	cooldown: '1.90',
	damage: '50',
	movehits: '1.50'
},{
	id: 'rock-blast',
	namn: 'Rock Blast',
	energi: '3',
	element: 'Rock',
	cooldown: '2.10',
	damage: '50',
	movehits: '1.60'
},{
	id: 'rock-slide',
	namn: 'Rock Slide',
	energi: '2',
	element: 'Rock',
	cooldown: '2.70',
	damage: '80',
	movehits: '1.50'
},{
	id: 'rock-tomb',
	namn: 'Rock Tomb',
	energi: '2',
	element: 'Rock',
	cooldown: '3.20',
	damage: '70',
	movehits: '2.25'
},{
	id: 'sand-tomb',
	namn: 'Sand Tomb',
	energi: '2',
	element: 'Ground',
	cooldown: '4.00',
	damage: '80',
	movehits: '1.70'
},{
	id: 'scald',
	namn: 'Scald',
	energi: '2',
	element: 'Water',
	cooldown: '3.70',
	damage: '80',
	movehits: '1.30'
},{
	id: 'seed-bomb',
	namn: 'Seed Bomb',
	energi: '3',
	element: 'Grass',
	cooldown: '2.10',
	damage: '55',
	movehits: '1.20'
},{
	id: 'shadow-ball',
	namn: 'Shadow Ball',
	energi: '2',
	element: 'Ghost',
	cooldown: '3.00',
	damage: '100',
	movehits: '2.40'
},{
	id: 'shadow-punch',
	namn: 'Shadow Punch',
	energi: '3',
	element: 'Ghost',
	cooldown: '1.70',
	damage: '40',
	movehits: '1.30'
},{
	id: 'shadow-sneak',
	namn: 'Shadow Sneak',
	energi: '3',
	element: 'Ghost',
	cooldown: '2.90',
	damage: '50',
	movehits: '2.20'
},{
	id: 'signal-beam',
	namn: 'Signal Beam',
	energi: '2',
	element: 'Bug',
	cooldown: '2.90',
	damage: '75',
	movehits: '1.80'
},{
	id: 'silver-wind',
	namn: 'Silver Wind',
	energi: '3',
	element: 'Bug',
	cooldown: '3.70',
	damage: '70',
	movehits: '1.70'
},{
	id: 'sky-attack',
	namn: 'Sky Attack',
	energi: '2',
	element: 'Flying',
	cooldown: '2.00',
	damage: '70',
	movehits: '1.50'
},{
	id: 'sludge',
	namn: 'Sludge',
	energi: '3',
	element: 'Poison',
	cooldown: '2.10',
	damage: '50',
	movehits: '1.20'
},{
	id: 'sludge-bomb',
	namn: 'Sludge Bomb',
	energi: '2',
	element: 'Poison',
	cooldown: '2.30',
	damage: '80',
	movehits: '1.10'
},{
	id: 'sludge-wave',
	namn: 'Sludge Wave',
	energi: '1',
	element: 'Poison',
	cooldown: '3.20',
	damage: '110',
	movehits: '2.00'
},{
	id: 'solar-beam',
	namn: 'Solar Beam',
	energi: '1',
	element: 'Grass',
	cooldown: '4.90',
	damage: '180',
	movehits: '2.70'
},{
	id: 'stomp',
	namn: 'Stomp',
	energi: '2',
	element: 'Normal',
	cooldown: '1.70',
	damage: '55',
	movehits: '1.10'
},{
	id: 'stone-edge',
	namn: 'Stone Edge',
	energi: '1',
	element: 'Rock',
	cooldown: '2.30',
	damage: '100',
	movehits: '0.70'
},{
	id: 'struggle',
	namn: 'Struggle',
	energi: '3',
	element: 'Normal',
	cooldown: '2.20',
	damage: '35',
	movehits: '1.20'
},{
	id: 'submission',
	namn: 'Submission',
	energi: '2',
	element: 'Fighting',
	cooldown: '2.20',
	damage: '60',
	movehits: '1.80'
},{
	id: 'swift',
	namn: 'Swift',
	energi: '2',
	element: 'Normal',
	cooldown: '2.80',
	damage: '60',
	movehits: '2.00'
},{
	id: 'thunder',
	namn: 'Thunder',
	energi: '1',
	element: 'Electric',
	cooldown: '2.40',
	damage: '100',
	movehits: '1.20'
},{
	id: 'thunder-punch',
	namn: 'Thunder Punch',
	energi: '3',
	element: 'Electric',
	cooldown: '1.80',
	damage: '45',
	movehits: '1.70'
},{
	id: 'thunderbolt',
	namn: 'Thunderbolt',
	energi: '2',
	element: 'Electric',
	cooldown: '2.50',
	damage: '80',
	movehits: '1.80'
},{
	id: 'twister',
	namn: 'Twister',
	energi: '3',
	element: 'Dragon',
	cooldown: '2.80',
	damage: '45',
	movehits: '0.95'
},{
	id: 'vice-grip',
	namn: 'Vice Grip',
	energi: '3',
	element: 'Normal',
	cooldown: '1.90',
	damage: '35',
	movehits: '1.10'
},{
	id: 'water-pulse',
	namn: 'Water Pulse',
	energi: '2',
	element: 'Water',
	cooldown: '3.20',
	damage: '70',
	movehits: '2.20'
},{
	id: 'wild-charge',
	namn: 'Wild Charge',
	energi: '2',
	element: 'Electric',
	cooldown: '2.60',
	damage: '90',
	movehits: '1.70'
},{
	id: 'wrap',
	namn: 'Wrap',
	energi: '3',
	element: 'Normal',
	cooldown: '2.90',
	damage: '60',
	movehits: '2.05'
},{
	id: 'x-scissor',
	namn: 'X-Scissor',
	energi: '3',
	element: 'Bug',
	cooldown: '1.60',
	damage: '45',
	movehits: '1.20'
},{
	id: 'zap-cannon',
	namn: 'Zap Cannon',
	energi: '1',
	element: 'Electric',
	cooldown: '3.70',
	damage: '140',
	movehits: '3.00'
}];