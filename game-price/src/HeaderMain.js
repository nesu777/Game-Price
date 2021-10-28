import React, { Component } from 'react'
import { Header, Icon, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class HeaderMain extends Component{

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render(){
    const { activeItem } = this.state

    return( 
  <div className='ui fluid container'>
  <Header as='h1' color='orange'>
    <Icon color='blue' name='gamepad' />
    <Header.Content>G2B</Header.Content>
  <Menu color='orange' inverted fluid widths={6}>
    <Menu.Item
      as={NavLink} to="/"
      name='Home'
      active={activeItem === 'home'}
      onClick={this.handleItemClick}
    />
    <Menu.Item 
      as={NavLink} to="/allgames"
      name='All Games'
      active={activeItem === 'allgames'}
      onClick={this.handleItemClick}
    />
    <Menu.Item link>New Games</Menu.Item>
    <Menu.Item link>About Us</Menu.Item>
    <Menu.Item link>Support</Menu.Item>
    <Menu.Item link>Login/SignUp</Menu.Item>
  </Menu>
  </Header>
  </div>
)
}
}
export default HeaderMain