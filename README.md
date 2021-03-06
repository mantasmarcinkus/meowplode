![Meowplode](https://github.com/mantasmarcinkus/meowplode/blob/master/Meowplode/App/routes/Home/assets/meowplode.png)
# Meowplode
Simple quiz web application about cats :question: :smiley_cat: :collision:

## Disclaimer
This quiz is suppose to be hard. Not showing answers? Not enough time? 
Life is hard and kittens will not be spared if you are unable to answer all the questions. 
We have 1:1 ratio of explosives to kittens and we sure do love watching explosions. :collision:

## How it works?
1) You enter your name
2) You try to save a kitten withing the given time
3) :sob: or :smile: (mostly :sob:) 
4) Repeat!

## User interface
- Using your mouse :mouse2: and keyboard
- Only your keyboard:
  - :one: :two: :three: to select answer
  - After entering your name - click `enter`
  - After answering questions - click `enter` to try to save another kitten; `esc` to let another player try

## Works on
- :computer: Chrome (it seems to work on it)
- :iphone: My Samsung Galaxy S6 Chrome

## Running locally
- Clone repository
- `cd ./Meowplode` and run `npm install`
- While React application is prebuilt, but to be sure run `webpack` (You'll need `webpack-cli` for that)
- Then open .NET Core solution (yuup) with VSCode/VS(2015/2017) and build it (it should restore Nuget Packages)
- Launch the project using `IISExpress` or `dot net cli` (TODO: Add information how to do it; Until then google it)
- Enjoy :euro:

## Frontend stack
- React & Redux 
- Typescript
- Webpack (Babel)
- TSLint (Not built into CI)
- Testing Suite: Jest, Enzyme

## Backend for the frontend
- AspNetCore
- AspNetCore.Mvc
- EntityFramework.InMemory (no real database, if needed can be easily plugged in)

## Technical description
More or less designed to have react application to be as a seperate npm module to be installed in whatever application (.net, node).  
Deployed in Azure (free tier), so it takes some time to launch and is not connected to database 
(InMemory database is amazing for simplicity && Instance lifetime is great for deleting in memory database).  
For this exact application document database would've been used (relational would be as good).  
I tried to write the code in a clean and easily extandable way for a simple application. 

## Requirements
- User is able to enter his name and start a quiz game
- User is able to answer a given quiz question
- User can enjoy Gif images from Giphy
- User is able to use keyboard to navigate Web application
- User at the end of the game can see how much answers he answered correctly (not which answers)
- User is able to distinguish whether he succeded in saving a kitten
- User is able to (in a way) compete with others (by seeing other players results)

## Time spent (approximation)
- Frontend: 20 (3 - webpack2, typescript, react; 2 - webpack2, typescript, react, karma)
- Backend: 7 

## To do
- [Look into seperating codebase with Learna](https://github.com/lerna/lerna)
- Migrate to webpack 3
- [Migrate Action creators](https://github.com/aikoven/typescript-fsa) and [Reducers](https://github.com/dphilipson/typescript-fsa-reducers)
- Migrate backend to [Go](https://golang.org/)
- Add [animations](https://github.com/FormidableLabs/react-animations)

## References
https://github.com/davezuko/react-redux-starter-kit (Used this as a good structural example for react, redux)

