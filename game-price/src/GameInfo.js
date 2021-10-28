import React, { Component } from 'react'
import { Item, Comment } from 'semantic-ui-react'

//Show Page Component

class GameInfo extends Component {
render(){
	return(
		this.props.searchResults.map(game => {
		return(
			<Item key={game.id}>
      			<Item.Content>
        			<Item.Header as='h2'>{game.external}</Item.Header>
        			<Item.Image src={game.thumb} size='huge' />
        			<Item.Header as='h3'>${game.cheapest}</Item.Header>
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
		})
		)
	}
}

export default GameInfo;
