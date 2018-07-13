import React from "react";


const Card = ({ cardImage, cardDescription, imageClick }) => {
	return (
		<div className="w-20">
			<img src={cardImage} alt={cardDescription} style={{height: "18rem"}} onClick={imageClick}/>
		</div>
	)
};

export default Card