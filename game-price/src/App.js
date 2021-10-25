import './App.css';
import React, { Component } from 'react'
import HeaderMain from './HeaderMain'
// import GameInfo from './GameInfo'
// import Sales from './Sales'
import GameList from './GameList'
import { Input, Icon } from 'semantic-ui-react'

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
      requestOptions: {},
      searchResults: []
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
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  //Revise to pull game url from cheapshark
  handleSubmit = (event) => {
    this.setState({
      requestOptions: {
        method: 'GET',
        redirect: 'follow'
      }
    }, () => {
      fetch("https://www.cheapshark.com/api/1.0/games?title=" + this.state.gameTitle +"&limit=5", this.state.requestOptions)
      .then(res => {
        return res.json()
      })
      .then(json => this.setState({
        searchResults: json
      }),
      (err)=>console.log(err))
    })
  }

  componentDidMount(){
    this.getGames()
  }

  render() {
    return (
      <>
        <div class='mainContainer'>
        <HeaderMain />
          {/*make a search component with semantic style*/}
        <div class='search' align='center'>
        <form onSubmit={this.handleSubmit}>
          <Icon size='big' color='blue' name='search' />
          <div class='ui input'>
          <Input
            size='huge'
            placeholder='Search...'
            id='gameTitle'
            type='text'
            value={this.state.gameTitle}
            onChange={this.handleChange}
            />
          <input
            class='ui button'
            type='submit'
            value='Find Best Price'
            />
          </div>
        </form>
        </div>
        <h1 align='center'>On Sale Now!</h1>
        <GameList gamesOnSale={this.state.gamesOnSale}/>
        </div>
      </>
    );
  }
}

export default App;
