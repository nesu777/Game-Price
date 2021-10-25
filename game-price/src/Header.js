import React from 'react'
import { Header, Icon, Menu } from 'semantic-ui-react'

const HeaderMain = () => (
  <Header as='h1' color='orange'>
    <Icon color='blue' name='gamepad' />
    <Header.Content>G2B</Header.Content>
  <Menu color='orange' inverted fluid widths={6}>
    <Menu.Item link>Home</Menu.Item>
    <Menu.Item link>All Games</Menu.Item>
    <Menu.Item link>New Games</Menu.Item>
    <Menu.Item link>About Us</Menu.Item>
    <Menu.Item link>Support</Menu.Item>
    <Menu.Item link>Login/SignUp</Menu.Item>
  </Menu>
  </Header>
)

export default HeaderMain