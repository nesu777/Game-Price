import React from 'react'
import { Header, Icon, Menu } from 'semantic-ui-react'

const HeaderMain = () => (
  <Header as='h1' color='blue' background-color='grey'>
    <Icon name='gamepad' />
    <Header.Content>G2B</Header.Content>
  <Menu>
    <Menu.Item link>Home</Menu.Item>
    <Menu.Item link>All Games</Menu.Item>
    <Menu.Item link>New Games</Menu.Item>
    <Menu.Item link>About Us</Menu.Item>
    <Menu.Item link>Support</Menu.Item>
  </Menu>
  </Header>
)

export default HeaderMain