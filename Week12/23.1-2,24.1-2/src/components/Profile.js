import React from "react";

const Profile = ({firstname, gender, email, image, lastname}) => {
	return (
		<div>
			<main className="mw6 center">
				<article className="dt w-100 bb b--black-05 pb2 mt2">
					<div className="dtc w2 w3-ns v-mid">
						<img src={image} alt="Profile" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
					</div>
					<div className="dtc v-mid pl3">
						<h1 className="f6 f5-ns fw6 lh-title black mv0">
							name: {firstname} {lastname} gender: {gender}
						</h1>
						<h2 className="f6 fw4 mt0 mb0 black-60">{email}</h2>
					</div>
				</article>
			</main>
		</div>
	);
};

export default Profile;
