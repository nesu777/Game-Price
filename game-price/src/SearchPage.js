import React, { Component } from 'react'
import { Table, Image, Header, Comment } from 'semantic-ui-react'

class SearchPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      showThisGameID: '',
    }
    this.showSearchedGame = this.showSearchedGame.bind(this)
  }

  //function to make show page work for search
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
      <Table color='blue'  selectable>
        <Table.Body>
        {
          this.props.searchResults.map(game => {
            return(
              <Table.Row key={game.gameID} onClick={(e) => this.setState({showThisGameID: game.gameID})}>
                <Table.Cell>
                  <Header as='h3' onClick={this.showSearchedGame} >{game.external}</Header>
                  <Image src={game.thumb} size='small' onClick={this.showSearchedGame} />
                </Table.Cell>
                <Table.Cell>
                  <Header as='h3'>${game.cheapest}</Header>
                </Table.Cell>
                <Table.Cell>
                  <Comment>
                    <Comment.Content>
                      <Comment.Text> Great Game! {game.gameID.comment}</Comment.Text>
                    </Comment.Content>
                  </Comment>
                </Table.Cell>
              </Table.Row>
            )
          })
        }
        </Table.Body>
      </Table>
      </div>
    )
  }
}

export default SearchPage
