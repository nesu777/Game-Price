import React, { Component } from "react";
import { Form, Segment, Container, Header, Button, Icon, Comment } from 'semantic-ui-react'


export default class GameComment extends Component{
    constructor(props) {
        super(props)

        this.state={
            name: '',
            comment:'',
            gameName: '',
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
                    comment:'',
                    gameName: this.props.showThisGame
                })
            })
    }


    

    render(){
        const allComments = this.props.comments
        const Comments = allComments.map(element => <div><br/>
            <Segment raised color='orange'>
            <Comment>
                    <Comment.Content key={element._id} id={element._id}>
                    <Comment.Author><Icon size='big' name='user circle' />{element.name}</Comment.Author>
                        <Container text>
                        <Comment.Text>
                        {element.comment}
                        </Comment.Text>
                        </Container>
                    </Comment.Content>
                    </Comment>
                    <br/>
                    <div>{element.likes}</div>
                    <Button color='red' onClick={() =>{this.props.addLike(element)}}>Like</Button>
                    <Button color='red' onClick={() =>{this.props.deleteComment(element._id)}}>Delete</Button>
            </Segment></div>)
        return(
            <>
            <br/><br/>
            <Container>
            <Segment color='blue'inverted raised >
            <Header as='h1'>Commments</Header>
            <Form onSubmit={this.handleSubmit}>
            <Container text>
            <Segment raised>
            <Form.Field>
                <label htmlFor="name">User: </label>
                <Form.Input  type="text" id="name" name="name" onChange={ (e) => this.handleChange(e)} value={this.state.name}/>
                <Form.Input  placeholder="Add Comment..." type="text" id="comment" name="comment" onChange={ (e) => this.handleChange(e)} value={this.state.comment}/>
                <Button color='green' content='Submit' type="submit"></Button>
            </Form.Field>
            </Segment>
            </Container>
            </Form>
            <ul>{Comments}</ul>
            </Segment>
            </Container>
            </>
        )
    }
}
