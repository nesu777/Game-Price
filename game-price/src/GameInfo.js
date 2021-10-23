import React, { Component } from 'react'

class GameInfo extends Component {
	render() {
		return(
			<div>
				<h1>Title: {this.props.game.Title} </h1>
			</div>
			)
	}
}

export default GameInfo;