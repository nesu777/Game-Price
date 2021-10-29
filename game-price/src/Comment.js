import React, { Component } from "react";

export default class Comment extends Component{
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
                console.log(data)
                this.setState({
                    name:'',
                    comment:''
                })
            })
    }

    render(){
        
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" onChange={ (e) => this.handleChange(e)} value={this.state.name}/>
                <input type="text" id="comment" name="comment" onChange={ (e) => this.handleChange(e)} value={this.state.comment}/>
                <input type="submit"/>
            </form>
        )
    }
}