import React, { Component } from 'react'

class TestShow extends Component {
  render(){
    return(
      <>
      {
        (this.props.showgame) ? <p>{this.props.showgame.info.title}</p> : <p>loading</p>
      }
      </>
    )
  }
}

export default TestShow
