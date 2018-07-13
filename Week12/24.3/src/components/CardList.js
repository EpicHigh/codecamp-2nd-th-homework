import React from "react";
import Card from "./Card";

const CardList = ({ cardImage, imageClick }) => {
  const cardImageMap = cardImage.map((value,index) => {
    return (
      <Card
        key={index}
        cardImage={value.imgAnimated}
        cardDescription={value.description}
        imageClick={imageClick}
      />
    );
  });
  return cardImageMap;
};

export default CardList;
