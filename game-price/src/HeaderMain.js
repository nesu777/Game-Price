import React, { Component } from 'react'
import { Header, Icon, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class HeaderMain extends Component{

  state = { activeItem: '' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render(){
    const { activeItem } = this.state

    return( 
  <div className='ui fluid container'>
  <Header as='h1' color='orange' >
    <Icon color='blue' name='gamepad' />
    <Header.Content>G2B</Header.Content>
  <Menu color='orange' inverted fluid widths={6}>
    <Menu.Item
      as={NavLink} to="/home"
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
    <Menu.Item 
      as={NavLink}
      to="/featured"
      name='Featured Game'
      active={activeItem === 'featured'}
      onClick={this.handleItemClick}
      /*game chosen with Math.random route to game show page*/
    />
    <Menu.Item 
      as={NavLink}
      to="/aboutus"
      name='About Us'
      active={activeItem === 'aboutus'}
      onClick={this.handleItemClick}
    />
    <Menu.Item 
      as={NavLink}
      to="/support"
      name='Support'
      active={activeItem === 'support'}
      onClick={this.handleItemClick}
    />
    <Menu.Item 
      as={NavLink}
      to="/login"
      name='Login/SignUp'
      active={activeItem === 'login'}
      onClick={this.handleItemClick}
    />
  </Menu>
  </Header>
  </div>
)
}
}
export default HeaderMain