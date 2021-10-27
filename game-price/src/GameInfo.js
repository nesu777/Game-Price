import React, { Component } from 'react'
import { Item, Comment } from 'semantic-ui-react'

//Show Page Component

class GameInfo extends Component {
	render() {
		return(
		this.props.gamesOnSale.map(game => {
		// console.log(game)
		return(
			<Item key={game.id}>
      			<Item.Image src='https://cdn.cloudflare.steamstatic.com/steam/apps/1506830/capsule_616x353.jpg?t=1633113405' size='big' />
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
