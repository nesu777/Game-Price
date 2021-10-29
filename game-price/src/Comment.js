import React, { Component } from "react";
import { Form, Segment, Container, Header, Button, Icon, Comment } from 'semantic-ui-react'


export default class GameComment extends Component{
    constructor(props) {
        super(props)

        this.state={
            name: '',
            comment:''
        }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.id]: event.target.value,
            [event.target.id]: event.target.value,
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()

        fetch(this.props.baseUrl + '/comments',{
            method:'POST',
            body: JSON.stringify({name:this.state.name, comment:this.state.comment}),
            headers:{
                'Content-Type': 'application/json'
            }})
            .then(res =>{
                return res.json()
            }).then(data =>{
                this.props.addComment(data)
                this.setState({
                    name:'',
                    comment:''
                })
            })
    }

    render(){
        const allComments = this.props.comments
        const Comments = allComments.map(element => <div><li key={element._id} id={element._id}>{element.name} - {element.comment}</li><button onClick={() =>{this.props.deleteComment(element._id)}}>Delete</button></div>)
        return(
            <>
            <br/><br/>
            <Container>
            <Segment contain color='blue' inverted align='center'>
            <Header as='h1'>Commments</Header>
            <Form onSubmit={this.handleSubmit}>
            <Form.Field>
                <label htmlFor="name">User: </label>
                <Form.Input  type="text" id="name" name="name" onChange={ (e) => this.handleChange(e)} value={this.state.name}/>
                <Form.Input  placeholder="Add Comment..." type="text" id="comment" name="comment" onChange={ (e) => this.handleChange(e)} value={this.state.comment}/>
                <Button color='orange' content='Submit' type="submit"></Button>
            </Form.Field>    
            </Form>
            <Segment compact raised color='orange'>
            <Comment>
                    <Icon size='big' name='user circle' />
                    <Comment.Content>
                    <Comment.Author>{Comments.name}</Comment.Author>
                        <Comment.Text> 
                        {Comments.comment}
                        </Comment.Text>
                    </Comment.Content>
                    </Comment>
            <ul>{Comments}</ul>
            </Segment>
            </Segment>
            </Container>
            </>
        )
    }
}