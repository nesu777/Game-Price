import React, { Component } from 'react'
import { Table, Image, Header, Comment } from 'semantic-ui-react'

class SearchPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      showThisGameID: '',
      gameIDFound: false,
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
      fetch("https://www.cheapshark.com/api/1.0/games?id=" + this.state.gameID)
      .then(res => {
        return res.json()
      })
      .then(json => this.setState({
        showThisGame: json
      }),
    (err) => console.log(err))
    })
  }


  render(){
    return(
      <div class='ui container'>
      <br/>
      <Table color='blue'  selectable>
        <Table.Body>
        {
          this.props.searchResults.map(game => {
            return(
              <Table.Row key={game.gameID}>
                <Table.Cell>
                  <Header as='h3' onClick={(e) => {this.setState({showThisGameID: game.gameID, gameIDFound: true})}}>{game.external}</Header>
                  <Image src={game.thumb} size='small' />
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
