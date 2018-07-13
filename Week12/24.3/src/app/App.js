import React, {Component} from "react";
import {injectGlobal} from "styled-components";
import CardList from "../components/CardList";
import {HSCard} from "../db/HSCard";
import {CardBox} from "../styles/CardBox";
import "../styles/button.css"

const image = `http://www.hearthstonetopdecks.com/wp-content/uploads/2015/11/Uldaman_Board.png`;

injectGlobal`
	body {
		background: url('${image}');
		background-size: cover;
		position: fixed;
		
	}`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardImage: this.shuffle(HSCard),
      cardImageRandom: []
    };
  }
  shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };
	onButtonClick = event => {
		event.preventDefault();
		const shuffleImage = this.shuffle(HSCard);
		this.setState({ cardImage: [...shuffleImage] })
	};
	onImageClick = event => {
		alert(event.target.alt)
	};
  render() {
    return (
    	<div >
        <CardBox >
          <CardList cardImage={this.state.cardImage} imageClick={this.onImageClick} />
        </CardBox>
		    <div className="hs-wrapper gold">
			    <a className="hs-button gold" href="">
            <span className="hs-border gold">
              <button className="hs-text gold" onClick={this.onButtonClick}>new deck</button>
            </span>
			    </a>
		    </div>
	    </div>
    );
  }
}

export default App;
