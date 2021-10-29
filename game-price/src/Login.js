import React, { Component } from 'react'
import { Container, Form, Checkbox, Button, Header, Segment } from 'semantic-ui-react'

class Login extends Component{
  render(){
    return( 
  <div >
    <br/>
    <Container text>
    <br/><br/>
    <Segment>
    <br/><br/>
    <Header as='h1'>Login</Header>
      <Form>
      <Form.Field>
        <label>Username</label>
      <input placeholder='Username' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
        <Button color='orange' type='submit'>Submit</Button>
      </Form>
    <br/><br/><br/><br/>
    </Segment>
    <br/><br/>
    </Container>
  </div>
)
}
}
export default Login