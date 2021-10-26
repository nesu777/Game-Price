import React, { Component } from 'react'
import { Item, Comment, Image, } from 'semantic-ui-react'

//Show Page Component

class GameInfo extends Component {
	render() {
		return(
			<Item>
      			<Item.Image src='{game.img}' size='big' />

      			<Item.Content>
        			<Item.Header as='a'>{game.title}</Item.Header>
        			<Item.Header as='h4'>${game.salePrice}</Item.Header>
        			<Item.Meta>Game Description</Item.Meta>
        			<Item.Description>
          				{game.description}
        			</Item.Description>
        			<Comment>
                    <Comment.Content>
                      <Comment.Text> Great Game! {game.gameID.comment}</Comment.Text>
                    </Comment.Content>
                  </Comment>
      </Item.Content>
    </Item>
			)
	}
}

export default GameInfo;