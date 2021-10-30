import React, { Component } from 'react'
// import GameComment from './Comment'
import { Item, Segment, Divider, Icon, Container } from 'semantic-ui-react'

//Show Page Component

class GameInfo extends Component {
render(){
	// const baseUrl = process.env.REACT_APP_BASEURL
	// to help GameComment function properly
	return(
			<Container>
			<br/><br/>
			<Item /*key={game.id}*/>
      			<Item.Content>
      			<Segment raised>
        			<Item.Header as='h1'>{this.props.showgame.info.title}</Item.Header>
        			<Item.Image src={this.props.showgame.info.thumb} size='huge' />
        			<Item.Header as='h2' color='blue'>${this.props.showgame.deals['0'].price} <Icon name='gamepad' color='blue'/>
        			<br/><br/>
        			<button className='ui primary button'>Add to Cart</button>
        			<button className='ui secondary button'>Wish List<Icon name='star' color='orange' /></button>
        			<br/><br/>
        			</Item.Header>
        			<Divider />
        			<Item.Meta as='h3'><strong>Game Description</strong></Item.Meta>
        			<Item.Description>
          				{this.props.showgame.info.description}
        			</Item.Description>
        			</Segment>
        			<br/>
{/*      				<GameComment baseUrl={baseUrl} addComment={this.addComment} deleteComment={this.deleteComment} comments={this.state.comments}/>
*/}
      			</Item.Content>
    		</Item>
    		</Container>
			)
	}
}

export default GameInfo;
