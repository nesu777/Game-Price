import React from 'react'
import { List } from 'semantic-ui-react'
import App from './App'

const GameList = () => (

      <List divided verticalAlign='middle'>
        <List.Item>
        {
          this.props.gamesOnSale.map(game => {
            return(
              <List.Content key={game.id}>
                <List.Content>
                  {game.title}
                </List.Content>
              </List.Content>
            )
          })
        }
        </List.Item>
      </List>
    )
//   <List divided verticalAlign='middle'>
//     <List.Item>
//       <List.Content floated='right'>
//         <Button>Add</Button>
//       </List.Content>
//       <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
//       <List.Content>Lena</List.Content>
//     </List.Item>
//     <List.Item>
//       <List.Content floated='right'>
//         <Button>Add</Button>
//       </List.Content>
//       <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
//       <List.Content>Lindsay</List.Content>
//     </List.Item>
//     <List.Item>
//       <List.Content floated='right'>
//         <Button>Add</Button>
//       </List.Content>
//       <Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
//       <List.Content>Mark</List.Content>
//     </List.Item>
//     <List.Item>
//       <List.Content floated='right'>
//         <Button>Add</Button>
//       </List.Content>
//       <Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
//       <List.Content>Molly</List.Content>
//     </List.Item>
//   </List>
// )

export default GameList