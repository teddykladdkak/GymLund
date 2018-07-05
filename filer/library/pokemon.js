/*https://pokemon.gameinfo.io/*/
var allpokemon = [
	{
		nummer: '001',
		namn: 'Bulbasaur',
		type: ['Grass', 'Poison'],
		moves: ['Vine Whip', 'Tackle', 'Sludge Bomb', 'Power Whip', 'Seed Bomb'],
		attack: ['Vine Whip', 'Power Whip'],
		defend: ['Vine Whip', 'Sludge Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '002',
		namn: 'Ivysaur',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Vine Whip', 'Solar Beam', 'Sludge Bomb', 'Power Whip'],
		attack: ['Vine Whip', 'Solar Beam'],
		defend: ['Razor Leaf', 'Solar Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '003',
		namn: 'Venusaur',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Vine Whip', 'Sludge Bomb', 'Petal Blizzard', 'Solar Beam', 'Frenzy Plant (event)'],
		attack: ['Vine Whip', 'Frenzy Plant (event)'],
		defend: ['Razor Leaf', 'Frenzy Plant (event)'],
		svg: '',
		lastevolve: true
	},{
		nummer: '004',
		namn: 'Charmander',
		type: ['Fire'],
		moves: ['Scratch', 'Ember', 'Flamethrower', 'Flame Burst', 'Flame Charge'],
		attack: ['Ember', 'Flamethrower'],
		defend: ['Ember', 'Flame Charge'],
		svg: '',
		lastevolve: false
	},{
		nummer: '005',
		namn: 'Charmeleon',
		type: ['Fire'],
		moves: ['Fire Fang', 'Scratch', 'Ember', 'Flamethrower', 'Flame Burst', 'Fire Punch'],
		attack: ['Fire Fang', 'Flamethrower'],
		defend: ['Ember', 'Flamethrower'],
		svg: '',
		lastevolve: false
	},{
		nummer: '006',
		namn: 'Charizard',
		type: ['Fire', 'Flying'],
		moves: ['Air Slash', 'Fire Spin', 'Ember', 'Wing Attack', 'Fire Blast', 'Dragon Claw', 'Overheat', 'Flamethrower', 'Blast Burn (event)'],
		attack: ['Fire Spin', 'Blast Burn (event)'],
		defend: ['Fire Spin', 'Blast Burn (event)'],
		svg: '',
		lastevolve: true
	},{
		nummer: '007',
		namn: 'Squirtle',
		type: ['Water'],
		moves: ['Bubble', 'Tackle', 'Aqua Tail', 'Water Pulse', 'Aqua Jet'],
		attack: ['Bubble', 'Aqua Tail'],
		defend: ['Bubble', 'Aqua Tail'],
		svg: '',
		lastevolve: false
	},{
		nummer: '008',
		namn: 'Wartortle',
		type: ['Water'],
		moves: ['Bite', 'Water Gun', 'Hydro Pump', 'Ice Beam', 'Aqua Jet'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Water Gun', 'Ice Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '009',
		namn: 'Blastoise',
		type: ['Water'],
		moves: ['Bite', 'Water Gun', 'Hydro Pump', 'Flash Cannon', 'Ice Beam'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Water Gun', 'Ice Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '010',
		namn: 'Caterpie',
		type: ['Bug'],
		moves: ['Bug Bite', 'Tackle', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		svg: '',
		lastevolve: false
	},{
		nummer: '011',
		namn: 'Metapod',
		type: ['Bug'],
		moves: ['Bug Bite', 'Tackle', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		svg: '',
		lastevolve: false
	},{
		nummer: '012',
		namn: 'Butterfree',
		type: ['Bug', 'Flying'],
		moves: ['Confusion', 'Bug Bite', 'Struggle Bug', 'Psychic', 'Signal Beam', 'Bug Buzz'],
		attack: ['Struggle Bug', 'Bug Buzz'],
		defend: ['Confusion', 'Bug Buzz'],
		svg: '',
		lastevolve: true
	},{
		nummer: '013',
		namn: 'Weedle',
		type: ['Bug', 'Poison'],
		moves: ['Bug Bite', 'Poison Sting', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		svg: '',
		lastevolve: false
	},{
		nummer: '014',
		namn: 'Kakuna',
		type: ['Bug', 'Poison'],
		moves: ['Bug Bite', 'Poison Sting', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		svg: '',
		lastevolve: false
	},{
		nummer: '015',
		namn: 'Beedrill',
		type: ['Bug', 'Poison'],
		moves: ['Poison Jab', 'Bug Bite', 'Infestation', 'Sludge Bomb', 'X-Scissor', 'Aerial Ace'],
		attack: ['Poison Jab', 'Sludge Bomb'],
		defend: ['Infestation', 'Sludge Bomb'],
		svg: '',
		lastevolve: true
	},{
		nummer: '016',
		namn: 'Pidgey',
		type: ['Normal', 'Flying'],
		moves: ['Quick Attack', 'Tackle', 'Aerial Ace', 'Air Cutter', 'Twister'],
		attack: ['Quick Attack', 'Aerial Ace'],
		defend: ['Quick Attack', 'Aerial Ace'],
		svg: '',
		lastevolve: false
	},{
		nummer: '017',
		namn: 'Pidgeotto',
		type: ['Normal', 'Flying'],
		moves: ['Steel Wing', 'Wing Attack', 'Aerial Ace', 'Air Cutter', 'Twister'],
		attack: ['Wing Attack', 'Aerial Ace'],
		defend: ['Wing Attack', 'Aerial Ace'],
		svg: '',
		lastevolve: false
	},{
		nummer: '018',
		namn: 'Pidgeot',
		type: ['Normal', 'Flying'],
		moves: ['Air Slash', 'Steel Wing', 'Wing Attack', 'Brave Bird', 'Hurricane', 'Aerial Ace', 'Air Cutter'],
		attack: ['Air Slash', 'Hurricane'],
		defend: ['Air Slash', 'Aerial Ace'],
		svg: '',
		lastevolve: true
	},{
		nummer: '019a',
		namn: 'Rattata',
		type: ['Normal'],
		moves: ['Quick Attack', 'Tackle', 'Hyper Fang', 'Body Slam', 'Dig'],
		attack: ['Quick Attack', 'Hyper Fang'],
		defend: ['Quick Attack', 'Hyper Fang'],
		svg: '',
		lastevolve: false
	},{
		nummer: '019b',
		namn: 'Rattata - Alola Form',
		type: ['Dark', 'Normal'],
		moves: ['Quick Attack', 'Tackle', 'Hyper Fang', 'Shadow Ball', 'Crunch'],
		attack: ['Quick Attack', 'Hyper Fang'],
		defend: ['Quick Attack', 'Crunch'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"019-rattata-alola\" width=\"100%\" height=\"100%\"><path fill=\"#2B3332\" d=\"M19.839 22s3.732 2.799 4.887 8.396a.508.508 0 0 1-.496.604h-3.056a.489.489 0 0 1-.452-.288c-.357-.793-1.602-3.05-4.722-4.516L19.839 22z\"></path><path fill=\"#373F3F\" d=\"M12.161 22s-3.732 2.799-4.887 8.396A.508.508 0 0 0 7.77 31h3.056a.489.489 0 0 0 .452-.288c.357-.793 1.602-3.05 4.722-4.516L12.161 22z\"></path><path fill=\"#434C4B\" d=\"M16 0h-.409a1.5 1.5 0 0 0-1.497 1.588L15 17h1V0z\"></path><path fill=\"#373F3F\" d=\"M16.939 0H16v17h1l.938-15.941A1 1 0 0 0 16.939 0z\"></path><path fill=\"#434C4B\" d=\"M22 23s3.732 2.799 4.887 8.396a.508.508 0 0 1-.496.604h-3.056a.489.489 0 0 1-.452-.288c-.357-.793-1.602-3.05-4.722-4.516L22 23z\"></path><path fill=\"#505957\" d=\"M10 23s-3.732 2.799-4.887 8.396a.508.508 0 0 0 .496.604h3.056a.489.489 0 0 0 .452-.288c.357-.793 1.602-3.05 4.722-4.516L10 23zM11.536 19.536s-5.118 1.953-7.071 0-1.953-6.118 0-8.071 4.118.047 6.071 2 1 6.071 1 6.071z\"></path><path fill=\"#373F3F\" d=\"M7.165 18.903c-.781 0-1.363-.152-1.64-.428C4.884 17.833 4.5 16.721 4.5 15.5s.384-2.333 1.025-2.975c.359-.36.591-.36.678-.36.912 0 2.447 1.535 3.271 2.36.858.859.861 2.692.729 3.869-.761.224-1.946.509-3.038.509z\"></path><path fill=\"#434C4B\" d=\"M20.464 19.536s5.118 1.953 7.071 0 1.953-6.118 0-8.071-4.118.047-6.071 2-1 6.071-1 6.071z\"></path><path fill=\"#2B3332\" d=\"M24.835 18.903c-1.092 0-2.278-.286-3.038-.509-.133-1.175-.131-3.01.729-3.869.824-.825 2.359-2.36 3.271-2.36.087 0 .318 0 .678.36.642.642 1.025 1.754 1.025 2.975s-.384 2.333-1.025 2.975c-.277.276-.859.428-1.64.428z\"></path><path fill=\"#505957\" d=\"M23 21c0-3.866-3.134-6-7-6v13a7 7 0 0 0 7-7z\"></path><path fill=\"#5C6664\" d=\"M16 15c-3.866 0-7 2.134-7 6a7 7 0 0 0 7 7V15z\"></path><path fill=\"#F7F7F7\" d=\"M19 21.5l1.508-3.017a.5.5 0 0 1 .919.055c.272.768.573 1.865.573 2.962h-3z\"></path><path fill=\"#D84459\" d=\"M19 21.5h2c0-1.069-.286-2.133-.552-2.897L19 21.5z\"></path><path fill=\"#FFF\" d=\"M13 21.5l-1.508-3.017a.5.5 0 0 0-.919.055c-.272.768-.573 1.865-.573 2.962h3z\"></path><path fill=\"#E85160\" d=\"M11 21.5h2l-1.448-2.897c-.266.764-.552 1.828-.552 2.897z\"></path><path fill=\"#FDEBBB\" d=\"M16 23l-.884-.001a1.809 1.809 0 0 1-1.615-1v-.001a1.808 1.808 0 0 0-1.62-1l-.886.002A3 3 0 1 0 11 27l2.414 2.414a2 2 0 0 0 1.414.586H16v-7z\"></path><path fill=\"#FAE09F\" d=\"M16 23h.882c.685 0 1.312-.387 1.618-1.001a1.81 1.81 0 0 1 1.621-1.001l.884.002A3 3 0 1 1 21 27l-2.414 2.414a2 2 0 0 1-1.414.586H16v-7z\"></path><path fill=\"#EA9C7A\" d=\"M17.18 29a1 1 0 0 0 .981-.804l.72-3.598A.5.5 0 0 0 18.39 24H16v5h1.18z\"></path><path fill=\"#F4A984\" d=\"M13.839 28.196l-.72-3.598A.5.5 0 0 1 13.61 24H16v5h-1.18a1 1 0 0 1-.981-.804z\"></path><path fill=\"#FFF\" d=\"M14 24h2v3h-.64a.5.5 0 0 1-.474-.342L14 24z\"></path><path fill=\"#F7F7F7\" d=\"M18 24h-2v3h.64a.5.5 0 0 0 .474-.342L18 24z\"></path><path fill=\"#434C4B\" d=\"M17 0h-1v6h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z\"></path><path fill=\"#505957\" d=\"M16 0h-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1V0z\"></path><path fill=\"#5C6664\" d=\"M15 23s-.895 1-2 1c-.801 0-1.493-.526-1.812-.815a.248.248 0 0 1 0-.369C11.507 22.526 12.199 22 13 22c1.105 0 2 1 2 1z\"></path><path fill=\"#505957\" d=\"M20.812 22.815c.11.1.11.27 0 .369-.319.29-1.011.816-1.812.816-1.105 0-2-1-2-1s.895-1 2-1c.801 0 1.493.526 1.812.815z\"></path></svg>',
		lastevolve: false
	},{
		nummer: '020a',
		namn: 'Raticate',
		type: ['Normal'],
		moves: ['Bite', 'Quick Attack', 'Hyper Beam', 'Hyper Fang', 'Dig'],
		attack: ['Quick Attack', 'Hyper Beam'],
		defend: ['Quick Attack', 'Hyper Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '020b',
		namn: 'Raticate - Alola Form',
		type: ['Dark', 'Normal'],
		moves: ['Bite', 'Quick Attack', 'Hyper Beam', 'Hyper Fang', 'Crunch'],
		attack: ['Quick Attack', 'Hyper Beam'],
		defend: ['Quick Attack', 'Hyper Beam'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"020-raticate-alola\" width=\"100%\" height=\"100%\"><path fill=\"#505957\" d=\"M16 .618a.493.493 0 0 0-.447.276L15 2l-.509-.51a.5.5 0 0 0-.801.13L13 3l-.523-.523a.5.5 0 0 0-.795.118L9.358 6.951C7.01 10.468 6 15.705 6 20c0 7.18 2.82 10 10 10V.618z\"></path><path fill=\"#434C4B\" d=\"M26 20c0-4.274-1-9.483-3.324-13h.001l-2.359-4.406a.5.5 0 0 0-.794-.118L19 3l-.69-1.38a.5.5 0 0 0-.801-.13L17 2 16.447.894A.494.494 0 0 0 16 .618V30c7.18 0 10-2.82 10-10z\"></path><path fill=\"#373F3F\" d=\"M31.396 1h-3.478a5.999 5.999 0 0 0-5.879 4.809L22.677 7h-.001c.776 1.174 1.392 2.546 1.884 4h.56a4 4 0 0 0 3.922-4.784L29 6l1.646-1.646a.5.5 0 0 0 0-.707L30 3l1.573-1.573A.25.25 0 0 0 31.396 1z\"></path><path fill=\"#434C4B\" d=\"M7.44 11c.5-1.474 1.127-2.864 1.918-4.049l.605-1.133A6 6 0 0 0 4.081 1H.604a.25.25 0 0 0-.177.427L2 3l-.646.646a.5.5 0 0 0 0 .707L3 6l-.043.216A4 4 0 0 0 6.879 11h.561zM12 28a4 4 0 0 0-3.957 3.412.509.509 0 0 0 .497.588h4.962a.501.501 0 0 0 .5-.519C13.971 30.399 13.711 28 12 28z\"></path><path fill=\"#373F3F\" d=\"M20 28c-1.711 0-1.971 2.399-2.002 3.481a.501.501 0 0 0 .5.519h4.962c.311 0 .543-.28.497-.588A4 4 0 0 0 20 28z\"></path><path fill=\"#F7F7F7\" d=\"M19.427 10.573l1.209-1.209a.501.501 0 0 1 .747.042c.242.304.523.762.598 1.312a.25.25 0 0 1-.25.281h-2.128a.25.25 0 0 1-.176-.426z\"></path><path fill=\"#2B3332\" d=\"M19.604 11H21c0-.605-.268-1.117-.527-1.473l-1.046 1.046a.25.25 0 0 0 .177.427z\"></path><path fill=\"#FFF\" d=\"M12.573 10.573l-1.209-1.209a.501.501 0 0 0-.747.042c-.242.304-.523.762-.598 1.312-.02.149.1.282.25.282h2.128a.25.25 0 0 0 .176-.427z\"></path><path fill=\"#373F3F\" d=\"M12.396 11H11c0-.605.268-1.117.527-1.473l1.046 1.046a.25.25 0 0 1-.177.427z\"></path><path fill=\"#EACEA1\" d=\"M29.724 13.06c-.08-.299-3.066.38-5.334.941 2.004-1.208 4.619-2.853 4.463-3.123-.16-.278-3.062 1.265-5.127 2.409a3.488 3.488 0 0 0-1.825-1.187 3.47 3.47 0 0 0-2.965.574.99.99 0 0 0-.934-.674H16v8.778a.498.498 0 0 0 .356-.146l1.646-1.646.646.646a.5.5 0 0 0 .707 0l.646-.646h1.002c2.102 0 3.75-1.857 3.441-4.019 2.266-.651 5.362-1.6 5.28-1.907z\"></path><path fill=\"#EFD4A7\" d=\"M14.002 12a.99.99 0 0 0-.934.674 3.467 3.467 0 0 0-2.965-.574 3.485 3.485 0 0 0-1.827 1.188c-2.065-1.144-4.969-2.689-5.129-2.411-.155.27 2.46 1.915 4.463 3.123-2.268-.561-5.254-1.24-5.334-.941-.082.307 3.017 1.258 5.282 1.908-.307 2.161 1.34 4.018 3.441 4.018h1.002l.646.646a.5.5 0 0 0 .707 0l.646-.646 1.646 1.646a.496.496 0 0 0 .352.146V12h-1.996z\"></path><path fill=\"#FFF\" d=\"M13.444 13a3.484 3.484 0 0 1 0 5H16v-5h-2.556z\"></path><path fill=\"#F7F7F7\" d=\"M17.5 15.5c0-.981.406-1.865 1.056-2.5H16v5h2.556a3.484 3.484 0 0 1-1.056-2.5z\"></path><path fill=\"#F5DEB9\" d=\"M6 20c-2.03 0-2.862 1.512-2.984 3.471a.501.501 0 0 0 .501.529h.276c.133 0 .26-.053.354-.146L5 23l.646.646a.5.5 0 0 0 .707 0L7 23l.854.854a.5.5 0 0 0 .353.146h.276a.502.502 0 0 0 .501-.529C8.862 21.512 8.03 20 6 20z\"></path><path fill=\"#EFD4A7\" d=\"M26 20c-2.03 0-2.862 1.512-2.984 3.471a.501.501 0 0 0 .501.529h.276c.133 0 .26-.053.354-.146L25 23l.646.646a.5.5 0 0 0 .707 0L27 23l.854.854a.5.5 0 0 0 .353.146h.276a.502.502 0 0 0 .501-.529C28.862 21.512 28.03 20 26 20z\"></path><path fill=\"#687271\" d=\"M12.952 21.796l-.233 2.522-2.301-1.06c-.738-.34-1.501.422-1.161 1.161l1.06 2.301-2.522.233c-.035.003-.062.017-.095.024C9.247 29.084 11.917 30 16 30v-6.561l-1.463-2.068c-.469-.664-1.51-.385-1.585.425z\"></path><path fill=\"#5C6664\" d=\"M24.299 26.976c-.033-.007-.06-.021-.095-.024l-2.522-.233 1.06-2.301c.34-.738-.422-1.501-1.161-1.161l-2.301 1.06-.233-2.522c-.075-.809-1.116-1.088-1.585-.425L16 23.439V30c4.083 0 6.753-.916 8.299-3.024z\"></path></svg>',
		lastevolve: true
	},{
		nummer: '021',
		namn: 'Spearow',
		type: ['Normal', 'Flying'],
		moves: ['Peck', 'Quick Attack', 'Sky Attack', 'Drill Peck', 'Aerial Ace', 'Twister'],
		attack: ['Quick Attack', 'Sky Attack'],
		defend: ['Peck', 'Drill Peck'],
		svg: '',
		lastevolve: false
	},{
		nummer: '022',
		namn: 'Fearow',
		type: ['Normal', 'Flying'],
		moves: ['Steel Wing', 'Peck', 'Sky Attack', 'Drill Run', 'Aerial Ace', 'Twister'],
		attack: ['Steel Wing', 'Sky Attack'],
		defend: ['Peck', 'Aerial Ace'],
		svg: '',
		lastevolve: true
	},{
		nummer: '023',
		namn: 'Ekans',
		type: ['Poison'],
		moves: ['Acid', 'Poison Sting', 'Gunk Shot', 'Sludge Bomb', 'Poison Fang', 'Wrap'],
		attack: ['Acid', 'Sludge Bomb'],
		defend: ['Acid', 'Sludge Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '024',
		namn: 'Arbok',
		type: ['Poison'],
		moves: ['Acid', 'Bite', 'Gunk Shot', 'Sludge Wave', 'Dark Pulse'],
		attack: ['Acid', 'Gunk Shot'],
		defend: ['Acid', 'Gunk Shot'],
		svg: '',
		lastevolve: true
	},{
		nummer: '025',
		namn: 'Pikachu',
		type: ['Electric'],
		moves: ['Quick Attack', 'Thunder Shock', 'Thunder', 'Wild Charge', 'Thunderbolt', 'Discharge'],
		attack: ['Thunder Shock', 'Wild Charge'],
		defend: ['Quick Attack', 'Wild Charge'],
		svg: '',
		lastevolve: false
	},{
		nummer: '026a',
		namn: 'Raichu',
		type: ['Electric'],
		moves: ['Volt Switch', 'Spark', 'Thunder Shock', 'Thunder', 'Wild Charge', 'Thunder Punch', 'Brick Break'],
		attack: ['Spark', 'Wild Charge'],
		defend: ['Volt Switch', 'Wild Charge'],
		svg: '',
		lastevolve: true
	},{
		nummer: '026b',
		namn: 'Raichu - Alola Form',
		type: ['Electric', 'Psychic'],
		moves: ['Volt Switch', 'Spark', 'Wild Charge', 'Thunder Punch', 'Psychic'],
		attack: ['Spark', 'Wild Charge'],
		defend: ['Volt Switch', 'Wild Charge'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"026-raichu-alola\" width=\"100%\" height=\"100%\"><path fill=\"#FFD96C\" d=\"M32 10V5.5a.5.5 0 0 0-.5-.5H31l.761-3.804A1 1 0 0 0 30.78 0h-3.56a1 1 0 0 0-.981 1.196l1.539 7.693a1 1 0 0 0 1.297.753L31 9v1h1z\"></path><path fill=\"#BF7D3C\" d=\"M30.83 13h1.003a35.21 35.21 0 0 0 .155-3h-.999a35.004 35.004 0 0 1-.159 3z\"></path><path fill=\"#B57135\" d=\"M30.83 13c-1.577 15.771-13.777 15.999-14.331 16l.001 1c.146 0 13.676-.209 15.333-17H30.83z\"></path><path fill=\"#FFE28A\" d=\"M12.336 4.093c-1.562-1.562-4.095-2.976-5.657-1.414-1.367 1.367-.454 3.478.842 5.031A2.991 2.991 0 0 0 10.5 10.5c1.657 0 2.962-3.484 2.905-3.713.284-.871-.067-1.692-1.069-2.694z\"></path><path fill=\"#DDAA5F\" d=\"M7.5 7.5c0-1.411.978-2.586 2.29-2.906-1.001-.856-2.247-1.563-3.382-1.591-.954 1.361-.084 3.27 1.113 4.705-.005-.07-.021-.137-.021-.208z\"></path><path fill=\"#FFD96C\" d=\"M25.321 2.679c-1.562-1.562-4.095-.148-5.657 1.414-1.002 1.002-1.353 1.822-1.069 2.693-.057.23 1.248 3.714 2.905 3.714a2.991 2.991 0 0 0 2.979-2.79c1.296-1.553 2.209-3.664.842-5.031z\"></path><path fill=\"#E8BA67\" d=\"M24.5 7.5c0 .071-.016.138-.021.208 1.197-1.435 2.066-3.344 1.113-4.705-1.135.028-2.381.735-3.382 1.591A2.995 2.995 0 0 1 24.5 7.5z\"></path><g><path fill=\"#C98B44\" d=\"M28.576 31.151C27.413 30 23.953 30 23.953 30s1-1 1-4c0-.992-.44-1.761-1.025-2.352.012-.212.025-.424.025-.648 0-.523-.041-1.058-.107-1.596l4.094-2.729a1.379 1.379 0 0 0-.991-2.508l-4.427.738c-1.347-2.754-3.591-4.879-6.521-4.902v17.995c1.509-.004 2.835-.199 3.953-.605v1.192c0 .265.105.52.293.707l.414.414a.99.99 0 0 0 .706.294h6.849c.442 0 .674-.538.36-.849z\"></path><path fill=\"#FFEAA7\" d=\"M28.215 32h-3.263c0-.693.192-1.335.502-1.903 1.077.123 2.449.402 3.109 1.042a.5.5 0 0 1-.348.861z\"></path><path fill=\"#D4994F\" d=\"M15.953 12c-2.954 0-5.214 2.134-6.569 4.905l-4.426-.738a1.379 1.379 0 0 0-.991 2.508l4.094 2.729A12.967 12.967 0 0 0 7.953 23c0 .224.013.436.025.648-.585.591-1.025 1.36-1.025 2.352 0 3 1 4 1 4s-3.46 0-4.623 1.151c-.315.311-.082.849.359.849h6.849c.265 0 .52-.105.707-.293l.414-.414a1 1 0 0 0 .293-.707v-1.19c1.13.41 2.472.604 4 .604l.047-.001V12.004c-.015-.001-.03-.004-.046-.004zM16 5c3.728 0 5.112.549 6 4 .164.639 2 2.917 2 5 0 4.418-3.582 5-8 5V5z\"></path><path fill=\"#DDAA5F\" d=\"M16 5c-3.728 0-5.112.549-6 4-.164.639-2 2.917-2 5 0 4.418 3.582 5 8 5V5z\"></path><path fill=\"#2B3332\" d=\"M17 14.501c0-.552-.448-.5-1-.5v1c.552 0 1 .053 1-.5z\"></path><path fill=\"#373F3F\" d=\"M16 14.001c-.552 0-1-.052-1 .5s.448.5 1 .5v-1z\"></path><circle fill=\"#5BD3D5\" cx=\"12.5\" cy=\"12.5\" r=\"1.5\"></circle><path fill=\"#0F769B\" d=\"M12.5 11c-.286 0-.55.084-.777.223A1.481 1.481 0 0 0 11.5 12a1.5 1.5 0 0 0 1.5 1.5c.286 0 .55-.084.777-.223.139-.227.223-.491.223-.777a1.5 1.5 0 0 0-1.5-1.5z\"></path><circle fill=\"#FFF\" cx=\"13\" cy=\"12\" r=\".5\"></circle><circle fill=\"#56C7CD\" cx=\"19.5\" cy=\"12.5\" r=\"1.5\"></circle><path fill=\"#0A6F8E\" d=\"M19.5 11c.286 0 .55.084.777.223.139.227.223.491.223.777a1.5 1.5 0 0 1-1.5 1.5c-.286 0-.55-.084-.777-.223A1.481 1.481 0 0 1 18 12.5a1.5 1.5 0 0 1 1.5-1.5z\"></path><circle fill=\"#F7F7F7\" cx=\"19\" cy=\"12\" r=\".5\"></circle><circle fill=\"#FFE28A\" cx=\"10\" cy=\"15\" r=\"1\"></circle><circle fill=\"#FFD96C\" cx=\"22\" cy=\"15\" r=\"1\"></circle><path fill=\"#FEF1C6\" d=\"M9.953 27v.014c.002.932.595 1.765 1.442 2.154 1.245.573 2.797.836 4.604.831l.001-.001v-8.997l-.002-.002A6.001 6.001 0 0 0 9.953 27z\"></path><path fill=\"#FFEAA7\" d=\"M21.953 27A5.999 5.999 0 0 0 16 21.002v8.996c1.85-.005 3.428-.294 4.679-.912a2.329 2.329 0 0 0 1.273-2.065l.001-.021z\"></path><path fill=\"#FEF1C6\" d=\"M3.497 16.911a1.379 1.379 0 0 0 .469 1.764l1.286.857a3.151 3.151 0 0 0 1.401-2.621c0-.161-.024-.315-.047-.469l-1.647-.275a1.382 1.382 0 0 0-1.462.744z\"></path><path fill=\"#FFEAA7\" d=\"M28.408 16.911c.311.622.11 1.378-.469 1.764l-1.286.857a3.151 3.151 0 0 1-1.401-2.621c0-.161.024-.315.047-.469l1.647-.275a1.382 1.382 0 0 1 1.462.744z\"></path><path fill=\"#FEF1C6\" d=\"M3.69 32h3.263c0-.693-.192-1.335-.502-1.903-1.077.123-2.449.402-3.109 1.042A.5.5 0 0 0 3.69 32z\"></path></g></svg>',
		lastevolve: true
	},{
		nummer: '027a',
		namn: 'Sandshrew',
		type: ['Ground'],
		moves: ['Scratch', 'Mud Shot', 'Rock Slide', 'Dig', 'Sand Tomb', 'Rock Tomb'],
		attack: ['Scratch', 'Dig'],
		defend: ['Mud Shot', 'Dig'],
		svg: '',
		lastevolve: false
	},{
		nummer: '027b',
		namn: 'Sandshrew - Alola Form',
		type: ['Ice', 'Steel'],
		moves: ['Metal Claw', 'Powder Snow', 'Blizzard', 'Night Slash', 'Gyro Ball'],
		attack: ['Metal Claw', 'Blizzard'],
		defend: ['Powder Snow', 'Blizzard'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"027-sandshrew-alola\" width=\"100%\" height=\"100%\"><path fill=\"#F0C13E\" d=\"M19.682 18.318l10.816-6.181c.884-.505 1.87.48 1.364 1.364l-6.181 10.816-5.999-5.999z\"></path><path fill=\"#7FB8E0\" d=\"M19.682 18.318l10.816-6.181c.884-.505 1.87.48 1.364 1.364l-6.181 10.816-5.999-5.999z\"></path><path fill=\"#8EC0E0\" d=\"M30.498 12.137l-6.248 3.57a6.006 6.006 0 0 0 4.042 4.042l3.57-6.248c.506-.883-.48-1.869-1.364-1.364z\"></path><path fill=\"#9FC9E4\" d=\"M30.498 12.137l-3.114 1.78a5.012 5.012 0 0 0 2.699 2.699l1.78-3.114c.505-.884-.481-1.87-1.365-1.365z\"></path><path fill=\"#B0D3EA\" d=\"M23.838 20.753l1.429 2.148a4 4 0 0 1-1.845 5.93L23 29l1.632.544A2 2 0 0 1 26 31.442v.058a.5.5 0 0 1-.5.5H19a1 1 0 0 1-1-1v-4l5.838-6.247z\"></path><path fill=\"#9FC9E4\" d=\"M18 27v4a1 1 0 0 0 1 1h6.5a.5.5 0 0 0 .5-.5v-.058a2 2 0 0 0-1.368-1.897L23 29l.423-.169c1.628-.651 2.535-2.224 2.491-3.831H19.87L18 27z\"></path><path fill=\"#8EC0E0\" d=\"M18 31a1 1 0 0 0 1 1h6.5a.5.5 0 0 0 .5-.5v-.058a2 2 0 0 0-1.368-1.897L23 29h-5v2z\"></path><path fill=\"#C1DDEE\" d=\"M8.162 20.753l-1.429 2.148a4 4 0 0 0 1.845 5.93L9 29l-1.632.544A2 2 0 0 0 6 31.442v.058a.5.5 0 0 0 .5.5H13a1 1 0 0 0 1-1v-4l-5.838-6.247z\"></path><path fill=\"#B0D3EA\" d=\"M8.577 28.831L9 29l-1.632.544A2 2 0 0 0 6 31.442v.058a.5.5 0 0 0 .5.5H13a1 1 0 0 0 1-1v-4l-1.869-2H6.087c-.044 1.607.862 3.18 2.49 3.831z\"></path><path fill=\"#9FC9E4\" d=\"M9 29l-1.632.544A2 2 0 0 0 6 31.442v.058a.5.5 0 0 0 .5.5H13a1 1 0 0 0 1-1v-2H9z\"></path><path fill=\"#FDEBBB\" d=\"M16 11c-4.971 0-8 4.029-8 9s3.029 9 8 9V11z\"></path><path fill=\"#FAE09F\" d=\"M24 20c0-4.971-3.029-9-8-9v18c4.971 0 8-4.029 8-9z\"></path><path fill=\"#FFF3D9\" d=\"M16 0c-4.418 0-8 4.582-8 9 0 2.891 4.213 5.111 6.102 6.41.559.384 1.218.59 1.897.59H16V0z\"></path><path fill=\"#FDEBBB\" d=\"M16.001 16c.679 0 1.337-.206 1.896-.59C19.787 14.111 24 11.891 24 9c0-4.418-3.582-9-8-9v16h.001z\"></path><path fill=\"#D2E6F3\" d=\"M22.849 4.611l1.098-3.293A1 1 0 0 0 22.682.053l-3.073 1.024C18.524.405 17.3 0 16 0v9.91c.766 0 1.532-.176 2.236-.528L20 8.5l1.33 4.564C22.763 11.932 24 10.565 24 9c0-1.508-.425-3.031-1.151-4.389z\"></path><path fill=\"#E2EFF7\" d=\"M12.391 1.077L9.318.053a1 1 0 0 0-1.265 1.265l1.098 3.293C8.425 5.969 8 7.492 8 9c0 1.565 1.237 2.932 2.67 4.064L12 8.5l1.764.882c.704.352 1.47.528 2.236.528V0c-1.3 0-2.524.405-3.609 1.077z\"></path><path fill=\"#D2E6F3\" d=\"M8.107 9.755c.317 1.252 1.367 2.364 2.563 3.31L12 8.5l1.764.882c.704.352 1.47.528 2.236.528V3c-3.994 0-7.294 2.929-7.893 6.755z\"></path><path fill=\"#C1DDEE\" d=\"M18.236 9.382L20 8.5l1.33 4.564c1.197-.946 2.247-2.057 2.563-3.31C23.294 5.929 19.994 3 16 3v6.91c.766 0 1.532-.176 2.236-.528z\"></path><path fill=\"#FAE09F\" d=\"M16 29v-4a12.92 12.92 0 0 1-7.737-2.571C9.09 26.218 11.872 29 16 29z\"></path><path fill=\"#F7D684\" d=\"M16 25v4c4.128 0 6.91-2.782 7.737-6.571A12.92 12.92 0 0 1 16 25z\"></path><path fill=\"#C1DDEE\" d=\"M9.137 11.621c.44.516.969.998 1.533 1.444L12 8.5l1.764.882c.704.352 1.47.528 2.236.528V6a7.001 7.001 0 0 0-6.863 5.621z\"></path><path fill=\"#B0D3EA\" d=\"M18.236 9.382L20 8.5l1.33 4.564a10.892 10.892 0 0 0 1.533-1.444A7.001 7.001 0 0 0 16 6v3.91c.766 0 1.532-.176 2.236-.528z\"></path><path fill=\"#2B3332\" d=\"M21.653 9.881c-.61 1.292-1.778 2.505-2.869 2.003s-.901-2.165-.291-3.457c.61-1.292 1.41-1.725 2.501-1.223 1.09.502 1.269 1.385.659 2.677z\"></path><path fill=\"#373F3F\" d=\"M10.347 9.881c.61 1.292 1.778 2.505 2.869 2.003s.901-2.165.291-3.457c-.61-1.292-1.41-1.725-2.501-1.223s-1.269 1.385-.659 2.677z\"></path><circle fill=\"#FFF\" cx=\"12.25\" cy=\"8.75\" r=\".75\"></circle><circle fill=\"#F7F7F7\" cx=\"19.75\" cy=\"8.75\" r=\".75\"></circle><path fill=\"#8EC0E0\" d=\"M11.396 1.8l-1.921-.64a.25.25 0 0 0-.316.316l.674 2.021A9.354 9.354 0 0 1 11.396 1.8z\"></path><path fill=\"#7FB8E0\" d=\"M22.166 3.496l.674-2.019a.25.25 0 0 0-.316-.316l-1.92.64a9.372 9.372 0 0 1 1.562 1.695z\"></path><g><path fill=\"#9FC9E4\" d=\"M10.67 13.064l-2.031 1.41a4 4 0 0 0-.756 5.889l1.428 1.666a2.77 2.77 0 0 0 3.765.413l.006-.004a2.77 2.77 0 0 0 .77-3.543l-3.182-5.831z\"></path><path fill=\"#B0D3EA\" d=\"M12.296 16.045a6.002 6.002 0 0 0-4.849 3.685c.125.22.264.434.435.634L9.31 22.03a2.77 2.77 0 0 0 3.765.413l.006-.005a2.77 2.77 0 0 0 .77-3.543l-1.555-2.85z\"></path><path fill=\"#C1DDEE\" d=\"M13.852 18.896l-.455-.835A4.977 4.977 0 0 0 9.15 21.84l.162.189a2.77 2.77 0 0 0 3.765.413l.006-.005a2.768 2.768 0 0 0 .769-3.541z\"></path></g><g><path fill=\"#8EC0E0\" d=\"M21.33 13.064l2.031 1.41a4 4 0 0 1 .756 5.889l-1.428 1.666a2.77 2.77 0 0 1-3.765.413l-.006-.004a2.77 2.77 0 0 1-.77-3.543l3.182-5.831z\"></path><path fill=\"#9FC9E4\" d=\"M19.704 16.045a6.002 6.002 0 0 1 4.849 3.685 4.01 4.01 0 0 1-.435.634L22.69 22.03a2.77 2.77 0 0 1-3.765.413l-.006-.005a2.77 2.77 0 0 1-.77-3.543l1.555-2.85z\"></path><path fill=\"#B0D3EA\" d=\"M18.148 18.896l.455-.835a4.977 4.977 0 0 1 4.247 3.779l-.162.189a2.77 2.77 0 0 1-3.765.413l-.006-.005a2.768 2.768 0 0 1-.769-3.541z\"></path></g></svg>',
		lastevolve: false
	},{
		nummer: '028a',
		namn: 'Sandslash',
		type: ['Ground'],
		moves: ['Metal Claw', 'Mud Shot', 'Earthquake', 'Bulldoze', 'Rock Tomb'],
		attack: ['Metal Claw', 'Earthquake'],
		defend: ['Metal Claw', 'Bulldoze'],
		svg: '',
		lastevolve: true
	},{
		nummer: '028b',
		namn: 'Sandslash - Alola Form',
		type: ['Ice', 'Steel'],
		moves: ['Metal Claw', 'Powder Snow', 'Blizzard', 'Bulldoze', 'Gyro Ball'],
		attack: ['Metal Claw', 'Blizzard'],
		defend: ['Powder Snow', 'Blizzard'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"028-sandslash-alola\" width=\"100%\" height=\"100%\"><path fill=\"#47A1B4\" d=\"M22.636 14.04c.09-.028.181-.053.269-.094 1.039-.485 8.01-4.928 7.59-5.83-.42-.902-8.305 1.582-9.345 2.067-.148.069-.28.156-.403.253l-.007.001h-.894c.267-.507.5-.984.67-1.279.573-.993 3.729-8.634 2.867-9.131-.653-.376-3.694 3.294-5.381 5.529C17.743 3.724 16.841.021 16 .002v22.201h6.105c.017.005.032.014.05.019 1.108.297 9.304 1.374 9.562.413.257-.961-7.379-4.127-8.487-4.423-.086-.023-.172-.03-.259-.042 1.397-.166 9.113-1.899 9.028-2.87-.084-.966-7.895-1.334-9.363-1.26z\"></path><path fill=\"#4CAEBC\" d=\"M16 .002L15.993 0c-.84.001-1.735 3.702-1.993 5.544C12.311 3.307 9.279-.349 8.628.026c-.862.497 2.294 8.138 2.867 9.131.17.295.403.773.671 1.281h-.899a2.081 2.081 0 0 0-.406-.256c-1.04-.484-8.925-2.968-9.346-2.066s6.551 5.345 7.59 5.83c.088.041.179.066.27.094-1.442-.076-9.29.292-9.374 1.259-.085.97 7.63 2.703 9.028 2.87-.086.012-.172.019-.259.042-1.108.297-8.744 3.462-8.487 4.423.258.961 8.454-.116 9.562-.413.018-.005.033-.014.05-.019H16V.002zM9.646 18.174c-.013-.002-.025-.009-.038-.011.013-.002.025-.007.038-.009v.02z\"></path><path fill=\"#56C7CD\" d=\"M16 7.347C15.086 4.996 12.888.052 12.126.256c-.813.218-.113 6.326.264 8.538-1.348-.842-7.83-4.171-8.356-3.419-.55.785 5.32 6.167 6.225 6.8.095.067.195.118.297.166-.045-.015-.085-.037-.132-.05-1.067-.286-8.963-1.323-9.211-.398-.244.91 6.85 3.867 8.103 4.238-1.119.101-8.868 1.823-8.785 2.776.082.943 7.831 1.295 9.084 1.211a1.985 1.985 0 0 0-.289.101c-1.001.467-7.717 4.748-7.312 5.616.405.869 7.985-1.368 8.986-1.835h5V7.347z\"></path><path fill=\"#51BAC5\" d=\"M21 24c1.001.467 8.581 2.704 8.986 1.835.405-.869-6.31-5.149-7.312-5.616-.094-.044-.192-.072-.289-.101 1.253.084 9.001-.268 9.084-1.211.083-.953-7.666-2.675-8.785-2.776 1.253-.371 8.347-3.328 8.103-4.238-.248-.926-8.144.112-9.211.398-.046.012-.087.034-.132.05.101-.048.202-.1.297-.166.905-.634 6.775-6.015 6.225-6.8-.526-.751-7.008 2.577-8.356 3.419.377-2.212 1.076-8.32.264-8.538-.762-.204-2.96 4.739-3.874 7.091V24h5z\"></path><path fill=\"#8EC0E0\" d=\"M22.838 20.753l1.429 2.148a4 4 0 0 1-1.845 5.93L22 29l1.632.544A2 2 0 0 1 25 31.442v.058a.5.5 0 0 1-.5.5H18a1 1 0 0 1-1-1v-4l5.838-6.247z\"></path><path fill=\"#9FC9E4\" d=\"M9.162 20.753l-1.429 2.148a4 4 0 0 0 1.845 5.93L10 29l-1.632.544A2 2 0 0 0 7 31.442v.058a.5.5 0 0 0 .5.5H14a1 1 0 0 0 1-1v-4l-5.838-6.247z\"></path><path fill=\"#FDEBBB\" d=\"M16 13c-4.349 0-6 5.582-6 10s1.651 6 6 6V13z\"></path><path fill=\"#FAE09F\" d=\"M22 23c0-4.418-1.651-10-6-10v16c4.349 0 6-1.582 6-6zM10.01 23.252C10.112 27.473 11.737 29 16 29v-3c-3.285 0-4.715-.785-5.99-2.748z\"></path><path fill=\"#F7D684\" d=\"M16 26v3c4.263 0 5.888-1.527 5.99-5.748C20.715 25.215 19.285 26 16 26z\"></path><path fill=\"#9FC9E4\" d=\"M20.408 14.937l.225.266A9.997 9.997 0 0 1 23 21.663V23a1 1 0 0 1-1 1h-2.719a1 1 0 0 1-.97-1.243l.248-.994c.292-1.166.37-2.376.233-3.57l-.316-2.739 1.932-.517z\"></path><path fill=\"#FDEBBB\" d=\"M21.125 23a.964.964 0 0 0-.625.257.964.964 0 0 0-.625-.257c-.414 0-.875.336-.875.75 0 1.5.692 6.25 1 6.25.158 0 .35-1.424.5-2.772.15 1.348.342 2.772.5 2.772.308 0 1-4.75 1-6.25 0-.414-.461-.75-.875-.75z\"></path><path fill=\"#B0D3EA\" d=\"M11.592 14.937l-.225.266A9.997 9.997 0 0 0 9 21.663V23a1 1 0 0 0 1 1h2.719a1 1 0 0 0 .97-1.243l-.248-.994a10.004 10.004 0 0 1-.233-3.57l.316-2.739-1.932-.517z\"></path><path fill=\"#FFF3D9\" d=\"M10.875 23c.223 0 .454.102.625.257a.964.964 0 0 1 .625-.257c.414 0 .875.336.875.75 0 1.5-.692 6.25-1 6.25-.158 0-.35-1.424-.5-2.772C11.35 28.576 11.158 30 11 30c-.308 0-1-4.75-1-6.25 0-.414.461-.75.875-.75zM16 6.958c-3.682 0-5 2.213-5 6 0 2.478 1.844 4.381 3.419 5.494a2.735 2.735 0 0 0 1.58.506H16v-12z\"></path><path fill=\"#FDEBBB\" d=\"M16.001 18.958c.565 0 1.114-.176 1.58-.506C19.156 17.339 21 15.436 21 12.958c0-3.787-1.318-6-5-6v12h.001z\"></path><path fill=\"#9FC9E4\" d=\"M19.187 8.813l1 1 1.059-.529a7.148 7.148 0 0 0 3.739-4.661v-.001a.5.5 0 0 0-.606-.606h-.001a7.148 7.148 0 0 0-4.661 3.739l-.53 1.058z\"></path><path fill=\"#B0D3EA\" d=\"M12.813 8.813l-1 1-1.059-.529a7.152 7.152 0 0 1-3.738-4.661v-.001a.5.5 0 0 1 .606-.606h.001a7.148 7.148 0 0 1 4.661 3.739l.529 1.058z\"></path><circle fill=\"#373F3F\" cx=\"14\" cy=\"13\" r=\"2\"></circle><circle fill=\"#2B3332\" cx=\"18\" cy=\"13\" r=\"2\"></circle><path fill=\"#B0D3EA\" d=\"M11.051 11.884c1.627-.258 3.196.844 3.435 2.521l.391 2.736c.071.493.493.859.99.859H16V6.958c-3.314 0-4.703 1.806-4.949 4.926z\"></path><path fill=\"#9FC9E4\" d=\"M20.949 11.884c-1.627-.258-3.196.844-3.435 2.521l-.391 2.736a1.001 1.001 0 0 1-.99.859H16V6.958c3.314 0 4.703 1.806 4.949 4.926z\"></path><path fill=\"#C1DDEE\" d=\"M16 4a.496.496 0 0 0-.429.243l-.001.001a7.29 7.29 0 0 0-.632 6l.131.393c.133.4.508.67.93.67H16V4z\"></path><path fill=\"#B0D3EA\" d=\"M16.93 10.636l.131-.393a7.29 7.29 0 0 0-.632-6l-.001-.001A.494.494 0 0 0 16 4v7.306h.001c.422 0 .796-.27.929-.67z\"></path><ellipse transform=\"rotate(-45.001 13 13.25)\" fill=\"#FFF\" cx=\"13\" cy=\"13.25\" rx=\".376\" ry=\".563\"></ellipse><ellipse transform=\"rotate(-45.001 19 13.25)\" fill=\"#F7F7F7\" cx=\"19\" cy=\"13.25\" rx=\".563\" ry=\".376\"></ellipse></svg>',
		lastevolve: true
	},{
		nummer: '029',
		namn: 'Nidoran♀',
		type: ['Poison'],
		moves: ['Bite', 'Poison Sting', 'Sludge Bomb', 'Body Slam', 'Poison Fang'],
		attack: ['Poison Sting', 'Sludge Bomb'],
		defend: ['Poison Sting', 'Sludge Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '030',
		namn: 'Nidorina',
		type: ['Poison'],
		moves: ['Bite', 'Poison Sting', 'Sludge Bomb', 'Poison Fang', 'Dig'],
		attack: ['Poison Sting', 'Sludge Bomb'],
		defend: ['Poison Sting', 'Sludge Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '031',
		namn: 'Nidoqueen',
		type: ['Poison', 'Ground'],
		moves: ['Poison Jab', 'Bite', 'Stone Edge', 'Sludge Wave', 'Earthquake'],
		attack: ['Poison Jab', 'Earthquake'],
		defend: ['Poison Jab', 'Earthquake'],
		svg: '',
		lastevolve: true
	},{
		nummer: '032',
		namn: 'Nidoran♂',
		type: ['Poison'],
		moves: ['Peck', 'Poison Sting', 'Sludge Bomb', 'Body Slam', 'Horn Attack'],
		attack: ['Poison Sting', 'Sludge Bomb'],
		defend: ['Peck', 'Sludge Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '033',
		namn: 'Nidorino',
		type: ['Poison'],
		moves: ['Poison Jab', 'Poison Sting', 'Sludge Bomb', 'Horn Attack', 'Dig'],
		attack: ['Poison Jab', 'Sludge Bomb'],
		defend: ['Poison Jab', 'Sludge Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '034',
		namn: 'Nidoking',
		type: ['Poison', 'Ground'],
		moves: ['Poison Jab', 'Iron Tail', 'Fury Cutter', 'Sludge Wave', 'Megahorn', 'Earthquake'],
		attack: ['Poison Jab', 'Earthquake'],
		defend: ['Iron Tail', 'Earthquake'],
		svg: '',
		lastevolve: true
	},{
		nummer: '035',
		namn: 'Clefairy',
		type: ['Fairy'],
		moves: ['Pound', 'Zen Headbutt', 'Moonblast', 'Body Slam', 'Disarming Voice'],
		attack: ['Pound', 'Moonblast'],
		defend: ['Zen Headbutt', 'Disarming Voice'],
		svg: '',
		lastevolve: false
	},{
		nummer: '036',
		namn: 'Clefable',
		type: ['Fairy'],
		moves: ['Pound', 'Zen Headbutt', 'Charge Beam', 'Moonblast', 'Psychic', 'Dazzling Gleam'],
		attack: ['Charge Beam', 'Dazzling Gleam'],
		defend: ['Charge Beam', 'Dazzling Gleam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '037a',
		namn: 'Vulpix',
		type: ['Fire'],
		moves: ['Ember', 'Quick Attack', 'Flamethrower', 'Body Slam', 'Flame Charge'],
		attack: ['Ember', 'Flamethrower	'],
		defend: ['Ember', 'Flame Charge'],
		svg: '',
		lastevolve: false
	},{
		nummer: '037b',
		namn: 'Vulpix - Alola Form',
		type: ['Ice'],
		moves: ['Zen Headbutt', 'Powder Snow', 'Dark Pulse', 'Ice Beam', 'Blizzard'],
		attack: ['Powder Snow', 'Blizzard'],
		defend: ['Zen Headbutt', 'Ice Beam'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"037-vulpix-alola\" width=\"100%\" height=\"100%\"><path fill=\"#9FC9E4\" d=\"M19.621 0a3.535 3.535 0 0 0-3.508 3.097L16 4v4h5l1.619-2.591C24.091 3.055 22.398 0 19.621 0z\"></path><path fill=\"#8EC0E0\" d=\"M20.866.229c1.991.744 2.987 3.205 1.753 5.18L21 8h-2.505L20.866.229z\"></path><path fill=\"#9FC9E4\" d=\"M22 12l5.341-.801a4.057 4.057 0 1 1-.065 8.014L20 18l2-6z\"></path><path fill=\"#8EC0E0\" d=\"M31.977 15c.003.072.023.138.023.211a4.057 4.057 0 0 1-4.724 4.002L20 18l1-3h10.977z\"></path><path fill=\"#9FC9E4\" d=\"M20 8l3.935-3.935c1.959-1.959 5.274-1.344 6.4 1.188a3.948 3.948 0 0 1-2.142 5.269L22 13l-2-5z\"></path><path fill=\"#8EC0E0\" d=\"M29.673 4.235c.262.295.489.631.661 1.018a3.948 3.948 0 0 1-2.142 5.269L22 13l-.909-2.274 8.582-6.491z\"></path><path fill=\"#B0D3EA\" d=\"M16 4l-.113-.903A3.535 3.535 0 0 0 12.379 0c-2.777 0-4.47 3.055-2.998 5.409L11 8h5V4z\"></path><path fill=\"#9FC9E4\" d=\"M11.134.229c-1.991.744-2.987 3.205-1.753 5.18L11 8h2.505L11.134.229z\"></path><path fill=\"#B0D3EA\" d=\"M10 12l-5.341-.801a4.057 4.057 0 1 0 .065 8.014L12 18l-2-6z\"></path><path fill=\"#9FC9E4\" d=\"M.023 15c-.003.072-.023.138-.023.211a4.057 4.057 0 0 0 4.724 4.002L12 18l-1-3H.023z\"></path><path fill=\"#B0D3EA\" d=\"M12 8L8.065 4.065c-1.959-1.959-5.274-1.344-6.4 1.188a3.948 3.948 0 0 0 2.142 5.269L10 13l2-5z\"></path><path fill=\"#9FC9E4\" d=\"M2.327 4.235c-.262.295-.49.631-.662 1.018a3.948 3.948 0 0 0 2.142 5.269L10 13l.909-2.274-8.582-6.491z\"></path><path fill=\"#DADDDC\" d=\"M21.782 21.714l-.008.001a4.96 4.96 0 0 1-.072.925L20.182 31H21.5a.5.5 0 0 0 .5-.512l-.218-8.774z\"></path><path fill=\"#EDEEEE\" d=\"M11.68 17.64l-.935 1.869a4.995 4.995 0 0 0-.447 3.13l1.627 8.95a.501.501 0 0 0 .492.411H14.5a.5.5 0 0 0 .5-.5V26h1v-6.009a5.161 5.161 0 0 1-4.32-2.351z\"></path><path fill=\"#E3E5E5\" d=\"M20.32 17.64A5.161 5.161 0 0 1 16 19.991V26h1v5.5a.5.5 0 0 0 .5.5h2.083a.5.5 0 0 0 .492-.411l1.627-8.95a4.994 4.994 0 0 0-.447-3.13l-.935-1.869z\"></path><path fill=\"#71B1E1\" d=\"M21.916 27h-1.007l-.727 4H21.5a.5.5 0 0 0 .5-.512L21.916 27z\"></path><path fill=\"#7FB8E0\" d=\"M17 28v3.5a.5.5 0 0 0 .5.5h2.083a.5.5 0 0 0 .492-.411L20.727 28H17z\"></path><path fill=\"#8EC0E0\" d=\"M11.273 28l.653 3.589a.5.5 0 0 0 .491.411H14.5a.5.5 0 0 0 .5-.5V28h-3.727z\"></path><path fill=\"#E3E5E5\" d=\"M10.218 21.714l.008.001a4.96 4.96 0 0 0 .072.925l1.52 8.36H10.5a.5.5 0 0 1-.5-.512l.218-8.774z\"></path><path fill=\"#7FB8E0\" d=\"M10.085 27h1.007l.727 4H10.5a.5.5 0 0 1-.5-.512L10.085 27z\"></path><path fill=\"#EDEEEE\" d=\"M18.838 7c.865 0 1.659.372 2.215.982.358-.119 2.674-.859 5.308-.969a.504.504 0 0 1 .504.635c-.774 2.972-3.482 5.294-4.486 6.071-.11.42-.269.829-.488 1.213l-1.402 2.454a5.168 5.168 0 0 1-4.488 2.605V7h2.837z\"></path><path fill=\"#0A6F8E\" d=\"M26.866 7.648c-.774 2.972-3.482 5.293-4.485 6.07h-.002s.442-1.54-.114-2.931c0 .001 1.507-2.412 4.601-3.139z\"></path><path fill=\"#F7F7F7\" d=\"M13.162 7c-.865 0-1.659.372-2.215.982-.358-.119-2.674-.859-5.308-.969a.504.504 0 0 0-.504.635c.774 2.972 3.482 5.294 4.486 6.071.11.42.269.829.488 1.213l1.402 2.454a5.168 5.168 0 0 0 4.488 2.605V7h-2.837z\"></path><path fill=\"#0F769B\" d=\"M14.5 14c0 1.105-.395 2-1.5 2s-1.5-.895-1.5-2 .395-2 1.5-2 1.5.895 1.5 2z\"></path><circle fill=\"#FFF\" cx=\"13\" cy=\"13.5\" r=\".5\"></circle><path fill=\"#C1DDEE\" d=\"M13 15c-.679 0-1.149-.196-1.467-.509.11.866.533 1.509 1.467 1.509s1.357-.643 1.467-1.509c-.318.313-.788.509-1.467.509z\"></path><path fill=\"#0A6F8E\" d=\"M20.5 14c0 1.105-.395 2-1.5 2s-1.5-.895-1.5-2 .395-2 1.5-2 1.5.895 1.5 2z\"></path><circle fill=\"#F7F7F7\" cx=\"19\" cy=\"13.5\" r=\".5\"></circle><path fill=\"#B0D3EA\" d=\"M19 15c-.679 0-1.149-.196-1.467-.509.11.866.533 1.509 1.467 1.509s1.357-.643 1.467-1.509c-.318.313-.788.509-1.467.509zM19 5c-.601 0-1.133.27-1.5.69A1.985 1.985 0 0 0 16 5v6c.601 0 1.133-.27 1.5-.69.367.42.899.69 1.5.69a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z\"></path><path fill=\"#C1DDEE\" d=\"M14.5 5.69A1.985 1.985 0 0 0 13 5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2c.601 0 1.133-.27 1.5-.69.367.42.899.69 1.5.69V5c-.601 0-1.133.27-1.5.69z\"></path><path fill=\"#0F769B\" d=\"M5.138 7.648c.774 2.972 3.482 5.293 4.485 6.07h.002s-.442-1.54.114-2.931c-.001.001-1.507-2.412-4.601-3.139zM15.996 17.384c-.114 0-.23-.002-.35-.012-.248-.021-.503.092-.604.32-.201.452.365.863.711 1.064a.478.478 0 0 0 .243.064v-1.436z\"></path><path fill=\"#0A6F8E\" d=\"M15.996 17.384v1.436a.503.503 0 0 0 .255-.066c.296-.172.75-.497.75-.869-.001-.554-.452-.501-1.005-.501z\"></path></svg>',
		lastevolve: false
	},{
		nummer: '038a',
		namn: 'Ninetales',
		type: ['Fire'],
		moves: ['Fire Spin', 'Ember', 'Feint Attack', 'Overheat', 'Fire Blast', 'Flamethrower', 'Heat Wave', 'Solar Beam'],
		attack: ['Fire Spin', 'Overheat'],
		defend: ['Fire Spin', 'Overheat'],
		svg: '',
		lastevolve: true
	},{
		nummer: '038b',
		namn: 'Ninetales - Alola Form',
		type: ['Ice', 'Fairy'],
		moves: ['Feint Attack', 'Powder Snow', 'Ice Beam', 'Blizzard', 'Dazzling Gleam'],
		attack: ['Feint Attack', 'Dazzling Gleam'],
		defend: ['Powder Snow', 'Dazzling Gleam'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"038-ninetales-alola\" width=\"100%\" height=\"100%\"><path fill=\"#8EC0E0\" d=\"M16 .326a.98.98 0 0 0-.665.256C6.031 9.143 16 19.001 16 19.001V.326z\"></path><path fill=\"#7FB8E0\" d=\"M16.665.582A.98.98 0 0 0 16 .326v18.675s9.969-9.858.665-18.419z\"></path><path fill=\"#8EC0E0\" d=\"M16 23.619s3.174-3.459 7.169-7.351c3.805-3.708 3.046-8.773 1.126-13.556-.089-.221-.408-.205-.473.024-.424 1.496-1.741 5.05-5.35 8.635C13.729 16.083 16 23.619 16 23.619z\"></path><path fill=\"#9FC9E4\" d=\"M16 23.619s-3.174-3.459-7.169-7.351C5.026 12.56 5.786 7.495 7.705 2.712c.089-.221.408-.205.473.024.424 1.496 1.741 5.05 5.35 8.635C18.271 16.083 16 23.619 16 23.619z\"></path><path fill=\"#8EC0E0\" d=\"M16 23.619s-2.935-6.258-8.208-10.077c-3.67-2.658-5.037-5.27-5.529-6.612-.086-.235-.43-.204-.477.042C1.275 9.63.392 17.019 5.542 20c6.333 3.667 7.875 2.667 10.458 6v-2.381z\"></path><path fill=\"#9FC9E4\" d=\"M16 26s-3.125-4.479-6.667-6.333c-3.32-1.738-6.31-1.133-8.834-4.036-.159-.183-.461-.057-.434.185.224 2.013 1.208 7.153 5.435 8.518 5.292 1.708 9.083.208 10.5 3.666v-2z\"></path><path fill=\"#7FB8E0\" d=\"M16 23.619s2.935-6.258 8.208-10.077c3.67-2.658 5.037-5.27 5.529-6.612.086-.235.43-.204.477.042.511 2.658 1.394 10.047-3.756 13.028-6.333 3.667-7.875 2.667-10.458 6v-2.381z\"></path><path fill=\"#8EC0E0\" d=\"M16 26s3.125-4.479 6.667-6.333c3.32-1.738 6.31-1.133 8.834-4.036.159-.183.461-.057.434.185-.224 2.013-1.208 7.153-5.435 8.518-5.292 1.708-9.083.208-10.5 3.666v-2z\"></path><path fill=\"#7FB8E0\" d=\"M16 29s.417-2.917 4.5-4.542c3.976-1.582 5.068 1.141 10.084-.945.183-.076.385.069.35.264-.266 1.453-1.507 5.964-6.642 5.764C18.174 29.304 16 31 16 31v-2z\"></path><path fill=\"#8EC0E0\" d=\"M16 29s-.417-2.917-4.5-4.542c-3.976-1.582-5.068 1.142-10.084-.945-.183-.076-.385.069-.35.264.266 1.453 1.507 5.964 6.642 5.764C13.826 29.304 16 31 16 31v-2z\"></path><path fill=\"#9FC9E4\" d=\"M16 23l3.292-1.646a1.098 1.098 0 1 1 1.557 1.25l-1.78 7.122a.498.498 0 0 0 .132.475l.653.653a.5.5 0 0 1 .146.353v.293a.5.5 0 0 1-.5.5H16v-9z\"></path><path fill=\"#B0D3EA\" d=\"M16 23l-3.292-1.646a1.098 1.098 0 1 0-1.557 1.25l1.78 7.122a.498.498 0 0 1-.132.475l-.653.653a.5.5 0 0 0-.146.353v.293a.5.5 0 0 0 .5.5H16v-9zM19 23l-1.258 5.451a4.996 4.996 0 0 0-.031 2.105l.169.846a.5.5 0 0 1-.49.598H16v-9h3z\"></path><path fill=\"#C1DDEE\" d=\"M13 23l1.258 5.451c.16.691.17 1.409.031 2.105l-.169.846a.5.5 0 0 0 .49.598H16v-9h-3z\"></path><path fill=\"#E2EFF7\" d=\"M16 18h-3l-.103.205a5.888 5.888 0 0 0 .653 6.291c.149.187.45.087.45-.152V24l1.646 1.646a.498.498 0 0 0 .354.146V18z\"></path><path fill=\"#D2E6F3\" d=\"M23.306 19.358c-2.042-1.231-.138-3.09-.55-5.895s-1.064-3.193-2.499-3.127-2.869-3.907-5.008-2.565-1.623 5.13-1.623 5.13a5.31 5.31 0 0 1 4.746 0h.001l2.518-2.014a.5.5 0 0 1 .8.499l-1.19 5.354a3.425 3.425 0 0 1-.923 1.681l-.436.436c-.235.235-.419.51-.576.801l1.156 1.581c2.974.737 2.801 3.932 2.801 3.932 2.177-1.158 2.825-4.582.783-5.813z\"></path><path fill=\"#E2EFF7\" d=\"M22.525 25.17s1.99-1.987.278-3.932c-1.487-1.689-2.417-1.435-2.711-3.485.188-.314.331-.653.411-1.014l1.19-5.354a.5.5 0 0 0-.8-.499l-1.837 1.47c-.542-1.23-1.232-2.04-1.851-2.04C16 10.316 16 12.341 16 12.341a5.31 5.31 0 0 0-2.373.56s-.516-3.788 1.623-5.13 3.014.719 5.008 1.565c1.994.846 3.087 1.322 3.499 4.127s-2.492 4.664-.45 5.895c2.041 1.231 1.393 4.655-.782 5.812z\"></path><path fill=\"#D2E6F3\" d=\"M19 18h-3v7.793a.502.502 0 0 0 .354-.146L18 24v.344c0 .239.301.34.45.152a5.886 5.886 0 0 0 .653-6.291L19 18z\"></path><path fill=\"#B0D3EA\" d=\"M18.374 12.901A5.305 5.305 0 0 0 16 12.34V22h.003a2.374 2.374 0 0 0 2.252-1.623l.06-.18c.168-.505.452-.964.828-1.34l.436-.436a3.433 3.433 0 0 0 .923-1.681l1.19-5.354a.5.5 0 0 0-.8-.499l-2.518 2.014z\"></path><path fill=\"#B9E2E7\" d=\"M13.626 12.901l-2.518-2.014a.5.5 0 0 0-.8.499l1.19 5.354c.141.636.461 1.219.922 1.68l.436.436c.376.376.66.835.828 1.34l.06.18A2.376 2.376 0 0 0 15.997 22H16v-9.659c-.813 0-1.626.186-2.374.56z\"></path><path fill=\"#C1DDEE\" d=\"M13.626 12.901l-2.518-2.014a.5.5 0 0 0-.8.499l1.19 5.354c.141.636.461 1.219.922 1.68l.436.436c.376.376.66.835.828 1.34l.06.18A2.376 2.376 0 0 0 15.997 22H16v-9.659c-.813 0-1.626.186-2.374.56z\"></path><path fill=\"#0A6F8E\" d=\"M16.75 20.501c0-.552-.336-.5-.75-.5v1c.414 0 .75.053.75-.5z\"></path><path fill=\"#0F769B\" d=\"M16 20.001c-.414 0-.75-.052-.75.5s.336.5.75.5v-1z\"></path><path fill=\"#FFF\" d=\"M14.47 18.197c-.085-.52-.411-1.539-1.668-1.68a.25.25 0 0 0-.273.287c.085.52.411 1.539 1.668 1.68a.25.25 0 0 0 .273-.287z\"></path><path fill=\"#F7F7F7\" d=\"M17.53 18.197c.085-.52.411-1.539 1.668-1.68a.25.25 0 0 1 .273.287c-.085.52-.411 1.539-1.668 1.68a.25.25 0 0 1-.273-.287z\"></path><path fill=\"#0F769B\" d=\"M14.335 17.699c-.151-.396-.448-.829-1.011-1.05a.738.738 0 0 0-.324.601c0 .414.336.75.75.75a.738.738 0 0 0 .585-.301z\"></path><path fill=\"#0A6F8E\" d=\"M18.676 16.649c-.563.221-.86.654-1.011 1.05a.738.738 0 0 0 .585.301.75.75 0 0 0 .75-.75.738.738 0 0 0-.324-.601zM20.377 13.89l.275-1.239a.25.25 0 0 0-.4-.249l-.813.651a.248.248 0 0 0-.019.373c.188.176.362.366.521.568.128.164.391.099.436-.104z\"></path><path fill=\"#0F769B\" d=\"M12.561 13.053l-.813-.65a.25.25 0 0 0-.4.249l.275 1.238c.045.203.308.268.437.104.158-.202.332-.392.52-.568a.248.248 0 0 0-.019-.373z\"></path></svg>',
		lastevolve: true
	},{
		nummer: '039',
		namn: 'Jigglypuff',
		type: ['Normal', 'Fairy'],
		moves: ['Pound', 'Feint Attack', 'Play Rough', 'Dazzling Gleam', 'Body Slam', 'Gyro Ball', 'Disarming Voice'],
		attack: ['Pound', 'Dazzling Gleam'],
		defend: ['Feint Attack', 'Dazzling Gleam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '040',
		namn: 'Wigglytuff',
		type: ['Normal', 'Fairy'],
		moves: ['Pound', 'Feint Attack', 'Hyper Beam', 'Play Rough', 'Dazzling Gleam'],
		attack: ['Pound', 'Hyper Beam'],
		defend: ['Feint Attack', 'Play Rough'],
		svg: '',
		lastevolve: true
	},{
		nummer: '041',
		namn: 'Zubat',
		type: ['Poison', 'Flying'],
		moves: ['Bite', 'Quick Attack', 'Sludge Bomb', 'Air Cutter', 'Poison Fang', 'Swift'],
		attack: ['Quick Attack', 'Air Cutter'],
		defend: ['Quick Attack', 'Air Cutter'],
		svg: '',
		lastevolve: false
	},{
		nummer: '042',
		namn: 'Golbat',
		type: ['Poison', 'Flying'],
		moves: ['Bite', 'Wing Attack', 'Shadow Ball', 'Air Cutter', 'Poison Fang', 'Ominous Wind'],
		attack: ['Wing Attack', 'Shadow Ball'],
		defend: ['Wing Attack', 'Shadow Ball'],
		svg: '',
		lastevolve: false
	},{
		nummer: '043',
		namn: 'Oddish',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Acid', 'Sludge Bomb', 'Moonblast', 'Seed Bomb'],
		attack: ['Razor Leaf', 'Sludge Bomb'],
		defend: ['Razor Leaf', 'Sludge Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '044',
		namn: 'Gloom',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Acid', 'Petal Blizzard', 'Sludge Bomb', 'Moonblast'],
		attack: ['Razor Leaf', 'Sludge Bomb'],
		defend: ['Razor Leaf', 'Sludge Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '045',
		namn: 'Vileplume',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Acid', 'Petal Blizzard', 'Solar Beam', 'Moonblast'],
		attack: ['Acid', 'Solar Beam'],
		defend: ['Razor Leaf', 'Solar Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '046',
		namn: 'Paras',
		type: ['Bug', 'Grass'],
		moves: ['Bug Bite', 'Scratch', 'X-Scissor', 'Seed Bomb', 'Cross Poison'],
		attack: ['Bug Bite', 'Seed Bomb'],
		defend: ['Bug Bite', 'Seed Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '047',
		namn: 'Parasect',
		type: ['Bug', 'Grass'],
		moves: ['Bug Bite', 'Struggle Bug', 'Fury Cutter', 'Solar Beam', 'X-Scissor', 'Cross Poison'],
		attack: ['Fury Cutter', 'Solar Beam'],
		defend: ['Struggle Bug', 'Solar Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '048',
		namn: 'Venonat',
		type: ['Bug', 'Poison'],
		moves: ['Confusion', 'Bug Bite', 'Signal Beam', 'Poison Fang', 'Psybeam'],
		attack: ['Bug Bite', 'Signal Beam'],
		defend: ['Confusion', 'Signal Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '049',
		namn: 'Venomoth',
		type: ['Bug', 'Poison'],
		moves: ['Confusion', 'Bug Bite', 'Infestation', 'Psychic', 'Bug Buzz', 'Poison Fang', 'Silver Wind'],
		attack: ['Infestation', 'Bug Buzz'],
		defend: ['Confusion', 'Bug Buzz'],
		svg: '',
		lastevolve: true
	},{
		nummer: '050a',
		namn: 'Diglett',
		type: ['Ground'],
		moves: ['Mud Slap', 'Scratch', 'Mud Shot', 'Mud Bomb', 'Dig', 'Rock Tomb'],
		attack: ['Mud Slap', 'Dig'],
		defend: ['Mud Slap', 'Dig'],
		svg: '',
		lastevolve: false
	},{
		nummer: '050b',
		namn: 'Diglett - Alola Form',
		type: ['Ground', 'Steel'],
		moves: ['Metal Claw', 'Mud Slap', 'Dig', 'Rock Tomb', 'Mud Bomb'],
		attack: ['Metal Claw', 'Dig'],
		defend: ['Mud Slap', 'Dig'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"050-diglett-alola\" width=\"100%\" height=\"100%\"><path fill=\"#FFCF6E\" d=\"M19.707 1.293a.999.999 0 0 0-1.414 0c-.356.356-.981 1.16-1.513 1.87.114-.82.22-1.703.22-2.163a1 1 0 0 0-1-1v5.182h.525S19 3.414 19.707 2.707a.999.999 0 0 0 0-1.414z\"></path><path fill=\"#FFD98D\" d=\"M15 1c0 .46.106 1.343.22 2.163-.533-.711-1.157-1.514-1.513-1.87a.999.999 0 1 0-1.414 1.414c.707.707 3.182 2.475 3.182 2.475H16V0a1 1 0 0 0-1 1z\"></path><path fill=\"#96643B\" d=\"M16 4C10.477 4 6 8.477 6 14v16h10V4z\"></path><path fill=\"#8D5B36\" d=\"M16 4v26h10V14c0-5.523-4.477-10-10-10z\"></path><circle fill=\"#373F3F\" cx=\"13\" cy=\"13\" r=\"1\"></circle><circle fill=\"#373F3F\" cx=\"13\" cy=\"13\" r=\"1\"></circle><circle fill=\"#2B3332\" cx=\"19\" cy=\"13\" r=\"1\"></circle><circle fill=\"#2B3332\" cx=\"19\" cy=\"13\" r=\"1\"></circle><path fill=\"#434C4B\" d=\"M16 26h-1.586a.997.997 0 0 0-.707.293L11 29v2.5a.5.5 0 0 0 .5.5H16v-6z\"></path><path fill=\"#373F3F\" d=\"M16 26v6h4.5a.5.5 0 0 0 .5-.5V29l-2.707-2.707a1 1 0 0 0-.707-.293H16z\"></path><path fill=\"#373F3F\" d=\"M19 31.5V29l2.707-2.707a1 1 0 0 1 .707-.293h3.172c.265 0 .52.105.707.293L29 29v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z\"></path><path fill=\"#434C4B\" d=\"M3 31.5V29l2.707-2.707A1 1 0 0 1 6.414 26h3.172c.265 0 .52.105.707.293L13 29v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z\"></path><path fill=\"#505957\" d=\"M9 31.5v-1.086c0-.265.105-.52.293-.707l1.414-1.414a1 1 0 0 1 .707-.293h1.172c.265 0 .52.105.707.293l1.414 1.414a1 1 0 0 1 .293.707V31.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zM1 31.5v-1.086c0-.265.105-.52.293-.707l1.414-1.414A1 1 0 0 1 3.414 28h1.172c.265 0 .52.105.707.293l1.414 1.414a1 1 0 0 1 .293.707V31.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z\"></path><path fill=\"#434C4B\" d=\"M17 31.5v-1.086c0-.265.105-.52.293-.707l1.414-1.414a1 1 0 0 1 .707-.293h1.172c.265 0 .52.105.707.293l1.414 1.414a1 1 0 0 1 .293.707V31.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zM25 31.5v-1.086c0-.265.105-.52.293-.707l1.414-1.414a1 1 0 0 1 .707-.293h1.172c.265 0 .52.105.707.293l1.414 1.414a1 1 0 0 1 .293.707V31.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z\"></path><path fill=\"#FF7899\" d=\"M13 18c0 1.105.515 2 3 2v-4c-2.485 0-3 .895-3 2z\"></path><path fill=\"#FF6B8B\" d=\"M16 16v4c2.485 0 3-.895 3-2s-.515-2-3-2z\"></path></svg>',
		lastevolve: false
	},{
		nummer: '051a',
		namn: 'Dugtrio',
		type: ['Ground'],
		moves: ['Mud Slap', 'Sucker Punch', 'Mud Shot', 'Stone Edge', 'Earthquake', 'Mud Bomb'],
		attack: ['Mud Slap', 'Earthquake'],
		defend: ['Mud Slap', 'Earthquake'],
		svg: '',
		lastevolve: true
	},{
		nummer: '051b',
		namn: 'Dugtrio - Alola Form',
		type: ['Ground', 'Steel'],
		moves: ['Metal Claw', 'Mud Slap', 'Earthquake', 'Iron Head', 'Mud Bomb'],
		attack: ['Metal Claw', 'Earthquake'],
		defend: ['Mud Slap', 'Earthquake'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"051-dugtrio-alola\" width=\"100%\" height=\"100%\"><path fill=\"#EFB43F\" d=\"M24.677 11.084C24.88 10.771 25 10.4 25 10c0-.738-.405-1.376-1-1.723V8c0-4.411-3.589-8-8-8v17h8a2.996 2.996 0 1 0 .677-5.916z\"></path><path fill=\"#F7BC48\" d=\"M7.323 11.084A1.984 1.984 0 0 1 7 10c0-.738.405-1.376 1-1.723V8c0-4.411 3.589-8 8-8v17H8a2.996 2.996 0 1 1-.677-5.916z\"></path><path fill=\"#845331\" d=\"M16 1a7 7 0 0 0-7 7v22h7V1z\"></path><path fill=\"#724D31\" d=\"M16 30h7V8a7 7 0 0 0-7-7v29z\"></path><ellipse fill=\"#373F3F\" cx=\"13.501\" cy=\"6\" rx=\".5\" ry=\"1\"></ellipse><ellipse fill=\"#2B3332\" cx=\"18.501\" cy=\"6\" rx=\".5\" ry=\"1\"></ellipse><ellipse fill=\"#2B3332\" cx=\"18.501\" cy=\"6\" rx=\".5\" ry=\"1\"></ellipse><path fill=\"#FF7899\" d=\"M14 9.5c0 .828.343 1.5 2 1.5V8c-1.657 0-2 .672-2 1.5z\"></path><path fill=\"#FF6B8B\" d=\"M16 8v3c1.657 0 2-.672 2-1.5S17.657 8 16 8z\"></path><path fill=\"#F7BC48\" d=\"M23 14v12l9-3c0-4.962-4.037-9-9-9z\"></path><path fill=\"#FFC550\" d=\"M14 23l9 3V14c-4.963 0-9 4.038-9 9z\"></path><path fill=\"#724D31\" d=\"M30 23v7h-7V19c1.79 0 3.394-.528 4.493-1.357A6.975 6.975 0 0 1 30 23z\"></path><path fill=\"#845331\" d=\"M18.501 17.64c1.1.832 2.705 1.36 4.499 1.36v11h-7v-7c0-2.152.973-4.076 2.501-5.36z\"></path><path fill=\"#96643B\" d=\"M9 13a7 7 0 0 0-7 7v10h7V13z\"></path><path fill=\"#8D5B36\" d=\"M16 30V20a7 7 0 0 0-7-7v17h7z\"></path><path fill=\"#434C4B\" d=\"M16 28h-.586a.997.997 0 0 0-.707.293l-1.414 1.414a1 1 0 0 0-.293.707V31.5a.5.5 0 0 0 .5.5H16v-4z\"></path><path fill=\"#373F3F\" d=\"M16 28v4h2.5a.5.5 0 0 0 .5-.5v-1.086a.997.997 0 0 0-.293-.707l-1.414-1.414a1 1 0 0 0-.707-.293H16z\"></path><path fill=\"#434C4B\" d=\"M6 31.5v-1.086c0-.265.105-.52.293-.707l1.414-1.414A1 1 0 0 1 8.414 28h1.172c.265 0 .52.105.707.293l1.414 1.414a1 1 0 0 1 .293.707V31.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zM0 31.5v-2.086c0-.265.105-.52.293-.707l.414-.414A1 1 0 0 1 1.414 28h1.172c.265 0 .52.105.707.293l1.414 1.414a1 1 0 0 1 .293.707V31.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z\"></path><path fill=\"#373F3F\" d=\"M20 31.5v-1.086c0-.265.105-.52.293-.707l1.414-1.414a1 1 0 0 1 .707-.293h1.172c.265 0 .52.105.707.293l1.414 1.414a1 1 0 0 1 .293.707V31.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zM27 31.5v-1.086c0-.265.105-.52.293-.707l1.414-1.414a1 1 0 0 1 .707-.293h1.172c.265 0 .52.105.707.293l.414.414a1 1 0 0 1 .293.707V31.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z\"></path><path fill=\"#505957\" d=\"M10 31.5v-1.086c0-.265.105-.52.293-.707l.414-.414a1 1 0 0 1 .707-.293h2.172c.265 0 .52.105.707.293l.414.414a1 1 0 0 1 .293.707V31.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z\"></path><path fill=\"#434C4B\" d=\"M17 31.5v-1.086c0-.265.105-.52.293-.707l.414-.414a1 1 0 0 1 .707-.293h2.172c.265 0 .52.105.707.293l.414.414a1 1 0 0 1 .293.707V31.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zM24 31.5v-1.086c0-.265.105-.52.293-.707l.414-.414a1 1 0 0 1 .707-.293h2.172c.265 0 .52.105.707.293l.414.414a1 1 0 0 1 .293.707V31.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z\"></path><path fill=\"#505957\" d=\"M3 31.5v-1.086c0-.265.105-.52.293-.707l.414-.414A1 1 0 0 1 4.414 29h2.172c.265 0 .52.105.707.293l.414.414a1 1 0 0 1 .293.707V31.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z\"></path><g><ellipse fill=\"#373F3F\" cx=\"6.501\" cy=\"19\" rx=\".5\" ry=\"1\"></ellipse><ellipse fill=\"#373F3F\" cx=\"6.501\" cy=\"19\" rx=\".5\" ry=\"1\"></ellipse></g><g><ellipse fill=\"#2B3332\" cx=\"11.501\" cy=\"19\" rx=\".5\" ry=\"1\"></ellipse><ellipse fill=\"#2B3332\" cx=\"11.501\" cy=\"19\" rx=\".5\" ry=\"1\"></ellipse></g><path fill=\"#FF7899\" d=\"M7 22.5c0 .828.343 1.5 2 1.5v-3c-1.657 0-2 .672-2 1.5z\"></path><path fill=\"#FF6B8B\" d=\"M9 21v3c1.657 0 2-.672 2-1.5S10.657 21 9 21z\"></path><g><ellipse fill=\"#373F3F\" cx=\"20.501\" cy=\"21\" rx=\".5\" ry=\"1\"></ellipse><ellipse fill=\"#373F3F\" cx=\"20.501\" cy=\"21\" rx=\".5\" ry=\"1\"></ellipse></g><g><ellipse fill=\"#2B3332\" cx=\"25.501\" cy=\"21\" rx=\".5\" ry=\"1\"></ellipse><ellipse fill=\"#2B3332\" cx=\"25.501\" cy=\"21\" rx=\".5\" ry=\"1\"></ellipse></g><path fill=\"#FF7899\" d=\"M21 24.5c0 .828.343 1.5 2 1.5v-3c-1.657 0-2 .672-2 1.5z\"></path><path fill=\"#FF6B8B\" d=\"M23 23v3c1.657 0 2-.672 2-1.5s-.343-1.5-2-1.5z\"></path><path fill=\"#FFD98D\" d=\"M9 13s-2 3-4 3c0 0 0 3-2 5 0 0 0 3-2 3v-6a8 8 0 0 1 8-8v3z\"></path><path fill=\"#FFCF6E\" d=\"M9 13s2 3 4 3c0 0 0 3 2 5 0 0 0 3 2 3v-6a8 8 0 0 0-8-8v3z\"></path></svg>',
		lastevolve: true
	},{
		nummer: '052a',
		namn: 'Meowth',
		type: ['Normal'],
		moves: ['Scratch', 'Bite', 'Foul Play', 'Body Slam', 'Dark Pulse', 'Night Slash'],
		attack: ['Scratch', 'Foul Play'],
		defend: ['Scratch', 'Night Slash'],
		svg: '',
		lastevolve: false
	},{
		nummer: '052b',
		namn: 'Meowth - Alola Form',
		type: ['Dark'],
		moves: ['Scratch', 'Bite', 'Dark Pulse', 'Night Slash', 'Foul Play'],
		attack: ['Bite', 'Foul Play'],
		defend: ['Bite', 'Night Slash'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"052-meowth-alola\" width=\"100%\" height=\"100%\"><path fill=\"#7C8AC4\" d=\"M16 25c12 0 12-5 12-5l3-1s1 8-15 8v-2z\"></path><path fill=\"#424B7E\" d=\"M14.617 4.067C13.354 2.941 9.37-.495 8.407.061c-.848.489-.187 4.551.218 6.648 1.377-1.496 3.517-2.4 5.992-2.642zM23.375 6.709C23.78 4.612 24.441.55 23.593.06c-.963-.556-4.946 2.88-6.21 4.006 2.475.243 4.615 1.147 5.992 2.643z\"></path><path fill=\"#9AA6D6\" d=\"M14.683 29.367a3.69 3.69 0 0 1-.303-2.436c-.895-.085-1.706-.258-2.38-.568v.21c0 .938.219 1.864.638 2.703a.5.5 0 0 1-.447.724H11a1 1 0 0 0 0 2h2.71A1.29 1.29 0 0 0 15 30.71v-.002c0-.466-.108-.925-.317-1.341z\"></path><path fill=\"#8694D1\" d=\"M21 30h-1.191a.5.5 0 0 1-.447-.724A6.053 6.053 0 0 0 20 26.573v-.21c-.674.31-1.485.483-2.38.568a3.69 3.69 0 0 1-.303 2.436A2.986 2.986 0 0 0 17 30.708v.002c0 .712.578 1.29 1.29 1.29H21a1 1 0 0 0 0-2z\"></path><path fill=\"#C1DDEE\" d=\"M31 19a3 3 0 0 0-3-3v4s-.003.636-.546 1.454l1.804 1.804C31.267 21.176 31 19 31 19z\"></path><path fill=\"#D2E6F3\" d=\"M28 16a2 2 0 1 0 0 4v-4z\"></path><path fill=\"#E2EFF7\" d=\"M28 20a1 1 0 0 0 0-2v2z\"></path><path fill=\"#9AA6D6\" d=\"M25 11c0-4.51-4.029-7-9-7v14c4.971 0 9-2.49 9-7z\"></path><path fill=\"#ABB4DD\" d=\"M16 4c-4.971 0-9 2.49-9 7s4.029 7 9 7V4z\"></path><path fill=\"#D2E6F3\" d=\"M24.271 10.144v-.001a.497.497 0 0 1 .353-.61c1.692-.443 7.265-1.87 7.374-1.46.11.41-5.429 1.96-7.117 2.423a.496.496 0 0 1-.61-.352z\"></path><path fill=\"#E2EFF7\" d=\"M7.729 10.144v-.001a.497.497 0 0 0-.353-.61C5.684 9.09.111 7.663.002 8.073c-.11.41 5.429 1.96 7.117 2.423a.496.496 0 0 0 .61-.352z\"></path><path fill=\"#F7F7F7\" d=\"M23 9.714c0-1.262-5-1.262-5 0S19.119 12 20.5 12 23 10.977 23 9.714z\"></path><path fill=\"#FFF\" d=\"M9 9.714c0-1.262 5-1.262 5 0S12.881 12 11.5 12 9 10.977 9 9.714z\"></path><path fill=\"#2B3332\" d=\"M20.001 8.786V9.5c0 1.38-.052 2.499.5 2.5h.001c.551-.001.499-1.12.499-2.5v-.714a7.255 7.255 0 0 0-1 0z\"></path><path fill=\"#373F3F\" d=\"M10.998 8.786V9.5c0 1.38-.052 2.499.499 2.5h.001c.552 0 .5-1.12.5-2.5v-.714a7.255 7.255 0 0 0-1 0z\"></path><path fill=\"#FFE28A\" d=\"M16 2c-1.657 0-2 1.343-2 3s.343 3 2 3V2z\"></path><path fill=\"#FFD96C\" d=\"M18 5c0-1.657-.343-3-2-3v6c1.657 0 2-1.343 2-3zM16 6v2c-1.304 0-1.789-.837-1.939-2H16z\"></path><path fill=\"#FFD04D\" d=\"M17.939 6c-.15 1.163-.635 2-1.939 2V6h1.939z\"></path><path fill=\"#FFEAA7\" d=\"M16 4V2c-1.304 0-1.789.837-1.939 2H16z\"></path><path fill=\"#FFE28A\" d=\"M17.939 4c-.15-1.163-.635-2-1.939-2v2h1.939z\"></path><path fill=\"#ABB4DD\" d=\"M12 17s-4.073 2.444-7.072 6.596A4.96 4.96 0 0 0 4 26.499v.001a1.5 1.5 0 0 0 3 0c0-1.314.322-2.618.997-3.745a9.97 9.97 0 0 1 2.679-2.949C10.246 20.885 10 22.004 10 23c0 3.314 2.686 4 6 4V15c-1.539 0-4 2-4 2z\"></path><path fill=\"#9AA6D6\" d=\"M27.072 23.596C24.073 19.444 20 17 20 17s-2.461-2-4-2v12c3.314 0 6-.686 6-4 0-.996-.246-2.115-.676-3.194a9.954 9.954 0 0 1 2.678 2.949c.676 1.127.998 2.431.998 3.745a1.5 1.5 0 0 0 3 0v-.001a4.96 4.96 0 0 0-.928-2.903z\"></path><path fill=\"#8694D1\" d=\"M16 14v4c3.971 0 7.334-1.593 8.529-4.531-2.175.688-5.192.531-8.529.531z\"></path><path fill=\"#9AA6D6\" d=\"M7.471 13.469C8.666 16.407 12.029 18 16 18v-4c-3.337 0-6.354.157-8.529-.531z\"></path><path fill=\"#E2EFF7\" d=\"M12.638 29.276a.5.5 0 0 1-.447.724H11a1 1 0 0 0 0 2h2.71A1.29 1.29 0 0 0 15 30.71v-.002c0-.466-.108-.925-.317-1.342 0 0-.539-.367-1.065-.367s-.98.277-.98.277zM19.362 29.276a.5.5 0 0 0 .447.724H21a1 1 0 0 1 0 2h-2.71A1.29 1.29 0 0 1 17 30.71v-.002c0-.466.108-.925.317-1.342 0 0 .539-.367 1.065-.367.525.001.98.277.98.277z\"></path><path fill=\"#F7F7F7\" d=\"M20.073 14.004c.108.365.311.996.427.996.118 0 .328-.659.434-1.019-.281.011-.569.018-.861.023z\"></path><path fill=\"#FFF\" d=\"M11.927 14.004c-.292-.005-.58-.012-.861-.024.106.361.316 1.02.434 1.02.116 0 .319-.631.427-.996z\"></path><path fill=\"#D2E6F3\" d=\"M22.511 5.921c.33-1.816.517-3.469.5-4.425a.25.25 0 0 0-.371-.214c-.912.506-2.429 1.642-3.968 2.976 1.48.301 2.795.862 3.839 1.663z\"></path><path fill=\"#E2EFF7\" d=\"M13.327 4.259c-1.541-1.336-3.059-2.473-3.967-2.978a.25.25 0 0 0-.371.214c-.017.955.169 2.609.5 4.426 1.044-.801 2.358-1.362 3.838-1.662zM7.729 10.144v-.001a.497.497 0 0 0-.353-.61C5.684 9.09.111 7.663.002 8.073c-.11.41 5.429 1.96 7.117 2.423a.496.496 0 0 0 .61-.352zM7.5 11.501V11.5a.497.497 0 0 0-.499-.498C5.252 11.012 0 11.076 0 11.5s5.252.488 7.001.498a.496.496 0 0 0 .499-.497z\"></path><path fill=\"#D2E6F3\" d=\"M24.5 11.501V11.5c0-.276.223-.499.499-.498 1.749.01 7.001.074 7.001.498s-5.252.488-7.001.498a.496.496 0 0 1-.499-.497z\"></path></svg>',
		lastevolve: false
	},{
		nummer: '053a',
		namn: 'Persian',
		type: ['Normal'],
		moves: ['Scratch', 'Feint Attack', 'Foul Play', 'Play Rough', 'Power Gem', 'Night Slash'],
		attack: ['Scratch', 'Play Rough'],
		defend: ['Feint Attack', 'Play Rough'],
		svg: '',
		lastevolve: true
	},{
		nummer: '053b',
		namn: 'Persian - Alola Form',
		type: ['Dark'],
		moves: ['Scratch', 'Feint Attack', 'Dark Pulse', 'Play Rough', 'Foul Play'],
		attack: ['Feint Attack', 'Foul Play'],
		defend: ['Feint Attack', 'Dark Pulse'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"053-persian-alola\" width=\"100%\" height=\"100%\"><path fill=\"#7C8AC4\" d=\"M31.207 11.792h-4s-2.581 0-4.855 8l-2.145-.067s1-10.933 8-10.933a3 3 0 0 1 3 3z\"></path><path fill=\"#8694D1\" d=\"M31.207 11.792a2 2 0 1 1-4 0h4z\"></path><path fill=\"#9AA6D6\" d=\"M27.207 11.792a1 1 0 0 1 2 0h-2z\"></path><path fill=\"#3A4274\" d=\"M23.259.744l-.002-.002a2.53 2.53 0 0 0-3.765.209l-1.229 1.537a5.545 5.545 0 0 1 3.002 3.309v.001c.013.038.02.077.032.115l1.753-1.402a2.533 2.533 0 0 0 .209-3.767z\"></path><path fill=\"#424B7E\" d=\"M10.735 5.795a5.543 5.543 0 0 1 3.002-3.309L12.508.95A2.53 2.53 0 0 0 8.744.741l-.003.003a2.53 2.53 0 0 0 .209 3.764l1.753 1.402c.012-.038.019-.077.032-.115z\"></path><path fill=\"#8694D1\" d=\"M16 20l3.814-.954c2.028-.507 3.94 1.164 3.709 3.242l-.47 4.234a1 1 0 0 0 .287.818l.367.367a1 1 0 0 1 .293.707V30a1 1 0 0 1-1 1h-7V20z\"></path><path fill=\"#9AA6D6\" d=\"M16 20l-3.814-.954c-2.028-.507-3.94 1.164-3.709 3.242l.47 4.234a1 1 0 0 1-.287.818l-.367.367a1 1 0 0 0-.293.707V30a1 1 0 0 0 1 1h7V20zM21.706 28.706A2.41 2.41 0 0 1 21 27.002V16.083a6 6 0 0 0-5-5.915v10.273a.985.985 0 0 1 .161.363l.257 1.283c.387 1.937.582 3.908.582 5.884V31a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1.586a.997.997 0 0 0-.293-.707l-.001-.001z\"></path><path fill=\"#ABB4DD\" d=\"M16 10.168a6 6 0 0 0-5 5.915v10.919a2.41 2.41 0 0 1-.706 1.704l-.001.001a1 1 0 0 0-.293.707V31a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3.029c0-1.976.195-3.946.583-5.883l.257-1.283a.985.985 0 0 1 .161-.363V10.168z\"></path><path fill=\"#ABB4DD\" d=\"M16 2a5.55 5.55 0 0 0-5.265 3.795v.001a5.61 5.61 0 0 0 .304 4.283l.855 1.71A4.001 4.001 0 0 0 15.472 14H16V2z\"></path><path fill=\"#9AA6D6\" d=\"M16 2a5.55 5.55 0 0 1 5.265 3.795v.001a5.61 5.61 0 0 1-.304 4.283l-.855 1.71A4.001 4.001 0 0 1 16.528 14H16V2z\"></path><path fill=\"#5BD3D5\" d=\"M16 5a1 1 0 0 0 0 2V5z\"></path><path fill=\"#56C7CD\" d=\"M17 6a1 1 0 0 0-1-1v2a1 1 0 0 0 1-1z\"></path><path fill=\"#FFF\" d=\"M11.953 7.302a.25.25 0 0 1 .328-.209l2.48.827a.25.25 0 0 1 .154.329c-.203.519-.782 1.639-1.915 1.251-1.105-.379-1.11-1.619-1.047-2.198z\"></path><path fill=\"#373F3F\" d=\"M13.97 7.657l-.962-.321C13.049 8.28 13.253 9 13.5 9c.218 0 .402-.563.47-1.343z\"></path><path fill=\"#F7F7F7\" d=\"M20.047 7.302a.25.25 0 0 0-.328-.209l-2.48.827a.25.25 0 0 0-.154.329c.203.519.782 1.639 1.915 1.251 1.105-.379 1.11-1.619 1.047-2.198z\"></path><path fill=\"#2B3332\" d=\"M18.03 7.657l.962-.321C18.951 8.28 18.747 9 18.5 9c-.218 0-.402-.563-.47-1.343z\"></path><path fill=\"#9AA6D6\" d=\"M11.933 11.855A3.998 3.998 0 0 0 15.472 14H16v-2.5s-1.834.909-4.067.355z\"></path><path fill=\"#8694D1\" d=\"M20.067 11.855C17.834 12.409 16 11.5 16 11.5V14h.528c1.489 0 2.849-.83 3.539-2.145z\"></path><path fill=\"#D2E6F3\" d=\"M24 10.506c0-.201-2.283-.251-3.399-.263 1.058-.314 3.31-1.007 3.261-1.204-.051-.204-2.491.448-3.496.726a.497.497 0 0 0-.366.481v.508a.5.5 0 0 0 .365.482c1.006.278 3.445.93 3.496.726.049-.195-2.151-.874-3.224-1.193 1.13-.014 3.363-.064 3.363-.263z\"></path><path fill=\"#E2EFF7\" d=\"M12 10.246a.5.5 0 0 0-.365-.482c-1.005-.277-3.445-.929-3.496-.725-.05.197 2.203.89 3.261 1.204-1.116.012-3.398.061-3.398.263 0 .199 2.232.249 3.361.262-1.073.319-3.273.998-3.224 1.193.051.204 2.491-.448 3.496-.726a.496.496 0 0 0 .365-.481v-.508zM13.334 2.686L11.873 1.59a1.63 1.63 0 0 0-2.131.151v.002a1.63 1.63 0 0 0-.152 2.13l1.244 1.659a5.546 5.546 0 0 1 2.5-2.846z\"></path><path fill=\"#D2E6F3\" d=\"M22.258 1.743a1.63 1.63 0 0 0-2.131-.152l-1.461 1.096a5.548 5.548 0 0 1 2.5 2.845l1.244-1.659a1.63 1.63 0 0 0-.152-2.13z\"></path><path fill=\"#373F3F\" d=\"M16 10c-.552 0-1-.052-1 .5 0 .341.382.738.674.991.094.081.21.122.326.122V10z\"></path><path fill=\"#2B3332\" d=\"M16.326 11.491c.292-.253.674-.65.674-.991 0-.552-.448-.5-1-.5v1.613c.116 0 .233-.04.326-.122z\"></path></svg>',
		lastevolve: true
	},{
		nummer: '054',
		namn: 'Psyduck',
		type: ['Water'],
		moves: ['Water Gun', 'Zen Headbutt', 'Cross Chop', 'Aqua Tail', 'Psybeam'],
		attack: ['Water Gun', 'Aqua Tail'],
		defend: ['Zen Headbutt', 'Aqua Tail'],
		svg: '',
		lastevolve: false
	},{
		nummer: '055',
		namn: 'Golduck',
		type: ['Water'],
		moves: ['Confusion', 'Water Gun', 'Hydro Pump', 'Psychic', 'Ice Beam'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Confusion', 'Hydro Pump'],
		svg: '',
		lastevolve: true
	},{
		nummer: '056',
		namn: 'Mankey',
		type: ['Fighting'],
		moves: ['Scratch', 'Karate Chop', 'Cross Chop', 'Brick Break', 'Low Sweep'],
		attack: ['Karate Chop', 'Cross Chop'],
		defend: ['Karate Chop', 'Cross Chop'],
		svg: '',
		lastevolve: false
	},{
		nummer: '057',
		namn: 'Primeape',
		type: ['Fighting'],
		moves: ['Counter', 'Karate Chop', 'Low Kick', 'Close Combat', 'Cross Chop', 'Low Sweep', 'Night Slash'],
		attack: ['Counter', 'Close Combat'],
		defend: ['Counter', 'Close Combat'],
		svg: '',
		lastevolve: true
	},{
		nummer: '058',
		namn: 'Growlithe',
		type: ['Fire'],
		moves: ['Ember', 'Bite', 'Flamethrower', 'Flame Wheel', 'Body Slam'],
		attack: ['Ember', 'Flamethrower'],
		defend: ['Ember', 'Flamethrower'],
		svg: '',
		lastevolve: false
	},{
		nummer: '059',
		namn: 'Arcanine',
		type: ['Fire'],
		moves: ['Fire Fang', 'Bite', 'Snarl', 'Fire Blast', 'Flamethrower', 'Wild Charge', 'Bulldoze', 'Crunch'],
		attack: ['Fire Fang', 'Fire Blast'],
		defend: ['Snarl', 'Fire Blast'],
		svg: '',
		lastevolve: true
	},{
		nummer: '060',
		namn: 'Poliwag',
		type: ['Water'],
		moves: ['Bubble', 'Mud Shot', 'Bubble Beam', 'Body Slam', 'Mud Bomb'],
		attack: ['Bubble', 'Bubble Beam'],
		defend: ['Bubble', 'Bubble Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '061',
		namn: 'Poliwhirl',
		type: ['Water'],
		moves: ['Bubble', 'Mud Shot', 'Bubble Beam', 'Water Pulse', 'Scald', 'Mud Bomb'],
		attack: ['Bubble', 'Bubble Beam'],
		defend: ['Bubble', 'Water Pulse'],
		svg: '',
		lastevolve: false
	},{
		nummer: '062',
		namn: 'Poliwrath',
		type: ['Water', 'Fighting'],
		moves: ['Rock Smash', 'Bubble', 'Mud Shot', 'Hydro Pump', 'Dynamic Punch', 'Submission', 'Ice Punch'],
		attack: ['Bubble', 'Dynamic Punch'],
		defend: ['Bubble', 'Dynamic Punch'],
		svg: '',
		lastevolve: true
	},{
		nummer: '063',
		namn: 'Abra',
		type: ['Psychic'],
		moves: ['Zen Headbutt', 'Charge Beam', 'Shadow Ball', 'Psyshock', 'Signal Beam'],
		attack: ['Zen Headbutt', 'Shadow Ball'],
		defend: ['Zen Headbutt', 'Shadow Ball'],
		svg: '',
		lastevolve: false
	},{
		nummer: '064',
		namn: 'Kadabra',
		type: ['Psychic'],
		moves: ['Confusion', 'Psycho Cut', 'Shadow Ball', 'Dazzling Gleam', 'Psybeam'],
		attack: ['Confusion', 'Shadow Ball'],
		defend: ['Confusion', 'Shadow Ball'],
		svg: '',
		lastevolve: false
	},{
		nummer: '065',
		namn: 'Alakazam',
		type: ['Psychic'],
		moves: ['Confusion', 'Psycho Cut', 'Future Sight', 'Psychic', 'Focus Blast', 'Shadow Ball', 'Dazzling Gleam'],
		attack: ['Confusion', 'Future Sight'],
		defend: ['Confusion', 'Shadow Ball'],
		svg: '',
		lastevolve: true
	},{
		nummer: '066',
		namn: 'Machop',
		type: ['Fighting'],
		moves: ['Rock Smash', 'Karate Chop', 'Low Kick', 'Cross Chop', 'Brick Break', 'Low Sweep'],
		attack: ['Karate Chop', 'Cross Chop'],
		defend: ['Rock Smash', 'Cross Chop'],
		svg: '',
		lastevolve: false
	},{
		nummer: '067',
		namn: 'Machoke',
		type: ['Fighting'],
		moves: ['Karate Chop', 'Low Kick', 'Cross Chop', 'Dynamic Punch', 'Submission', 'Brick Break'],
		attack: ['Karate Chop', 'Dynamic Punch'],
		defend: ['Karate Chop', 'Dynamic Punch'],
		svg: '',
		lastevolve: false
	},{
		nummer: '068',
		namn: 'Machamp',
		type: ['Fighting'],
		moves: ['Counter', 'Karate Chop', 'Bullet Punch', 'Close Combat', 'Stone Edge', 'Cross Chop', 'Dynamic Punch', 'Heavy Slam', 'Submission'],
		attack: ['Counter', 'Dynamic Punch'],
		defend: ['Counter', 'Dynamic Punch'],
		svg: '',
		lastevolve: true
	},{
		nummer: '069',
		namn: 'Bellsprout',
		type: ['Grass', 'Poison'],
		moves: ['Vine Whip', 'Acid', 'Sludge Bomb', 'Power Whip', 'Wrap'],
		attack: ['Vine Whip', 'Power Whip'],
		defend: ['Acid', 'Power Whip'],
		svg: '',
		lastevolve: false
	},{
		nummer: '070',
		namn: 'Weepinbell',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Acid', 'Bullet Seed', 'Sludge Bomb', 'Power Whip', 'Seed Bomb'],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '071',
		namn: 'Victreebel',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Acid', 'Solar Beam', 'Sludge Bomb', 'Leaf Blade'],
		attack: ['Acid', 'Solar Beam'],
		defend: ['Razor Leaf', 'Solar Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '072',
		namn: 'Tentacool',
		type: ['Water', 'Poison'],
		moves: ['Bubble', 'Poison Sting', 'Bubble Beam', 'Water Pulse', 'Wrap'],
		attack: ['Bubble', 'Bubble Beam'],
		defend: ['Bubble', 'Water Pulse'],
		svg: '',
		lastevolve: false
	},{
		nummer: '073',
		namn: 'Tentacruel',
		type: ['Water', 'Poison'],
		moves: ['Poison Jab', 'Acid', 'Hydro Pump', 'Blizzard', 'Sludge Wave'],
		attack: ['Poison Jab', 'Hydro Pump'],
		defend: ['Poison Jab', 'Hydro Pump'],
		svg: '',
		lastevolve: true
	},{
		nummer: '074a',
		namn: 'Geodude',
		type: ['Rock', 'Ground'],
		moves: ['Rock Throw', 'Tackle', 'Rock Slide', 'Rock Tomb', 'Dig'],
		attack: ['Rock Throw', 'Rock Slide'],
		defend: ['Rock Throw', 'Rock Slide'],
		svg: '',
		lastevolve: false
	},{
		nummer: '074b',
		namn: 'Geodude - Alola Form',
		type: ['Rock', 'Electric'],
		moves: ['Rock Throw', 'Volt Switch', 'Rock Tomb', 'Rock Slide', 'Thunderbolt'],
		attack: ['Rock Throw', 'Thunderbolt'],
		defend: ['Volt Switch', 'Thunderbolt'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"074-geodude-alola\" width=\"100%\" height=\"100%\"><path fill=\"#724D31\" d=\"M12.388 11.449a.59.59 0 0 1-.69-.325l-.764-1.679a.59.59 0 0 1 .384-.814l.586-.157a.59.59 0 0 1 .74.513l.178 1.836a.588.588 0 0 1-.434.626z\"></path><path fill=\"#604631\" d=\"M19.612 11.449a.59.59 0 0 1-.435-.627l.178-1.836a.59.59 0 0 1 .74-.513l.586.157a.59.59 0 0 1 .384.814l-.764 1.679a.588.588 0 0 1-.689.326z\"></path><path fill=\"#909997\" d=\"M28.164 12.398L26 17s-2-1-4 0v2h4c2 0 3-3 3-3h2l.414-.414-3.25-3.188z\"></path><path fill=\"#9DA5A4\" d=\"M6 17l-2.164-4.602-3.25 3.188L1 16h2s1 3 3 3h4v-2s-2-1-4 0z\"></path><path fill=\"#C8CCCB\" d=\"M16 9c-.466 0-.893.16-1.233.427a1.917 1.917 0 0 1-1.486.398c-.427-.062-.878.014-1.281.247s-.694.585-.854.986a1.916 1.916 0 0 1-1.088 1.088 1.993 1.993 0 0 0-1.039 2.75c.138.274.147.59.092.892-.236 1.303-.125 2.725.624 4.232 1.049 2.112 3.086 3.659 5.429 3.931.282.033.561.046.837.046V9z\"></path><path fill=\"#ABB2B1\" d=\"M23 17c0-.611-.086-1.201-.234-1.766.49-.624.582-1.505.162-2.234a1.986 1.986 0 0 0-.986-.854 1.916 1.916 0 0 1-1.088-1.088 1.986 1.986 0 0 0-2.135-1.232 1.916 1.916 0 0 1-1.486-.398A1.983 1.983 0 0 0 16 9v14.997c3.866 0 7-3.131 7-6.997z\"></path><path fill=\"#757F7E\" d=\"M15 19v-1.465a1 1 0 0 0-.445-.832l-1.612-1.075a1 1 0 0 0-1.449.385l-.046.092a.999.999 0 0 0 .446 1.342L15 19z\"></path><path fill=\"#687271\" d=\"M17 19v-1.465a1 1 0 0 1 .445-.832l1.612-1.075a1 1 0 0 1 1.449.385l.046.092a.999.999 0 0 1-.446 1.342L17 19z\"></path><path fill=\"#FFF\" d=\"M12 17.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V19l-3-1.5z\"></path><path fill=\"#F7F7F7\" d=\"M20 17.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V19l3-1.5z\"></path><path fill=\"#9DA5A4\" d=\"M31.707 13.879l-2.586-2.586a.999.999 0 0 0-1.414 0l-.793.793a.707.707 0 0 0 1 1 .707.707 0 0 0 1 1 .707.707 0 0 0 1 1 .707.707 0 0 0 1 1l.793-.793a.999.999 0 0 0 0-1.414z\"></path><path fill=\"#ABB2B1\" d=\"M16 21c-1.555 0-2.63.32-3.271.597a1.959 1.959 0 0 1-1.654-.06l-.545-.272c1.133 1.455 2.783 2.472 4.633 2.686.282.033.561.046.837.046V21zM5.086 12.086l-.793-.793a.999.999 0 0 0-1.414 0L.293 13.879a.999.999 0 0 0 0 1.414l.793.793a.707.707 0 0 0 1-1 .707.707 0 0 0 1-1 .707.707 0 0 0 1-1 .707.707 0 0 0 1-1z\"></path><path fill=\"#9DA5A4\" d=\"M21.583 21.208l-.659.329a1.958 1.958 0 0 1-1.654.06C18.63 21.32 17.555 21 16 21v2.997a6.98 6.98 0 0 0 5.583-2.789z\"></path><path fill=\"#C8CCCB\" d=\"M4.379 11.793l-.586.586a.999.999 0 0 0 0 1.414l.086.086a.999.999 0 0 0 1.414 0l.586-.586a.999.999 0 0 0 0-1.414l-.086-.086a.999.999 0 0 0-1.414 0z\"></path><path fill=\"#604631\" d=\"M14 20h-1v-2l1 .5z\"></path><path fill=\"#4F4032\" d=\"M18 20h1v-2l-1 .5z\"></path><path fill=\"#ABB2B1\" d=\"M27.621 11.793l.586.586a.999.999 0 0 1 0 1.414l-.086.086a.999.999 0 0 1-1.414 0l-.586-.586a.999.999 0 0 1 0-1.414l.086-.086a.999.999 0 0 1 1.414 0z\"></path><path fill=\"#845331\" d=\"M14 12.5a.59.59 0 0 1-.582-.493l-.303-1.82a.59.59 0 0 1 .582-.687h.607a.59.59 0 0 1 .582.687l-.303 1.82A.592.592 0 0 1 14 12.5z\"></path><path fill=\"#724D31\" d=\"M18 12.5a.59.59 0 0 1-.582-.493l-.303-1.82a.59.59 0 0 1 .582-.687h.607a.59.59 0 0 1 .582.687l-.303 1.82A.592.592 0 0 1 18 12.5z\"></path><path fill=\"#845331\" d=\"M16 7.5h-.304a.59.59 0 0 0-.582.687l.303 1.82A.592.592 0 0 0 16 10.5v-3z\"></path><path fill=\"#724D31\" d=\"M16.304 7.5H16v3a.59.59 0 0 0 .582-.493l.303-1.82a.59.59 0 0 0-.581-.687z\"></path></svg>',
		lastevolve: false
	},{
		nummer: '075a',
		namn: 'Graveler',
		type: ['Rock', 'Ground'],
		moves: ['Rock Throw', 'Mud Slap', 'Mud Shot', 'Stone Edge', 'Rock Slide', 'Rock Blast', 'Dig'],
		attack: ['Rock Throw', 'Stone Edge'],
		defend: ['Mud Slap', 'Dig'],
		svg: '',
		lastevolve: false
	},{
		nummer: '075b',
		namn: 'Graveler - Alola Form',
		type: ['Rock', 'Electric'],
		moves: ['Rock Throw', 'Volt Switch', 'Stone Edge', 'Thunderbolt', 'Rock Blast'],
		attack: ['Rock Throw', 'Thunderbolt'],
		defend: ['Volt Switch', 'Thunderbolt'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"075-graveler-alola\" width=\"100%\" height=\"100%\"><path fill=\"#838C8A\" d=\"M24.854 10.854l-3.707-3.707A.5.5 0 0 0 20.793 7H20l-.854-.854A.5.5 0 0 0 18.793 6H16v20h3l1-1h1l3.854-3.854a.5.5 0 0 0 .146-.353V20l.854-.854a.5.5 0 0 0 .146-.353V13l-1-1v-.793a.5.5 0 0 0-.146-.353z\"></path><path fill=\"#909997\" d=\"M16 6h-2.793a.504.504 0 0 0-.354.146L12 7h-.793a.504.504 0 0 0-.354.146l-3.707 3.707a.504.504 0 0 0-.146.354V12l-1 1v5.793c0 .133.053.26.146.354L7 20v.793c0 .133.053.26.146.354L11 25h1l1 1h3V6z\"></path><path fill=\"#838C8A\" d=\"M10 24v2.586c0 .265-.105.52-.293.707l-.414.414a1 1 0 0 0-.293.707v.086a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-.086a.997.997 0 0 0-.293-.707l-.414-.414a1 1 0 0 1-.293-.707V24h-4z\"></path><path fill=\"#757F7E\" d=\"M18 24v2.586c0 .265-.105.52-.293.707l-.414.414a1 1 0 0 0-.293.707v.086a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-.086a.997.997 0 0 0-.293-.707l-.414-.414a1 1 0 0 1-.293-.707V24h-4z\"></path><path fill=\"#F7F7F7\" d=\"M18 16.5l3-1.25v1.25a.5.5 0 0 1-.5.5H18v-.5z\"></path><path fill=\"#2B3332\" d=\"M19 16.083v.417a.25.25 0 0 0 .5 0v-.625l-.5.208z\"></path><path fill=\"#FFF\" d=\"M14 16.5l-3-1.25v1.25a.5.5 0 0 0 .5.5H14v-.5z\"></path><path fill=\"#373F3F\" d=\"M13 16.083v.417a.25.25 0 0 1-.5 0v-.625l.5.208z\"></path><path fill=\"#9DA5A4\" d=\"M7.146 21.146l4.268 4.268a2 2 0 0 0 1.414.586H14.5a.5.5 0 0 0 .5-.5v-2.05a.5.5 0 0 0-.5-.5h-.75a.25.25 0 0 1-.25-.25v-.07a.25.25 0 0 1 .171-.237l.987-.329a.5.5 0 0 0 .342-.475v-.154a.5.5 0 0 0-.486-.5l-1.53-.038a10.005 10.005 0 0 1-5.719-1.998L6 17.95v.843c0 .133.053.26.146.354L7 20v.793a.5.5 0 0 0 .146.353z\"></path><path fill=\"#909997\" d=\"M24.854 21.146l-4.268 4.268a2 2 0 0 1-1.414.586H17.5a.5.5 0 0 1-.5-.5v-2.05a.5.5 0 0 1 .5-.5h.75a.25.25 0 0 0 .25-.25v-.07a.25.25 0 0 0-.171-.237l-.987-.329a.5.5 0 0 1-.342-.475v-.154a.5.5 0 0 1 .486-.5l1.53-.038a10.005 10.005 0 0 0 5.719-1.998L26 17.95v.843c0 .133-.053.26-.146.354L25 20v.793a.5.5 0 0 1-.146.353z\"></path><path fill=\"#838C8A\" d=\"M6 13l-4.828 4.828A4 4 0 0 0 0 20.657V23.5a.5.5 0 0 0 .5.5H2a.5.5 0 0 0 .5-.5v-1.22a.28.28 0 0 1 .28-.28h.001c.128 0 .24.087.272.212l.352 1.409A.5.5 0 0 0 3.89 24h.61a.5.5 0 0 0 .5-.5v-4.55L6 18v-5z\"></path><path fill=\"#757F7E\" d=\"M26 13l4.828 4.828A4.001 4.001 0 0 1 32 20.656V23.5a.5.5 0 0 1-.5.5H30a.5.5 0 0 1-.5-.5v-1.22a.28.28 0 0 0-.28-.28h-.001a.281.281 0 0 0-.272.212l-.352 1.409a.5.5 0 0 1-.485.379h-.61a.5.5 0 0 1-.5-.5v-4.55L26 18v-5z\"></path><path fill=\"#F6B392\" d=\"M16 18.5c-1.01 0-2.019.127-2.771.254-.277.047-.277.446 0 .493A17.28 17.28 0 0 0 16 19.5v-1z\"></path><path fill=\"#F4A984\" d=\"M18.771 18.754A17.157 17.157 0 0 0 16 18.5v1c1.01 0 2.019-.127 2.771-.254.278-.046.278-.446 0-.492z\"></path><path fill=\"#9DA5A4\" d=\"M16 17.333v-6.532l-.231-1.309a.5.5 0 0 0-.579-.406l-.985.174a.5.5 0 0 0-.405.58l.231 1.309-.664-1.151a.5.5 0 0 0-.683-.183l-.866.5a.5.5 0 0 0-.183.683l.664 1.151-1.018-.854a.5.5 0 0 0-.704.062l-.752.896a.5.5 0 0 0-.063.547L11 15.25l3.002 1.251L14 17l2 .333z\"></path><path fill=\"#909997\" d=\"M16 17.333L18 17v-.5l3-1.25 1.239-2.451a.501.501 0 0 0-.063-.547l-.752-.896a.5.5 0 0 0-.704-.062l-1.018.854.664-1.151a.5.5 0 0 0-.183-.683l-.866-.5a.5.5 0 0 0-.683.183l-.664 1.151.23-1.308a.5.5 0 0 0-.406-.579l-.984-.174a.5.5 0 0 0-.579.406L16 10.801v6.532z\"></path><path fill=\"#5C6664\" d=\"M10 15a.59.59 0 0 1-.493.582l-1.82.303A.59.59 0 0 1 7 15.304v-.607a.59.59 0 0 1 .687-.582l1.82.303A.59.59 0 0 1 10 15zM3.509 17.509a.59.59 0 0 1-.76.063L1.248 16.5a.59.59 0 0 1-.074-.897l.429-.429a.59.59 0 0 1 .897.074l1.072 1.501a.59.59 0 0 1-.063.76zM5.509 15.509a.59.59 0 0 1-.76.063L3.248 14.5a.59.59 0 0 1-.074-.897l.429-.429a.59.59 0 0 1 .897.074l1.072 1.501a.59.59 0 0 1-.063.76z\"></path><path fill=\"#505957\" d=\"M28.491 17.509a.59.59 0 0 0 .76.063l1.501-1.072a.59.59 0 0 0 .074-.897l-.429-.429a.59.59 0 0 0-.897.074l-1.072 1.501a.59.59 0 0 0 .063.76zM26.491 15.509a.59.59 0 0 0 .76.063l1.501-1.072a.59.59 0 0 0 .074-.897l-.429-.429a.59.59 0 0 0-.897.074l-1.072 1.501a.59.59 0 0 0 .063.76z\"></path><path fill=\"#5C6664\" d=\"M10 17a.59.59 0 0 1-.493.582l-1.82.303A.59.59 0 0 1 7 17.304v-.607a.59.59 0 0 1 .687-.582l1.82.303A.59.59 0 0 1 10 17z\"></path><path fill=\"#505957\" d=\"M22 15a.59.59 0 0 0 .493.582l1.82.303a.59.59 0 0 0 .687-.582v-.607a.59.59 0 0 0-.687-.582l-1.82.303A.592.592 0 0 0 22 15zM22 17a.59.59 0 0 0 .493.582l1.82.303a.59.59 0 0 0 .687-.582v-.607a.59.59 0 0 0-.687-.582l-1.82.303A.592.592 0 0 0 22 17z\"></path><path fill=\"#5C6664\" d=\"M14.002 16.501L11 15.25l-.99-1.959 3.477 1.924a1 1 0 0 1 .516.875v.411z\"></path><path fill=\"#505957\" d=\"M18.01 16.501l3.002-1.251.99-1.959-3.477 1.924a1 1 0 0 0-.516.875v.411z\"></path><circle fill=\"#F7C845\" cx=\"4\" cy=\"18.975\" r=\"1\"></circle><circle fill=\"#F7C845\" cx=\"10\" cy=\"9.975\" r=\"1\"></circle><circle fill=\"#FFD04D\" cx=\"12\" cy=\"22.975\" r=\"1\"></circle><circle fill=\"#F0C13E\" cx=\"22\" cy=\"20.975\" r=\"1\"></circle><circle fill=\"#F0C13E\" cx=\"28\" cy=\"20.975\" r=\"1\"></circle></svg>',
		lastevolve: false
	},{
		nummer: '076a',
		namn: 'Golem',
		type: ['Rock', 'Ground'],
		moves: ['Rock Throw', 'Mud Slap', 'Mud Shot', 'Stone Edge', 'Earthquake', 'Rock Blast', 'Ancient Power'],
		attack: ['Rock Throw', 'Stone Edge'],
		defend: ['Mud Slap', 'Earthquake'],
		svg: '',
		lastevolve: true
	},{
		nummer: '076b',
		namn: 'Golem - Alola Form',
		type: ['Rock', 'Electric'],
		moves: ['Rock Throw', 'Volt Switch', 'Stone Edge', 'Wild Charge', 'Rock Blast'],
		attack: ['Rock Throw', 'Wild Charge'],
		defend: ['Volt Switch', 'Wild Charge'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"076-golem-alola\" width=\"100%\" height=\"100%\"><circle fill=\"#F7C845\" cx=\"10\" cy=\"1\" r=\"1\"></circle><circle fill=\"#F7C845\" cx=\"11\" cy=\"4\" r=\"1\"></circle><circle fill=\"#F0C13E\" cx=\"22\" cy=\"1\" r=\"1\"></circle><circle fill=\"#F0C13E\" cx=\"21\" cy=\"4\" r=\"1\"></circle><path fill=\"#9E6E43\" d=\"M6 21l-1.221 2.443c-.481.963-.41 2.11.187 3.006L6 28l-2.707 2.707a1 1 0 0 0-.293.707v.086a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-.556c0-.621-.145-1.233-.422-1.789L11 28l2-2-3-1-4-4z\"></path><path fill=\"#96643B\" d=\"M26 21l1.221 2.443c.481.963.41 2.11-.187 3.006L26 28l2.707 2.707a1 1 0 0 1 .293.707v.086a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-.556c0-.621.145-1.233.422-1.789L21 28l-2-2 3-1 4-4z\"></path><path fill=\"#909997\" d=\"M14 19l-3-6 5-4v10z\"></path><path fill=\"#838C8A\" d=\"M18 19l3-6-5-4v10zM16 9l-5 4-2-4 3-4 4 1z\"></path><path fill=\"#757F7E\" d=\"M16 9l5 4 2-4-3-4-4 1z\"></path><path fill=\"#434C4B\" d=\"M16 4h-2.586a.997.997 0 0 0-.707.293L12 5l4 1V4z\"></path><path fill=\"#373F3F\" d=\"M16 4v2l4-1-.707-.707A1 1 0 0 0 18.586 4H16z\"></path><path fill=\"#687271\" d=\"M9 9l-4 2-2 4 2 3 6-5z\"></path><path fill=\"#5C6664\" d=\"M23 9l4 2 2 4-2 3-6-5z\"></path><path fill=\"#757F7E\" d=\"M11 13l3 6-2 4-2 1-5-3v-3z\"></path><path fill=\"#687271\" d=\"M21 13l-3 6 2 4 2 1 5-3v-3z\"></path><path fill=\"#5C6664\" d=\"M22 24l-3 3 1 1 3-1 4-4v-2z\"></path><path fill=\"#373F3F\" d=\"M20 23l2 1-3 3-3-1v-1z\"></path><path fill=\"#687271\" d=\"M10 24l3 3-1 1-3-1-4-4v-2z\"></path><path fill=\"#434C4B\" d=\"M12 23l-2 1 3 3 3-1v-1z\"></path><path fill=\"#B38658\" d=\"M16 17h-1.541a3 3 0 0 0-2.942 2.412l-.203 1.014a3 3 0 0 0 .82 2.71l.986.986a3.008 3.008 0 0 0 2.123.878H16v-8z\"></path><path fill=\"#A7794C\" d=\"M20.482 19.412A2.998 2.998 0 0 0 17.541 17H16v8h.757c.796 0 1.559-.316 2.121-.879l.986-.986a3 3 0 0 0 .82-2.71l-.202-1.013z\"></path><path fill=\"#FFF\" d=\"M15 22h-1.752a.501.501 0 0 1-.433-.247c-.143-.237-.315-.648-.315-1.253 0-1.031.5-1.5.5-1.5l2 2v1z\"></path><path fill=\"#F7F7F7\" d=\"M17 22h1.752a.501.501 0 0 0 .433-.247c.142-.237.314-.648.314-1.253 0-1.031-.5-1.5-.5-1.5l-2 2v1z\"></path><path fill=\"#E85160\" d=\"M13.294 19.294c-.139.24-.294.625-.294 1.206 0 .605.172 1.016.314 1.253a.503.503 0 0 0 .434.247H15v-1l-1.706-1.706z\"></path><path fill=\"#434C4B\" d=\"M12.411 17.822l2.313 4.625a.998.998 0 0 0 .894.553H16v-6l-2.002-1.576a.5.5 0 0 0-.778.219l-.809 2.179z\"></path><path fill=\"#D84459\" d=\"M18.706 19.294c.139.24.294.625.294 1.206 0 .605-.172 1.016-.314 1.253a.503.503 0 0 1-.434.247H17v-1l1.706-1.706z\"></path><path fill=\"#373F3F\" d=\"M19.589 17.822l-.809-2.179a.5.5 0 0 0-.778-.219L16 17v6h.382a.998.998 0 0 0 .894-.553l2.313-4.625z\"></path><path fill=\"#A7794C\" d=\"M14.5 23.5c-.32-.32-.754-.5-1.207-.5H12.03c.038.043.064.094.105.135l.986.986a3 3 0 0 0 2.122.879H16v-1h-.293c-.453 0-.887-.18-1.207-.5z\"></path><path fill=\"#9E6E43\" d=\"M18.879 24.121l.986-.986c.041-.041.067-.092.105-.135h-1.263c-.453 0-.887.18-1.207.5-.32.32-.754.5-1.207.5H16v1h.757a3 3 0 0 0 2.122-.879z\"></path><path fill=\"#A7794C\" d=\"M3 15L.4 18.467c-.26.346-.4.767-.4 1.2v5.083c0 .138.112.25.25.25h.095a.252.252 0 0 0 .224-.138l.207-.415a.25.25 0 0 1 .447 0l.207.415c.043.084.13.138.225.138h.191a.252.252 0 0 0 .224-.138l.207-.415a.25.25 0 0 1 .447 0l.207.415a.25.25 0 0 0 .224.138h.095a.25.25 0 0 0 .25-.25v-1.417a1 1 0 0 1 .2-.6L5 21v-3l-2-3z\"></path><path fill=\"#9E6E43\" d=\"M29 15l2.6 3.467c.26.346.4.767.4 1.2v5.083a.25.25 0 0 1-.25.25h-.095a.252.252 0 0 1-.224-.138l-.207-.415a.25.25 0 0 0-.447 0l-.207.415a.254.254 0 0 1-.225.138h-.191a.252.252 0 0 1-.224-.138l-.207-.415a.25.25 0 0 0-.447 0l-.207.415a.25.25 0 0 1-.224.138h-.095a.25.25 0 0 1-.25-.25v-1.417a1 1 0 0 0-.2-.6L27 21v-3l2-3z\"></path><path fill=\"#373F3F\" d=\"M16 26l-3 1-1 1 3.515.879c.159.04.322.06.485.06V26z\"></path><path fill=\"#2B3332\" d=\"M16.485 28.879L20 28l-1-1-3-1v2.938c.163 0 .326-.019.485-.059z\"></path><path fill=\"#434C4B\" d=\"M12 5l-1.414-1.414A2 2 0 0 1 10 2.172V0H8.659c-.4 0-.762.238-.919.606L5.647 5.491A7.997 7.997 0 0 0 5 8.642V11l4-2 3-4z\"></path><path fill=\"#373F3F\" d=\"M20 5l1.414-1.414A2 2 0 0 0 22 2.172V0h1.341c.4 0 .762.238.919.606l2.093 4.885c.427.996.647 2.068.647 3.151V11l-4-2-3-4zM14.5 22h-1c-.242 0-.602-.235-.909-.477a.25.25 0 0 0-.396.257l.21.841a.5.5 0 0 0 .485.379h.403c.453 0 .887.18 1.207.5.32.32.754.5 1.207.5H16v-1l-1.5-1z\"></path><path fill=\"#2B3332\" d=\"M17.5 22h1c.242 0 .602-.235.909-.477a.25.25 0 0 1 .396.257l-.21.841a.5.5 0 0 1-.485.379h-.403c-.453 0-.887.18-1.207.5-.32.32-.754.5-1.207.5H16v-1l1.5-1z\"></path></svg>',
		lastevolve: true
	},{
		nummer: '077',
		namn: 'Ponyta',
		type: ['Fire'],
		moves: ['Ember', 'Tackle', 'Fire Blast', 'Stomp', 'Flame Wheel', 'Flame Charge'],
		attack: ['Ember', 'Flame Charge'],
		defend: ['Ember', 'Flame Charge'],
		svg: '',
		lastevolve: false
	},{
		nummer: '078',
		namn: 'Rapidash',
		type: ['Fire'],
		moves: ['Fire Spin', 'Ember', 'Low Kick', 'Fire Blast', 'Heat Wave', 'Drill Run'],
		attack: ['Fire Spin', 'Fire Blast'],
		defend: ['Fire Spin', 'Fire Blast'],
		svg: '',
		lastevolve: true
	},{
		nummer: '079',
		namn: 'Slowpoke',
		type: ['Water', 'Psychic'],
		moves: ['Confusion', 'Water Gun', 'Psychic', 'Psyshock', 'Water Pulse'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Psyshock'],
		svg: '',
		lastevolve: false
	},{
		nummer: '080',
		namn: 'Slowbro',
		type: ['Water', 'Psychic'],
		moves: ['Confusion', 'Water Gun', 'Psychic', 'Ice Beam', 'Water Pulse'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Ice Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '081',
		namn: 'Magnemite',
		type: ['Electric', 'Steel'],
		moves: ['Spark', 'Thunder Shock', 'Thunderbolt', 'Discharge', 'Magnet Bomb'],
		attack: ['Thunder Shock', 'Thunderbolt'],
		defend: ['Spark', 'Magnet Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '082',
		namn: 'Magneton',
		type: ['Electric', 'Steel'],
		moves: ['Spark', 'Thunder Shock', 'Charge Beam', 'Zap Cannon', 'Flash Cannon', 'Discharge', 'Magnet Bomb'],
		attack: ['Spark', 'Zap Cannon'],
		defend: ['Charge Beam', 'Magnet Bomb'],
		svg: '',
		lastevolve: true
	},{
		nummer: '083',
		namn: 'Farfetch\'d',
		type: ['Normal', 'Flying'],
		moves: ['Air Slash', 'Cut', 'Fury Cutter', 'Leaf Blade', 'Aerial Ace', 'Air Cutter'],
		attack: ['Air Slash', 'Leaf Blade'],
		defend: ['Air Slash', 'Leaf Blade'],
		svg: '',
		lastevolve: true
	},{
		nummer: '084',
		namn: 'Doduo',
		type: ['Normal', 'Flying'],
		moves: ['Peck', 'Quick Attack', 'Brave Bird', 'Drill Peck', 'Aerial Ace', 'Swift'],
		attack: ['Quick Attack', 'Brave Bird'],
		defend: ['Peck', 'Drill Peck'],
		svg: '',
		lastevolve: false
	},{
		nummer: '085',
		namn: 'Dodrio',
		type: ['Normal', 'Flying'],
		moves: ['Steel Wing', 'Feint Attack', 'Brave Bird', 'Drill Peck', 'Aerial Ace', 'Air Cutter'],
		attack: ['Steel Wing', 'Drill Peck'],
		defend: ['Feint Attack', 'Drill Peck'],
		svg: '',
		lastevolve: true
	},{
		nummer: '086',
		namn: 'Seel',
		type: ['Water'],
		moves: ['Water Gun', 'Lick', 'Ice Shard', 'Aqua Tail', 'Aurora Beam', 'Aqua Jet', 'Icy Wind'],
		attack: ['Lick', 'Aqua Tail'],
		defend: ['Ice Shard', 'Aqua Tail'],
		svg: '',
		lastevolve: false
	},{
		nummer: '087',
		namn: 'Dewgong',
		type: ['Water', 'Ice'],
		moves: ['Iron Tail', 'Frost Breath', 'Ice Shard', 'Blizzard', 'Aurora Beam', 'Water Pulse', 'Icy Wind', 'Aqua Jet'],
		attack: ['Frost Breath', 'Blizzard'],
		defend: ['Iron Tail', 'Blizzard'],
		svg: '',
		lastevolve: true
	},{
		nummer: '088a',
		namn: 'Grimer',
		type: ['Poison'],
		moves: ['Poison Jab', 'Acid', 'Mud Slap', 'Sludge Bomb', 'Sludge', 'Mud Bomb'],
		attack: ['Poison Jab', 'Sludge Bomb'],
		defend: ['Mud Slap', 'Sludge Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '088b',
		namn: 'Grimer - Alola Form',
		type: ['Poison', 'Dark'],
		moves: ['Bite', 'Poison Jab', 'Sludge Bomb', 'Gunk Shot', 'Crunch'],
		attack: ['Poison Jab', 'Gunk Shot'],
		defend: ['Poison Jab', 'Sludge Bomb'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"088-grimer-alola\" width=\"100%\" height=\"100%\"><path fill=\"#54B668\" d=\"M6 20l-1.142.761a2.53 2.53 0 0 0-.86 3.237L4 24h12v-4H6z\"></path><path fill=\"#4EAC5D\" d=\"M26 20l1.142.761a2.53 2.53 0 0 1 .86 3.237L28 24H16v-4h10zM4 24L.683 25.658A1.236 1.236 0 0 0 1.236 28H16v-4H4z\"></path><path fill=\"#48A353\" d=\"M28 24l3.317 1.658A1.236 1.236 0 0 1 30.764 28H16v-4h12z\"></path><path fill=\"#60C46F\" d=\"M9 9.167L8.254 11H6.268a8.33 8.33 0 0 1-4.165-1.116 1 1 0 0 0-1 1.732l.003.001c.181.105.107.383-.103.383H1a1 1 0 0 0 0 2h.003c.21 0 .284.278.102.383l-.003.001a1 1 0 0 0 1 1.732A8.337 8.337 0 0 1 6.268 15h.359l-1.095 2.691A2.13 2.13 0 0 0 5.999 20H16V9.167H9z\"></path><path fill=\"#54B668\" d=\"M30.997 14H31a1 1 0 0 0 0-2h-.003c-.21 0-.284-.278-.102-.383l.003-.001a1 1 0 0 0-1-1.732A8.337 8.337 0 0 1 25.732 11h-1.986L23 9.167h-7V20h10v-.001a2.13 2.13 0 0 0 .467-2.309L25.373 15h.359a8.33 8.33 0 0 1 4.165 1.116 1 1 0 0 0 1-1.732l-.003-.001c-.181-.105-.107-.383.103-.383z\"></path><path fill=\"#FFE28A\" d=\"M16 9.167H9S8.625 19 16 19V9.167z\"></path><path fill=\"#FFD96C\" d=\"M16 9.167v11.25a1 1 0 0 0 2 0c0-.932.493-1.791 1.291-2.272C23.248 15.755 23 9.167 23 9.167h-7z\"></path><path fill=\"#373F3F\" d=\"M16 11.667h-4C12 13.876 12 18 16 18v-6.333z\"></path><path fill=\"#2B3332\" d=\"M20 11.667h-4V18c4 0 4-4.124 4-6.333z\"></path><path fill=\"#6CD275\" d=\"M16 2.167a7 7 0 0 0-7 7c0 3.083 7 3 7 3v-10z\"></path><path fill=\"#60C46F\" d=\"M23 9.167a7 7 0 0 0-7-7v10s7 .083 7-3z\"></path><path fill=\"#FFF\" d=\"M13 7.5c0 .828-.172 1.5-1 1.5s-2-.672-2-1.5a1.5 1.5 0 0 1 3 0z\"></path><circle fill=\"#373F3F\" cx=\"11.75\" cy=\"7.75\" r=\".5\"></circle><path fill=\"#F7F7F7\" d=\"M22 7.5c0 .828-1.172 1.5-2 1.5s-1-.672-1-1.5a1.5 1.5 0 0 1 3 0z\"></path><circle fill=\"#2B3332\" cx=\"20.25\" cy=\"7.75\" r=\".5\"></circle><path fill=\"#4896C8\" d=\"M16 13c-.917-.5-2.99-.387-2.965.04.149 2.529.819 3.96 2.965 3.96v-4z\"></path><path fill=\"#4390BF\" d=\"M16 13c.917-.5 2.99-.387 2.965.04C18.816 15.569 18.146 17 16 17v-4z\"></path><path fill=\"#F7F7F7\" d=\"M12.5 11.823v.677a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-.399a16.507 16.507 0 0 1-2-.278z\"></path><path fill=\"#EDEEEE\" d=\"M17.5 12.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-.677c-.707.147-1.408.23-2 .278v.399z\"></path></svg>',
		lastevolve: false
	},{
		nummer: '089a',
		namn: 'Muk',
		type: ['Poison'],
		moves: ['Poison Jab', 'Acid', 'Lick', 'Infestation', 'Gunk Shot', 'Sludge Wave', 'Dark Pulse'],
		attack: ['Poison Jab', 'Gunk Shot'],
		defend: ['Infestation', 'Gunk Shot'],
		svg: '',
		lastevolve: true
	},{
		nummer: '089b',
		namn: 'Muk - Alola Form',
		type: ['Poison', 'Dark'],
		moves: ['Bite', 'Poison Jab', 'Dark Pulse', 'Sludge Wave', 'Gunk Shot'],
		attack: ['Poison Jab', 'Gunk Shot'],
		defend: ['Poison Jab', 'Dark Pulse'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"089-muk-alola\" width=\"100%\" height=\"100%\"><path fill=\"#54B668\" d=\"M15.997 8.167c-2.643 0-5.12 1.39-6.997 3.389V8H6l-.605 10.258c-.004.038-.005.074-.007.112l-.011.183.021-.003c.015.534.209 1.056.602 1.449V20h10V8.167h-.003z\"></path><path fill=\"#4EAC5D\" d=\"M26.623 18.554l-.011-.184c-.002-.038-.002-.074-.007-.111L26 8h-3v3.555c-1.876-1.999-4.354-3.389-6.997-3.389H16V20h10v-.001c.393-.393.587-.915.602-1.449l.021.004z\"></path><path fill=\"#137FA0\" d=\"M6 20l-1.142.761a2.53 2.53 0 0 0-.86 3.237L4 24h12v-4H6z\"></path><path fill=\"#0F769B\" d=\"M26 20l1.142.761a2.53 2.53 0 0 1 .86 3.237L28 24H16v-4h10z\"></path><path fill=\"#FFE28A\" d=\"M4 24L.683 25.658A1.236 1.236 0 0 0 1.236 28H16v-4H4z\"></path><path fill=\"#FFD96C\" d=\"M28 24l3.317 1.658A1.236 1.236 0 0 1 30.764 28H16v-4h12z\"></path><path fill=\"#FFF\" d=\"M14.48 12.768a.249.249 0 0 0-.067-.427c-.381-.147-1.003-.341-1.626-.341s-1.245.194-1.627.34a.249.249 0 0 0-.067.427c.372.296 1.033.732 1.693.732s1.322-.435 1.694-.731z\"></path><path fill=\"#373F3F\" d=\"M12.787 12.25c0 .414.224.75.5.75s.5-.336.5-.75c0-.04-.011-.074-.015-.112a4.027 4.027 0 0 0-.952-.135 1.083 1.083 0 0 0-.033.247z\"></path><path fill=\"#F7F7F7\" d=\"M17.52 12.768a.249.249 0 0 1 .067-.427c.381-.147 1.003-.341 1.626-.341s1.245.194 1.627.34c.18.069.218.307.067.427-.372.296-1.033.732-1.693.732-.662.001-1.322-.435-1.694-.731z\"></path><path fill=\"#373F3F\" d=\"M16 14.724c-1.1 0-2.199-.091-3.288-.272l-1.997-.333a.5.5 0 0 0-.572.591l.536 2.682A1.999 1.999 0 0 0 12.64 19H16v-4.276z\"></path><path fill=\"#7A63AD\" d=\"M16 17c-2.031 0-3.879.191-5.289.502A1.995 1.995 0 0 0 12.64 19H16v-2z\"></path><path fill=\"#2B3332\" d=\"M19.213 12.25c0 .414-.224.75-.5.75s-.5-.336-.5-.75c0-.04.011-.074.015-.112.293-.075.62-.132.952-.135.018.078.033.159.033.247z\"></path><path fill=\"#FF5F7E\" d=\"M9.5 5.549c0 .272.072.539.208.775l.909 1.574a1 1 0 0 1-.366 1.366 1.003 1.003 0 0 1-1.367-.367l-.001-.002c-.105-.182-.383-.108-.383.102V9a1 1 0 0 1-2 0v-.003c0-.21-.278-.284-.383-.102l-.001.002a1 1 0 0 1-1.732-1l.908-1.574c.136-.235.208-.502.208-.774C5.5 4.694 6.193 4 7.049 4h.902A1.55 1.55 0 0 1 9.5 5.549z\"></path><path fill=\"#F3586F\" d=\"M22.5 5.549c0 .272-.072.539-.208.775l-.909 1.574a1 1 0 0 0 1.732 1l.001-.003c.106-.182.384-.108.384.102V9a1 1 0 0 0 2 0v-.003c0-.21.278-.284.383-.102l.001.003a1 1 0 0 0 1.732-1l-.908-1.574a1.552 1.552 0 0 1-.208-.775C26.5 4.694 25.807 4 24.951 4h-.902A1.55 1.55 0 0 0 22.5 5.549z\"></path><g fill=\"#2B3332\"><path d=\"M19.007 15.53l-.253-1.011a20.03 20.03 0 0 1-2.755.206V19h2.625l.382-1.53a3.968 3.968 0 0 0 .001-1.94zM21.285 14.119l-.981.164-.312 1.247a4.005 4.005 0 0 0 0 1.94l.321 1.285a1.998 1.998 0 0 0 1.008-1.363l.536-2.682a.499.499 0 0 0-.572-.591z\"></path></g><g fill=\"#6E57A0\"><path d=\"M19.065 17.158C18.12 17.058 17.09 17 16 17v2h2.625l.382-1.53c.026-.103.041-.208.058-.312zM19.955 17.268c.013.067.021.136.038.202l.321 1.286c.473-.259.833-.707.975-1.254-.407-.09-.86-.166-1.334-.234z\"></path><g><path d=\"M19.065 17.158C18.12 17.058 17.09 17 16 17v2h2.625l.382-1.53c.026-.103.041-.208.058-.312zM19.955 17.268c.013.067.021.136.038.202l.321 1.286c.473-.259.833-.707.975-1.254-.407-.09-.86-.166-1.334-.234z\"></path></g></g><path fill=\"#60C46F\" d=\"M16 8.167C10.133 8.167 4.722 15.19 5.999 20H16V8.167z\"></path><path fill=\"#54B668\" d=\"M16 8.167c5.867 0 11.278 7.024 10.001 11.833H16V8.167z\"></path><path fill=\"#F3586F\" d=\"M26.165 18H16v2h10.001a6.09 6.09 0 0 0 .164-2z\"></path><path fill=\"#FF5F7E\" d=\"M5.835 18a6.064 6.064 0 0 0 .164 2H16v-2H5.835z\"></path><path fill=\"#FFE28A\" d=\"M5.835 18H16v-6H8.57c-1.552 1.792-2.587 3.967-2.735 6z\"></path><path fill=\"#FFD96C\" d=\"M16 18h10.165c-.147-2.033-1.182-4.208-2.735-6H16v6z\"></path><path fill=\"#373F3F\" d=\"M16 14.724c-1.1 0-2.199-.091-3.288-.272l-1.997-.333a.5.5 0 0 0-.572.591l.536 2.682A1.999 1.999 0 0 0 12.64 19H16v-4.276z\"></path><path fill=\"#0F769B\" d=\"M16 17c-2.031 0-3.879.191-5.289.502A1.995 1.995 0 0 0 12.64 19H16v-2z\"></path><g fill=\"#2B3332\"><path d=\"M19.007 15.53l-.253-1.011a20.03 20.03 0 0 1-2.755.206V19h2.625l.382-1.53a3.968 3.968 0 0 0 .001-1.94zM21.285 14.119l-.981.164-.312 1.247a4.005 4.005 0 0 0 0 1.94l.321 1.285a1.998 1.998 0 0 0 1.008-1.363l.536-2.682a.499.499 0 0 0-.572-.591z\"></path></g><path fill=\"#0A6F8E\" d=\"M19.065 17.158C18.12 17.058 17.09 17 16 17v2h2.625l.382-1.53c.026-.103.041-.208.058-.312zM19.955 17.268c.013.067.021.136.038.202l.321 1.286c.473-.259.833-.707.975-1.254-.407-.09-.86-.166-1.334-.234z\"></path><path fill=\"#FFF\" d=\"M14.48 12.768a.249.249 0 0 0-.067-.427c-.381-.147-1.003-.341-1.626-.341s-1.245.194-1.627.34a.249.249 0 0 0-.067.427c.372.296 1.033.732 1.693.732s1.322-.435 1.694-.731z\"></path><path fill=\"#373F3F\" d=\"M12.787 12.25c0 .414.224.75.5.75s.5-.336.5-.75c0-.04-.011-.074-.015-.112a4.027 4.027 0 0 0-.952-.135 1.083 1.083 0 0 0-.033.247z\"></path><path fill=\"#F7F7F7\" d=\"M17.52 12.768a.249.249 0 0 1 .067-.427c.381-.147 1.003-.341 1.626-.341s1.245.194 1.627.34c.18.069.218.307.067.427-.372.296-1.033.732-1.693.732-.662.001-1.322-.435-1.694-.731z\"></path><path fill=\"#2B3332\" d=\"M19.213 12.25c0 .414-.224.75-.5.75s-.5-.336-.5-.75c0-.04.011-.074.015-.112.293-.075.62-.132.952-.135.018.078.033.159.033.247z\"></path><path fill=\"#FFF\" d=\"M13.75 19.526c0 .632-1.5.632-1.5 0S12.379 18 13 18s.75.894.75 1.526z\"></path><path fill=\"#F7F7F7\" d=\"M24.75 24.026c0 .632-1.5.632-1.5 0s.129-1.526.75-1.526.75.894.75 1.526zM16.25 14.474c0-.632 1.5-.632 1.5 0S17.621 16 17 16s-.75-.894-.75-1.526z\"></path></svg>',
		lastevolve: true
	},{
		nummer: '090',
		namn: 'Shellder',
		type: ['Water'],
		moves: ['Tackle', 'Ice Shard', 'Bubble Beam', 'Water Pulse', 'Icy Wind'],
		attack: ['Tackle', 'Water Pulse'],
		defend: ['Ice Shard', 'Water Pulse'],
		svg: '',
		lastevolve: false
	},{
		nummer: '091',
		namn: 'Cloyster',
		type: ['Water', 'Ice'],
		moves: ['Frost Breath', 'Ice Shard', 'Blizzard', 'Hydro Pump', 'Avalanche', 'Aurora Beam', 'Icy Wind'],
		attack: ['Frost Breath', 'Avalanche'],
		defend: ['Ice Shard', 'Avalanche'],
		svg: '',
		lastevolve: true
	},{
		nummer: '092',
		namn: 'Gastly',
		type: ['Ghost', 'Poison'],
		moves: ['Lick', 'Sucker Punch', 'Astonish', 'Sludge Bomb', 'Night Shade', 'Dark Pulse', 'Ominous Wind'],
		attack: ['Lick', 'Sludge Bomb'],
		defend: ['Astonish', 'Sludge Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '093',
		namn: 'Haunter',
		type: ['Ghost', 'Poison'],
		moves: ['Shadow Claw', 'Lick', 'Astonish', 'Sludge Bomb', 'Shadow Ball', 'Shadow Punch', 'Dark Pulse'],
		attack: ['Shadow Claw', 'Sludge Bomb'],
		defend: ['Astonish', 'Sludge Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '094',
		namn: 'Gengar',
		type: ['Ghost', 'Poison'],
		moves: ['Shadow Claw', 'Sucker Punch', 'Hex', 'Sludge Bomb', 'Sludge Wave', 'Focus Blast', 'Shadow Ball', 'Dark Pulse'],
		attack: ['Hex', 'Shadow Ball'],
		defend: ['Hex', 'Shadow Ball'],
		svg: '',
		lastevolve: true
	},{
		nummer: '095',
		namn: 'Onix',
		type: ['Rock', 'Ground'],
		moves: ['Rock Throw', 'Tackle', 'Stone Edge', 'Rock Slide', 'Heavy Slam', 'Iron Head', 'Sand Tomb'],
		attack: ['Rock Throw', 'Stone Edge'],
		defend: ['Rock Throw', 'Sand Tomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '096',
		namn: 'Drowzee',
		type: ['Psychic'],
		moves: ['Confusion', 'Pound', 'Psychic', 'Psyshock', 'Psybeam'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Psyshock'],
		svg: '',
		lastevolve: false
	},{
		nummer: '097',
		namn: 'Hypno',
		type: ['Psychic'],
		moves: ['Confusion', 'Zen Headbutt', 'Future Sight', 'Psychic', 'Focus Blast', 'Shadow Ball', 'Psyshock'],
		attack: ['Confusion', 'Future Sight'],
		defend: ['Confusion', 'Future Sight'],
		svg: '',
		lastevolve: true
	},{
		nummer: '098',
		namn: 'Krabby',
		type: ['Water'],
		moves: ['Bubble', 'Mud Shot', 'Bubble Beam', 'Water Pulse', 'Vice Grip'],
		attack: ['Bubble', 'Bubble Beam'],
		defend: ['Bubble', 'Water Pulse'],
		svg: '',
		lastevolve: false
	},{
		nummer: '099',
		namn: 'Kingler',
		type: ['Water'],
		moves: ['Bubble', 'Metal Claw', 'Mud Shot', 'X-Scissor', 'Water Pulse', 'Vice Grip'],
		attack: ['Bubble', 'Water Pulse'],
		defend: ['Bubble', 'Water Pulse'],
		svg: '',
		lastevolve: true
	},{
		nummer: '100',
		namn: 'Voltorb',
		type: ['Electric'],
		moves: ['Spark', 'Tackle', 'Thunderbolt', 'Discharge', 'Signal Beam', 'Gyro Ball'],
		attack: ['Spark', 'Thunderbolt'],
		defend: ['Spark', 'Discharge'],
		svg: '',
		lastevolve: false
	},{
		nummer: '101',
		namn: 'Electrode',
		type: ['Electric'],
		moves: ['Volt Switch', 'Spark', 'Tackle', 'Hyper Beam', 'Thunderbolt', 'Discharge'],
		attack: ['Spark', 'Thunderbolt'],
		defend: ['Volt Switch', 'Thunderbolt'],
		svg: '',
		lastevolve: true
	},{
		nummer: '102',
		namn: 'Exeggcute',
		type: ['Grass', 'Psychic'],
		moves: ['Confusion', 'Bullet Seed', 'Psychic', 'Seed Bomb', 'Ancient Power'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Seed Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '103a',
		namn: 'Exeggutor',
		type: ['Grass', 'Psychic'],
		moves: ['Confusion', 'Zen Headbutt', 'Extrasensory', 'Bullet Seed', 'Solar Beam', 'Psychic', 'Seed Bomb'],
		attack: ['Extrasensory', 'Solar Beam'],
		defend: ['Extrasensory', 'Solar Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '103b',
		namn: 'Exeggutor - Alola Form',
		type: ['Grass', 'Dragon'],
		moves: ['Dragon Tail', 'Bullet Seed', 'Seed Bomb', 'Dragon Pulse', 'Solar Beam'],
		attack: ['Dragon Tail', 'Solar Beam'],
		defend: ['Dragon Tail', 'Solar Beam'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"103-exeggutor-alola\" width=\"100%\" height=\"100%\"><path fill=\"#F0C13E\" d=\"M17.841 23.159l5.408-3.09c.442-.253.935.24.682.682l-3.09 5.408-3-3z\"></path><path fill=\"#96643B\" d=\"M17.841 23.159l5.408-3.09c.442-.253.935.24.682.682l-3.09 5.408-3-3z\"></path><path fill=\"#9E6E43\" d=\"M23.249 20.069l-3.124 1.785a3.004 3.004 0 0 0 2.021 2.021l1.785-3.124c.253-.442-.24-.935-.682-.682z\"></path><path fill=\"#A7794C\" d=\"M23.249 20.069l-1.557.89c.253.609.74 1.096 1.35 1.35l.89-1.557c.252-.443-.241-.936-.683-.683z\"></path><path fill=\"#8D5B36\" d=\"M22.552 31.373l-.627-.652V29.35c0-.388-.154-.76-.428-1.034L19.181 26l-2.068 2.068L19 29.955v1.727c.023.178.17.318.345.318h2.966c.309 0 .462-.398.241-.627z\"></path><path fill=\"#96643B\" d=\"M12.819 26l-2.315 2.315a1.462 1.462 0 0 0-.428 1.034v1.371l-.627.652c-.222.23-.069.628.24.628H12.655c.175 0 .322-.14.344-.318v-1.727l1.887-1.887L12.819 26z\"></path><path fill=\"#9E6E43\" d=\"M17.825 19.336L17 14h-2l-.825 5.336c-.129.833-.572 1.57-1.189 2.145C11.78 22.605 11 24.046 11 26c0 3.314 2.239 5 5 5s5-1.686 5-5c0-1.954-.78-3.395-1.986-4.519-.617-.575-1.06-1.311-1.189-2.145z\"></path><path fill=\"#A7794C\" d=\"M17.825 19.336L17 14h-2l-.825 5.336c-.129.833-.572 1.57-1.189 2.145C11.78 22.605 11 24.046 11 26c0 .244.036.461.06.688C12.518 27.519 14.201 28 16 28s3.482-.481 4.94-1.312c.024-.227.06-.444.06-.688 0-1.954-.78-3.395-1.986-4.519-.617-.575-1.06-1.311-1.189-2.145z\"></path><path fill=\"#96643B\" d=\"M17.825 19.336L17 14h-1v17c2.761 0 5-1.686 5-5 0-1.954-.78-3.395-1.986-4.519-.617-.575-1.06-1.311-1.189-2.145z\"></path><path fill=\"#9E6E43\" d=\"M17.825 19.336L17 14h-1v14a9.941 9.941 0 0 0 4.94-1.312c.024-.227.06-.444.06-.688 0-1.954-.78-3.395-1.986-4.519-.617-.575-1.06-1.311-1.189-2.145z\"></path><path fill=\"#B38658\" d=\"M16 25a9.953 9.953 0 0 0 4.63-1.141c-.342-.93-.901-1.711-1.616-2.378-.617-.575-1.06-1.311-1.189-2.145L17 14h-2l-.825 5.336c-.129.833-.572 1.57-1.189 2.145-.715.666-1.274 1.448-1.616 2.378A9.953 9.953 0 0 0 16 25z\"></path><path fill=\"#A7794C\" d=\"M17.825 19.336L17 14h-1v11a9.953 9.953 0 0 0 4.63-1.141c-.342-.93-.901-1.711-1.616-2.378-.617-.575-1.06-1.311-1.189-2.145z\"></path><path fill=\"#C09265\" d=\"M16 22c1.066 0 2.091-.17 3.054-.479l-.04-.04c-.617-.575-1.06-1.311-1.189-2.145L17 14h-2l-.825 5.336c-.129.833-.572 1.57-1.189 2.145l-.04.04A9.975 9.975 0 0 0 16 22z\"></path><path fill=\"#B38658\" d=\"M17.825 19.336L17 14h-1v8c1.066 0 2.091-.17 3.054-.479l-.04-.04c-.617-.575-1.06-1.311-1.189-2.145z\"></path><path fill=\"#CDA073\" d=\"M15 14l-.748 4.838c.568.1 1.151.162 1.748.162s1.18-.062 1.748-.162L17 14h-2z\"></path><path fill=\"#C09265\" d=\"M16 14v5c.597 0 1.18-.062 1.748-.162L17 14h-1z\"></path><path fill=\"#60C46F\" d=\"M16 6.312S10.794-.229 4.809 5.556c-.14.135-.012.367.176.319 3.919-1.02 5.078.756 7.389 3.125H16V6.312z\"></path><path fill=\"#6CD275\" d=\"M15.994 5.625S14.494 0 9.338 0C5.285 0 4.263 1.642 4.012 2.344a.185.185 0 0 0 .21.248c1.476-.296 8.884-.337 9.772 6.408H16l-.006-3.375z\"></path><path fill=\"#54B668\" d=\"M16 6.312s5.206-6.541 11.191-.756c.14.135.012.367-.176.319-3.919-1.02-5.078.756-7.389 3.125H16V6.312z\"></path><path fill=\"#60C46F\" d=\"M16.006 5.625S17.506 0 22.662 0c4.053 0 5.075 1.642 5.326 2.344a.185.185 0 0 1-.21.248c-1.476-.296-8.884-.337-9.772 6.408H16l.006-3.375z\"></path><path fill=\"#84ED82\" d=\"M14.5 8.25H16V0c-.844 0-1.5 8.25-1.5 8.25z\"></path><path fill=\"#78DF7C\" d=\"M16 0v8.25h1.5S16.75 0 16 0zM16 9s-1.703-6.329-6.988-4.678c-.17.053-.165.294.003.354C13.44 6.267 13.875 9 13.875 9H16z\"></path><path fill=\"#6CD275\" d=\"M16 9s1.703-6.329 6.988-4.678c.17.053.165.294-.003.354C18.56 6.267 18.125 9 18.125 9H16z\"></path><path fill=\"#FDEBBB\" d=\"M11.5 14V6S9 5.97 8.134 9.823C7.195 14 11.5 14 11.5 14z\"></path><path fill=\"#FAE09F\" d=\"M11.5 14V6s2.5-.03 3.366 3.823C15.805 14 11.5 14 11.5 14z\"></path><path fill=\"#FF8D6E\" d=\"M9.527 11.287C9.614 11.84 9.977 13 11.5 13v-2H9.775a.25.25 0 0 0-.248.287z\"></path><path fill=\"#FF805D\" d=\"M13.225 11H11.5v2c1.523 0 1.886-1.16 1.973-1.713a.25.25 0 0 0-.248-.287z\"></path><path fill=\"#FFF\" d=\"M10.75 9.25c0 .414-1.5.414-1.5 0a.75.75 0 0 1 1.5 0z\"></path><path fill=\"#F7F7F7\" d=\"M13.75 9.25c0 .414-1.5.414-1.5 0a.75.75 0 0 1 1.5 0z\"></path><circle fill=\"#373F3F\" cx=\"10.25\" cy=\"9\" r=\".25\"></circle><circle fill=\"#2B3332\" cx=\"12.75\" cy=\"9\" r=\".25\"></circle><path fill=\"#FAE09F\" d=\"M20.5 14V6s-2.5-.03-3.366 3.823C16.195 14 20.5 14 20.5 14z\"></path><path fill=\"#F7D684\" d=\"M20.5 14V6s2.5-.03 3.366 3.823C24.805 14 20.5 14 20.5 14z\"></path><path fill=\"#FFF\" d=\"M18.25 9.311c0-.414 1.5-.414 1.5 0a.75.75 0 0 1-1.5 0z\"></path><path fill=\"#F7F7F7\" d=\"M21.25 9.311c0-.414 1.5-.414 1.5 0a.75.75 0 0 1-1.5 0z\"></path><circle fill=\"#373F3F\" cx=\"19.25\" cy=\"9.5\" r=\".25\"></circle><circle fill=\"#2B3332\" cx=\"21.75\" cy=\"9.5\" r=\".25\"></circle><path fill=\"#373F3F\" d=\"M20.5 11.5c-.722 0-1.037-.384-1.052-.403a.25.25 0 0 0-.397.304c.018.024.465.599 1.449.599v-.5z\"></path><path fill=\"#2B3332\" d=\"M21.552 11.097c-.013.016-.327.403-1.052.403v.5c.984 0 1.431-.575 1.449-.599a.247.247 0 0 0-.047-.347.25.25 0 0 0-.35.043z\"></path><path fill=\"#FFF3D9\" d=\"M16 15V7s-2.5-.03-3.366 3.823C11.695 15 16 15 16 15z\"></path><path fill=\"#FDEBBB\" d=\"M16 15V7s2.5-.03 3.366 3.823C20.305 15 16 15 16 15z\"></path><g><path fill=\"#FFA68E\" d=\"M14.027 12.287C14.114 12.84 14.477 14 16 14v-2h-1.725a.25.25 0 0 0-.248.287z\"></path><path fill=\"#FF8D6E\" d=\"M17.725 12H16v2c1.523 0 1.886-1.16 1.973-1.713a.25.25 0 0 0-.248-.287z\"></path></g><circle fill=\"#FFF\" cx=\"14.5\" cy=\"10.25\" r=\".75\"></circle><circle fill=\"#F7F7F7\" cx=\"17.5\" cy=\"10.25\" r=\".75\"></circle><circle fill=\"#373F3F\" cx=\"14.75\" cy=\"10.25\" r=\".25\"></circle><circle fill=\"#2B3332\" cx=\"17.25\" cy=\"10.25\" r=\".25\"></circle><path fill=\"#6CD275\" d=\"M23.5 19.369v1.107h.562s.218-1.367 2.43-2.162c.084-.03.086-.151.001-.177-1.556-.486-2.487.412-2.993 1.232z\"></path><path fill=\"#78DF7C\" d=\"M23.5 19.369c-.506-.82-1.437-1.718-2.994-1.232-.085.027-.082.147.001.177 2.212.795 2.43 2.162 2.43 2.162h.563v-1.107z\"></path><g><path fill=\"#D9F07D\" d=\"M23.5 25v-5s-1.428-.018-1.923 2.389C21.04 25 23.5 25 23.5 25z\"></path><path fill=\"#CBEB6B\" d=\"M23.5 25v-5s1.428-.018 1.923 2.389C25.96 25 23.5 25 23.5 25z\"></path></g><circle fill=\"#373F3F\" cx=\"22.75\" cy=\"22.25\" r=\".25\"></circle><circle fill=\"#2B3332\" cx=\"24.25\" cy=\"22.25\" r=\".25\"></circle></svg>',
		lastevolve: true
	},{
		nummer: '104',
		namn: 'Cubone',
		type: ['Ground'],
		moves: ['Mud Slap', 'Rock Smash', 'Bone Club', 'Bulldoze', 'Dig'],
		attack: ['Mud Slap', 'Dig'],
		defend: ['Mud Slap', 'Dig'],
		svg: '',
		lastevolve: false
	},{
		nummer: '105a',
		namn: 'Marowak',
		type: ['Ground'],
		moves: ['Mud Slap', 'Rock Smash', 'Earthquake', 'Bone Club', 'Dig'],
		attack: ['Mud Slap', 'Earthquake'],
		defend: ['Mud Slap', 'Dig'],
		svg: '',
		lastevolve: true
	},{
		nummer: '105b',
		namn: 'Marowak - Alola Form',
		type: ['Fire', 'Ghost'],
		moves: ['Rock Smash', 'Hex', 'Shadow Ball', 'Bone Club', 'Fire Blast'],
		attack: ['Hex', 'Shadow Ball'],
		defend: ['Hex', 'Shadow Ball'],
		svg: '<svg viewBox=\"0 0 32 32\" id=\"105-marowak-alola\" width=\"100%\" height=\"100%\"><path fill=\"#2B3332\" d=\"M30.311 22.042c-.687.379-1.397.697-2.113.969l-.774-.814a.5.5 0 0 0-.848.224l-.298 1.201c-4.713 1.251-9.177.701-9.177.701s-4.083 3.5 3.25 3.875c4.955.253 8.655-3.146 10.533-5.377.335-.399-.118-1.03-.573-.779z\"></path><path fill=\"#434C4B\" d=\"M7 32h6.714s.815-.495-.309-1.466C12.281 29.563 7 29.838 7 32z\"></path><path fill=\"#505957\" d=\"M14.133 22.438s-3.981-1.849-5.44 2.054-.315 4.683.67 5.751 4.601 1.18 5.395-.807c.795-1.987-.625-6.998-.625-6.998z\"></path><path fill=\"#373F3F\" d=\"M25 32h-6.714s-.815-.495.309-1.466C19.719 29.563 25 29.838 25 32z\"></path><path fill=\"#434C4B\" d=\"M17.867 22.438s3.981-1.849 5.44 2.054.315 4.683-.67 5.751-4.601 1.18-5.395-.807c-.795-1.987.625-6.998.625-6.998zM11.5 16.018l-4.247-.725-1.647-.275a1.379 1.379 0 0 0-.991 2.508l1.285.858 3.701 2.468 1.899-4.834z\"></path><path fill=\"#373F3F\" d=\"M20.5 16.018l4.247-.725 1.647-.275a1.379 1.379 0 0 1 .991 2.508l-1.285.858-3.701 2.468-1.899-4.834z\"></path><path fill=\"#505957\" d=\"M10.5 23.436C10.5 19.207 12.962 15 16 15v-4c-3.866 0-7 5.408-7 10.846 0 5.17 2.834 6.972 6.435 7.137-2.772-.162-4.935-1.583-4.935-5.547z\"></path><path fill=\"#D49A87\" d=\"M16 29z\"></path><path fill=\"#434C4B\" d=\"M21.5 23.436c0 3.964-2.163 5.385-4.935 5.548C20.166 28.818 23 27.016 23 21.847 23 16.408 19.866 11 16 11v4c3.038 0 5.5 4.207 5.5 8.436z\"></path><path fill=\"#D49A87\" d=\"M16 29c.191 0 .379-.005.565-.016-.187.008-.374.016-.565.016z\"></path><path fill=\"#945BA0\" d=\"M10.523 24.087c.228 3.469 2.298 4.743 4.912 4.897.187.008.374.016.565.016v-3c-2.135 0-4.067-.731-5.477-1.913z\"></path><path fill=\"#845194\" d=\"M16 29c.191 0 .378-.008.565-.016 2.614-.154 4.684-1.428 4.912-4.897C20.067 25.269 18.134 26 16 26v3z\"></path><path fill=\"#A366AD\" d=\"M16 22c-1.943 0-3.716-.608-5.082-1.607a11.52 11.52 0 0 0-.418 3.043c0 .226.009.441.023.651C11.933 25.269 13.865 26 16 26v-4z\"></path><path fill=\"#945BA0\" d=\"M21.082 20.393C19.716 21.392 17.943 22 16 22v4c2.134 0 4.067-.731 5.477-1.913.014-.21.023-.425.023-.651 0-1.037-.15-2.071-.418-3.043z\"></path><path fill=\"#B370B9\" d=\"M10.918 20.393C12.284 21.392 14.057 22 16 22v-7c-2.293 0-4.257 2.398-5.082 5.393z\"></path><path fill=\"#A366AD\" d=\"M16 15v7c1.943 0 3.716-.608 5.082-1.607C20.257 17.398 18.293 15 16 15z\"></path><path fill=\"#DADDDC\" d=\"M15.844 1.178l-3.273 1.071L9.812.081a.482.482 0 0 0-.565.022.48.48 0 0 0-.213.393l.108 3.787a.5.5 0 0 1-.15.357l-.842.829a.498.498 0 0 0-.15.357v1.807a.5.5 0 0 0 .171.377l.943.823a.499.499 0 0 1 .171.377v2.828c0 .191.108.365.28.449l1.88.923.202.18 2.02 3.174c.05.079.122.142.207.183l1.911.911a.508.508 0 0 0 .215.049V1.153a.49.49 0 0 0-.156.025z\"></path><path fill=\"#D1D4D4\" d=\"M23.85 5.469l-.843-.828a.5.5 0 0 1-.15-.357l.177-3.787a.457.457 0 0 0-.121-.309.563.563 0 0 0-.092-.084.484.484 0 0 0-.565-.023L19.428 2.25l-3.273-1.071A.459.459 0 0 0 16 1.153v16.752a.49.49 0 0 0 .215-.049l1.911-.912a.493.493 0 0 0 .206-.183l2.021-3.173.201-.18 1.88-.923a.5.5 0 0 0 .28-.449V9.209a.5.5 0 0 1 .171-.377l.943-.823A.496.496 0 0 0 24 7.633V5.826a.498.498 0 0 0-.15-.357z\"></path><path fill=\"#FFF\" d=\"M13.751 10.495l.515.146L14 9l-.003-.003c.001.023.003.043.003.066 0 .57-.097 1.078-.249 1.432zM12.708 7.728L12 7.031v2.591a.5.5 0 0 0 .364.481l.275.078a4.291 4.291 0 0 1-.139-1.118c0-.519.08-.987.208-1.335z\"></path><path fill=\"#373F3F\" d=\"M14 9.063c0-.022-.002-.043-.003-.065l-1.289-1.269c-.128.347-.208.815-.208 1.334 0 .418.052.802.139 1.118l1.112.314c.152-.354.249-.862.249-1.432zM15.003 15.002l-.906-.799a.278.278 0 0 1-.032-.382l.613-.754.325 1.935z\"></path><g><path fill=\"#F7F7F7\" d=\"M18.249 10.495l-.515.146L18 9l.003-.003c-.001.023-.003.043-.003.066 0 .57.097 1.078.249 1.432zM19.292 7.728L20 7.031v2.591a.5.5 0 0 1-.364.481l-.275.078c.087-.317.139-.701.139-1.118 0-.519-.08-.987-.208-1.335z\"></path><path fill=\"#2B3332\" d=\"M18 9.063c0-.022.002-.043.003-.065l1.289-1.269c.128.347.208.815.208 1.334 0 .418-.052.802-.139 1.118l-1.112.314c-.152-.354-.249-.862-.249-1.432z\"></path></g><path fill=\"#2B3332\" d=\"M17.003 15.002l.906-.799a.278.278 0 0 0 .032-.382l-.613-.754-.325 1.935z\"></path><g><path fill=\"#EDEEEE\" d=\"M3.521 8.557l-.334-.182a1.001 1.001 0 0 0-1.217.202l-.707.774a.998.998 0 0 0-.263.675v.851c0 .256.098.501.273.687l.953 1.008a1 1 0 0 1 .274.687v5.481c0 .256-.098.501-.273.687l-.953 1.008a1 1 0 0 0-.274.688v.851c0 .25.094.491.263.675l.708.773a1 1 0 0 0 1.217.202l.333-.182c.149-.081.314-.122.479-.122V8.679a.992.992 0 0 1-.479-.122z\"></path><path fill=\"#E3E5E5\" d=\"M4.812 23.625c.404.22.906.137 1.217-.202l.708-.773c.169-.185.263-.426.263-.676v-.851c0-.255-.098-.501-.273-.687l-.953-1.008a1 1 0 0 1-.274-.688v-5.481c0-.255.098-.501.273-.687l.953-1.008A.996.996 0 0 0 7 10.877v-.851a.998.998 0 0 0-.263-.675l-.708-.773a1 1 0 0 0-1.217-.203l-.333.182A.992.992 0 0 1 4 8.679V23.32c.165 0 .33.041.479.122l.333.183z\"></path></g><g><path fill=\"#E3E5E5\" d=\"M15.689 1.229l-3.117 1.02L9.812.081a.482.482 0 0 0-.565.022L12 7.031 14 9l1 6-1.256 1.883 2.041.974a.508.508 0 0 0 .215.049V1.153c-.105 0-.21.043-.311.076z\"></path><path fill=\"#DADDDC\" d=\"M18.256 16.883L17 15l1-6 2-1.969L22.822.103a.484.484 0 0 0-.565-.023l-2.828 2.169-3.117-1.02c-.102-.033-.207-.08-.312-.08v16.756a.49.49 0 0 0 .215-.049l2.041-.973z\"></path></g><g><path fill=\"#99C7CE\" d=\"M1.053 7.681C1.801 8.8 2.852 9.499 4.018 9.499V11c-1.519 0-2.761-1.019-2.959-2.337a2.724 2.724 0 0 1-.033-.294c-.001-.024-.008-.046-.008-.069 0-.01.003-.019.003-.028a3.683 3.683 0 0 1 .032-.591z\"></path><path fill=\"#93C2CA\" d=\"M4 9.499c1.142 0 2.174-.668 2.92-1.746.044.177.08.357.08.547C7 9.791 5.657 11 4 11V9.499z\"></path><path fill=\"#9FCCD3\" d=\"M3.04 4.728c.411-.261.72-.499.96-.721v5.491c-1.166 0-2.216-.699-2.965-1.817.003-.028.004-.052.008-.08.122-.829.572-1.969 1.997-2.873z\"></path><path fill=\"#99C7CE\" d=\"M4 9.499V4.007c.712-.656.752-1.141.597-1.47a.25.25 0 0 1 .29-.35c.241.067.487.15.673.243.447.253.833.607 1.138 1.04.185.331.302.733.302 1.229 0 .979-.34 1.562-.684 1.904.294.325.502.712.606 1.135l-.002.014C6.174 8.83 5.142 9.499 4 9.499z\"></path></g><g><path fill=\"#93C2CA\" d=\"M6.965 24.319C6.216 23.2 5.166 22.501 4 22.501V21c1.519 0 2.761 1.019 2.959 2.337.01.055.024.156.033.294.001.024.008.046.008.069 0 .01-.003.019-.003.028.006.162-.004.366-.032.591z\"></path><path fill=\"#99C7CE\" d=\"M4 22.501c-1.142 0-2.174.668-2.92 1.746A2.251 2.251 0 0 1 1 23.7C1 22.209 2.343 21 4 21v1.501z\"></path><path fill=\"#88B9C3\" d=\"M4.96 27.272c-.411.261-.72.5-.96.721v-5.491c1.166 0 2.216.699 2.965 1.817-.003.028-.004.052-.008.08-.122.829-.572 1.969-1.997 2.873z\"></path><path fill=\"#93C2CA\" d=\"M4 22.501v5.491c-.712.656-.752 1.141-.597 1.47a.25.25 0 0 1-.29.35 3.957 3.957 0 0 1-.673-.243 3.525 3.525 0 0 1-1.138-1.039A2.467 2.467 0 0 1 1 27.301c0-.979.34-1.562.684-1.904a2.622 2.622 0 0 1-.606-1.135l.003-.015C1.826 23.17 2.858 22.501 4 22.501z\"></path></g><path fill=\"#434C4B\" d=\"M16.001 2.54a.245.245 0 0 0-.236.17L15 5l-1.329-.665a.25.25 0 0 0-.335.335l1.584 3.168a.251.251 0 0 1-.047.289l-.875.87 1.125.55c.277.136.578.203.878.203V2.54z\"></path><path fill=\"#373F3F\" d=\"M18.332 4.335L17.003 5l-.763-2.29a.246.246 0 0 0-.238-.171V9.75c.3 0 .6-.068.877-.203l1.128-.55-.875-.87a.251.251 0 0 1-.047-.289l1.584-3.168a.25.25 0 0 0-.337-.335z\"></path></svg>',
		lastevolve: true
	},{
		nummer: '106',
		namn: 'Hitmonlee',
		type: ['Fighting'],
		moves: ['Rock Smash', 'Low Kick', 'Close Combat', 'Stone Edge', 'Stomp', 'Brick Break', 'Low Sweep'],
		attack: ['Rock Smash', 'Rock Smash'],
		defend: ['Rock Smash', 'Rock Smash'],
		svg: '',
		lastevolve: true
	},{
		nummer: '107',
		namn: 'Hitmonchan',
		type: ['Fighting'],
		moves: ['Counter', 'Rock Smash', 'Bullet Punch', 'Close Combat', 'Brick Break', 'Ice Punch', 'Thunder Punch', 'Fire Punch'],
		attack: ['Counter', 'Close Combat'],
		defend: ['Counter', 'Fire Punch'],
		svg: '',
		lastevolve: true
	},{
		nummer: '108',
		namn: 'Lickitung',
		type: ['Normal'],
		moves: ['Zen Headbutt', 'Lick', 'Hyper Beam', 'Stomp', 'Power Whip'],
		attack: ['Lick', 'Hyper Beam'],
		defend: ['Zen Headbutt', 'Power Whip'],
		svg: '',
		lastevolve: true
	},{
		nummer: '109',
		namn: 'Koffing',
		type: ['Poison'],
		moves: ['Acid', 'Tackle', 'Infestation', 'Sludge Bomb', 'Sludge', 'Dark Pulse'],
		attack: ['Infestation', 'Sludge Bomb'],
		defend: ['Infestation', 'Sludge Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '110',
		namn: 'Weezing',
		type: ['Poison'],
		moves: ['Acid', 'Tackle', 'Infestation', 'Sludge Bomb', 'Shadow Ball', 'Dark Pulse'],
		attack: ['Acid', 'Power Whip'],
		defend: ['Bullet Seed', 'Power Whip'],
		svg: '',
		lastevolve: true
	},{
		nummer: '111',
		namn: 'Rhyhorn',
		type: ['Ground', 'Rock'],
		moves: ['Mud Slap', 'Rock Smash', 'Stomp', 'Bulldoze', 'Horn Attack'],
		attack: ['Mud Slap', 'Bulldoze'],
		defend: ['Mud Slap', 'Bulldoze'],
		svg: '',
		lastevolve: false
	},{
		nummer: '112',
		namn: 'Rhydon',
		type: ['Ground', 'Rock'],
		moves: ['Mud Slap', 'Rock Smash', 'Stone Edge', 'Megahorn', 'Earthquake', 'Surf'],
		attack: ['Mud Slap', 'Earthquake'],
		defend: ['Mud Slap', 'Earthquake'],
		svg: '',
		lastevolve: true
	},{
		nummer: '113',
		namn: 'Chansey',
		type: ['Normal'],
		moves: ['Pound', 'Zen Headbutt', 'Hyper Beam', 'Psychic', 'Dazzling Gleam', 'Psybeam'],
		attack: ['Pound', 'Hyper Beam'],
		defend: ['Zen Headbutt', 'Dazzling Gleam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '114',
		namn: 'Tangela',
		type: ['Grass'],
		moves: ['Vine Whip', 'Infestation', 'Solar Beam', 'Power Whip', 'Grass Knot', 'Sludge Bomb'],
		attack: ['Vine Whip', 'Solar Beam'],
		defend: ['Infestation', 'Solar Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '115',
		namn: 'Kangaskhan',
		type: ['Normal'],
		moves: ['Mud Slap', 'Low Kick', 'Stomp', 'Earthquake', 'Outrage', 'Brick Break', 'Crunch'],
		attack: ['Mud Slap', 'Outrage'],
		defend: ['Mud Slap', 'Outrage'],
		svg: '',
		lastevolve: true
	},{
		nummer: '116',
		namn: 'Horsea',
		type: ['Water'],
		moves: ['Water Gun', 'Bubble', 'Flash Cannon', 'Bubble Beam', 'Dragon Pulse'],
		attack: ['Bubble', 'Dragon Pulse'],
		defend: ['Bubble', 'Dragon Pulse'],
		svg: '',
		lastevolve: false
	},{
		nummer: '117',
		namn: 'Seadra',
		type: ['Water'],
		moves: ['Dragon Breath', 'Water Gun', 'Hydro Pump', 'Blizzard', 'Dragon Pulse', 'Aurora Beam'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Water Gun', 'Dragon Pulse'],
		svg: '',
		lastevolve: true
	},{
		nummer: '118',
		namn: 'Goldeen',
		type: ['Water'],
		moves: ['Peck', 'Mud Shot', 'Aqua Tail', 'Water Pulse', 'Horn Attack'],
		attack: ['Peck', 'Aqua Tail'],
		defend: ['Peck', 'Aqua Tail'],
		svg: '',
		lastevolve: false
	},{
		nummer: '119',
		namn: 'Seaking',
		type: ['Water'],
		moves: ['Waterfall', 'Poison Jab', 'Peck', 'Megahorn', 'Drill Run', 'Ice Beam', 'Water Pulse', 'Icy Wind'],
		attack: ['Waterfall', 'Ice Beam'],
		defend: ['Waterfall', 'Ice Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '120',
		namn: 'Staryu',
		type: ['Water'],
		moves: ['Water Gun', 'Quick Attack', 'Tackle', 'Bubble Beam', 'Power Gem', 'Swift'],
		attack: ['Water Gun', 'Power Gem'],
		defend: ['Water Gun', 'Bubble Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '121',
		namn: 'Starmie',
		type: ['Water', 'Psychic'],
		moves: ['Water Gun', 'Quick Attack', 'Tackle', 'Hidden Power', 'Hydro Pump', 'Psychic', 'Power Gem', 'Psybeam'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Hidden Power', 'Hydro Pump'],
		svg: '',
		lastevolve: true
	},{
		nummer: '122',
		namn: 'Mr. Mime',
		type: ['Psychic', 'Fairy'],
		moves: ['Confusion', 'Zen Headbutt', 'Psychic', 'Shadow Ball', 'Psybeam'],
		attack: ['Confusion', 'Shadow Ball'],
		defend: ['Confusion', 'Shadow Ball'],
		svg: '',
		lastevolve: true
	},{
		nummer: '123',
		namn: 'Scyther',
		type: ['Bug', 'Flying'],
		moves: ['Air Slash', 'Steel Wing', 'Fury Cutter', 'X-Scissor', 'Bug Buzz', 'Aerial Ace', 'Night Slash'],
		attack: ['Air Slash', 'X-Scissor'],
		defend: ['Air Slash', 'Aerial Ace'],
		svg: '',
		lastevolve: false
	},{
		nummer: '124',
		namn: 'Jynx',
		type: ['Ice', 'Psychic'],
		moves: ['Confusion', 'Frost Breath', 'Pound', 'Avalanche', 'Ice Punch', 'Psyshock', 'Draining Kiss'],
		attack: ['Confusion', 'Avalanche'],
		defend: ['Confusion', 'Avalanche'],
		svg: '',
		lastevolve: true
	},{
		nummer: '125',
		namn: 'Electabuzz',
		type: ['Electric'],
		moves: ['Low Kick', 'Thunder Shock', 'Thunder', 'Thunderbolt', 'Thunder Punch'],
		attack: ['Thunder Shock', 'Thunderbolt'],
		defend: ['Thunder Shock', 'Thunderbolt'],
		svg: '',
		lastevolve: true
	},{
		nummer: '126',
		namn: 'Magmar',
		type: ['Fire'],
		moves: ['Ember', 'Karate Chop', 'Fire Blast', 'Flamethrower', 'Fire Punch'],
		attack: ['Ember', 'Fire Blast'],
		defend: ['Ember', 'Flamethrower'],
		svg: '',
		lastevolve: true
	},{
		nummer: '127',
		namn: 'Pinsir',
		type: ['Bug'],
		moves: ['Bug Bite', 'Rock Smash', 'Fury Cutter', 'Close Combat', 'X-Scissor', 'Submission', 'Vice Grip'],
		attack: ['Bug Bite', 'Close Combat'],
		defend: ['Rock Smash', 'X-Scissor'],
		svg: '',
		lastevolve: true
	},{
		nummer: '128',
		namn: 'Tauros',
		type: ['Normal'],
		moves: ['Tackle', 'Zen Headbutt', 'Earthquake', 'Iron Head', 'Horn Attack'],
		attack: ['Tackle', 'Earthquake'],
		defend: ['Zen Headbutt', 'Horn Attack'],
		svg: '',
		lastevolve: true
	},{
		nummer: '129',
		namn: 'Magikarp',
		type: ['Water'],
		moves: ['Splash', 'Struggle'],
		attack: ['Splash', 'Struggle'],
		defend: ['Splash', 'Struggle'],
		svg: '',
		lastevolve: false
	},{
		nummer: '130',
		namn: 'Gyarados',
		type: ['Water', 'Flying'],
		moves: ['Waterfall', 'Dragon Tail', 'Bite', 'Dragon Breath', 'Hydro Pump', 'Outrage', 'Dragon Pulse', 'Crunch', 'Twister'],
		attack: ['Waterfall', 'Hydro Pump'],
		defend: ['Waterfall', 'Outrage'],
		svg: '',
		lastevolve: true
	},{
		nummer: '131',
		namn: 'Lapras',
		type: ['Water', 'Ice'],
		moves: ['Frost Breath', 'Ice Shard', 'Water Gun', 'Blizzard', 'Hydro Pump', 'Ice Beam', 'Dragon Pulse', 'Surf'],
		attack: ['Water Gun', 'Blizzard'],
		defend: ['Frost Breath', 'Ice Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '132',
		namn: 'Ditto',
		type: ['Normal'],
		moves: ['Pound', 'Transform', 'Struggle'],
		attack: ['Transform', 'Struggle'],
		defend: ['Transform', 'Struggle'],
		svg: '',
		lastevolve: true
	},{
		nummer: '133',
		namn: 'Eevee',
		type: ['Normal'],
		moves: ['Quick Attack', 'Tackle', 'Body Slam', 'Swift', 'Dig'],
		attack: ['Quick Attack', 'Swift'],
		defend: ['Quick Attack', 'Dig'],
		svg: '',
		lastevolve: false
	},{
		nummer: '134',
		namn: 'Vaporeon',
		type: ['Water'],
		moves: ['Water Gun', 'Hydro Pump', 'Aqua Tail', 'Water Pulse'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Water Gun', 'Aqua Tail'],
		svg: '',
		lastevolve: true
	},{
		nummer: '135',
		namn: 'Jolteon',
		type: ['Electric'],
		moves: ['Volt Switch', 'Thunder Shock', 'Thunder', 'Thunderbolt', 'Discharge'],
		attack: ['Thunder Shock', 'Thunderbolt'],
		defend: ['Volt Switch', 'Thunderbolt'],
		svg: '',
		lastevolve: true
	},{
		nummer: '136',
		namn: 'Flareon',
		type: ['Fire'],
		moves: ['Fire Spin', 'Ember', 'Overheat', 'Fire Blast', 'Flamethrower', 'Heat Wave'],
		attack: ['Fire Spin', 'Overheat'],
		defend: ['Fire Spin', 'Overheat'],
		svg: '',
		lastevolve: true
	},{
		nummer: '137',
		namn: 'Porygon',
		type: ['Normal'],
		moves: ['Tackle', 'Quick Attack', 'Hidden Power', 'Zen Headbutt', 'Charge Beam', 'Hyper Beam', 'Zap Cannon', 'Solar Beam', 'Discharge', 'Signal Beam', 'Psybeam'],
		attack: ['Hidden Power', 'Hyper Beam'],
		defend: ['Hidden Power', 'Hyper Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '138',
		namn: 'Omanyte',
		type: ['Rock', 'Water'],
		moves: ['Water Gun', 'Mud Shot', 'Brine', 'Rock Blast', 'Bubble Beam', 'Rock Tomb', 'Ancient Power'],
		attack: ['Water Gun', 'Ancient Power'],
		defend: ['Mud Shot', 'Ancient Power'],
		svg: '',
		lastevolve: false
	},{
		nummer: '139',
		namn: 'Omastar',
		type: ['Rock', 'Water'],
		moves: ['Rock Throw', 'Water Gun', 'Mud Shot', 'Hydro Pump', 'Rock Slide', 'Rock Blast', 'Ancient Power'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Mud Shot', 'Ancient Power'],
		svg: '',
		lastevolve: true
	},{
		nummer: '140',
		namn: 'Kabuto',
		type: ['Rock', 'Water'],
		moves: ['Scratch', 'Mud Shot', 'Rock Tomb', 'Ancient Power', 'Aqua Jet'],
		attack: ['Scratch', 'Ancient Power'],
		defend: ['Mud Shot', 'Ancient Power'],
		svg: '',
		lastevolve: false
	},{
		nummer: '141',
		namn: 'Kabutops',
		type: ['Rock', 'Water'],
		moves: ['Rock Smash', 'Mud Shot', 'Fury Cutter', 'Stone Edge', 'Water Pulse', 'Ancient Power'],
		attack: ['Rock Smash', 'Stone Edge'],
		defend: ['Rock Smash', 'Ancient Power'],
		svg: '',
		lastevolve: true
	},{
		nummer: '142',
		namn: 'Aerodactyl',
		type: ['Rock', 'Flying'],
		moves: ['Steel Wing', 'Bite', 'Hyper Beam', 'Iron Head', 'Ancient Power'],
		attack: ['Steel Wing', 'Hyper Beam'],
		defend: ['Steel Wing', 'Ancient Power'],
		svg: '',
		lastevolve: true
	},{
		nummer: '143',
		namn: 'Snorlax',
		type: ['Normal'],
		moves: ['Zen Headbutt', 'Lick', 'Hyper Beam', 'Earthquake', 'Heavy Slam', 'Body Slam'],
		attack: ['Lick', 'Hyper Beam'],
		defend: ['Zen Headbutt', 'Hyper Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '144',
		namn: 'Articuno',
		type: ['Ice', 'Flying'],
		moves: ['Frost Breath', 'Blizzard', 'Ice Beam', 'Icy Wind'],
		attack: ['Frost Breath', 'Blizzard'],
		defend: ['Frost Breath', 'Ice Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '145',
		namn: 'Zapdos',
		type: ['Electric', 'Flying'],
		moves: ['Thunder Shock', 'Charge Beam', 'Thunder', 'Zap Cannon', 'Thunderbolt', 'Discharge'],
		attack: ['Charge Beam', 'Zap Cannon'],
		defend: ['Charge Beam', 'Zap Cannon'],
		svg: '',
		lastevolve: true
	},{
		nummer: '146',
		namn: 'Moltres',
		type: ['Fire', 'Flying'],
		moves: ['Fire Spin', 'Ember', 'Overheat', 'Fire Blast', 'Flamethrower', 'Heat Wave'],
		attack: ['Fire Spin', 'Overheat'],
		defend: ['Fire Spin', 'Overheat'],
		svg: '',
		lastevolve: true
	},{
		nummer: '147',
		namn: 'Dratini',
		type: ['Dragon'],
		moves: ['Dragon Breath', 'Iron Tail', 'Aqua Tail', 'Wrap', 'Twister'],
		attack: ['Dragon Breath', 'Aqua Tail'],
		defend: ['Iron Tail', 'Wrap'],
		svg: '',
		lastevolve: false
	},{
		nummer: '148',
		namn: 'Dragonair',
		type: ['Dragon'],
		moves: ['Dragon Breath', 'Iron Tail', 'Dragon Pulse', 'Aqua Tail', 'Wrap'],
		attack: ['Dragon Breath', 'Dragon Pulse'],
		defend: ['Iron Tail', 'Dragon Pulse'],
		svg: '',
		lastevolve: false
	},{
		nummer: '149',
		namn: 'Dragonite',
		type: ['Dragon', 'Flying'],
		moves: ['Dragon Tail', 'Dragon Breath', 'Steel Wing', 'Hurricane', 'Hyper Beam', 'Dragon Claw', 'Outrage', 'Dragon Pulse', 'Draco Meteor (event)'],
		attack: ['Dragon Tail', 'Outrage'],
		defend: ['Dragon Tail', 'Outrage'],
		svg: '',
		lastevolve: true
	},{
		nummer: '150',
		namn: 'Mewtwo',
		type: ['Psychic'],
		moves: ['Confusion', 'Psycho Cut', 'Psychic', 'Focus Blast', 'Hyper Beam', 'Shadow Ball'],
		attack: ['Confusion', 'Shadow Ball'],
		defend: ['Confusion', 'Shadow Ball'],
		svg: '',
		lastevolve: true
	},{
		nummer: '151',
		namn: 'Mew',
		type: ['Psychic'],
		moves: ['Pound', 'Psychic', 'Blizzard', 'Thunder', 'Hurricane', 'Focus Blast', 'Hyper Beam', 'Solar Beam', 'Earthquake', 'Moonblast', 'Fire Blast', 'Dragon Pulse'],
		attack: ['Pound', 'Solar Beam'],
		defend: ['Pound', 'Solar Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '152',
		namn: 'Chikorita',
		type: ['Grass'],
		moves: ['Razor Leaf', 'Vine Whip', 'Tackle', 'Grass Knot', 'Energy Ball', 'Body Slam'],
		attack: ['Vine Whip', 'Grass Knot'],
		defend: ['Vine Whip', 'Grass Knot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '153',
		namn: 'Bayleef',
		type: ['Grass'],
		moves: ['Razor Leaf', 'Tackle', 'Grass Knot', 'Energy Ball', 'Ancient Power'],
		attack: ['Razor Leaf', 'Grass Knot'],
		defend: ['Razor Leaf', 'Grass Knot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '154',
		namn: 'Meganium',
		type: ['Grass'],
		moves: ['Razor Leaf', 'Vine Whip', 'Petal Blizzard', 'Solar Beam', 'Earthquake'],
		attack: ['Vine Whip', 'Solar Beam'],
		defend: ['Razor Leaf', 'Solar Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '155',
		namn: 'Cyndaquil',
		type: ['Fire'],
		moves: ['Ember', 'Tackle', 'Flamethrower', 'Flame Charge', 'Swift'],
		attack: ['Ember', 'Flamethrower	'],
		defend: ['Ember', 'Flame Charge'],
		svg: '',
		lastevolve: false
	},{
		nummer: '156',
		namn: 'Quilava',
		type: ['Fire'],
		moves: ['Ember', 'Tackle', 'Flamethrower', 'Flame Charge', 'Dig'],
		attack: ['Ember', 'Flamethrower'],
		defend: ['Ember', 'Flame Charge'],
		svg: '',
		lastevolve: false
	},{
		nummer: '157',
		namn: 'Typhlosion',
		type: ['Fire'],
		moves: ['Shadow Claw', 'Ember', 'Overheat', 'Fire Blast', 'Solar Beam'],
		attack: ['Ember', 'Overheat'],
		defend: ['Ember', 'Overheat'],
		svg: '',
		lastevolve: true
	},{
		nummer: '158',
		namn: 'Totodile',
		type: ['Water'],
		moves: ['Scratch', 'Water Gun', 'Water Pulse', 'Crunch', 'Aqua Jet'],
		attack: ['Water Gun', 'Water Pulse'],
		defend: ['Water Gun', 'Crunch'],
		svg: '',
		lastevolve: false
	},{
		nummer: '159',
		namn: 'Croconaw',
		type: ['Water'],
		moves: ['Scratch', 'Water Gun', 'Ice Punch', 'Water Pulse', 'Crunch'],
		attack: ['Water Gun', 'Water Pulse'],
		defend: ['Water Gun', 'Crunch'],
		svg: '',
		lastevolve: false
	},{
		nummer: '160',
		namn: 'Feraligatr',
		type: ['Water'],
		moves: ['Waterfall', 'Bite', 'Water Gun', 'Hydro Pump', 'Ice Beam', 'Crunch'],
		attack: ['Waterfall', 'Hydro Pump'],
		defend: ['Waterfall', 'Hydro Pump'],
		svg: '',
		lastevolve: true
	},{
		nummer: '161',
		namn: 'Sentret',
		type: ['Normal'],
		moves: ['Scratch', 'Quick Attack', 'Grass Knot', 'Brick Break', 'Dig'],
		attack: ['Quick Attack', 'Grass Knot'],
		defend: ['Quick Attack', 'Dig'],
		svg: '',
		lastevolve: false
	},{
		nummer: '162',
		namn: 'Furret',
		type: ['Normal'],
		moves: ['Quick Attack', 'Sucker Punch', 'Hyper Beam', 'Brick Break', 'Dig'],
		attack: ['Quick Attack', 'Hyper Beam'],
		defend: ['Quick Attack', 'Hyper Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '163',
		namn: 'Hoothoot',
		type: ['Normal', 'Flying'],
		moves: ['Peck', 'Feint Attack', 'Sky Attack', 'Aerial Ace', 'Night Shade'],
		attack: ['Peck', 'Sky Attack'],
		defend: ['Peck', 'Aerial Ace'],
		svg: '',
		lastevolve: false
	},{
		nummer: '164',
		namn: 'Noctowl',
		type: ['Normal', 'Flying'],
		moves: ['Peck', 'Wing Attack', 'Extrasensory', 'Sky Attack', 'Psychic', 'Night Shade'],
		attack: ['Wing Attack', 'Sky Attack'],
		defend: ['Extrasensory', 'Sky Attack'],
		svg: '',
		lastevolve: true
	},{
		nummer: '165',
		namn: 'Ledyba',
		type: ['Bug', 'Flying'],
		moves: ['Bug Bite', 'Tackle', 'Aerial Ace', 'Silver Wind', 'Swift'],
		attack: ['Bug Bite', 'Aerial Ace'],
		defend: ['Bug Bite', 'Silver Wind'],
		svg: '',
		lastevolve: false
	},{
		nummer: '166',
		namn: 'Ledian',
		type: ['Bug', 'Flying'],
		moves: ['Bug Bite', 'Struggle Bug', 'Bug Buzz', 'Aerial Ace', 'Silver Wind'],
		attack: ['Bug Bite', 'Bug Buzz'],
		defend: ['Struggle Bug', 'Bug Buzz'],
		svg: '',
		lastevolve: true
	},{
		nummer: '167',
		namn: 'Spinarak',
		type: ['Bug', 'Poison'],
		moves: ['Bug Bite', 'Poison Sting', 'Cross Poison', 'Signal Beam', 'Night Slash'],
		attack: ['Bug Bite', 'Signal Beam'],
		defend: ['Bug Bite', 'Signal Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '168',
		namn: 'Ariados',
		type: ['Bug', 'Poison'],
		moves: ['Bug Bite', 'Infestation', 'Poison Sting', 'Megahorn', 'Cross Poison', 'Shadow Sneak'],
		attack: ['Infestation', 'Megahorn'],
		defend: ['Infestation', 'Cross Poison'],
		svg: '',
		lastevolve: true
	},{
		nummer: '169',
		namn: 'Crobat',
		type: ['Poison', 'Flying'],
		moves: ['Air Slash', 'Bite', 'Wing Attack', 'Sludge Bomb', 'Shadow Ball', 'Air Cutter'],
		attack: ['Air Slash', 'Sludge Bomb'],
		defend: ['Air Slash', 'Shadow Ball'],
		svg: '',
		lastevolve: true
	},{
		nummer: '170',
		namn: 'Chinchou',
		type: ['Water', 'Electric'],
		moves: ['Bubble', 'Spark', 'Thunderbolt', 'Bubble Beam', 'Water Pulse'],
		attack: ['Bubble', 'Thunderbolt'],
		defend: ['Bubble', 'Thunderbolt'],
		svg: '',
		lastevolve: false
	},{
		nummer: '171',
		namn: 'Lanturn',
		type: ['Water', 'Electric'],
		moves: ['Water Gun', 'Spark', 'Charge Beam', 'Thunder', 'Hydro Pump', 'Thunderbolt'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Charge Beam', 'Thunderbolt'],
		svg: '',
		lastevolve: true
	},{
		nummer: '172',
		namn: 'Pichu',
		type: ['Electric'],
		moves: ['Quick Attack', 'Thunder Shock', 'Thunderbolt', 'Thunder Punch', 'Disarming Voice'],
		attack: ['Thunder Shock', 'Thunderbolt'],
		defend: ['Thunder Shock', 'Thunderbolt'],
		svg: '',
		lastevolve: false
	},{
		nummer: '173',
		namn: 'Cleffa',
		type: ['Fairy'],
		moves: ['Pound', 'Zen Headbutt', 'Psychic', 'Grass Knot', 'Body Slam', 'Signal Beam', 'Psyshock'],
		attack: ['Pound', 'Grass Knot'],
		defend: ['Zen Headbutt', 'Grass Knot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '174',
		namn: 'Igglybuff',
		type: ['Normal', 'Fairy'],
		moves: ['Pound', 'Feint Attack', 'Psychic', 'Wild Charge', 'Shadow Ball', 'Body Slam'],
		attack: ['Pound', 'Shadow Ball'],
		defend: ['Feint Attack', 'Shadow Ball'],
		svg: '',
		lastevolve: false
	},{
		nummer: '175',
		namn: 'Togepi',
		type: ['Fairy'],
		moves: ['Zen Headbutt', 'Peck', 'Hidden Power', 'Dazzling Gleam', 'Psyshock', 'Ancient Power'],
		attack: ['Peck', 'Dazzling Gleam'],
		defend: ['Hidden Power', 'Dazzling Gleam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '176',
		namn: 'Togetic',
		type: ['Fairy', 'Flying'],
		moves: ['Steel Wing', 'Zen Headbutt', 'Extrasensory', 'Hidden Power', 'Dazzling Gleam', 'Aerial Ace', 'Ancient Power'],
		attack: ['Extrasensory', 'Dazzling Gleam'],
		defend: ['Hidden Power', 'Dazzling Gleam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '177',
		namn: 'Natu',
		type: ['Psychic', 'Flying'],
		moves: ['Peck', 'Quick Attack', 'Drill Peck', 'Psyshock', 'Night Shade'],
		attack: ['Peck', 'Drill Peck'],
		defend: ['Peck', 'Psyshock'],
		svg: '',
		lastevolve: false
	},{
		nummer: '178',
		namn: 'Xatu',
		type: ['Psychic', 'Flying'],
		moves: ['Air Slash', 'Feint Attack', 'Future Sight', 'Aerial Ace', 'Ominous Wind'],
		attack: ['Air Slash', 'Future Sight'],
		defend: ['Air Slash', 'Aerial Ace'],
		svg: '',
		lastevolve: true
	},{
		nummer: '179',
		namn: 'Mareep',
		type: ['Electric'],
		moves: ['Tackle', 'Thunder Shock', 'Thunderbolt', 'Discharge', 'Body Slam'],
		attack: ['Thunder Shock', 'Thunderbolt'],
		defend: ['Thunder Shock', 'Thunderbolt'],
		svg: '',
		lastevolve: false
	},{
		nummer: '180',
		namn: 'Flaaffy',
		type: ['Electric'],
		moves: ['Tackle', 'Charge Beam', 'Thunderbolt', 'Discharge', 'Power Gem'],
		attack: ['Charge Beam', 'Thunderbolt'],
		defend: ['Charge Beam', 'Discharge'],
		svg: '',
		lastevolve: false
	},{
		nummer: '181',
		namn: 'Ampharos',
		type: ['Electric'],
		moves: ['Volt Switch', 'Charge Beam', 'Thunder', 'Zap Cannon', 'Focus Blast', 'Dragon Pulse (event)'],
		attack: ['Charge Beam', 'Zap Cannon'],
		defend: ['Volt Switch', 'Zap Cannon'],
		svg: '',
		lastevolve: true
	},{
		nummer: '182',
		namn: 'Bellossom',
		type: ['Grass'],
		moves: ['Razor Leaf', 'Acid', 'Petal Blizzard', 'Leaf Blade', 'Dazzling Gleam'],
		attack: ['Razor Leaf', 'Leaf Blade'],
		defend: ['Razor Leaf', 'Leaf Blade'],
		svg: '',
		lastevolve: true
	},{
		nummer: '183',
		namn: 'Marill',
		type: ['Water', 'Fairy'],
		moves: ['Bubble', 'Tackle', 'Aqua Tail', 'Bubble Beam', 'Body Slam'],
		attack: ['Bubble', 'Aqua Tail'],
		defend: ['Bubble', 'Aqua Tail'],
		svg: '',
		lastevolve: false
	},{
		nummer: '184',
		namn: 'Azumarill',
		type: ['Water', 'Fairy'],
		moves: ['Bubble', 'Rock Smash', 'Hydro Pump', 'Play Rough', 'Ice Beam'],
		attack: ['Bubble', 'Play Rough'],
		defend: ['Bubble', 'Play Rough'],
		svg: '',
		lastevolve: true
	},{
		nummer: '185',
		namn: 'Sudowoodo',
		type: ['Rock'],
		moves: ['Rock Throw', 'Counter', 'Stone Edge', 'Rock Slide', 'Earthquake'],
		attack: ['Rock Throw', 'Stone Edge'],
		defend: ['Rock Throw', 'Rock Slide'],
		svg: '',
		lastevolve: true
	},{
		nummer: '186',
		namn: 'Politoed',
		type: ['Water'],
		moves: ['Bubble', 'Mud Shot', 'Hydro Pump', 'Blizzard', 'Earthquake', 'Surf'],
		attack: ['Bubble', 'Surf'],
		defend: ['Bubble', 'Hydro Pump'],
		svg: '',
		lastevolve: true
	},{
		nummer: '187',
		namn: 'Hoppip',
		type: ['Grass', 'Flying'],
		moves: ['Tackle', 'Bullet Seed', 'Grass Knot', 'Seed Bomb', 'Dazzling Gleam'],
		attack: ['Bullet Seed', 'Grass Knot'],
		defend: ['Bullet Seed', 'Grass Knot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '188',
		namn: 'Skiploom',
		type: ['Grass', 'Flying'],
		moves: ['Tackle', 'Bullet Seed', 'Grass Knot', 'Dazzling Gleam', 'Energy Ball'],
		attack: ['Bullet Seed', 'Grass Knot'],
		defend: ['Bullet Seed', 'Grass Knot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '189',
		namn: 'Jumpluff',
		type: ['Grass', 'Flying'],
		moves: ['Infestation', 'Bullet Seed', 'Solar Beam', 'Dazzling Gleam', 'Energy Ball'],
		attack: ['Infestation', 'Solar Beam'],
		defend: ['Infestation', 'Solar Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '190',
		namn: 'Aipom',
		type: ['Normal'],
		moves: ['Scratch', 'Astonish', 'Swift', 'Aerial Ace', 'Low Sweep'],
		attack: ['Scratch', 'Swift'],
		defend: ['Astonish', 'Swift'],
		svg: '',
		lastevolve: true
	},{
		nummer: '191',
		namn: 'Sunkern',
		type: ['Grass'],
		moves: ['Razor Leaf', 'Cut', 'Grass Knot', 'Seed Bomb', 'Energy Ball'],
		attack: ['Razor Leaf', 'Grass Knot'],
		defend: ['Razor Leaf', 'Grass Knot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '192',
		namn: 'Sunflora',
		type: ['Grass'],
		moves: ['Razor Leaf', 'Bullet Seed', 'Petal Blizzard', 'Solar Beam', 'Sludge Bomb'],
		attack: ['Razor Leaf', 'Solar Beam'],
		defend: ['Bullet Seed', 'Solar Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '193',
		namn: 'Yanma',
		type: ['Bug', 'Flying'],
		moves: ['Wing Attack', 'Quick Attack', 'Aerial Ace', 'Silver Wind', 'Ancient Power'],
		attack: ['Wing Attack', 'Aerial Ace'],
		defend: ['Quick Attack', 'Silver Wind'],
		svg: '',
		lastevolve: true
	},{
		nummer: '194',
		namn: 'Wooper',
		type: ['Water', 'Ground'],
		moves: ['Water Gun', 'Mud Shot', 'Mud Bomb', 'Body Slam', 'Dig'],
		attack: ['Water Gun', 'Dig'],
		defend: ['Mud Shot', 'Dig'],
		svg: '',
		lastevolve: false
	},{
		nummer: '195',
		namn: 'Quagsire',
		type: ['Water', 'Ground'],
		moves: ['Water Gun', 'Mud Shot', 'Stone Edge', 'Earthquake', 'Sludge Bomb'],
		attack: ['Water Gun', 'Earthquake'],
		defend: ['Mud Shot', 'Sludge Bomb'],
		svg: '',
		lastevolve: true
	},{
		nummer: '196',
		namn: 'Espeon',
		type: ['Psychic'],
		moves: ['Confusion', 'Zen Headbutt', 'Future Sight', 'Psychic', 'Psybeam'],
		attack: ['Confusion', 'Future Sight'],
		defend: ['Confusion', 'Future Sight'],
		svg: '',
		lastevolve: true
	},{
		nummer: '197',
		namn: 'Umbreon',
		type: ['Dark'],
		moves: ['Bite', 'Feint Attack', 'Snarl', 'Foul Play', 'Dark Pulse'],
		attack: ['Snarl', 'Foul Play'],
		defend: ['Snarl', 'Foul Play'],
		svg: '',
		lastevolve: true
	},{
		nummer: '198',
		namn: 'Murkrow',
		type: ['Dark', 'Flying'],
		moves: ['Feint Attack', 'Peck', 'Foul Play', 'Dark Pulse', 'Drill Peck'],
		attack: ['Feint Attack', 'Foul Play'],
		defend: ['Peck', 'Drill Peck'],
		svg: '',
		lastevolve: true
	},{
		nummer: '199',
		namn: 'Slowking',
		type: ['Water', 'Psychic'],
		moves: ['Confusion', 'Water Gun', 'Psychic', 'Blizzard', 'Fire Blast'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Fire Blast'],
		svg: '',
		lastevolve: true
	},{
		nummer: '200',
		namn: 'Misdreavus',
		type: ['Ghost'],
		moves: ['Hex', 'Astonish', 'Dark Pulse', 'Ominous Wind', 'Shadow Sneak'],
		attack: ['Hex', 'Dark Pulse'],
		defend: ['Hex', 'Ominous Wind'],
		svg: '',
		lastevolve: true
	},{
		nummer: '201',
		namn: 'Unown',
		type: ['Psychic'],
		moves: ['Hidden Power', 'Struggle'],
		attack: ['Hidden Power', 'Struggle'],
		defend: ['Hidden Power', 'Struggle'],
		svg: '',
		lastevolve: true
	},{
		nummer: '202',
		namn: 'Wobbuffet',
		type: ['Psychic'],
		moves: ['Counter', 'Splash', 'Mirror Coat'],
		attack: ['Counter', 'Mirror Coat'],
		defend: ['Counter', 'Mirror Coat'],
		svg: '',
		lastevolve: true
	},{
		nummer: '203',
		namn: 'Girafarig',
		type: ['Normal', 'Psychic'],
		moves: ['Confusion', 'Tackle', 'Psychic', 'Thunderbolt', 'Mirror Coat'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Thunderbolt'],
		svg: '',
		lastevolve: true
	},{
		nummer: '204',
		namn: 'Pineco',
		type: ['Bug'],
		moves: ['Bug Bite', 'Tackle', 'Gyro Ball', 'Rock Tomb', 'Sand Tomb'],
		attack: ['Bug Bite', 'Gyro Ball'],
		defend: ['Bug Bite', 'Gyro Ball'],
		svg: '',
		lastevolve: false
	},{
		nummer: '205',
		namn: 'Forretress',
		type: ['Bug', 'Steel'],
		moves: ['Bug Bite', 'Struggle Bug', 'Heavy Slam', 'Earthquake', 'Rock Tomb'],
		attack: ['Bug Bite', 'Heavy Slam'],
		defend: ['Struggle Bug', 'Heavy Slam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '206',
		namn: 'Dunsparce',
		type: ['Normal'],
		moves: ['Bite', 'Astonish', 'Rock Slide', 'Drill Run', 'Dig'],
		attack: ['Bite', 'Rock Slide'],
		defend: ['Astonish', 'Dig'],
		svg: '',
		lastevolve: true
	},{
		nummer: '207',
		namn: 'Gligar',
		type: ['Ground', 'Flying'],
		moves: ['Wing Attack', 'Fury Cutter', 'Aerial Ace', 'Dig', 'Night Slash'],
		attack: ['Wing Attack', 'Dig'],
		defend: ['Wing Attack', 'Dig'],
		svg: '',
		lastevolve: true
	},{
		nummer: '208',
		namn: 'Steelix',
		type: ['Steel', 'Ground'],
		moves: ['Iron Tail', 'Dragon Tail', 'Earthquake', 'Heavy Slam', 'Crunch'],
		attack: ['Iron Tail', 'Heavy Slam'],
		defend: ['Iron Tail', 'Earthquake'],
		svg: '',
		lastevolve: true
	},{
		nummer: '209',
		namn: 'Snubbull',
		type: ['Fairy'],
		moves: ['Bite', 'Tackle', 'Dazzling Gleam', 'Brick Break', 'Crunch'],
		attack: ['Bite', 'Dazzling Gleam'],
		defend: ['Tackle', 'Dazzling Gleam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '210',
		namn: 'Granbull',
		type: ['Fairy'],
		moves: ['Bite', 'Snarl', 'Close Combat', 'Play Rough', 'Crunch'],
		attack: ['Snarl', 'Play Rough'],
		defend: ['Snarl', 'Play Rough'],
		svg: '',
		lastevolve: true
	},{
		nummer: '211',
		namn: 'Qwilfish',
		type: ['Water', 'Poison'],
		moves: ['Water Gun', 'Poison Sting', 'Sludge Wave', 'Aqua Tail', 'Ice Beam'],
		attack: ['Water Gun', 'Sludge Wave'],
		defend: ['Poison Sting', 'Ice Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '212',
		namn: 'Scizor',
		type: ['Bug', 'Steel'],
		moves: ['Bullet Punch', 'Fury Cutter', 'Iron Head', 'X-Scissor', 'Night Slash'],
		attack: ['Bullet Punch', 'Iron Head'],
		defend: ['Bullet Punch', 'Iron Head'],
		svg: '',
		lastevolve: true
	},{
		nummer: '213',
		namn: 'Shuckle',
		type: ['Bug', 'Rock'],
		moves: ['Rock Throw', 'Struggle Bug', 'Stone Edge', 'Rock Blast', 'Gyro Ball'],
		attack: ['Rock Throw', 'Stone Edge'],
		defend: ['Struggle Bug', 'Rock Blast'],
		svg: '',
		lastevolve: true
	},{
		nummer: '214',
		namn: 'Heracross',
		type: ['Bug', 'Fighting'],
		moves: ['Counter', 'Struggle Bug', 'Close Combat', 'Megahorn', 'Earthquake'],
		attack: ['Counter', 'Close Combat'],
		defend: ['Struggle Bug', 'Close Combat'],
		svg: '',
		lastevolve: true
	},{
		nummer: '215',
		namn: 'Sneasel',
		type: ['Dark', 'Ice'],
		moves: ['Feint Attack', 'Ice Shard', 'Foul Play', 'Avalanche', 'Ice Punch'],
		attack: ['Feint Attack', 'Avalanche'],
		defend: ['Ice Shard', 'Avalanche'],
		svg: '',
		lastevolve: true
	},{
		nummer: '216',
		namn: 'Teddiursa',
		type: ['Normal'],
		moves: ['Scratch', 'Lick', 'Cross Chop', 'Play Rough', 'Crunch'],
		attack: ['Scratch', 'Play Rough'],
		defend: ['Lick', 'Play Rough'],
		svg: '',
		lastevolve: false
	},{
		nummer: '217',
		namn: 'Ursaring',
		type: ['Normal'],
		moves: ['Counter', 'Metal Claw', 'Hyper Beam', 'Close Combat', 'Play Rough'],
		attack: ['Counter', 'Hyper Beam'],
		defend: ['Counter', 'Hyper Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '218',
		namn: 'Slugma',
		type: ['Fire'],
		moves: ['Rock Throw', 'Ember', 'Flame Burst', 'Rock Slide', 'Flame Charge'],
		attack: ['Ember', 'Flame Burst'],
		defend: ['Ember', 'Flame Charge	'],
		svg: '',
		lastevolve: false
	},{
		nummer: '219',
		namn: 'Magcargo',
		type: ['Fire', 'Rock'],
		moves: ['Rock Throw', 'Ember', 'Stone Edge', 'Overheat', 'Heat Wave'],
		attack: ['Rock Throw', 'Overheat'],
		defend: ['Rock Throw', 'Overheat'],
		svg: '',
		lastevolve: true
	},{
		nummer: '220',
		namn: 'Swinub',
		type: ['Ice', 'Ground'],
		moves: ['Tackle', 'Powder Snow', 'Rock Slide', 'Body Slam', 'Icy Wind'],
		attack: ['Powder Snow', 'Rock Slide'],
		defend: ['Powder Snow', 'Icy Wind'],
		svg: '',
		lastevolve: false
	},{
		nummer: '221',
		namn: 'Piloswine',
		type: ['Ice', 'Ground'],
		moves: ['Ice Shard', 'Powder Snow', 'Stone Edge', 'Avalanche', 'Bulldoze'],
		attack: ['Ice Shard', 'Avalanche'],
		defend: ['Powder Snow', 'Avalanche'],
		svg: '',
		lastevolve: true
	},{
		nummer: '222',
		namn: 'Corsola',
		type: ['Water', 'Rock'],
		moves: ['Bubble', 'Tackle', 'Power Gem', 'Rock Blast', 'Bubble Beam'],
		attack: ['Bubble', 'Power Gem'],
		defend: ['Bubble', 'Power Gem'],
		svg: '',
		lastevolve: true
	},{
		nummer: '223',
		namn: 'Remoraid',
		type: ['Water'],
		moves: ['Water Gun', 'Mud Shot', 'Water Pulse', 'Rock Blast', 'Aurora Beam'],
		attack: ['Water Gun', 'Water Pulse'],
		defend: ['Mud Shot', 'Water Pulse'],
		svg: '',
		lastevolve: false
	},{
		nummer: '224',
		namn: 'Octillery',
		type: ['Water'],
		moves: ['Water Gun', 'Mud Shot', 'Gunk Shot', 'Water Pulse', 'Aurora Beam'],
		attack: ['Water Gun', 'Gunk Shot'],
		defend: ['Mud Shot', 'Water Pulse'],
		svg: '',
		lastevolve: true
	},{
		nummer: '225',
		namn: 'Delibird',
		type: ['Ice', 'Flying'],
		moves: ['Ice Shard', 'Quick Attack', 'Ice Punch', 'Aerial Ace', 'Icy Wind'],
		attack: ['Ice Shard', 'Ice Punch'],
		defend: ['Ice Shard', 'Aerial Ace'],
		svg: '',
		lastevolve: true
	},{
		nummer: '226',
		namn: 'Mantine',
		type: ['Water', 'Flying'],
		moves: ['Bubble', 'Wing Attack', 'Aerial Ace', 'Ice Beam', 'Water Pulse'],
		attack: ['Wing Attack', 'Ice Beam'],
		defend: ['Bubble', 'Ice Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '227',
		namn: 'Skarmory',
		type: ['Steel', 'Flying'],
		moves: ['Steel Wing', 'Air Slash', 'Brave Bird', 'Flash Cannon', 'Sky Attack'],
		attack: ['Steel Wing', 'Sky Attack'],
		defend: ['Air Slash', 'Sky Attack'],
		svg: '',
		lastevolve: true
	},{
		nummer: '228',
		namn: 'Houndour',
		type: ['Dark', 'Fire'],
		moves: ['Feint Attack', 'Ember', 'Flamethrower', 'Dark Pulse', 'Crunch'],
		attack: ['Feint Attack', 'Flamethrower'],
		defend: ['Feint Attack', 'Crunch'],
		svg: '',
		lastevolve: false
	},{
		nummer: '229',
		namn: 'Houndoom',
		type: ['Dark', 'Fire'],
		moves: ['Fire Fang', 'Snarl', 'Foul Play', 'Fire Blast', 'Crunch'],
		attack: ['Fire Fang', 'Fire Blast'],
		defend: ['Snarl', 'Fire Blast'],
		svg: '',
		lastevolve: true
	},{
		nummer: '230',
		namn: 'Kingdra',
		type: ['Water', 'Dragon'],
		moves: ['Waterfall', 'Dragon Breath', 'Water Gun', 'Hydro Pump', 'Blizzard', 'Outrage'],
		attack: ['Waterfall', 'Outrage'],
		defend: ['Waterfall', 'Outrage'],
		svg: '',
		lastevolve: true
	},{
		nummer: '231',
		namn: 'Phanpy',
		type: ['Ground'],
		moves: ['Rock Smash', 'Tackle', 'Rock Slide', 'Bulldoze', 'Body Slam'],
		attack: ['Tackle', 'Bulldoze'],
		defend: ['Rock Smash', 'Rock Slide'],
		svg: '',
		lastevolve: false
	},{
		nummer: '232',
		namn: 'Donphan',
		type: ['Ground'],
		moves: ['Counter', 'Tackle', 'Earthquake', 'Heavy Slam', 'Play Rough'],
		attack: ['Counter', 'Earthquake'],
		defend: ['Counter', 'Play Rough'],
		svg: '',
		lastevolve: true
	},{
		nummer: '233',
		namn: 'Porygon2',
		type: ['Normal'],
		moves: ['Hidden Power', 'Charge Beam', 'Hyper Beam', 'Zap Cannon', 'Solar Beam'],
		attack: ['Hidden Power', 'Hyper Beam'],
		defend: ['Hidden Power', 'Hyper Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '234',
		namn: 'Stantler',
		type: ['Normal'],
		moves: ['Tackle', 'Zen Headbutt', 'Megahorn', 'Stomp', 'Wild Charge'],
		attack: ['Tackle', 'Wild Charge'],
		defend: ['Zen Headbutt', 'Wild Charge'],
		svg: '',
		lastevolve: true
	},{
		nummer: '235',
		namn: 'Smeargle',
		type: ['Normal'],
		moves: ['Tackle', 'Struggle'],
		attack: ['Tackle', 'Struggle'],
		defend: ['Tackle', 'Struggle'],
		svg: '',
		lastevolve: true
	},{
		nummer: '236',
		namn: 'Tyrogue',
		type: ['Fighting'],
		moves: ['Rock Smash', 'Low Kick', 'Tackle', 'Brick Break', 'Rock Slide', 'Body Slam', 'Low Sweep'],
		attack: ['Rock Smash', 'Rock Slide'],
		defend: ['Rock Smash', 'Rock Slide'],
		svg: '',
		lastevolve: false
	},{
		nummer: '237',
		namn: 'Hitmontop',
		type: ['Fighting'],
		moves: ['Counter', 'Rock Smash', 'Close Combat', 'Stone Edge', 'Gyro Ball'],
		attack: ['Counter', 'Close Combat'],
		defend: ['Rock Smash', 'Gyro Ball'],
		svg: '',
		lastevolve: true
	},{
		nummer: '238',
		namn: 'Smoochum',
		type: ['Ice', 'Psychic'],
		moves: ['Frost Breath', 'Pound', 'Powder Snow', 'Ice Beam', 'Ice Punch', 'Psyshock'],
		attack: ['Pound', 'Ice Beam'],
		defend: ['Powder Snow', 'Psyshock'],
		svg: '',
		lastevolve: false
	},{
		nummer: '239',
		namn: 'Elekid',
		type: ['Electric'],
		moves: ['Low Kick', 'Thunder Shock', 'Thunderbolt', 'Discharge', 'Thunder Punch', 'Brick Break'],
		attack: ['Thunder Shock', 'Discharge'],
		defend: ['Thunder Shock', 'Discharge'],
		svg: '',
		lastevolve: false
	},{
		nummer: '240',
		namn: 'Magby',
		type: ['Fire'],
		moves: ['Ember', 'Karate Chop', 'Flamethrower', 'Flame Burst', 'Fire Punch', 'Brick Break'],
		attack: ['Ember', 'Flame Burst'],
		defend: ['Ember', 'Fire Punch'],
		svg: '',
		lastevolve: false
	},{
		nummer: '241',
		namn: 'Miltank',
		type: ['Normal'],
		moves: ['Tackle', 'Zen Headbutt', 'Stomp', 'Body Slam', 'Gyro Ball'],
		attack: ['Tackle', 'Stomp'],
		defend: ['Zen Headbutt', 'Body Slam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '242',
		namn: 'Blissey',
		type: ['Normal'],
		moves: ['Pound', 'Zen Headbutt', 'Hyper Beam', 'Psychic', 'Dazzling Gleam'],
		attack: ['Pound', 'Hyper Beam'],
		defend: ['Zen Headbutt', 'Dazzling Gleam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '243',
		namn: 'Raikou',
		type: ['Electric'],
		moves: ['Volt Switch', 'Thunder Shock', 'Thunder', 'Wild Charge', 'Thunderbolt'],
		attack: ['Thunder Shock', 'Wild Charge'],
		defend: ['Volt Switch', 'Wild Charge'],
		svg: '',
		lastevolve: true
	},{
		nummer: '244',
		namn: 'Entei',
		type: ['Fire'],
		moves: ['Fire Spin', 'Fire Fang', 'Overheat', 'Fire Blast', 'Flamethrower'],
		attack: ['Fire Spin', 'Overheat'],
		defend: ['Fire Spin', 'Overheat'],
		svg: '',
		lastevolve: true
	},{
		nummer: '245',
		namn: 'Suicune',
		type: ['Water'],
		moves: ['Hidden Power', 'Extrasensory', 'Snarl', 'Hydro Pump', 'Bubble Beam', 'Water Pulse'],
		attack: ['Extrasensory', 'Hydro Pump'],
		defend: ['Hidden Power', 'Hydro Pump'],
		svg: '',
		lastevolve: true
	},{
		nummer: '246',
		namn: 'Larvitar',
		type: ['Rock', 'Ground'],
		moves: ['Bite', 'Rock Smash', 'Stomp', 'Ancient Power', 'Crunch'],
		attack: ['Bite', 'Ancient Power'],
		defend: ['Rock Smash', 'Ancient Power'],
		svg: '',
		lastevolve: false
	},{
		nummer: '247',
		namn: 'Pupitar',
		type: ['Rock', 'Ground'],
		moves: ['Bite', 'Rock Smash', 'Dig', 'Ancient Power', 'Crunch'],
		attack: ['Bite', 'Dig'],
		defend: ['Rock Smash', 'Dig'],
		svg: '',
		lastevolve: false
	},{
		nummer: '248',
		namn: 'Tyranitar',
		type: ['Rock', 'Dark'],
		moves: ['Smack Down (event)', 'Bite', 'Iron Tail', 'Stone Edge', 'Fire Blast', 'Crunch'],
		attack: ['Smack Down (event)', 'Stone Edge'],
		defend: ['Smack Down (event)', 'Crunch'],
		svg: '',
		lastevolve: true
	},{
		nummer: '249',
		namn: 'Lugia',
		type: ['Psychic', 'Flying'],
		moves: ['Dragon Tail', 'Extrasensory', 'Future Sight', 'Sky Attack', 'Hydro Pump'],
		attack: ['Extrasensory', 'Future Sight'],
		defend: ['Extrasensory', 'Sky Attack'],
		svg: '',
		lastevolve: true
	},{
		nummer: '250',
		namn: 'Ho-Oh',
		type: ['Fire', 'Flying'],
		moves: ['Steel Wing', 'Extrasensory', 'Brave Bird', 'Fire Blast', 'Solar Beam'],
		attack: ['Steel Wing', 'Solar Beam'],
		defend: ['Extrasensory', 'Solar Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '251',
		namn: 'Celebi',
		type: ['Psychic', 'Grass'],
		moves: ['Confusion', 'Charge Beam', 'Psychic', 'Hyper Beam', 'Dazzling Gleam'],
		attack: ['Confusion', 'Hyper Beam'],
		defend: ['Confusion', 'Dazzling Gleam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '252',
		namn: 'Treecko',
		type: ['Grass'],
		moves: ['Pound', 'Bullet Seed', 'Aerial Ace', 'Grass Knot', 'Energy Ball'],
		attack: ['Pound', 'Grass Knot'],
		defend: ['Bullet Seed', 'Grass Knot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '253',
		namn: 'Grovyle',
		type: ['Grass'],
		moves: ['Quick Attack', 'Bullet Seed', 'Aerial Ace', 'Leaf Blade', 'Grass Knot'],
		attack: ['Quick Attack', 'Grass Knot'],
		defend: ['Bullet Seed', 'Leaf Blade'],
		svg: '',
		lastevolve: false
	},{
		nummer: '254',
		namn: 'Sceptile',
		type: ['Grass'],
		moves: ['Fury Cutter', 'Bullet Seed', 'Earthquake', 'Aerial Ace', 'Leaf Blade'],
		attack: ['Fury Cutter', 'Leaf Blade'],
		defend: ['Bullet Seed', 'Leaf Blade'],
		svg: '',
		lastevolve: true
	},{
		nummer: '255',
		namn: 'Torchic',
		type: ['Fire'],
		moves: ['Ember', 'Scratch', 'Flamethrower', 'Rock Tomb', 'Flame Charge'],
		attack: ['Ember', 'Flamethrower'],
		defend: ['Ember', 'Flame Charge'],
		svg: '',
		lastevolve: false
	},{
		nummer: '256',
		namn: 'Combusken',
		type: ['Fire', 'Fighting'],
		moves: ['Ember', 'Peck', 'Flamethrower', 'Rock Slide', 'Flame Charge'],
		attack: ['Ember', 'Flamethrower'],
		defend: ['Ember', 'Flame Charge'],
		svg: '',
		lastevolve: false
	},{
		nummer: '257',
		namn: 'Blaziken',
		type: ['Fire', 'Fighting'],
		moves: ['Counter', 'Fire Spin', 'Stone Edge', 'Brave Bird', 'Overheat'],
		attack: ['Counter', 'Overheat'],
		defend: ['Fire Spin', 'Overheat'],
		svg: '',
		lastevolve: true
	},{
		nummer: '258',
		namn: 'Mudkip',
		type: ['Water'],
		moves: ['Tackle', 'Water Gun', 'Sludge', 'Dig', 'Stomp'],
		attack: ['Water Gun', 'Stomp'],
		defend: ['Water Gun', 'Dig'],
		svg: '',
		lastevolve: false
	},{
		nummer: '259',
		namn: 'Marshtomp',
		type: ['Water', 'Ground'],
		moves: ['Mud Shot', 'Water Gun', 'Sludge', 'Mud Bomb', 'Surf'],
		attack: ['Water Gun', 'Surf'],
		defend: ['Mud Shot', 'Mud Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '260',
		namn: 'Swampert',
		type: ['Water', 'Ground'],
		moves: ['Mud Shot', 'Water Gun', 'Earthquake', 'Sludge Wave', 'Surf'],
		attack: ['Water Gun', 'Surf'],
		defend: ['Mud Shot', 'Surf'],
		svg: '',
		lastevolve: true
	},{
		nummer: '261',
		namn: 'Poochyena',
		type: ['Dark'],
		moves: ['Tackle', 'Snarl', 'Dig', 'Poison Fang', 'Crunch'],
		attack: ['Snarl', 'Crunch'],
		defend: ['Snarl', 'Crunch'],
		svg: '',
		lastevolve: false
	},{
		nummer: '262',
		namn: 'Mightyena',
		type: ['Dark'],
		moves: ['Bite', 'Fire Fang', 'Poison Fang', 'Play Rough', 'Crunch'],
		attack: ['Bite', 'Play Rough'],
		defend: ['Fire Fang', 'Crunch'],
		svg: '',
		lastevolve: true
	},{
		nummer: '263',
		namn: 'Zigzagoon',
		type: ['Normal'],
		moves: ['Tackle', 'Rock Smash', 'Dig', 'Thunderbolt', 'Grass Knot'],
		attack: ['Tackle', 'Grass Knot'],
		defend: ['Rock Smash', 'Grass Knot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '264',
		namn: 'Linoone',
		type: ['Normal'],
		moves: ['Shadow Claw', 'Tackle', 'Dig', 'Thunder', 'Grass Knot'],
		attack: ['Shadow Claw', 'Grass Knot'],
		defend: ['Shadow Claw', 'Dig'],
		svg: '',
		lastevolve: true
	},{
		nummer: '265',
		namn: 'Wurmple',
		type: ['Bug'],
		moves: ['Bug Bite', 'Tackle', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		svg: '',
		lastevolve: false
	},{
		nummer: '266',
		namn: 'Silcoon',
		type: ['Bug'],
		moves: ['Bug Bite', 'Poison Sting', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		svg: '',
		lastevolve: false
	},{
		nummer: '267',
		namn: 'Beautifly',
		type: ['Bug', 'Flying'],
		moves: ['Infestation', 'Struggle Bug', 'Bug Buzz', 'Air Cutter', 'Silver Wind'],
		attack: ['Infestation', 'Bug Buzz'],
		defend: ['Struggle Bug', 'Bug Buzz'],
		svg: '',
		lastevolve: true
	},{
		nummer: '268',
		namn: 'Cascoon',
		type: ['Bug'],
		moves: ['Bug Bite', 'Poison Sting', 'Struggle'],
		attack: ['Bug Bite', 'Struggle'],
		defend: ['Bug Bite', 'Struggle'],
		svg: '',
		lastevolve: false
	},{
		nummer: '269',
		namn: 'Dustox',
		type: ['Bug', 'Poison'],
		moves: ['Confusion', 'Struggle Bug', 'Bug Buzz', 'Sludge Bomb', 'Silver Wind'],
		attack: ['Confusion', 'Sludge Bomb'],
		defend: ['Confusion', 'Bug Buzz'],
		svg: '',
		lastevolve: true
	},{
		nummer: '270',
		namn: 'Lotad',
		type: ['Water', 'Grass'],
		moves: ['Razor Leaf', 'Water Gun', 'Bubble Beam', 'Energy Ball'],
		attack: ['Razor Leaf', 'Energy Ball'],
		defend: ['Razor Leaf', 'Energy Ball'],
		svg: '',
		lastevolve: false
	},{
		nummer: '271',
		namn: 'Lombre',
		type: ['Water', 'Grass'],
		moves: ['Razor Leaf', 'Bubble', 'Ice Beam', 'Bubble Beam', 'Grass Knot'],
		attack: ['Bubble', 'Grass Knot'],
		defend: ['Bubble', 'Grass Knot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '272',
		namn: 'Ludicolo',
		type: ['Water', 'Grass'],
		moves: ['Razor Leaf', 'Bubble', 'Blizzard', 'Hydro Pump', 'Solar Beam'],
		attack: ['Razor Leaf', 'Solar Beam'],
		defend: ['Bubble', 'Solar Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '273',
		namn: 'Seedot',
		type: ['Grass'],
		moves: ['Quick Attack', 'Bullet Seed', 'Grass Knot', 'Energy Ball', 'Foul Play'],
		attack: ['Quick Attack', 'Grass Knot'],
		defend: ['Bullet Seed', 'Grass Knot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '274',
		namn: 'Nuzleaf',
		type: ['Grass', 'Dark'],
		moves: ['Razor Leaf', 'Feint Attack', 'Leaf Blade', 'Grass Knot', 'Foul Play'],
		attack: ['Feint Attack', 'Grass Knot'],
		defend: ['Feint Attack', 'Leaf Blade'],
		svg: '',
		lastevolve: false
	},{
		nummer: '275',
		namn: 'Shiftry',
		type: ['Grass', 'Dark'],
		moves: ['Razor Leaf', 'Feint Attack', 'Leaf Blade', 'Hurricane', 'Foul Play'],
		attack: ['Razor Leaf', 'Leaf Blade'],
		defend: ['Feint Attack', 'Leaf Blade'],
		svg: '',
		lastevolve: true
	},{
		nummer: '276',
		namn: 'Taillow',
		type: ['Normal', 'Flying'],
		moves: ['Peck', 'Quick Attack', 'Aerial Ace'],
		attack: ['Quick Attack', 'Aerial Ace'],
		defend: ['Peck', 'Aerial Ace'],
		svg: '',
		lastevolve: false
	},{
		nummer: '277',
		namn: 'Swellow',
		type: ['Normal', 'Flying'],
		moves: ['Wing Attack', 'Steel Wing', 'Aerial Ace', 'Brave Bird', 'Sky Attack'],
		attack: ['Wing Attack', 'Sky Attack'],
		defend: ['Wing Attack', 'Aerial Ace'],
		svg: '',
		lastevolve: true
	},{
		nummer: '278',
		namn: 'Wingull',
		type: ['Water', 'Flying'],
		moves: ['Quick Attack', 'Water Gun', 'Ice Beam', 'Water Pulse', 'Air Cutter'],
		attack: ['Water Gun', 'Ice Beam'],
		defend: ['Quick Attack', 'Ice Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '279',
		namn: 'Pelipper',
		type: ['Water', 'Flying'],
		moves: ['Wing Attack', 'Water Gun', 'Blizzard', 'Hydro Pump', 'Hurricane'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Wing Attack', 'Hydro Pump'],
		svg: '',
		lastevolve: true
	},{
		nummer: '280',
		namn: 'Ralts',
		type: ['Psychic', 'Fairy'],
		moves: ['Confusion', 'Charge Beam', 'Psyshock', 'Shadow Sneak', 'Disarming Voice'],
		attack: ['Confusion', 'Psyshock'],
		defend: ['Confusion', 'Psyshock'],
		svg: '',
		lastevolve: false
	},{
		nummer: '281',
		namn: 'Kirlia',
		type: ['Psychic', 'Fairy'],
		moves: ['Confusion', 'Charge Beam', 'Shadow Sneak', 'Disarming Voice', 'Psychic'],
		attack: ['Confusion', 'Psychic'],
		defend: ['Confusion', 'Disarming Voice'],
		svg: '',
		lastevolve: false
	},{
		nummer: '282',
		namn: 'Gardevoir',
		type: ['Psychic', 'Fairy'],
		moves: ['Confusion', 'Charge Beam', 'Shadow Ball', 'Dazzling Gleam', 'Psychic'],
		attack: ['Confusion', 'Dazzling Gleam'],
		defend: ['Confusion', 'Dazzling Gleam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '283',
		namn: 'Surskit',
		type: ['Bug', 'Water'],
		moves: ['Bug Bite', 'Bubble', 'Bubble Beam', 'Aqua Jet', 'Signal Beam'],
		attack: ['Bug Bite', 'Signal Beam'],
		defend: ['Bubble', 'Signal Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '284',
		namn: 'Masquerain',
		type: ['Bug', 'Flying'],
		moves: ['Air Slash', 'Infestation', 'Ominous Wind', 'Air Cutter', 'Silver Wind'],
		attack: ['Air Slash', 'Silver Wind'],
		defend: ['Infestation', 'Silver Wind'],
		svg: '',
		lastevolve: true
	},{
		nummer: '285',
		namn: 'Shroomish',
		type: ['Grass'],
		moves: ['Tackle', 'Bullet Seed', 'Seed Bomb', 'Grass Knot', 'Energy Ball'],
		attack: ['Bullet Seed', 'Grass Knot'],
		defend: ['Bullet Seed', 'Grass Knot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '286',
		namn: 'Breloom',
		type: ['Grass', 'Fighting'],
		moves: ['Counter', 'Bullet Seed', 'Seed Bomb', 'Sludge Bomb', 'Dynamic Punch'],
		attack: ['Counter', 'Dynamic Punch'],
		defend: ['Bullet Seed', 'Dynamic Punch'],
		svg: '',
		lastevolve: true
	},{
		nummer: '287',
		namn: 'Slakoth',
		type: ['Normal'],
		moves: ['Yawn', 'Night Slash', 'Brick Break', 'Body Slam'],
		attack: ['Yawn', 'Body Slam'],
		defend: ['Yawn', 'Body Slam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '288',
		namn: 'Vigoroth',
		type: ['Normal'],
		moves: ['Scratch', 'Counter', 'Bulldoze', 'Brick Break', 'Body Slam'],
		attack: ['Scratch', 'Body Slam'],
		defend: ['Counter', 'Body Slam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '289',
		namn: 'Slaking',
		type: ['Normal'],
		moves: ['Yawn', 'Hyper Beam', 'Earthquake', 'Play Rough'],
		attack: ['Yawn', 'Hyper Beam'],
		defend: ['Yawn', 'Play Rough'],
		svg: '',
		lastevolve: true
	},{
		nummer: '290',
		namn: 'Nincada',
		type: ['Bug', 'Ground'],
		moves: ['Bug Bite', 'Scratch', 'Aerial Ace', 'Bug Buzz', 'Night Slash'],
		attack: ['Bug Bite', 'Bug Buzz'],
		defend: ['Bug Bite', 'Bug Buzz'],
		svg: '',
		lastevolve: false
	},{
		nummer: '291',
		namn: 'Ninjask',
		type: ['Bug', 'Flying'],
		moves: ['Fury Cutter', 'Metal Claw', 'Aerial Ace', 'Bug Buzz', 'Shadow Ball'],
		attack: ['Fury Cutter', 'Shadow Ball'],
		defend: ['Metal Claw', 'Bug Buzz'],
		svg: '',
		lastevolve: true
	},{
		nummer: '292',
		namn: 'Shedinja',
		type: ['Bug', 'Ghost'],
		moves: ['Bite', 'Struggle Bug', 'Dig', 'Aerial Ace', 'Shadow Sneak'],
		attack: ['Struggle Bug', 'Dig'],
		defend: ['Struggle Bug', 'Dig'],
		svg: '',
		lastevolve: true
	},{
		nummer: '293',
		namn: 'Whismur',
		type: ['Normal'],
		moves: ['Pound', 'Astonish', 'Flamethrower', 'Disarming Voice', 'Stomp'],
		attack: ['Pound', 'Stomp'],
		defend: ['Astonish', 'Disarming Voice'],
		svg: '',
		lastevolve: false
	},{
		nummer: '294',
		namn: 'Loudred',
		type: ['Normal'],
		moves: ['Bite', 'Rock Smash', 'Flamethrower', 'Disarming Voice', 'Crunch'],
		attack: ['Bite', 'Flamethrower'],
		defend: ['Rock Smash', 'Crunch'],
		svg: '',
		lastevolve: false
	},{
		nummer: '295',
		namn: 'Exploud',
		type: ['Normal'],
		moves: ['Bite', 'Astonish', 'Disarming Voice', 'Fire Blast', 'Crunch'],
		attack: ['Bite', 'Fire Blast'],
		defend: ['Astonish', 'Crunch'],
		svg: '',
		lastevolve: true
	},{
		nummer: '296',
		namn: 'Makuhita',
		type: ['Fighting'],
		moves: ['Tackle', 'Rock Smash', 'Cross Chop', 'Low Sweep', 'Heavy Slam'],
		attack: ['Rock Smash', 'Heavy Slam'],
		defend: ['Rock Smash', 'Heavy Slam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '297',
		namn: 'Hariyama',
		type: ['Fighting'],
		moves: ['Bullet Punch', 'Counter', 'Close Combat', 'Dynamic Punch', 'Heavy Slam'],
		attack: ['Counter', 'Dynamic Punch'],
		defend: ['Counter', 'Dynamic Punch'],
		svg: '',
		lastevolve: true
	},{
		nummer: '298',
		namn: 'Azurill',
		type: ['Normal', 'Fairy'],
		moves: ['Splash', 'Bubble', 'Ice Beam', 'Bubble Beam', 'Body Slam'],
		attack: ['Bubble', 'Body Slam'],
		defend: ['Bubble', 'Ice Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '299',
		namn: 'Nosepass',
		type: ['Rock'],
		moves: ['Spark', 'Rock Throw', 'Rock Slide', 'Thunderbolt', 'Rock Blast'],
		attack: ['Rock Throw', 'Rock Slide'],
		defend: ['Rock Throw', 'Rock Slide'],
		svg: '',
		lastevolve: true
	},{
		nummer: '300',
		namn: 'Skitty',
		type: ['Normal'],
		moves: ['Tackle', 'Feint Attack', 'Dig', 'Disarming Voice', 'Wild Charge'],
		attack: ['Tackle', 'Wild Charge'],
		defend: ['Feint Attack', 'Wild Charge'],
		svg: '',
		lastevolve: false
	},{
		nummer: '301',
		namn: 'Delcatty',
		type: ['Normal'],
		moves: ['Zen Headbutt', 'Feint Attack', 'Disarming Voice', 'Play Rough', 'Wild Charge'],
		attack: ['Feint Attack', 'Wild Charge'],
		defend: ['Zen Headbutt', 'Wild Charge'],
		svg: '',
		lastevolve: true
	},{
		nummer: '302',
		namn: 'Sableye',
		type: ['Dark', 'Ghost'],
		moves: ['Shadow Claw', 'Feint Attack', 'Power Gem', 'Shadow Sneak', 'Foul Play'],
		attack: ['Shadow Claw', 'Foul Play'],
		defend: ['Feint Attack', 'Foul Play'],
		svg: '',
		lastevolve: true
	},{
		nummer: '303',
		namn: 'Mawile',
		type: ['Steel', 'Fairy'],
		moves: ['Bite', 'Astonish', 'Vice Grip', 'Iron Head', 'Play Rough'],
		attack: ['Bite', 'Play Rough'],
		defend: ['Astonish', 'Play Rough'],
		svg: '',
		lastevolve: true
	},{
		nummer: '304',
		namn: 'Aron',
		type: ['Steel', 'Rock'],
		moves: ['Tackle', 'Metal Claw', 'Rock Tomb', 'Iron Head', 'Body Slam'],
		attack: ['Metal Claw', 'Iron Head'],
		defend: ['Metal Claw', 'Rock Tomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '305',
		namn: 'Lairon',
		type: ['Steel', 'Rock'],
		moves: ['Metal Claw', 'Iron Tail', 'Rock Slide', 'Body Slam', 'Heavy Slam'],
		attack: ['Iron Tail', 'Rock Slide'],
		defend: ['Iron Tail', 'Rock Slide'],
		svg: '',
		lastevolve: false
	},{
		nummer: '306',
		namn: 'Aggron',
		type: ['Steel', 'Rock'],
		moves: ['Dragon Tail', 'Iron Tail', 'Stone Edge', 'Thunder', 'Heavy Slam'],
		attack: ['Iron Tail', 'Heavy Slam'],
		defend: ['Iron Tail', 'Stone Edge'],
		svg: '',
		lastevolve: true
	},{
		nummer: '307',
		namn: 'Meditite',
		type: ['Fighting', 'Psychic'],
		moves: ['Confusion', 'Rock Smash', 'Ice Punch', 'Low Sweep', 'Psyshock'],
		attack: ['Confusion', 'Psyshock'],
		defend: ['Confusion', 'Psyshock'],
		svg: '',
		lastevolve: false
	},{
		nummer: '308',
		namn: 'Medicham',
		type: ['Fighting', 'Psychic'],
		moves: ['Psycho Cut', 'Counter', 'Ice Punch', 'Psychic', 'Dynamic Punch'],
		attack: ['Counter', 'Dynamic Punch'],
		defend: ['Counter', 'Dynamic Punch'],
		svg: '',
		lastevolve: true
	},{
		nummer: '309',
		namn: 'Electrike',
		type: ['Electric'],
		moves: ['Spark', 'Quick Attack', 'Discharge', 'Thunderbolt', 'Swift'],
		attack: ['Spark', 'Thunderbolt'],
		defend: ['Quick Attack', 'Discharge'],
		svg: '',
		lastevolve: false
	},{
		nummer: '310',
		namn: 'Manectric',
		type: ['Electric'],
		moves: ['Charge Beam', 'Snarl', 'Thunder', 'Flame Burst', 'Wild Charge'],
		attack: ['Charge Beam', 'Wild Charge'],
		defend: ['Charge Beam', 'Wild Charge'],
		svg: '',
		lastevolve: true
	},{
		nummer: '311',
		namn: 'Plusle',
		type: ['Electric'],
		moves: ['Spark', 'Quick Attack', 'Discharge', 'Thunderbolt', 'Swift'],
		attack: ['Spark', 'Thunderbolt'],
		defend: ['Quick Attack', 'Discharge'],
		svg: '',
		lastevolve: true
	},{
		nummer: '312',
		namn: 'Minun',
		type: ['Electric'],
		moves: ['Spark', 'Quick Attack', 'Discharge', 'Thunderbolt', 'Swift'],
		attack: ['Spark', 'Thunderbolt'],
		defend: ['Quick Attack', 'Discharge'],
		svg: '',
		lastevolve: true
	},{
		nummer: '313',
		namn: 'Volbeat',
		type: ['Bug'],
		moves: ['Tackle', 'Struggle Bug', 'Bug Buzz', 'Thunderbolt', 'Signal Beam'],
		attack: ['Struggle Bug', 'Bug Buzz'],
		defend: ['Struggle Bug', 'Bug Buzz'],
		svg: '',
		lastevolve: true
	},{
		nummer: '314',
		namn: 'Illumise',
		type: ['Bug'],
		moves: ['Tackle', 'Struggle Bug', 'Bug Buzz', 'Dazzling Gleam', 'Silver Wind'],
		attack: ['Struggle Bug', 'Bug Buzz'],
		defend: ['Struggle Bug', 'Bug Buzz'],
		svg: '',
		lastevolve: true
	},{
		nummer: '315',
		namn: 'Roselia',
		type: ['Grass', 'Poison'],
		moves: ['Razor Leaf', 'Poison Jab', 'Petal Blizzard', 'Dazzling Gleam', 'Sludge Bomb'],
		attack: ['Poison Jab', 'Sludge Bomb'],
		defend: ['Razor Leaf', 'Sludge Bomb'],
		svg: '',
		lastevolve: true
	},{
		nummer: '316',
		namn: 'Gulpin',
		type: ['Poison'],
		moves: ['Pound', 'Rock Smash', 'Sludge', 'Ice Beam', 'Gunk Shot'],
		attack: ['Pound', 'Gunk Shot'],
		defend: ['Rock Smash', 'Gunk Shot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '317',
		namn: 'Swalot',
		type: ['Poison'],
		moves: ['Rock Smash', 'Infestation', 'Ice Beam', 'Sludge Bomb', 'Gunk Shot'],
		attack: ['Infestation', 'Sludge Bomb'],
		defend: ['Rock Smash', 'Sludge Bomb'],
		svg: '',
		lastevolve: true
	},{
		nummer: '318',
		namn: 'Carvanha',
		type: ['Water', 'Dark'],
		moves: ['Bite', 'Snarl', 'Poison Fang', 'Aqua Jet', 'Crunch'],
		attack: ['Snarl', 'Crunch'],
		defend: ['Snarl', 'Crunch'],
		svg: '',
		lastevolve: false
	},{
		nummer: '319',
		namn: 'Sharpedo',
		type: ['Water', 'Dark'],
		moves: ['Bite', 'Waterfall', 'Poison Fang', 'Hydro Pump', 'Crunch'],
		attack: ['Waterfall', 'Hydro Pump'],
		defend: ['Waterfall', 'Crunch'],
		svg: '',
		lastevolve: true
	},{
		nummer: '320',
		namn: 'Wailmer',
		type: ['Water'],
		moves: ['Water Gun', 'Splash', 'Water Pulse', 'Body Slam', 'Heavy Slam'],
		attack: ['Water Gun', 'Heavy Slam'],
		defend: ['Splash', 'Water Pulse'],
		svg: '',
		lastevolve: false
	},{
		nummer: '321',
		namn: 'Wailord',
		type: ['Water'],
		moves: ['Water Gun', 'Zen Headbutt', 'Hyper Beam', 'Blizzard', 'Surf'],
		attack: ['Water Gun', 'Surf'],
		defend: ['Zen Headbutt', 'Surf'],
		svg: '',
		lastevolve: true
	},{
		nummer: '322',
		namn: 'Numel',
		type: ['Fire', 'Ground'],
		moves: ['Ember', 'Tackle', 'Heat Wave', 'Bulldoze', 'Stomp'],
		attack: ['Ember', 'Bulldoze'],
		defend: ['Ember', 'Bulldoze'],
		svg: '',
		lastevolve: false
	},{
		nummer: '323',
		namn: 'Camerupt',
		type: ['Fire', 'Ground'],
		moves: ['Ember', 'Rock Smash', 'Earthquake', 'Solar Beam', 'Overheat'],
		attack: ['Ember', 'Overheat'],
		defend: ['Rock Smash', 'Overheat'],
		svg: '',
		lastevolve: true
	},{
		nummer: '324',
		namn: 'Torkoal',
		type: ['Fire'],
		moves: ['Ember', 'Fire Spin', 'Earthquake', 'Solar Beam', 'Overheat'],
		attack: ['Fire Spin', 'Overheat'],
		defend: ['Fire Spin', 'Overheat'],
		svg: '',
		lastevolve: true
	},{
		nummer: '325',
		namn: 'Spoink',
		type: ['Psychic'],
		moves: ['Splash', 'Zen Headbutt', 'Psybeam', 'Shadow Ball', 'Mirror Coat'],
		attack: ['Zen Headbutt', 'Shadow Ball'],
		defend: ['Zen Headbutt', 'Shadow Ball'],
		svg: '',
		lastevolve: false
	},{
		nummer: '326',
		namn: 'Grumpig',
		type: ['Psychic'],
		moves: ['Charge Beam', 'Extrasensory', 'Shadow Ball', 'Psychic', 'Mirror Coat'],
		attack: ['Extrasensory', 'Shadow Ball'],
		defend: ['Extrasensory', 'Shadow Ball'],
		svg: '',
		lastevolve: true
	},{
		nummer: '327',
		namn: 'Spinda',
		type: ['Normal'],
		moves: ['Sucker Punch', 'Psycho Cut', 'Dig', 'Rock Tomb', 'Icy Wind'],
		attack: ['Sucker Punch', 'Dig'],
		defend: ['Sucker Punch', 'Dig'],
		svg: '',
		lastevolve: true
	},{
		nummer: '328',
		namn: 'Trapinch',
		type: ['Ground'],
		moves: ['Mud Shot', 'Struggle Bug', 'Dig', 'Sand Tomb', 'Crunch'],
		attack: ['Mud Shot', 'Dig'],
		defend: ['Struggle Bug', 'Dig'],
		svg: '',
		lastevolve: false
	},{
		nummer: '329',
		namn: 'Vibrava',
		type: ['Ground', 'Dragon'],
		moves: ['Dragon Breath', 'Mud Shot', 'Bug Buzz', 'Bulldoze', 'Sand Tomb'],
		attack: ['Dragon Breath', 'Bulldoze'],
		defend: ['Mud Shot', 'Bulldoze'],
		svg: '',
		lastevolve: false
	},{
		nummer: '330',
		namn: 'Flygon',
		type: ['Ground', 'Dragon'],
		moves: ['Mud Shot', 'Dragon Tail', 'Earthquake', 'Stone Edge', 'Dragon Claw'],
		attack: ['Dragon Tail', 'Earthquake'],
		defend: ['Dragon Tail', 'Dragon Claw'],
		svg: '',
		lastevolve: true
	},{
		nummer: '331',
		namn: 'Cacnea',
		type: ['Grass'],
		moves: ['Sucker Punch', 'Poison Sting', 'Seed Bomb', 'Brick Break', 'Grass Knot'],
		attack: ['Sucker Punch', 'Grass Knot'],
		defend: ['Sucker Punch', 'Grass Knot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '332',
		namn: 'Cacturne',
		type: ['Grass', 'Dark'],
		moves: ['Sucker Punch', 'Poison Jab', 'Dark Pulse', 'Dynamic Punch', 'Grass Knot'],
		attack: ['Sucker Punch', 'Grass Knot'],
		defend: ['Poison Jab', 'Grass Knot'],
		svg: '',
		lastevolve: true
	},{
		nummer: '333',
		namn: 'Swablu',
		type: ['Normal', 'Flying'],
		moves: ['Peck', 'Astonish', 'Ice Beam', 'Aerial Ace', 'Disarming Voice'],
		attack: ['Peck', 'Aerial Ace'],
		defend: ['Peck', 'Aerial Ace'],
		svg: '',
		lastevolve: false
	},{
		nummer: '334',
		namn: 'Altaria',
		type: ['Dragon', 'Flying'],
		moves: ['Dragon Breath', 'Peck', 'Dragon Pulse', 'Dazzling Gleam', 'Sky Attack'],
		attack: ['Dragon Breath', 'Sky Attack'],
		defend: ['Peck', 'Dragon Pulse'],
		svg: '',
		lastevolve: true
	},{
		nummer: '335',
		namn: 'Zangoose',
		type: ['Normal'],
		moves: ['Fury Cutter', 'Shadow Claw', 'Dig', 'Night Slash', 'Close Combat'],
		attack: ['Shadow Claw', 'Close Combat'],
		defend: ['Shadow Claw', 'Dig'],
		svg: '',
		lastevolve: true
	},{
		nummer: '336',
		namn: 'Seviper',
		type: ['Poison'],
		moves: ['Poison Jab', 'Iron Tail', 'Wrap', 'Poison Fang', 'Crunch'],
		attack: ['Poison Jab', 'Crunch'],
		defend: ['Iron Tail', 'Crunch'],
		svg: '',
		lastevolve: true
	},{
		nummer: '337',
		namn: 'Lunatone',
		type: ['Rock', 'Psychic'],
		moves: ['Rock Throw', 'Confusion', 'Rock Slide', 'Moonblast', 'Psychic'],
		attack: ['Rock Throw', 'Rock Slide'],
		defend: ['Confusion', 'Rock Slide'],
		svg: '',
		lastevolve: true
	},{
		nummer: '338',
		namn: 'Solrock',
		type: ['Rock', 'Psychic'],
		moves: ['Rock Throw', 'Confusion', 'Rock Slide', 'Psychic', 'Solar Beam'],
		attack: ['Confusion', 'Solar Beam'],
		defend: ['Confusion', 'Solar Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '339',
		namn: 'Barboach',
		type: ['Water', 'Ground'],
		moves: ['Mud Shot', 'Water Gun', 'Ice Beam', 'Aqua Tail', 'Mud Bomb'],
		attack: ['Water Gun', 'Aqua Tail'],
		defend: ['Mud Shot', 'Mud Bomb'],
		svg: '',
		lastevolve: false
	},{
		nummer: '340',
		namn: 'Whiscash',
		type: ['Water', 'Ground'],
		moves: ['Mud Shot', 'Water Gun', 'Blizzard', 'Mud Bomb', 'Water Pulse'],
		attack: ['Water Gun', 'Blizzard'],
		defend: ['Mud Shot', 'Mud Bomb'],
		svg: '',
		lastevolve: true
	},{
		nummer: '341',
		namn: 'Corphish',
		type: ['Water'],
		moves: ['Bubble', 'Rock Smash', 'Vice Grip', 'Bubble Beam', 'Aqua Jet'],
		attack: ['Bubble', 'Bubble Beam'],
		defend: ['Bubble', 'Bubble Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '342',
		namn: 'Crawdaunt',
		type: ['Water', 'Dark'],
		moves: ['Snarl', 'Waterfall', 'Vice Grip', 'Night Slash', 'Bubble Beam'],
		attack: ['Waterfall', 'Night Slash'],
		defend: ['Waterfall', 'Night Slash'],
		svg: '',
		lastevolve: true
	},{
		nummer: '343',
		namn: 'Baltoy',
		type: ['Ground', 'Psychic'],
		moves: ['Confusion', 'Extrasensory', 'Dig', 'Psybeam', 'Gyro Ball'],
		attack: ['Confusion', 'Dig'],
		defend: ['Confusion', 'Dig'],
		svg: '',
		lastevolve: false
	},{
		nummer: '344',
		namn: 'Claydol',
		type: ['Ground', 'Psychic'],
		moves: ['Confusion', 'Extrasensory', 'Earthquake', 'Psychic', 'Gyro Ball'],
		attack: ['Confusion', 'Earthquake'],
		defend: ['Confusion', 'Earthquake'],
		svg: '',
		lastevolve: true
	},{
		nummer: '345',
		namn: 'Lileep',
		type: ['Rock', 'Grass'],
		moves: ['Acid', 'Infestation', 'Ancient Power', 'Grass Knot', 'Mirror Coat'],
		attack: ['Infestation', 'Grass Knot'],
		defend: ['Infestation', 'Grass Knot'],
		svg: '',
		lastevolve: false
	},{
		nummer: '346',
		namn: 'Cradily',
		type: ['Rock', 'Grass'],
		moves: ['Acid', 'Infestation', 'Stone Edge', 'Bulldoze', 'Grass Knot'],
		attack: ['Infestation', 'Grass Knot'],
		defend: ['Infestation', 'Grass Knot'],
		svg: '',
		lastevolve: true
	},{
		nummer: '347',
		namn: 'Anorith',
		type: ['Rock', 'Bug'],
		moves: ['Scratch', 'Struggle Bug', 'Aqua Jet', 'Ancient Power', 'Cross Poison'],
		attack: ['Struggle Bug', 'Ancient Power'],
		defend: ['Struggle Bug', 'Ancient Power'],
		svg: '',
		lastevolve: false
	},{
		nummer: '348',
		namn: 'Armaldo',
		type: ['Rock', 'Bug'],
		moves: ['Fury Cutter', 'Struggle Bug', 'Cross Poison', 'Water Pulse', 'Rock Blast'],
		attack: ['Struggle Bug', 'Rock Blast'],
		defend: ['Struggle Bug', 'Rock Blast'],
		svg: '',
		lastevolve: true
	},{
		nummer: '349',
		namn: 'Feebas',
		type: ['Water'],
		moves: ['Tackle', 'Splash', 'Mirror Coat'],
		attack: ['Tackle', 'Mirror Coat'],
		defend: ['Splash', 'Mirror Coat'],
		svg: '',
		lastevolve: false
	},{
		nummer: '350',
		namn: 'Milotic',
		type: ['Water'],
		moves: ['Dragon Tail', 'Waterfall', 'Water Gun', 'Hyper Beam', 'Blizzard', 'Surf'],
		attack: ['Waterfall', 'Surf'],
		defend: ['Waterfall', 'Hyper Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '351',
		namn: 'Castform',
		type: ['Normal'],
		moves: ['Bite', 'Rock Smash', 'Ancient Power', 'Stomp', 'Crunch'],
		attack: ['Bite', 'Stomp'],
		defend: ['Rock Smash', 'Crunch'],
		svg: '',
		lastevolve: true
	},{
		nummer: '352',
		namn: 'Kecleon',
		type: ['Normal'],
		moves: ['Sucker Punch', 'Lick', 'Flamethrower', 'Ice Beam', 'Aerial Ace', 'Shadow Sneak', 'Thunder', 'Foul Play'],
		attack: ['Lick', 'Foul Play'],
		defend: ['Sucker Punch', 'Ice Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '353',
		namn: 'Shuppet',
		type: ['Ghost'],
		moves: ['Feint Attack', 'Astonish', 'Shadow Sneak', 'Ominous Wind', 'Night Shade'],
		attack: ['Feint Attack', 'Ominous Wind'],
		defend: ['Astonish', 'Ominous Wind'],
		svg: '',
		lastevolve: false
	},{
		nummer: '354',
		namn: 'Banette',
		type: ['Ghost'],
		moves: ['Shadow Claw', 'Hex', 'Shadow Ball', 'Thunder', 'Dazzling Gleam'],
		attack: ['Shadow Claw', 'Shadow Ball'],
		defend: ['Hex', 'Shadow Ball'],
		svg: '',
		lastevolve: true
	},{
		nummer: '355',
		namn: 'Duskull',
		type: ['Ghost'],
		moves: ['Astonish', 'Hex', 'Shadow Sneak', 'Ominous Wind', 'Night Shade'],
		attack: ['Hex', 'Ominous Wind'],
		defend: ['Hex', 'Ominous Wind'],
		svg: '',
		lastevolve: false
	},{
		nummer: '356',
		namn: 'Dusclops',
		type: ['Ghost'],
		moves: ['Feint Attack', 'Hex', 'Ice Punch', 'Shadow Punch', 'Fire Punch'],
		attack: ['Feint Attack', 'Shadow Punch'],
		defend: ['Hex', 'Fire Punch'],
		svg: '',
		lastevolve: true
	},{
		nummer: '357',
		namn: 'Tropius',
		type: ['Grass', 'Flying'],
		moves: ['Razor Leaf', 'Air Slash', 'Aerial Ace', 'Leaf Blade', 'Stomp'],
		attack: ['Razor Leaf', 'Leaf Blade'],
		defend: ['Air Slash', 'Leaf Blade'],
		svg: '',
		lastevolve: true
	},{
		nummer: '358',
		namn: 'Chimecho',
		type: ['Psychic'],
		moves: ['Astonish', 'Extrasensory', 'Psyshock', 'Shadow Ball', 'Energy Ball'],
		attack: ['Extrasensory', 'Shadow Ball'],
		defend: ['Extrasensory', 'Psyshock'],
		svg: '',
		lastevolve: true
	},{
		nummer: '359',
		namn: 'Absol',
		type: ['Dark'],
		moves: ['Psycho Cut', 'Snarl', 'Dark Pulse', 'Megahorn', 'Thunder'],
		attack: ['Snarl', 'Dark Pulse'],
		defend: ['Snarl', 'Dark Pulse'],
		svg: '',
		lastevolve: true
	},{
		nummer: '360',
		namn: 'Wynaut',
		type: ['Psychic'],
		moves: ['Splash', 'Counter', 'Mirror Coat'],
		attack: ['Counter', 'Mirror Coat'],
		defend: ['Counter', 'Mirror Coat'],
		svg: '',
		lastevolve: false
	},{
		nummer: '361',
		namn: 'Snorunt',
		type: ['Ice'],
		moves: ['Powder Snow', 'Hex', 'Shadow Ball', 'Icy Wind', 'Avalanche'],
		attack: ['Powder Snow', 'Avalanche'],
		defend: ['Powder Snow', 'Avalanche'],
		svg: '',
		lastevolve: false
	},{
		nummer: '362',
		namn: 'Glalie',
		type: ['Ice'],
		moves: ['Ice Shard', 'Frost Breath', 'Shadow Ball', 'Avalanche', 'Gyro Ball'],
		attack: ['Frost Breath', 'Avalanche'],
		defend: ['Ice Shard', 'Avalanche'],
		svg: '',
		lastevolve: true
	},{
		nummer: '363',
		namn: 'Spheal',
		type: ['Ice', 'Water'],
		moves: ['Water Gun', 'Rock Smash', 'Water Pulse', 'Body Slam', 'Aurora Beam'],
		attack: ['Water Gun', 'Aurora Beam'],
		defend: ['Rock Smash', 'Aurora Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '364',
		namn: 'Sealeo',
		type: ['Ice', 'Water'],
		moves: ['Water Gun', 'Powder Snow', 'Water Pulse', 'Body Slam', 'Aurora Beam'],
		attack: ['Water Gun', 'Aurora Beam'],
		defend: ['Powder Snow', 'Aurora Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '365',
		namn: 'Walrein',
		type: ['Ice', 'Water'],
		moves: ['Frost Breath', 'Waterfall', 'Earthquake', 'Blizzard', 'Water Pulse'],
		attack: ['Waterfall', 'Blizzard'],
		defend: ['Waterfall', 'Blizzard'],
		svg: '',
		lastevolve: true
	},{
		nummer: '366',
		namn: 'Clamperl',
		type: ['Water'],
		moves: ['Water Gun', 'Ice Beam', 'Water Pulse', 'Body Slam'],
		attack: ['Water Gun', 'Ice Beam'],
		defend: ['Water Gun', 'Ice Beam'],
		svg: '',
		lastevolve: false
	},{
		nummer: '367',
		namn: 'Huntail',
		type: ['Water'],
		moves: ['Bite', 'Water Gun', 'Ice Beam', 'Aqua Tail', 'Crunch'],
		attack: ['Water Gun', 'Aqua Tail'],
		defend: ['Water Gun', 'Aqua Tail'],
		svg: '',
		lastevolve: true
	},{
		nummer: '368',
		namn: 'Gorebyss',
		type: ['Water'],
		moves: ['Water Gun', 'Confusion', 'Draining Kiss', 'Water Pulse', 'Psychic'],
		attack: ['Confusion', 'Water Pulse'],
		defend: ['Confusion', 'Water Pulse'],
		svg: '',
		lastevolve: true
	},{
		nummer: '369',
		namn: 'Relicanth',
		type: ['Water', 'Rock'],
		moves: ['Water Gun', 'Zen Headbutt', 'Aqua Tail', 'Ancient Power', 'Hydro Pump'],
		attack: ['Water Gun', 'Hydro Pump'],
		defend: ['Zen Headbutt', 'Ancient Power'],
		svg: '',
		lastevolve: true
	},{
		nummer: '370',
		namn: 'Luvdisc',
		type: ['Water'],
		moves: ['Water Gun', 'Splash', 'Aqua Jet', 'Draining Kiss', 'Water Pulse'],
		attack: ['Water Gun', 'Water Pulse'],
		defend: ['Splash', 'Water Pulse'],
		svg: '',
		lastevolve: true
	},{
		nummer: '371',
		namn: 'Bagon',
		type: ['Dragon'],
		moves: ['Bite', 'Ember', 'Flamethrower', 'Twister', 'Crunch'],
		attack: ['Bite', 'Flamethrower'],
		defend: ['Ember', 'Crunch'],
		svg: '',
		lastevolve: false
	},{
		nummer: '372',
		namn: 'Shelgon',
		type: ['Dragon'],
		moves: ['Dragon Breath', 'Ember', 'Flamethrower', 'Twister', 'Dragon Pulse'],
		attack: ['Dragon Breath', 'Dragon Pulse'],
		defend: ['Ember', 'Dragon Pulse'],
		svg: '',
		lastevolve: false
	},{
		nummer: '373',
		namn: 'Salamence',
		type: ['Dragon', 'Flying'],
		moves: ['Fire Fang', 'Dragon Tail', 'Fire Blast', 'Hydro Pump', 'Draco Meteor'],
		attack: ['Dragon Tail', 'Draco Meteor'],
		defend: ['Dragon Tail', 'Draco Meteor'],
		svg: '',
		lastevolve: true
	},{
		nummer: '374',
		namn: 'Beldum',
		type: ['Steel', 'Psychic'],
		moves: ['Take Down', 'Struggle'],
		attack: ['Take Down', 'Struggle'],
		defend: ['Take Down', 'Struggle'],
		svg: '',
		lastevolve: false
	},{
		nummer: '375',
		namn: 'Metang',
		type: ['Steel', 'Psychic'],
		moves: ['Metal Claw', 'Zen Headbutt', 'Psyshock', 'Psychic', 'Gyro Ball'],
		attack: ['Metal Claw', 'Psychic'],
		defend: ['Zen Headbutt', 'Gyro Ball'],
		svg: '',
		lastevolve: false
	},{
		nummer: '376',
		namn: 'Metagross',
		type: ['Steel', 'Psychic'],
		moves: ['Bullet Punch', 'Zen Headbutt', 'Earthquake', 'Flash Cannon', 'Psychic'],
		attack: ['Zen Headbutt', 'Flash Cannon'],
		defend: ['Bullet Punch', 'Flash Cannon'],
		svg: '',
		lastevolve: true
	},{
		nummer: '377',
		namn: 'Regirock',
		type: ['Rock'],
		moves: ['Rock Throw', 'Rock Smash', 'Stone Edge', 'Focus Blast', 'Zap Cannon'],
		attack: ['Rock Throw', 'Stone Edge'],
		defend: ['Rock Throw', 'Focus Blast'],
		svg: '',
		lastevolve: true
	},{
		nummer: '378',
		namn: 'Regice',
		type: ['Ice'],
		moves: ['Frost Breath', 'Rock Smash', 'Earthquake', 'Blizzard', 'Focus Blast'],
		attack: ['Frost Breath', 'Blizzard'],
		defend: ['Rock Smash', 'Blizzard'],
		svg: '',
		lastevolve: true
	},{
		nummer: '379',
		namn: 'Registeel',
		type: ['Steel'],
		moves: ['Metal Claw', 'Rock Smash', 'Hyper Beam', 'Flash Cannon', 'Focus Blast'],
		attack: ['Metal Claw', 'Focus Blast'],
		defend: ['Rock Smash', 'Hyper Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '380',
		namn: 'Latias',
		type: ['Dragon', 'Psychic'],
		moves: ['Dragon Breath', 'Zen Headbutt', 'Thunder', 'Dragon Claw', 'Psychic'],
		attack: ['Dragon Breath', 'Psychic'],
		defend: ['Zen Headbutt', 'Dragon Claw'],
		svg: '',
		lastevolve: true
	},{
		nummer: '381',
		namn: 'Latios',
		type: ['Dragon', 'Psychic'],
		moves: ['Dragon Breath', 'Zen Headbutt', 'Dragon Claw', 'Psychic', 'Solar Beam'],
		attack: ['Zen Headbutt', 'Solar Beam'],
		defend: ['Zen Headbutt', 'Dragon Claw'],
		svg: '',
		lastevolve: true
	},{
		nummer: '382',
		namn: 'Kyogre',
		type: ['Water'],
		moves: ['Dragon Tail', 'Waterfall', 'Blizzard', 'Thunder', 'Hydro Pump'],
		attack: ['Waterfall', 'Hydro Pump'],
		defend: ['Waterfall', 'Hydro Pump'],
		svg: '',
		lastevolve: true
	},{
		nummer: '383',
		namn: 'Groudon',
		type: ['Ground'],
		moves: ['Mud Shot', 'Dragon Tail', 'Earthquake', 'Fire Blast', 'Solar Beam'],
		attack: ['Dragon Tail', 'Solar Beam'],
		defend: ['Dragon Tail', 'Solar Beam'],
		svg: '',
		lastevolve: true
	},{
		nummer: '384',
		namn: 'Rayquaza',
		type: ['Dragon', 'Flying'],
		moves: ['Dragon Tail', 'Air Slash', 'Aerial Ace', 'Ancient Power', 'Outrage'],
		attack: ['Dragon Tail', 'Outrage'],
		defend: ['Dragon Tail', 'Outrage'],
		svg: '',
		lastevolve: true
	},{
		nummer: '385',
		namn: 'Jirachi',
		type: ['Steel', 'Psychic'],
		moves: ['Confusion', 'Charge Beam', 'Dazzling Gleam', 'Psychic', 'Doom Desire'],
		attack: ['Confusion', 'Doom Desire'],
		defend: ['Confusion', 'Doom Desire'],
		svg: '',
		lastevolve: true
	},{
		nummer: '386',
		namn: 'Deoxys',
		type: ['Psychic'],
		moves: ['Zen Headbutt', 'Counter', 'Swift', 'Zap Cannon', 'Psycho Boost'],
		attack: ['Counter', 'Zap Cannon'],
		defend: ['Zen Headbutt', 'Psycho Boost'],
		svg: '',
		lastevolve: true
	},{
		nummer: '387',
		namn: 'Turtwig',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '388',
		namn: 'Grotle',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '389',
		namn: 'Torterra',
		type: ['Grass', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '390',
		namn: 'Chimchar',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '391',
		namn: 'Monferno',
		type: ['Fire', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '392',
		namn: 'Infernape',
		type: ['Fire', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '393',
		namn: 'Piplup',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '394',
		namn: 'Prinplup',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '395',
		namn: 'Empoleon',
		type: ['Water', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '396',
		namn: 'Starly',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '397',
		namn: 'Staravia',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '398',
		namn: 'Staraptor',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '399',
		namn: 'Bidoof',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '400',
		namn: 'Bibarel',
		type: ['Normal', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '401',
		namn: 'Kricketot',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '402',
		namn: 'Kricketune',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '403',
		namn: 'Shinx',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '404',
		namn: 'Luxio',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '405',
		namn: 'Luxray',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '406',
		namn: 'Budew',
		type: ['Grass', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '407',
		namn: 'Roserade',
		type: ['Grass', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '408',
		namn: 'Cranidos',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '409',
		namn: 'Rampardos',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '410',
		namn: 'Shieldon',
		type: ['Rock', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '411',
		namn: 'Bastiodon',
		type: ['Rock', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '412',
		namn: 'Burmy',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '413',
		namn: 'Wormadam',
		type: ['Bug', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '413G',
		namn: 'Wormadam',
		type: ['Bug', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '413S',
		namn: 'Wormadam',
		type: ['Bug', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '414',
		namn: 'Mothim',
		type: ['Bug', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '415',
		namn: 'Combee',
		type: ['Bug', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '416',
		namn: 'Vespiquen',
		type: ['Bug', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '417',
		namn: 'Pachirisu',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '418',
		namn: 'Buizel',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '419',
		namn: 'Floatzel',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '420',
		namn: 'Cherubi',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '421',
		namn: 'Cherrim',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '422',
		namn: 'Shellos',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '423',
		namn: 'Gastrodon',
		type: ['Water', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '424',
		namn: 'Ambipom',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '425',
		namn: 'Drifloon',
		type: ['Ghost', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '426',
		namn: 'Drifblim',
		type: ['Ghost', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '427',
		namn: 'Buneary',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '428',
		namn: 'Lopunny',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '429',
		namn: 'Mismagius',
		type: ['Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '430',
		namn: 'Honchkrow',
		type: ['Dark', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '431',
		namn: 'Glameow',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '432',
		namn: 'Purugly',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '433',
		namn: 'Chingling',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '434',
		namn: 'Stunky',
		type: ['Poison', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '435',
		namn: 'Skuntank',
		type: ['Poison', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '436',
		namn: 'Bronzor',
		type: ['Steel', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '437',
		namn: 'Bronzong',
		type: ['Steel', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '438',
		namn: 'Bonsly',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '439',
		namn: 'Mime Jr.',
		type: ['Psychic', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '440',
		namn: 'Happiny',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '441',
		namn: 'Chatot',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '442',
		namn: 'Spiritomb',
		type: ['Ghost', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '443',
		namn: 'Gible',
		type: ['Dragon', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '444',
		namn: 'Gabite',
		type: ['Dragon', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '445',
		namn: 'Garchomp',
		type: ['Dragon', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '446',
		namn: 'Munchlax',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '447',
		namn: 'Riolu',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '448',
		namn: 'Lucario',
		type: ['Fighting', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '449',
		namn: 'Hippopotas',
		type: ['Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '450',
		namn: 'Hippowdon',
		type: ['Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '451',
		namn: 'Skorupi',
		type: ['Poison', 'Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '452',
		namn: 'Drapion',
		type: ['Poison', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '453',
		namn: 'Croagunk',
		type: ['Poison', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '454',
		namn: 'Toxicroak',
		type: ['Poison', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '455',
		namn: 'Carnivine',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '456',
		namn: 'Finneon',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '457',
		namn: 'Lumineon',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '458',
		namn: 'Mantyke',
		type: ['Water', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '459',
		namn: 'Snover',
		type: ['Grass', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '460',
		namn: 'Abomasnow',
		type: ['Grass', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '461',
		namn: 'Weavile',
		type: ['Dark', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '462',
		namn: 'Magnezone',
		type: ['Electric', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '463',
		namn: 'Lickilicky',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '464',
		namn: 'Rhyperior',
		type: ['Ground', 'Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '465',
		namn: 'Tangrowth',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '466',
		namn: 'Electivire',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '467',
		namn: 'Magmortar',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '468',
		namn: 'Togekiss',
		type: ['Fairy', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '469',
		namn: 'Yanmega',
		type: ['Bug', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '470',
		namn: 'Leafeon',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '471',
		namn: 'Glaceon',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '472',
		namn: 'Gliscor',
		type: ['Ground', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '473',
		namn: 'Mamoswine',
		type: ['Ice', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '474',
		namn: 'Porygon-Z',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '475',
		namn: 'Gallade',
		type: ['Psychic', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '476',
		namn: 'Probopass',
		type: ['Rock', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '477',
		namn: 'Dusknoir',
		type: ['Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '478',
		namn: 'Froslass',
		type: ['Ice', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '479',
		namn: 'Rotom',
		type: ['Electric', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '480',
		namn: 'Uxie',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '481',
		namn: 'Mesprit',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '482',
		namn: 'Azelf',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '483',
		namn: 'Dialga',
		type: ['Steel', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '484',
		namn: 'Palkia',
		type: ['Water', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '485',
		namn: 'Heatran',
		type: ['Fire', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '486',
		namn: 'Regigigas',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '487',
		namn: 'Giratina',
		type: ['Ghost', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '488',
		namn: 'Cresselia',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '489',
		namn: 'Phione',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '490',
		namn: 'Manaphy',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '491',
		namn: 'Darkrai',
		type: ['Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '492',
		namn: 'Shaymin',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '493',
		namn: 'Arceus',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '494',
		namn: 'Victini',
		type: ['Psychic', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '495',
		namn: 'Snivy',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '496',
		namn: 'Servine',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '497',
		namn: 'Serperior',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '498',
		namn: 'Tepig',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '499',
		namn: 'Pignite',
		type: ['Fire', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '500',
		namn: 'Emboar',
		type: ['Fire', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '501',
		namn: 'Oshawott',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '502',
		namn: 'Dewott',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '503',
		namn: 'Samurott',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '504',
		namn: 'Patrat',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '505',
		namn: 'Watchog',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '506',
		namn: 'Lillipup',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '507',
		namn: 'Herdier',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '508',
		namn: 'Stoutland',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '509',
		namn: 'Purrloin',
		type: ['Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '510',
		namn: 'Liepard',
		type: ['Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '511',
		namn: 'Pansage',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '512',
		namn: 'Simisage',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '513',
		namn: 'Pansear',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '514',
		namn: 'Simisear',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '515',
		namn: 'Panpour',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '516',
		namn: 'Simipour',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '517',
		namn: 'Munna',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '518',
		namn: 'Musharna',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '519',
		namn: 'Pidove',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '520',
		namn: 'Tranquill',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '521',
		namn: 'Unfezant',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '522',
		namn: 'Blitzle',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '523',
		namn: 'Zebstrika',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '524',
		namn: 'Roggenrola',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '525',
		namn: 'Boldore',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '526',
		namn: 'Gigalith',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '527',
		namn: 'Woobat',
		type: ['Psychic', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '528',
		namn: 'Swoobat',
		type: ['Psychic', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '529',
		namn: 'Drilbur',
		type: ['Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '530',
		namn: 'Excadrill',
		type: ['Ground', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '531',
		namn: 'Audino',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '532',
		namn: 'Timburr',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '533',
		namn: 'Gurdurr',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '534',
		namn: 'Conkeldurr',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '535',
		namn: 'Tympole',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '536',
		namn: 'Palpitoad',
		type: ['Water', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '537',
		namn: 'Seismitoad',
		type: ['Water', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '538',
		namn: 'Throh',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '539',
		namn: 'Sawk',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '540',
		namn: 'Sewaddle',
		type: ['Bug', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '541',
		namn: 'Swadloon',
		type: ['Bug', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '542',
		namn: 'Leavanny',
		type: ['Bug', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '543',
		namn: 'Venipede',
		type: ['Bug', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '544',
		namn: 'Whirlipede',
		type: ['Bug', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '545',
		namn: 'Scolipede',
		type: ['Bug', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '546',
		namn: 'Cottonee',
		type: ['Grass', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '547',
		namn: 'Whimsicott',
		type: ['Grass', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '548',
		namn: 'Petilil',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '549',
		namn: 'Lilligant',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '550',
		namn: 'Basculin',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '551',
		namn: 'Sandile',
		type: ['Ground', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '552',
		namn: 'Krokorok',
		type: ['Ground', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '553',
		namn: 'Krookodile',
		type: ['Ground', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '554',
		namn: 'Darumaka',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '555',
		namn: 'Darmanitan',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '556',
		namn: 'Maractus',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '557',
		namn: 'Dwebble',
		type: ['Bug', 'Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '558',
		namn: 'Crustle',
		type: ['Bug', 'Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '559',
		namn: 'Scraggy',
		type: ['Dark', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '560',
		namn: 'Scrafty',
		type: ['Dark', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '561',
		namn: 'Sigilyph',
		type: ['Psychic', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '562',
		namn: 'Yamask',
		type: ['Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '563',
		namn: 'Cofagrigus',
		type: ['Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '564',
		namn: 'Tirtouga',
		type: ['Water', 'Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '565',
		namn: 'Carracosta',
		type: ['Water', 'Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '566',
		namn: 'Archen',
		type: ['Rock', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '567',
		namn: 'Archeops',
		type: ['Rock', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '568',
		namn: 'Trubbish',
		type: ['Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '569',
		namn: 'Garbodor',
		type: ['Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '570',
		namn: 'Zorua',
		type: ['Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '571',
		namn: 'Zoroark',
		type: ['Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '572',
		namn: 'Minccino',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '573',
		namn: 'Cinccino',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '574',
		namn: 'Gothita',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '575',
		namn: 'Gothorita',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '576',
		namn: 'Gothitelle',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '577',
		namn: 'Solosis',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '578',
		namn: 'Duosion',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '579',
		namn: 'Reuniclus',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '580',
		namn: 'Ducklett',
		type: ['Water', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '581',
		namn: 'Swanna',
		type: ['Water', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '582',
		namn: 'Vanillite',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '583',
		namn: 'Vanillish',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '584',
		namn: 'Vanilluxe',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '585',
		namn: 'Deerling',
		type: ['Normal', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '586',
		namn: 'Sawsbuck',
		type: ['Normal', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '587',
		namn: 'Emolga',
		type: ['Electric', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '588',
		namn: 'Karrablast',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '589',
		namn: 'Escavalier',
		type: ['Bug', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '590',
		namn: 'Foongus',
		type: ['Grass', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '591',
		namn: 'Amoonguss',
		type: ['Grass', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '592',
		namn: 'Frillish',
		type: ['Water', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '593',
		namn: 'Jellicent',
		type: ['Water', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '594',
		namn: 'Alomomola',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '595',
		namn: 'Joltik',
		type: ['Bug', 'Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '596',
		namn: 'Galvantula',
		type: ['Bug', 'Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '597',
		namn: 'Ferroseed',
		type: ['Grass', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '598',
		namn: 'Ferrothorn',
		type: ['Grass', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '599',
		namn: 'Klink',
		type: ['Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '600',
		namn: 'Klang',
		type: ['Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '601',
		namn: 'Klinklang',
		type: ['Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '602',
		namn: 'Tynamo',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '603',
		namn: 'Eelektrik',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '604',
		namn: 'Eelektross',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '605',
		namn: 'Elgyem',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '606',
		namn: 'Beheeyem',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '607',
		namn: 'Litwick',
		type: ['Ghost', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '608',
		namn: 'Lampent',
		type: ['Ghost', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '609',
		namn: 'Chandelure',
		type: ['Ghost', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '610',
		namn: 'Axew',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '611',
		namn: 'Fraxure',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '612',
		namn: 'Haxorus',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '613',
		namn: 'Cubchoo',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '614',
		namn: 'Beartic',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '615',
		namn: 'Cryogonal',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '616',
		namn: 'Shelmet',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '617',
		namn: 'Accelgor',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '618',
		namn: 'Stunfisk',
		type: ['Ground', 'Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '619',
		namn: 'Mienfoo',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '620',
		namn: 'Mienshao',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '621',
		namn: 'Druddigon',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '622',
		namn: 'Golett',
		type: ['Ground', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '623',
		namn: 'Golurk',
		type: ['Ground', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '624',
		namn: 'Pawniard',
		type: ['Dark', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '625',
		namn: 'Bisharp',
		type: ['Dark', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '626',
		namn: 'Bouffalant',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '627',
		namn: 'Rufflet',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '628',
		namn: 'Braviary',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '629',
		namn: 'Vullaby',
		type: ['Dark', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '630',
		namn: 'Mandibuzz',
		type: ['Dark', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '631',
		namn: 'Heatmor',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '632',
		namn: 'Durant',
		type: ['Bug', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '633',
		namn: 'Deino',
		type: ['Dark', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '634',
		namn: 'Zweilous',
		type: ['Dark', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '635',
		namn: 'Hydreigon',
		type: ['Dark', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '636',
		namn: 'Larvesta',
		type: ['Bug', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '637',
		namn: 'Volcarona',
		type: ['Bug', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '638',
		namn: 'Cobalion',
		type: ['Steel', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '639',
		namn: 'Terrakion',
		type: ['Rock', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '640',
		namn: 'Virizion',
		type: ['Grass', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '641',
		namn: 'Tornadus',
		type: ['Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '642',
		namn: 'Thundurus',
		type: ['Electric', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '643',
		namn: 'Reshiram',
		type: ['Dragon', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '644',
		namn: 'Zekrom',
		type: ['Dragon', 'Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '645',
		namn: 'Landorus',
		type: ['Ground', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '646',
		namn: 'Kyurem',
		type: ['Dragon', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '647',
		namn: 'Keldeo',
		type: ['Water', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '648',
		namn: 'Meloetta',
		type: ['Normal', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '649',
		namn: 'Genesect',
		type: ['Bug', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '650',
		namn: 'Chespin',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '651',
		namn: 'Quilladin',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '652',
		namn: 'Chesnaught',
		type: ['Grass', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '653',
		namn: 'Fennekin',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '654',
		namn: 'Braixen',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '655',
		namn: 'Delphox',
		type: ['Fire', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '656',
		namn: 'Froakie',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '657',
		namn: 'Frogadier',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '658',
		namn: 'Greninja',
		type: ['Water', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '659',
		namn: 'Bunnelby',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '660',
		namn: 'Diggersby',
		type: ['Normal', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '661',
		namn: 'Fletchling',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '662',
		namn: 'Fletchinder',
		type: ['Fire', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '663',
		namn: 'Talonflame',
		type: ['Fire', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '664',
		namn: 'Scatterbug',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '665',
		namn: 'Spewpa',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '666',
		namn: 'Vivillon',
		type: ['Bug', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '667',
		namn: 'Litleo',
		type: ['Fire', 'Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '668',
		namn: 'Pyroar',
		type: ['Fire', 'Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '669',
		namn: 'Flabébé',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '670',
		namn: 'Floette',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '671',
		namn: 'Florges',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '672',
		namn: 'Skiddo',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '673',
		namn: 'Gogoat',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '674',
		namn: 'Pancham',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '675',
		namn: 'Pangoro',
		type: ['Fighting', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '676',
		namn: 'Furfrou',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '677',
		namn: 'Espurr',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '678',
		namn: 'Meowstic',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '679',
		namn: 'Honedge',
		type: ['Steel', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '680',
		namn: 'Doublade',
		type: ['Steel', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '681',
		namn: 'Aegislash',
		type: ['Steel', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '682',
		namn: 'Spritzee',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '683',
		namn: 'Aromatisse',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '684',
		namn: 'Swirlix',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '685',
		namn: 'Slurpuff',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '686',
		namn: 'Inkay',
		type: ['Dark', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '687',
		namn: 'Malamar',
		type: ['Dark', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '688',
		namn: 'Binacle',
		type: ['Rock', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '689',
		namn: 'Barbaracle',
		type: ['Rock', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '690',
		namn: 'Skrelp',
		type: ['Poison', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '691',
		namn: 'Dragalge',
		type: ['Poison', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '692',
		namn: 'Clauncher',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '693',
		namn: 'Clawitzer',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '694',
		namn: 'Helioptile',
		type: ['Electric', 'Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '695',
		namn: 'Heliolisk',
		type: ['Electric', 'Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '696',
		namn: 'Tyrunt',
		type: ['Rock', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '697',
		namn: 'Tyrantrum',
		type: ['Rock', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '698',
		namn: 'Amaura',
		type: ['Rock', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '699',
		namn: 'Aurorus',
		type: ['Rock', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '700',
		namn: 'Sylveon',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '701',
		namn: 'Hawlucha',
		type: ['Fighting', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '702',
		namn: 'Dedenne',
		type: ['Electric', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '703',
		namn: 'Carbink',
		type: ['Rock', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '704',
		namn: 'Goomy',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '705',
		namn: 'Sliggoo',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '706',
		namn: 'Goodra',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '707',
		namn: 'Klefki',
		type: ['Steel', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '708',
		namn: 'Phantump',
		type: ['Ghost', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '709',
		namn: 'Trevenant',
		type: ['Ghost', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '710',
		namn: 'Pumpkaboo',
		type: ['Ghost', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '711',
		namn: 'Gourgeist',
		type: ['Ghost', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '712',
		namn: 'Bergmite',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '713',
		namn: 'Avalugg',
		type: ['Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '714',
		namn: 'Noibat',
		type: ['Flying', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '715',
		namn: 'Noivern',
		type: ['Flying', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '716',
		namn: 'Xerneas',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '717',
		namn: 'Yveltal',
		type: ['Dark', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '718',
		namn: 'Zygarde',
		type: ['Dragon', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '719',
		namn: 'Diancie',
		type: ['Rock', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '720',
		namn: 'Hoopa',
		type: ['Psychic', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '721',
		namn: 'Volcanion',
		type: ['Fire', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '722',
		namn: 'Rowlet',
		type: ['Grass', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '723',
		namn: 'Dartrix',
		type: ['Grass', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '724',
		namn: 'Decidueye',
		type: ['Grass', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '725',
		namn: 'Litten',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '726',
		namn: 'Torracat',
		type: ['Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '727',
		namn: 'Incineroar',
		type: ['Fire', 'Dark'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '728',
		namn: 'Popplio',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '729',
		namn: 'Brionne',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '730',
		namn: 'Primarina',
		type: ['Water', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '731',
		namn: 'Pikipek',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '732',
		namn: 'Trumbeak',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '733',
		namn: 'Toucannon',
		type: ['Normal', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '734',
		namn: 'Yungoos',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '735',
		namn: 'Gumshoos',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '736',
		namn: 'Grubbin',
		type: ['Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '737',
		namn: 'Charjabug',
		type: ['Bug', 'Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '738',
		namn: 'Vikavolt',
		type: ['Bug', 'Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '739',
		namn: 'Crabrawler',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '740',
		namn: 'Crabominable',
		type: ['Fighting', 'Ice'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '741',
		namn: 'Oricorio',
		type: ['Fire', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '742',
		namn: 'Cutiefly',
		type: ['Bug', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '743',
		namn: 'Ribombee',
		type: ['Bug', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '744',
		namn: 'Rockruff',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '745',
		namn: 'Lycanroc',
		type: ['Rock'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '746',
		namn: 'Wishiwashi',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '747',
		namn: 'Mareanie',
		type: ['Poison', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '748',
		namn: 'Toxapex',
		type: ['Poison', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '749',
		namn: 'Mudbray',
		type: ['Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '750',
		namn: 'Mudsdale',
		type: ['Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '751',
		namn: 'Dewpider',
		type: ['Water', 'Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '752',
		namn: 'Araquanid',
		type: ['Water', 'Bug'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '753',
		namn: 'Fomantis',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '754',
		namn: 'Lurantis',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '755',
		namn: 'Morelull',
		type: ['Grass', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '756',
		namn: 'Shiinotic',
		type: ['Grass', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '757',
		namn: 'Salandit',
		type: ['Poison', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '758',
		namn: 'Salazzle',
		type: ['Poison', 'Fire'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '759',
		namn: 'Stufful',
		type: ['Normal', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '760',
		namn: 'Bewear',
		type: ['Normal', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '761',
		namn: 'Bounsweet',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '762',
		namn: 'Steenee',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '763',
		namn: 'Tsareena',
		type: ['Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '764',
		namn: 'Comfey',
		type: ['Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '765',
		namn: 'Oranguru',
		type: ['Normal', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '766',
		namn: 'Passimian',
		type: ['Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '767',
		namn: 'Wimpod',
		type: ['Bug', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '768',
		namn: 'Golisopod',
		type: ['Bug', 'Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '769',
		namn: 'Sandygast',
		type: ['Ghost', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '770',
		namn: 'Palossand',
		type: ['Ghost', 'Ground'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '771',
		namn: 'Pyukumuku',
		type: ['Water'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '772',
		namn: 'Type: Null',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '773',
		namn: 'Silvally',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '774',
		namn: 'Minior',
		type: ['Rock', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '775',
		namn: 'Komala',
		type: ['Normal'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '776',
		namn: 'Turtonator',
		type: ['Fire', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '777',
		namn: 'Togedemaru',
		type: ['Electric', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '778',
		namn: 'Mimikyu',
		type: ['Ghost', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '779',
		namn: 'Bruxish',
		type: ['Water', 'Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '780',
		namn: 'Drampa',
		type: ['Normal', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '781',
		namn: 'Dhelmise',
		type: ['Ghost', 'Grass'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '782',
		namn: 'Jangmo-o',
		type: ['Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '783',
		namn: 'Hakamo-o',
		type: ['Dragon', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '784',
		namn: 'Kommo-o',
		type: ['Dragon', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '785',
		namn: 'Tapu Koko',
		type: ['Electric', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '786',
		namn: 'Tapu Lele',
		type: ['Psychic', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '787',
		namn: 'Tapu Bulu',
		type: ['Grass', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '788',
		namn: 'Tapu Fini',
		type: ['Water', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '789',
		namn: 'Cosmog',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '790',
		namn: 'Cosmoem',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '791',
		namn: 'Solgaleo',
		type: ['Psychic', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '792',
		namn: 'Lunala',
		type: ['Psychic', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '793',
		namn: 'Nihilego',
		type: ['Rock', 'Poison'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '794',
		namn: 'Buzzwole',
		type: ['Bug', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '795',
		namn: 'Pheromosa',
		type: ['Bug', 'Fighting'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '796',
		namn: 'Xurkitree',
		type: ['Electric'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '797',
		namn: 'Celesteela',
		type: ['Steel', 'Flying'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '798',
		namn: 'Kartana',
		type: ['Grass', 'Steel'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '799',
		namn: 'Guzzlord',
		type: ['Dark', 'Dragon'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '800',
		namn: 'Necrozma',
		type: ['Psychic'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '801',
		namn: 'Magearna',
		type: ['Steel', 'Fairy'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	},{
		nummer: '802',
		namn: 'Marshadow',
		type: ['Fighting', 'Ghost'],
		moves: [],
		attack: ['', ''],
		defend: ['', ''],
		svg: '',
		lastevolve: false
	}
];














