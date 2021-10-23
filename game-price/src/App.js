import './App.css';
import React, { Component } from 'react'

let baseUrl = 'http://localhost:3003'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseURL: 'https://www.cheapshark.com/?',
      apiKey: `apikey=${process.env.REACT_APP_API_KEY}`,
      query: '&t=',
      gameTitle: '',
      searchURL: ''
    }

      // this.handleChange = this.handleChange.bind(this)
      // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    //console.log(event.target.id)
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    //console.log(event.target.value)
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.apiKey + 
      this.state.query + this.state.gameTitle
    }, () => {
      // fetch request will go here
      // to read more fetch
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      fetch(this.state.searchURL)
      .then(response => {
          return response.json()
      }).then(json => this.setState({
        game: json,
        gameTitle: ''
      }),
      (err) => console.log(err))
    })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='gameTitle'> Title </label>
          <input 
            id='gameTitle'
            type='text'
            value={this.state.gameTitle}
            onChange={this.handleChange}
            />
          <input
            type='submit'
            value='Find Game Info' 
            />  
        </form>
        {(this.state.game)
          ? <GameInfo game={this.state.game}/>
          : ''
        }
      </>
    );
  }
}

export default App;
