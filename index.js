// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// javascript entry point
require('./app/app.js')

// styles
require('./app/styles/index.css')
const player = 'x'
const computer = 'o'

// Check for a draw
const allTileFilledIn = boardState.every((tile) => tile !== null)
if (allTileFilledIn) {
  gameOverScreen(null)
}

function gameOverScreen (winnerText) {
  let text = 'Draw!'
  if (winnerText != null) {
    text = `Winner is ${winnerText}!`
  }
  gameOverArea.className = 'visible'
  gameOverText.innerText = text
  gameOverSound.play()
}

function startNewGame () {
  strike.className = 'strike'
  gameOverArea.className = 'hidden'
  boardState.fill(null)
  tiles.forEach((tile) => (tile.innerText = ''))
  turn = PLAYER_X
  setHoverText()
}

const winningCombinations = [
  // rows
  { combo: [1, 2, 3], strikeClass: 'strike-row-1' },
  { combo: [4, 5, 6], strikeClass: 'strike-row-2' },
  { combo: [7, 8, 9], strikeClass: 'strike-row-3' },
  // columns
  { combo: [1, 4, 7], strikeClass: 'strike-column-1' },
  { combo: [2, 5, 8], strikeClass: 'strike-column-2' },
  { combo: [3, 6, 9], strikeClass: 'strike-column-3' },
  // diagonals
  { combo: [1, 5, 9], strikeClass: 'strike-diagonal-1' },
  { combo: [3, 5, 7], strikeClass: 'strike-diagonal-2' }
]
