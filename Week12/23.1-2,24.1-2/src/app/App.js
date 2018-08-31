import React, {Component} from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import Pokemon from "../db/pokemon";
import Scroll from "../components/Scroll";
import Profile from "../components/Profile";
import "./App.css";

class App extends Component {
	onSearchChange = event => {
		this.setState({inputBox: event.target.value});
	};

	constructor() {
		super();
		this.state = {
			Pokemon: Pokemon,
			inputBox: ``,
			item: ``
		};
	}

	componentDidMount() {
		fetch(`https://randomuser.me/api/`)
		.then(res => res.json())
		.then(res => this.setState({item: res.results[0]}))
		.catch(err => console.log(err));
	}

	render() {
		const filteredPokemon = this.state.Pokemon.filter(Pokemon => {
			return String(Pokemon.name).includes(String(this.state.inputBox));
		});
		return (
			<div className="App">
				<Navbar/>
				<Profile
					firstname={this.state.item.name && this.state.item.name.first}
					lastname={this.state.item.name && this.state.item.name.last}
					gender={this.state.item.gender}
					email={this.state.item.email}
					image={this.state.item.picture && this.state.item.picture.large}
				/>
				<SearchBar searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList Pokemon={filteredPokemon}/>
				</Scroll>
			</div>
		);
	}
}

export default App;