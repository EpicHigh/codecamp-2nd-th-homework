import React from "react";

const SearchBar = ({searchChange}) => {
	return (
		<div>
			<div className="pb4-ns center mw6-ns measure">
				<input
					className="input-search"
					type="text"
					name="search"
					placeholder="Search image captions"
					id="search-box"
					onChange={searchChange}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
