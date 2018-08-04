import React from 'react';

class Admin extends React.Component {
	render() {
		return (
			<footer>
				<button onClick={this.props.chargerExemple}>Remplir</button>
			</footer>
		)
	}
}

export default Admin;