import React from "react";
import "../styles/Card.css";

const Card = ({card, alt, image, name, type}) => {
	return (
		<div className={card}>
			<div>
				<img alt={alt} src={image} width="125"/>
			</div>
			<div className="Content">
				<p>{name}</p>
				<p>ชนิด: {type}</p>
			</div>
		</div>
	);
};
export default Card;