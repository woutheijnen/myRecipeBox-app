import React from 'react';

class Header extends React.Component {
	convertPseudo = (pseudo) => {
		return /[aeouiy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;
	}

	render() {
		return (
			<header>
				<h1>La boîte à recette {this.convertPseudo(this.props.pseudo)}</h1>
			</header>
		)
	}
}

export default Header;