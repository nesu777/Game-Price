import React, { Component } from 'react'
import { Table, Label, Header } from 'semantic-ui-react'

class GameList extends Component {

  constructor(props){
    super(props)

    this.state = {
      showThisGameID: '',
    }
    this.showSearchedGame = this.showSearchedGame.bind(this)
  }

  showSearchedGame = (event) => {
    this.setState({
      requestOptions: {
        method: 'GET',
        redirect: 'follow'
      },

    }, () => {
      fetch("https://www.cheapshark.com/api/1.0/games?id=" + this.state.showThisGameID)
      .then(res => {
        return res.json()
      })
      .then(json => this.setState({
        showThisGame: json
      }),
    (err) => console.log(err))
    .then(this.props.sendData(this.state.showThisGame))
    })
  }

  render(){
    return(
      <div className='ui container'>
      <br/>
      <Header size='huge' align='center'>On Sale Now!</Header>
      <Table color='blue' celled striped inverted>
      <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Game</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Rating</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          this.props.gamesOnSale.map(game => {
            return(
              <Table.Row key={game.gameID} onClick={(e) => this.setState({showThisGameID: game.gameID})}>
                <Table.Cell>
                  <Label onClick={this.showSearchedGame}>{game.title}</Label>
                </Table.Cell>
                <Table.Cell>
                  <Label>${game.salePrice}</Label>
                </Table.Cell>
                <Table.Cell>
                  <Label>{game.steamRatingPercent}</Label>
                </Table.Cell>
              </Table.Row>
            )
          })
        }
      </Table.Body>
      <Table.Footer>
      <Table.Row>
        <Table.HeaderCell link='true'>More Games</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Row>
      </Table.Footer>
      </Table>
      </div>
    )
  }
}

export default GameList
