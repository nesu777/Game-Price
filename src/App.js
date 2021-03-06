import './App.css';
import React, { Component } from 'react'
import HeaderMain from './HeaderMain'
import Footer from './Footer'
import HomePage from './HomePage'
import { BrowserRouter as Router, Route } from "react-router-dom"
import GameInfo from './GameInfo'
import Featured from './Featured'
import GameList from './GameList'
import AboutUs from './AboutUs'
import Support from './Support'
import Login from './Login'
import GameComment from './GameComment'
import { Input, Icon } from 'semantic-ui-react'

//internal calls
import SearchPage from './SearchPage'

let baseUrl = process.env.REACT_APP_BASEURL

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
      comments: [],
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
      fetch("https://www.cheapshark.com/api/1.0/games?title=" + this.state.gameTitle +"&limit=5", this.state.requestOptions)
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

    getData = (data) => {
      console.log('setting state')
      this.setState({
        showThisGame: data,
      }, () => {
        console.log(this.state.showThisGame)
        /*made it return to try and pass it to GameInfo*/
        return this.state.showThisGame
      })
    }

    getComments = () => {
      // fetch to the backend
      fetch(baseUrl + "/comments")
      .then(res => {
        if(res.status === 200) {
          return res.json()
        } else {
          return []
        }
      }).then(data => {
        this.setState({ comments: data })
      })
    }

    addComment = (newComment) => {
      const copycomments = [...this.state.comments]
      copycomments.push(newComment)
      this.setState({
        comments: copycomments,
      })
    }

    deleteComment = (id) => {
      fetch(baseUrl + '/comments/' + id, {
      method: 'DELETE',
    }).then( res => {
      const findIndex = this.state.comments.findIndex(comment => comment._id === id)
      const copyComments = [...this.state.comments]
      copyComments.splice(findIndex, 1)
      this.setState({
        comments: copyComments
      })
    })
  }

  addLike = (comment) =>{
    // console.log(comment)
    fetch(baseUrl + '/comments/' + comment._id,{
      method:'PUT',
      body: JSON.stringify({likes: comment.likes + 1}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(resJson =>{
      // console.log(resJson)
      const copyComments = [...this.state.comments]
      const findIndex = this.state.comments.findIndex(comment => comment._id === resJson._id)
      copyComments[findIndex].likes = resJson.likes
      this.setState({
        comments: copyComments
      })
    })
  }

 
 

  componentDidMount(){
    this.getGames()
    this.getComments()
  }

  render() {
    return (
      <>
        <div className='mainContainer'>
        <Router>
        <HeaderMain />
          <br/>
        <div className='search' align='center'>
        <form onSubmit={this.handleSubmit}>
          <Icon size='big' color='blue' name='search' />
          <div className='ui input'>
          <Input
            color='blue'
            size='huge'
            focus
            placeholder='Search...'
            id='gameTitle'
            type='text'
            value={this.state.gameTitle}
            onChange={this.handleChange}
            />
          <input
            className='ui primary button'
            type='submit'
            value='Find Best Price'
            />
          </div>
        </form>
        </div>

        {
          (this.state.showThisGame) ? <GameInfo showgame={this.state.showThisGame} /> : ''
        }

        {
        (this.state.showThisGame) ? <GameComment baseUrl={baseUrl} showThisGame={this.state.showThisGame} addComment={this.addComment} deleteComment={this.deleteComment} comments={this.state.comments}  addLike={this.addLike}/> : ''
        }

        {
          (this.state.searchResults) ? <SearchPage sendData={this.getData} searchResults={this.state.searchResults} showSearchedGame={this.showSearchedGame}/> : ''
        }

        <Route
          path="/"
          exact
          render={() =>
          <HomePage />}
        />

        <Route
          path="/allgames"
          exact
          render={() =>
          <GameList sendData={this.getData} gamesOnSale={this.state.gamesOnSale}/>}
        />

        <Route
          path="/featured"
          exact
          render={() =>
          <Featured />}
        />

         <Route
          path="/aboutus"
          exact
          render={() =>
          <AboutUs />}
        />

        <Route
          path="/support"
          exact
          render={() =>
          <Support />}
        />

        <Route
          path="/login"
          exact
          render={() =>
          <Login />}
        />

      </Router>

      <GameComment baseUrl={baseUrl} addComment={this.addComment} deleteComment={this.deleteComment} comments={this.state.comments} addLike={this.addLike}/>
      <Footer />
        </div>
      </>
    );
  }
}

export default App;
