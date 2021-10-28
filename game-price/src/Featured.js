import React, { Component } from 'react'
import { Item, Comment, Container, Header, Divider, Segment, Icon } from 'semantic-ui-react'

//Show Page Component

class Featured extends Component {
render(){
		return(
			<Container>
			<br/><br/>
			<Item key='{game.id}'>
      			<Item.Content>
      				<Segment raised>
        			<Item.Header as='h1'>FIFA 22</Item.Header>
        			<Item.Image src='https://cdn.cloudflare.steamstatic.com/steam/apps/1506830/capsule_616x353.jpg?t=1633113405' size='huge' />
        			<Item.Header as='h2' color='blue'>$39.99 <Icon name='gamepad' color='blue'/>
        			<br/><br/>
        			<button className='ui primary button'>Add to Cart</button>
        			<button className='ui secondary button'>Wish List<Icon name='star' color='orange' /></button>
        			<br/><br/>
        			</Item.Header>
        			<Divider />
        			<Item.Meta as='h3'><strong>Game Description</strong></Item.Meta>
        			<Item.Description>
          				Powered by Football™, EA SPORTS™ FIFA 22 brings the game even closer to the real thing with fundamental gameplay advances and a new season of innovation across every mode.
          				<p><strong>What is FIFA?</strong>
									Play The World’s Game with 17,000+ players, over 700 teams in 90+ stadiums and more than 30 leagues from all over the globe.</p>
									<p><strong>GAME MODES</strong></p>
									<p><strong>Career Mode</strong> – Live out your dreams as both a manager and a player in FIFA 22. Create the newest club in FIFA, design your kits, style your stadium, and choose whether to compete with the elite or rise up from the lower divisions as you manage your club to glory. Or test your skills as a player, with a more immersive Player Career mode that gives you more ways to progress, achieve, and immerse yourself in your Pro’s journey through the game.</p>
									<p><strong>FIFA Ultimate Team</strong> – Get involved with the most popular mode in FIFA, FIFA Ultimate Team. Build your dream squad from thousands of players from across the world of football, make your club your own on and off the pitch with custom kits, badges, and a whole FUT Stadium to leave your mark on, and take your team into matches against the AI or other players in the FUT Community. Plus, welcome back some of the game’s most memorable players as new FUT Heroes, as some of football’s most memorable players return to the pitch.</p>
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
              <Segment compact raised color='orange'>
        			<Comment>
        			<Icon size='big' name='user circle' />
                    <Comment.Content>
                    <Comment.Author>PCGuy</Comment.Author>
                      <Comment.Text> 
                      	I swear they deliberately make career mode trash so you play FUT. There are far too many times the ball goes where you do not want it to. I gave it more than 50 hours and I am done. 3/10
											</Comment.Text>
                    </Comment.Content>
                  	</Comment>
              </Segment>
      			</Item.Content>
    		</Item>
    		</Container>
			)
	}
}

export default Featured
