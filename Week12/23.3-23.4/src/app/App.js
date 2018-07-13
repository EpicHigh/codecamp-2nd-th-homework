import React, {Component} from "react";
import RandomBox from "../components/RandomBox";
import {injectGlobal} from "styled-components";
import colors from "../styles/colors";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import unirest from "unirest";

library.add(faQuoteLeft);
library.add(faQuoteRight);

class App extends Component {
	onButtonClick = () => {
		const color = this.randomColor();
		this.fetchQuote();
		this.setState({color: color, click: true});
		injectGlobal`
		body {
		background-color: ${color || `black`};`;
	};

	constructor() {
		super();
		this.state = {
			quote: ``,
			author: ``,
			color: this.randomColor(),
			click: false
		};
	}

	componentWillMount() {
		injectGlobal`
		body {
		background-color: ${this.state.color || `black`};
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90vh;
		font-family: 'avenir next', avenir, sans-serif;
		transition: background-color 2s ease-out;
	}`;
	}

	fetchQuote() {
		unirest
		.post(
			"https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1"
		)
		.header(
			"X-Mashape-Key",
			"W8OecKLiY1mshKNM8n9eJZHl4kxfp1y9PtgjsnaMjJBqPmBPSc"
		)
		.header("Content-Type", "application/x-www-form-urlencoded")
		.header("Accept", "application/json")
		.end(
			function (result) {
				result.body[0].author && result.body[0].quote
					? this.setState({
						quote: result.body[0].quote,
						author: result.body[0].author,
						click: false
					})
					: this.setState({
						quote: `Doctors become doctors because of disillusionment`,
						author: `Anonymous`,
						click: false
					});
			}.bind(this)
		);
	}

	randomColor() {
		return colors[Math.floor(Math.random() * colors.length)];
	}

	componentDidMount() {
		this.fetchQuote();
	}

	render() {
		return (
			<div>
				<RandomBox
					userClick={this.onButtonClick}
					fontColor={this.state.color || `black`}
					isClick={this.state.click}
					quote={this.state.quote}
					author={this.state.author}
				/>
			</div>
		);
	}

}

export default App;
