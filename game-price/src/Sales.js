import React, {Component} from 'react'

class Sales extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return(
      <table>
        <tbody>
        {
          this.props.gamesOnSale.map(game => {
            return(
              <tr key={game.id}>
                <td>
                  {game.title}
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

export default Sales
