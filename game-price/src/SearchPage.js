import React, { Component } from 'react'
import { Table, Image, Header, Comment } from 'semantic-ui-react'

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
                  <Header as='h3'>{game.external}</Header>
                  <Image src='{game.img}' size='small' />
                </Table.Cell>
                <Table.Cell>
                  <Header as='h3'>${game.salePrice}</Header>
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
    )
  }
}

export default SearchPage
