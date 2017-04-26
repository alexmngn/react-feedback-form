# Feedback form

## Run

- Clone the repository
- Run `npm install` from inside the repository
- Run `npm start`. Your default browser will automatically opens with the app. You can also access it from http://localhost:3000/

## Test

- Run `npm test` to execute the unit tests

## Environment

Tested on the following environment:

- Node 7.7.1
- NPM 4.1.2
- macOS 10.12.4

## Process of creation

- I used [create-react-app](https://github.com/facebookincubator/create-react-app) to generate the app, then I ejected it in order to add a few additional features to the build process.
- I've added `sass-loader` to webpack to use SASS instead of regular CSS.
- The app follows a [modular architecture](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) to organise the different components.
- I use the ES6/ES7 syntax as much as possible.
- I created unit tests for data actions / reducer
