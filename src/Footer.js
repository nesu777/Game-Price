import React, { Component } from 'react'
import { Segment, Container, Grid, Header, List, Divider, Icon } from 'semantic-ui-react'

class Footer extends Component{
  render(){
    return( 
  <div className='content'sticky='onBottom'>
  <Segment color='grey' inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Payments' />
            <List link inverted>
              <List.Item as='a'>VISA/Mastercard</List.Item>
              <List.Item as='a'>PayPal</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Affiliates' />
            <List link inverted>
              <List.Item as='a'>Steam <Icon color='white' name='steam symbol'/></List.Item>
              <List.Item as='a'>CheapShark</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Encrypted Site' />
            <List link inverted>
              <List.Item as='a'>Secure <Icon color='yellow' name='lock'/></List.Item>
              <List.Item as='a'>Smart Contracts</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Contact Us' />
            <p>
              emailus@g2bsupport.com
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Icon size='big' color='blue' name='gamepad' />
        <br/>
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
             Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)
}
}
export default Footer