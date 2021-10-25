import React, {Component} from 'react'
import { Table, Label } from 'semantic-ui-react'

class GameList extends Component {

  render(){
    return(
      <div>
      <Table color='blue' celled striped inverted>
      <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Game</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Rating</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
        {
          this.props.gamesOnSale.map(game => {
            return(
              <Table.Row key={game.id}>
                <Table.Cell>
                  <Label>{game.title}</Label>
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
      <Table.Footer>
      <Table.Row>
        <Table.HeaderCell link>More Games</Table.HeaderCell>
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
