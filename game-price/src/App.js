import './App.css';
import React, { Component } from 'react'
import HeaderMain from './HeaderMain'
import GameInfo from './GameInfo'
import GameList from './GameList'
import { Input, Icon } from 'semantic-ui-react'

//internal calls
import SearchPage from './SearchPage'

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
    event.preventDefault()
    this.setState({
      requestOptions: {
        method: 'GET',
        redirect: 'follow'
      }
    }, () => {
      fetch("https://www.cheapshark.com/api/1.0/games?title=" + this.state.gameTitle +"&limit=10", this.state.requestOptions)
      .then(res => {
        return res.json()
      })
      .then(json => this.setState({
        searchResults: json,
        gameTitle: ''
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
        <div className='mainContainer'>
        <HeaderMain />
          <br/>
        <div className='search' align='center'>
        <form onSubmit={this.handleSubmit}>
          <Icon size='big' color='blue' name='search' />
          <div className='ui input'>
          <Input
            size='huge'
            placeholder='Search...'
            id='gameTitle'
            type='text'
            value={this.state.gameTitle}
            onChange={this.handleChange}
            />
          <input
            className='ui button'
            type='submit'
            value='Find Best Price'
            />
          </div>
        </form>
        </div>
        {
<<<<<<< HEAD
          (this.props.gameIDFound) ? <p>gameID found</p> : ''
=======
          (this.props.gameIDFound === true) ? <GameInfo gamesOnSale={this.state.gamesOnSale}/> : ''
>>>>>>> 3dd2d15 (css and error management)
        }
        {
          (this.state.searchResults) ? <SearchPage searchResults={this.state.searchResults} showSearchedGame={this.showSearchedGame}/> : ''
        }
        <h1 align='center'>On Sale Now!</h1>
        <GameList gamesOnSale={this.state.gamesOnSale}/>
        <GameInfo gamesOnSale={this.state.gamesOnSale}/>
        </div>
      </>
    );
  }
}

export default App;
