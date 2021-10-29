import React, { Component } from 'react'
import { Item, Comment, Segment, Divider, Icon, Header, Container } from 'semantic-ui-react'

//Show Page Component

class GameInfo extends Component {
render(){
	return(
		this.props.searchResults.map(game => {
		return(
			<Container>
			<br/><br/>
			<Item /*key={game.id}*/>
      			<Item.Content>
      			<Segment raised>
        			{/*<Item.Header as='h1'>{this.state.showThisGame['info']['title']}</Item.Header>*/}
        			<Item.Header as='h1'>{game.external}</Item.Header>
        			<Item.Image src={game.thumb} size='huge' />
        			<Item.Header as='h2' color='blue'>${game.cheapest} <Icon name='gamepad' color='blue'/>
        			<br/><br/>
        			<button className='ui primary button'>Add to Cart</button>
        			<button className='ui secondary button'>Wish List<Icon name='star' color='orange' /></button>
        			<br/><br/>
        			</Item.Header>
        			<Divider />
        			<Item.Meta as='h3'><strong>Game Description</strong></Item.Meta>
        			<Item.Description>
          				{game.description}
        			</Item.Description>
        			</Segment>
        			<br/>
        			<Header as='h3'>Comments:</Header>
        			<Divider />
        			<Segment compact raised color='orange'>
        			<Comment>
        			<Icon size='big' name='user circle' />
                    <Comment.Content>
                    <Comment.Author>User123</Comment.Author>
                      	<Comment.Text> 
                      	It is so much better than the last year, also compared to eFootball.
						But, still there are lot to improve here.
						</Comment.Text>
                    </Comment.Content>
                  	</Comment>
                  	</Segment>
      			</Item.Content>
    		</Item>
    		</Container>
			)
		})
		)
	}
}

export default GameInfo;
