import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

class GameInfo extends Component {
	render() {
		return(
			<Div>
				<Header>Title: {this.props.game.Title} </Header>
				<Image>
			</Div>
			)
	}
}

export default GameInfo;