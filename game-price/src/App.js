import './App.css';
import React, { Component } from 'react'
import GameInfo from './GameInfo'
import Sales from './Sales'
import HeaderMain from './Header'

// let baseUrl = 'http://localhost:3000'
// let names

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseURL: 'https://www.cheapshark.com/?',
      apiKey: `apikey=${process.env.REACT_APP_API_KEY}`,
      query: '&t=',
      gameTitle: '',
      searchURL: '',
      gamesOnSale: [],
      requestOptions: {}
    }

      // this.handleChange = this.handleChange.bind(this)
      // this.handleSubmit = this.handleSubmit.bind(this)
  }

  getGames = () =>{

    this.setState({
      requestOptions: {
        method: 'GET',
        redirect: 'follow'
      }
    }, () => {
      fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&onSale=1", this.state.requestOptions)
      .then(res => {
        return res.json()
      })
      .then(json => this.setState({
        gamesOnSale: json
      }),
      (err) => console.log(err))
    })
  // .then(response => response.text())
  // .then(result => this.setState({
  //   gamesOnSale: result
  // }))
  // .then(console.log(this.state.gamesOnSale.map(function(item){return item})))
  // .catch(error => console.log('error', error));

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

  componentDidMount(){
    this.getGames()
  }

  render() {
    return (
      <>
        <HeaderMain />
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
        <h1>On Sale Now!</h1>
        <Sales gamesOnSale={this.state.gamesOnSale} />
      </>
    );
  }
}

export default App;
