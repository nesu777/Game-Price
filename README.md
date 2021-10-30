# Game-Price-frontend
PC games on sale
## Project Choice (Tell us which project you're doing!)
> G2B

## Project Description
> Include: Express, Mongoose, MongoDB, Node.js<br />
> General App Idea/Purpose: This app will display the prices and sale status of video games available for purchase online. Users will also be able to discuss each game using a comments section unique to each game page.<br />
> Models including field names and their datatypes: 
Comments: {name: {string}, comment: {string}, rating: {number}, gameID: {number} }
Game: {name: {string}, id: {number}, price: {number}, onSale: {boolean}}
<br />

> A list of routes (e.g. `POST /pins/ allows users to post a picture of a pin`): <br />
/index - landing page
/index/:id - show page for specific game
/about - info page

## Wireframes
> Wireframes with basic page layouts<br />
> Copy and paste or drag and drop your images here.
![wireframe4](https://media.git.generalassemb.ly/user/36590/files/27ae2b00-31da-11ec-8827-f30050cebf79)


## User Stories
> User stories detailing app functionality<br />
> Add user stories following the _As a [type of user], I want [what the user wants], so that [what it helps accomplish]_ format.
I want an app where I can find the best price for any video game.
I want to be able to see easily which games are currently on sale.
I want to be able to discuss the games and their prices with other users.
I want an app that has Steam integrated with it.

### MVP Goals
Integrate CheapShark API to pull games.
Have backend database store and display comments under each game.
Have an about page to explain the purpose and use of the app.
Have a search bar to access individual game pages.

### Stretch Goals
Integrate Steam and/or IGDB APIs as well for more comprehensive game and price info (ex. online userbase stats for games).
Integrate Amazon and/or BestBuy API so users can purchase games quickly.
User login/logout
User specific wishlists/watchlists
