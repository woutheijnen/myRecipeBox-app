import React from 'react';

class Admin extends React.Component {
	render() {
		return (
			<footer>
				<button onClick={this.props.chargerExemple}>Remplir</button>
			</footer>
		)
	}

	static propTypes = {
		chargerExemple: React.PropTypes.func.isRequired
	}
}

export default Admin;