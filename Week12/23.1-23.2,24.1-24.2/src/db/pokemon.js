const Pokemon = [
	{
		name: `ฟุชิงิดาเนะ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png`,
		image_alt: `An Image of Bulbasaur`,
		type: `พืช, พิษ`,
		div_class: `Card-Bulbasaur`
	},
	{
		name: `ฟุชิงิโซ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png`,
		image_alt: `An Image of Ivysaur`,
		type: `พืช, พิษ`,
		div_class: `Card-Bulbasaur`
	},
	{
		name: `ฟุชิงิบานะ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png`,
		image_alt: `An Image of Venusaur`,
		type: `พืช, พิษ`,
		div_class: `Card-Bulbasaur`
	},
	{
		name: `ฮิโตคาเงะ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png`,
		image_alt: `An Image of Charmander`,
		type: `ไฟ`,
		div_class: `Card-Charmander`
	},
	{
		name: `ลิซาร์โด`,
		image: `https://cdn.bulbagarden.net/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png`,
		image_alt: `An Image of Charmeleon`,
		type: `ไฟ`,
		div_class: `Card-Charmander`
	},
	{
		name: `ลิซาร์ดอน`,
		image: `https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png`,
		image_alt: `An Image of Charizard`,
		type: `ไฟ, บิน`
	},
	{
		name: `เซนิกาเมะ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png`,
		image_alt: `An Image of Squirtle`,
		type: `น้ำ`
	},
	{
		name: `คาเมล`,
		image: `https://cdn.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png`,
		image_alt: `An Image of Wartortle`,
		type: `น้ำ`
	},
	{
		name: `คาเม็กซ์`,
		image: `https://cdn.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png`,
		image_alt: `An Image of Blastoise`,
		type: `น้ำ`
	},
	{
		name: `คาเตอร์ปี`,
		image: `https://cdn.bulbagarden.net/upload/thumb/5/5d/010Caterpie.png/250px-010Caterpie.png`,
		image_alt: `An Image of Blastoise`,
		type: `แมลง`
	},
	{
		name: `ทรานเซล`,
		image: `https://cdn.bulbagarden.net/upload/thumb/c/cd/011Metapod.png/250px-011Metapod.png`,
		image_alt: `An Image of Metapod`,
		type: `แมลง`
	},
	{
		name: `บัตเตอร์ฟรี`,
		image: `https://cdn.bulbagarden.net/upload/thumb/d/d1/012Butterfree.png/250px-012Butterfree.png`,
		image_alt: `An Image of Butterfree`,
		type: `แมลง, บิน`
	},
	{
		name: `บีเดิล`,
		image: `https://cdn.bulbagarden.net/upload/thumb/d/df/013Weedle.png/250px-013Weedle.png`,
		image_alt: `An Image of Weedle`,
		type: `แมลง, พิษ`
	},
	{
		name: `โคคูน`,
		image: `https://cdn.bulbagarden.net/upload/thumb/f/f0/014Kakuna.png/250px-014Kakuna.png`,
		image_alt: `An Image of Kakuna`,
		type: `แมลง, พิษ`
	},
	{
		name: `สเปียร์`,
		image: `https://cdn.bulbagarden.net/upload/thumb/6/61/015Beedrill.png/250px-015Beedrill.png`,
		image_alt: `An Image of Beedrill`,
		type: `แมลง, พิษ`
	},
	{
		name: `ป๊อปโปะ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/5/55/016Pidgey.png/250px-016Pidgey.png`,
		image_alt: `An Image of Pidgey`,
		type: `ปกติ, บิน`
	},
	{
		name: `พีเจียน`,
		image: `https://cdn.bulbagarden.net/upload/thumb/7/7a/017Pidgeotto.png/250px-017Pidgeotto.png`,
		image_alt: `An Image of Pidgeotto`,
		type: `ปกติ, บิน`
	},
	{
		name: `พีจ็อต`,
		image: `https://cdn.bulbagarden.net/upload/thumb/5/57/018Pidgeot.png/250px-018Pidgeot.png`,
		image_alt: `An Image of Pidgeot`,
		type: `ปกติ, บิน`
	},
	{
		name: `โครัตต้า`,
		image: `https://cdn.bulbagarden.net/upload/thumb/4/46/019Rattata.png/250px-019Rattata.png`,
		image_alt: `An Image of Rattata`,
		type: `ปกติ`
	},
	{
		name: `รัตต้า`,
		image: `https://cdn.bulbagarden.net/upload/thumb/f/f4/020Raticate.png/250px-020Raticate.png`,
		image_alt: `An Image of Raticate`,
		type: `ปกติ`
	},
	{
		name: `โอนิสึซึเมะ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/8/8b/021Spearow.png/250px-021Spearow.png`,
		image_alt: `An Image of Spearow`,
		type: `ปกติ, บิน`
	},
	{
		name: `โอนิดริล	`,
		image: `https://cdn.bulbagarden.net/upload/thumb/a/a0/022Fearow.png/250px-022Fearow.png`,
		image_alt: `An Image of Fearow`,
		type: `ปกติ, บิน`
	},
	{
		name: `อาร์โบ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/f/fa/023Ekans.png/250px-023Ekans.png`,
		image_alt: `An Image of Ekans`,
		type: `พิษ`
	},
	{
		name: `อาร์บ็อก	`,
		image: `https://cdn.bulbagarden.net/upload/thumb/c/cd/024Arbok.png/250px-024Arbok.png`,
		image_alt: `An Image of Arbok`,
		type: `พิษ`
	},
	{
		name: `พิคาชู	`,
		image: `https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png`,
		image_alt: `An Image of Pikachu`,
		type: `ไฟฟ้า`
	},
	{
		name: `ไรชู`,
		image: `https://cdn.bulbagarden.net/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png`,
		image_alt: `An Image of Raichu`,
		type: `ไฟฟ้า`
	},
	{
		name: `แซนด์	`,
		image: `https://cdn.bulbagarden.net/upload/thumb/9/9e/027Sandshrew.png/250px-027Sandshrew.png`,
		image_alt: `An Image of Sandshrew`,
		type: `ดิน`
	},
	{
		name: `แซนด์พัน	`,
		image: `https://cdn.bulbagarden.net/upload/thumb/0/0b/028Sandslash.png/250px-028Sandslash.png`,
		image_alt: `An Image of Sandslash`,
		type: `ดิน`
	},
	{
		name: `นิโดรัน♀	`,
		image: `https://cdn.bulbagarden.net/upload/thumb/8/81/029Nidoran.png/250px-029Nidoran.png`,
		image_alt: `An Image of Nidoran♀`,
		type: `พิษ`
	},
	{
		name: `นิโดรีนา♀`,
		image: `https://cdn.bulbagarden.net/upload/thumb/c/cd/030Nidorina.png/250px-030Nidorina.png`,
		image_alt: `An Image of Nidorina♀`,
		type: `พิษ`
	},
	{
		name: `นิโดควีน♀`,
		image: `https://cdn.bulbagarden.net/upload/thumb/b/bf/031Nidoqueen.png/250px-031Nidoqueen.png`,
		image_alt: `An Image of Nidoqueen♀`,
		type: `พิษ, ดิน`
	},
	{
		name: `นิโดรัน♂	`,
		image: `https://cdn.bulbagarden.net/upload/thumb/4/4a/032Nidoran.png/250px-032Nidoran.png`,
		image_alt: `An Image of Nidoran♂`,
		type: `พิษ`
	},
	{
		name: `นิโดรีโน♂`,
		image: `https://cdn.bulbagarden.net/upload/thumb/9/9f/033Nidorino.png/250px-033Nidorino.png`,
		image_alt: `An Image of Nidorino♂`,
		type: `พิษ`
	},
	{
		name: `นิโดคิง♂`,
		image: `https://cdn.bulbagarden.net/upload/thumb/c/c6/034Nidoking.png/250px-034Nidoking.png`,
		image_alt: `An Image of Nidoking`,
		type: `พิษ, ดิน`
	},
	{
		name: `ปิปปี`,
		image: `https://cdn.bulbagarden.net/upload/thumb/f/f4/035Clefairy.png/250px-035Clefairy.png`,
		image_alt: `An Image of Clefairy`,
		type: `นางฟ้า`
	},
	{
		name: `ปิกซี`,
		image: `https://cdn.bulbagarden.net/upload/thumb/a/a9/036Clefable.png/250px-036Clefable.png`,
		image_alt: `An Image of Clefairy`,
		type: `นางฟ้า`
	},
	{
		name: `โรคอน`,
		image: `https://cdn.bulbagarden.net/upload/thumb/6/60/037Vulpix.png/250px-037Vulpix.png`,
		image_alt: `An Image of Vulpix`,
		type: `ไฟ`
	},
	{
		name: `คิวคอน`,
		image: `https://cdn.bulbagarden.net/upload/thumb/0/05/038Ninetales.png/250px-038Ninetales.png`,
		image_alt: `An Image of Ninetales`,
		type: `ไฟ`
	},
	{
		name: `พูริน`,
		image: `https://cdn.bulbagarden.net/upload/thumb/3/3e/039Jigglypuff.png/250px-039Jigglypuff.png`,
		image_alt: `An Image of Jigglypuff`,
		type: `ปกติ, นางฟ้า`
	},
	{
		name: `พูคุริน`,
		image: `https://cdn.bulbagarden.net/upload/thumb/9/92/040Wigglytuff.png/250px-040Wigglytuff.png`,
		image_alt: `An Image of Wigglytuff`,
		type: `ปกติ, นางฟ้า`
	},
	{
		name: `ซูแบต`,
		image: `https://cdn.bulbagarden.net/upload/thumb/d/da/041Zubat.png/250px-041Zubat.png`,
		image_alt: `An Image of Zubat`,
		type: `พิษ, บิน`
	},
	{
		name: `โกลแบ็ต`,
		image: `https://cdn.bulbagarden.net/upload/thumb/0/0c/042Golbat.png/250px-042Golbat.png`,
		image_alt: `An Image of Golbat`,
		type: `พิษ, บิน`
	},
	{
		name: `นาโซโนะคุสะ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/4/43/043Oddish.png/250px-043Oddish.png`,
		image_alt: `An Image of Oddish`,
		type: `พืช, พิษ`
	},
	{
		name: `คุไซฮานะ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/2/2a/044Gloom.png/250px-044Gloom.png`,
		image_alt: `An Image of Gloom`,
		type: `พืช, พิษ`
	},
	{
		name: `รัฟเฟรเซีย`,
		image: `https://cdn.bulbagarden.net/upload/thumb/6/6a/045Vileplume.png/250px-045Vileplume.png`,
		image_alt: `An Image of Vileplume`,
		type: `พืช, พิษ`
	},
	{
		name: `พาราส`,
		image: `https://cdn.bulbagarden.net/upload/thumb/d/d4/046Paras.png/250px-046Paras.png`,
		image_alt: `An Image of Paras`,
		type: `แมลง, พืช`
	},
	{
		name: `พาราเซ็กต์`,
		image: `https://cdn.bulbagarden.net/upload/thumb/8/80/047Parasect.png/250px-047Parasect.png`,
		image_alt: `An Image of Parasect`,
		type: `แมลง, พืช`
	},
	{
		name: `คอมปัง`,
		image: `https://cdn.bulbagarden.net/upload/thumb/a/ad/048Venonat.png/250px-048Venonat.png`,
		image_alt: `An Image of Venonat`,
		type: `แมลง, พิษ`
	},
	{
		name: `มอร์ฟอง`,
		image: `https://cdn.bulbagarden.net/upload/thumb/d/d3/049Venomoth.png/250px-049Venomoth.png`,
		image_alt: `An Image of Venomoth`,
		type: `แมลง, พิษ`
	},
	{
		name: `ดิกดา`,
		image: `https://cdn.bulbagarden.net/upload/thumb/3/31/050Diglett.png/250px-050Diglett.png`,
		image_alt: `An Image of Diglett`,
		type: `ดิน`
	},
	{
		name: `ดักทรีโอ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/e/e5/051Dugtrio.png/250px-051Dugtrio.png`,
		image_alt: `An Image of Dugtrio`,
		type: `ดิน`
	},
	{
		name: `เนียร์ธ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/d/d6/052Meowth.png/250px-052Meowth.png`,
		image_alt: `An Image of Meowth`,
		type: `ปกติ`
	},
	{
		name: `เพอร์เซียน`,
		image: `https://cdn.bulbagarden.net/upload/thumb/1/13/053Persian.png/250px-053Persian.png`,
		image_alt: `An Image of Persian`,
		type: `ปกติ`
	},
	{
		name: `โคดัก`,
		image: `https://cdn.bulbagarden.net/upload/thumb/5/53/054Psyduck.png/250px-054Psyduck.png`,
		image_alt: `An Image of Psyduck`,
		type: `น้ำ`
	},
	{
		name: `โกลดัก`,
		image: `https://cdn.bulbagarden.net/upload/thumb/f/fe/055Golduck.png/250px-055Golduck.png`,
		image_alt: `An Image of Golduck`,
		type: `น้ำ`
	},
	{
		name: `แมนคีย์`,
		image: `https://cdn.bulbagarden.net/upload/thumb/4/41/056Mankey.png/250px-056Mankey.png`,
		image_alt: `An Image of Mankey`,
		type: `ต่อสู้`
	},
	{
		name: `โอโกริซารุ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/9/9a/057Primeape.png/250px-057Primeape.png`,
		image_alt: `An Image of Primeape`,
		type: `ต่อสู้`
	},
	{
		name: `การ์ดี	`,
		image: `https://cdn.bulbagarden.net/upload/thumb/3/3d/058Growlithe.png/250px-058Growlithe.png`,
		image_alt: `An Image of Growlithe`,
		type: `ไฟ`
	},
	{
		name: `วินดี`,
		image: `https://cdn.bulbagarden.net/upload/thumb/b/b8/059Arcanine.png/250px-059Arcanine.png`,
		image_alt: `An Image of Arcanine`,
		type: `ไฟ`
	},
	{
		name: `เนียวโรโม`,
		image: `https://cdn.bulbagarden.net/upload/thumb/4/49/060Poliwag.png/250px-060Poliwag.png`,
		image_alt: `An Image of Poliwag`,
		type: `น้ำ`
	},
	{
		name: `เนียวโรโซ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/a/a9/061Poliwhirl.png/250px-061Poliwhirl.png`,
		image_alt: `An Image of Poliwhirl`,
		type: `น้ำ`
	},
	{
		name: `เนียวโรบอน`,
		image: `https://cdn.bulbagarden.net/upload/thumb/2/2d/062Poliwrath.png/250px-062Poliwrath.png`,
		image_alt: `An Image of Poliwrath`,
		type: `น้ำ, ต่อสู้`
	},
	{
		name: `เคซีย์`,
		image: `https://cdn.bulbagarden.net/upload/thumb/6/62/063Abra.png/250px-063Abra.png`,
		image_alt: `An Image of Poliwrath`,
		type: `พลังจิต`
	},
	{
		name: `ยุนเกเรอร์`,
		image: `https://cdn.bulbagarden.net/upload/thumb/9/97/064Kadabra.png/250px-064Kadabra.png`,
		image_alt: `An Image of Kadabra`,
		type: `พลังจิต`
	},
	{
		name: `ฟูดิน`,
		image: `https://cdn.bulbagarden.net/upload/thumb/c/cc/065Alakazam.png/250px-065Alakazam.png`,
		image_alt: `An Image of Alakazam`,
		type: `พลังจิต`
	},
	{
		name: `วันริกี`,
		image: `https://cdn.bulbagarden.net/upload/thumb/8/85/066Machop.png/250px-066Machop.png`,
		image_alt: `An Image of Machop`,
		type: `ต่อสู้`
	},
	{
		name: `โกริกี`,
		image: `https://cdn.bulbagarden.net/upload/thumb/8/8e/067Machoke.png/250px-067Machoke.png`,
		image_alt: `An Image of Machoke`,
		type: `ต่อสู้`
	},
	{
		name: `ไคริกี`,
		image: `https://cdn.bulbagarden.net/upload/thumb/8/8f/068Machamp.png/250px-068Machamp.png`,
		image_alt: `An Image of Machamp`,
		type: `ต่อสู้`
	},
	{
		name: `มาดัตสึโบมิ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/a/a2/069Bellsprout.png/250px-069Bellsprout.png`,
		image_alt: `An Image of Bellsprout`,
		type: `พืช, พิษ`
	},
	{
		name: `อุตสึดง`,
		image: `https://cdn.bulbagarden.net/upload/thumb/9/9f/070Weepinbell.png/250px-070Weepinbell.png`,
		image_alt: `An Image of Weepinbell`,
		type: `พืช, พิษ`
	},
	{
		name: `อุตสึบ็อต`,
		image: `https://cdn.bulbagarden.net/upload/thumb/b/be/071Victreebel.png/250px-071Victreebel.png`,
		image_alt: `An Image of Victreebel`,
		type: `พืช, พิษ`
	},
	{
		name: `เมโนคุราเงะ	`,
		image: `https://cdn.bulbagarden.net/upload/thumb/4/4e/072Tentacool.png/250px-072Tentacool.png`,
		image_alt: `An Image of Tentacool`,
		type: `น้ำ, พิษ`
	},
	{
		name: `โดคุคุราเงะ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/f/f6/073Tentacruel.png/250px-073Tentacruel.png`,
		image_alt: `An Image of Tentacruel`,
		type: `น้ำ, พิษ`
	},
	{
		name: `อิชิตสึบุเตะ`,
		image: `https://cdn.bulbagarden.net/upload/thumb/9/98/074Geodude.png/250px-074Geodude.png`,
		image_alt: `An Image of Geodude`,
		type: `หิน, ดิน`
	},
	{
		name: `โกโลน`,
		image: `https://cdn.bulbagarden.net/upload/thumb/7/75/075Graveler.png/250px-075Graveler.png`,
		image_alt: `An Image of Graveler`,
		type: `หิน, ดิน`
	},
	{
		name: `โกโลนยา	`,
		image: `https://cdn.bulbagarden.net/upload/thumb/f/f2/076Golem.png/250px-076Golem.png`,
		image_alt: `An Image of Golem`,
		type: `หิน, ดิน`
	},
	{
		name: `โพนีตา`,
		image: `https://cdn.bulbagarden.net/upload/thumb/3/3b/077Ponyta.png/250px-077Ponyta.png`,
		image_alt: `An Image of Ponyta`,
		type: `ไฟ`
	},
	{
		name: `แกลล็อป`,
		image: `https://cdn.bulbagarden.net/upload/thumb/3/3f/078Rapidash.png/250px-078Rapidash.png`,
		image_alt: `An Image of Rapidash`,
		type: `ไฟ`
	},
	{
		name: `ยาดอน`,
		image: `https://cdn.bulbagarden.net/upload/thumb/7/70/079Slowpoke.png/250px-079Slowpoke.png`,
		image_alt: `An Image of Slowpoke`,
		type: `น้ำ, พิษ`
	},
	{
		name: `ยาโดรัน`,
		image: `https://cdn.bulbagarden.net/upload/thumb/8/80/080Slowbro.png/250px-080Slowbro.png`,
		image_alt: `An Image of Slowbro`,
		type: `น้ำ, พิษ`
	},
	{
		name: `คอยล์`,
		image: `https://cdn.bulbagarden.net/upload/thumb/6/6c/081Magnemite.png/250px-081Magnemite.png`,
		image_alt: `An Image of Coil`,
		type: `ไฟฟ้า, เหล็ก`
	}
];

export default Pokemon;
