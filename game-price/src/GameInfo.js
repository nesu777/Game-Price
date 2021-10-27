import React, { Component } from 'react'
import { Item, Comment } from 'semantic-ui-react'

//Show Page Component

class GameInfo extends Component {
	render() {
		return(
		this.props.gamesOnSale.map(game => {
		return(
			<Item key={game.id}>
      			<Item.Image src={game.thumb} size='huge' />
      			<Item.Content>
        			<Item.Header as='a'>{game.title}</Item.Header>
        			<Item.Header as='h4'>${game.salePrice}</Item.Header>
        			<Item.Meta>Game Description</Item.Meta>
        			<Item.Description>
          				{game.description}
        			</Item.Description>
        			<Comment>
                    <Comment.Content>
                      <Comment.Text> Great Game!</Comment.Text>
                    </Comment.Content>
                  	</Comment>
      			</Item.Content>
    		</Item>
			)
			}
		)
	)}
}

export default GameInfo;
