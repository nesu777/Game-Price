import React, { Component } from 'react'
import { Item, Comment } from 'semantic-ui-react'

//Show Page Component

class GameInfo extends Component {
render(){
		return(
			<Item key={this.props.game.id}>
      			<Item.Image src={this.props.game.thumb} size='huge' />
      			<Item.Content>
        			<Item.Header as='a'>{this.props.game.title}</Item.Header>
        			<Item.Header as='h4'>${this.props.game.salePrice}</Item.Header>
        			<Item.Meta>Game Description</Item.Meta>
        			<Item.Description>
          				{this.props.game.description}
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
}

export default GameInfo;
