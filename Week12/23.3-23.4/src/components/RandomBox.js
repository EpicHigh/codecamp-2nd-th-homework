import React from "react";
import {ButtonBox, QuoteAuthor, QuoteBox, QuoteText} from "../styles/randomBoxStyles"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const RandomBox = ({fontColor, userClick, quote, author, isClick}) => {
	return (
		<QuoteBox key="QuoteBox" className="shadow-5" qbfontColor={fontColor}>
			<QuoteText key="QuoteText" click={isClick}>
				<FontAwesomeIcon icon="quote-left"/>
				<span key="quote"> {quote} </span>
				<FontAwesomeIcon icon="quote-right"/>
			</QuoteText>
			<QuoteAuthor key="QuoteAuthor" click={isClick}>
				<span key="author">- {author}</span>
			</QuoteAuthor>
			<ButtonBox
				key="ButtonBox"
				bgColor={fontColor}
				onClick={userClick}
				className="f5 link dim br3 ph3 pv2 dib white shadow-1"
			>
				New quote
			</ButtonBox>
		</QuoteBox>
	);
};

export default RandomBox;