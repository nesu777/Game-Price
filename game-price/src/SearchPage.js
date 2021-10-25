import React, {Component} from 'react'

class SearchPage extends Component {

  render(){
    return(
      <table>
        <tbody>
        {
          this.props.searchResults.map(game => {
            return(
              <tr key={game.gameID}>
                <td>
                  {game.external}
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )
  }
}

export default SearchPage
