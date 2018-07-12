import React from "react";
import Card from "./Card";
import {cardColor} from "../scripts/cardColor";

const layout = ` dib br3 pa3 ma2 grow bw2 shadow-5`;

const CardList = ({Pokemon}) => {
	const pokemonMap = Pokemon.map((value, index) => {
		return (
			<Card
				image={Pokemon[index].image}
				alt={Pokemon[index].image_alt}
				name={Pokemon[index].name}
				type={Pokemon[index].type}
				card={cardColor(Pokemon[index].type) + layout}
				key={Pokemon[index].name}
			/>
		);
	});
	return pokemonMap;
};

export default CardList;
