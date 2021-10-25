import React, {Component} from 'react'
import { Table, Label } from 'semantic-ui-react'

class GameList extends Component {

  render(){
    return(
      <Table>
        {
          this.props.gamesOnSale.map(game => {
            return(
              <Table.Row key={game.id}>
                <Table.Cell>
                  <Label>{game.title}</Label>
                </Table.Cell>
              </Table.Row>
            )
          })
        }
      </Table>
    )
  }
}

export default GameList
