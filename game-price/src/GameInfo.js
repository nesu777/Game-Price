import React, { Component } from 'react'
import { Segment, Header, Image, } from 'semantic-ui-react'

//Show Page Component

class GameInfo extends Component {
	render() {
		return(
			<Segment>
				<Header>Title: {this.props.game.Title} </Header>
				<Image>
			</Segment>
			)
	}
}

export default GameInfo;