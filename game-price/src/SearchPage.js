import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

class SearchPage extends Component {

  render(){
    return(
      <Table>
        <Table.Body>
        {
          this.props.searchResults.map(game => {
            return(
              <Table.Row key={game.gameID}>
                <Table.Cell>
                  {game.external}
                </Table.Cell>
              </Table.Row>
            )
          })
        }
        </Table.Body>
      </Table>
    )
  }
}

export default SearchPage
