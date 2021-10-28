import React, { Component } from 'react'
import { Container, Image, Header } from 'semantic-ui-react'

class HomePage extends Component{
  render(){
    return( 
  <div >
    <br/>
    <Container>
      <Header size='huge' align='center'>G2B Games</Header>
        <Header size='medium' align='center'>
          Find all your favorite PC games for the lowest price available.
          Connect with other players by creating an account and joing in 
          on game comment posts and ratings.
        </Header>
        <Image src='./PCGamingCanva.png' />

    </Container>
  </div>
)
}
}
export default HomePage