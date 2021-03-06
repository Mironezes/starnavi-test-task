import React, {useContext} from 'react'
import {Box} from '@material-ui/core'
import {ApiContext} from '../context/api/apiContext'


export const GameTable = () => {

  const {activeSquares, currentGameSize, isGameStarted} = useContext(ApiContext)

  let board = createBoard(currentGameSize)

  function createBoard(size) {
    let arr = new Array(size)

    for (let i = 0; i < arr.length; i++) { 
      arr[i] = []; 
    } 
      
    for (let i = 0; i < size; i++) { 
        for (let j = 0; j < size; j++) { 
          arr[i][j] = `${i+1}.${j+1}`; 
        } 
    } 
    return arr
  }

  const activeSquaresHandler = (item) => {
    console.log(item)
  }
  

  return(
    <Box component="section" className="game-area">
      
      {isGameStarted
        ? (
          <table className={`game-table`}>
          <tbody>
            {board.map((i) => (
                <tr className="game-table-row" key={i}>
                  {i.map((j) => (
                    <td onMouseEnter={() => activeSquaresHandler(j)}className="game-table-cell" data-value={j} key={j}></td>
                  ))}
                </tr>
            ))}
          </tbody> 
          </table>
          )
        : <strong>Please choose the game mode and press START</strong>
      
      }


    </Box>
  )
} 