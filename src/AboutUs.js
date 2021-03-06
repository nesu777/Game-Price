import React, { Component } from 'react'
import { Item, Container, Header, Divider, Segment, Icon } from 'semantic-ui-react'

//Show Page Component

class AboutUs extends Component {
render(){
		return(
			<Container>
			<br/><br/>
			<Item key='{game.id}'>
      			<Item.Content>
      				<Segment raised>
      				<br/>
        			<Item.Header as='h1' align='center'>About Us</Item.Header>
        			<Header as='h2' align='center' color='orange'>G2B<Icon name='gamepad' color='blue' align='center'/></Header>
        			<br/>
        			<Divider />
        			<Item.Description>
        			<Container text>
        			<br/>
          				<p>&emsp; <strong>This app is designed to give PC game enthusiasts a source for their favorite games at the lowest prices available. We take on the tedious task of searching many sites online so our users can focus on enjoying their games. </strong></p>
          				<p>&emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo. Purus ut faucibus pulvinar elementum integer enim neque. Sit amet est placerat in egestas erat. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Turpis egestas integer eget aliquet nibh praesent tristique. Morbi non arcu risus quis varius quam quisque. Consequat nisl vel pretium lectus quam id leo in. Adipiscing commodo elit at imperdiet dui accumsan. Condimentum lacinia quis vel eros donec ac odio tempor. Arcu felis bibendum ut tristique et egestas quis ipsum. Convallis convallis tellus id interdum velit laoreet.</p>
									<p>&emsp; Quis lectus nulla at volutpat diam ut venenatis tellus in. Eu mi bibendum neque egestas congue quisque egestas. Volutpat diam ut venenatis tellus in metus. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Mauris commodo quis imperdiet massa tincidunt nunc. Adipiscing elit pellentesque habitant morbi tristique senectus. Turpis nunc eget lorem dolor sed.</p>
									<Container align='center'>
          				<Item.Image src='./GamePad.jpg' size='big' />
          				</Container>
          				<br/>
          				<p>&emsp; Placerat orci nulla pellentesque dignissim. Morbi tristique senectus et netus et. Nibh sed pulvinar proin gravida hendrerit lectus. Blandit libero volutpat sed cras ornare arcu dui. Magna ac placerat vestibulum lectus. Facilisi nullam vehicula ipsum a arcu cursus. Sit amet purus gravida quis blandit turpis. Facilisis sed odio morbi quis commodo odio. Nisl pretium fusce id velit ut tortor pretium viverra. Placerat in egestas erat imperdiet sed euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo.</p>
          				<Container align='center'>
          				<Item.Image src='./SaveKeyboard.jpg' size='big' />
          				</Container>
          				<br/>
          				<p>&emsp; Purus ut faucibus pulvinar elementum integer enim neque. Sit amet est placerat in egestas erat. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Turpis egestas integer eget aliquet nibh praesent tristique. Morbi non arcu risus quis varius quam quisque. Consequat nisl vel pretium lectus quam id leo in. Adipiscing commodo elit at imperdiet dui accumsan. Condimentum lacinia quis vel eros donec ac odio tempor. Arcu felis bibendum ut tristique et egestas quis ipsum. Convallis convallis tellus id interdum velit laoreet.Facilisi nullam vehicula ipsum a arcu cursus. Sit amet purus gravida quis blandit turpis. Facilisis sed odio morbi quis commodo odio. Nisl pretium fusce id velit ut tortor pretium viverra. Placerat in egestas erat imperdiet sed euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo.</p>
          				<Container align='center'>
          				<Item.Image src='./FriendsGaming.jpg' size='big' />
          				</Container>
          				<br/>
          				<p>&emsp; Magna ac placerat vestibulum lectus. Facilisi nullam vehicula ipsum a arcu cursus. Sit amet purus gravida quis blandit turpis. Facilisis sed odio morbi quis commodo odio. Nisl pretium fusce id velit ut tortor pretium viverra. Placerat in egestas erat imperdiet sed euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo.Nisl pretium fusce id velit ut tortor pretium viverra. Placerat in egestas erat imperdiet sed euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo.</p>
							</Container>
							<br/><br/><br/>			
							</Item.Description>
        			</Segment>
        			<br/>
      			</Item.Content>
    		</Item>
    		</Container>
			)
	}
}

export default AboutUs
