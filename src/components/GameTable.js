import {Box} from '@material-ui/core'

export const GameTable = () => {

  const board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  
  return(
    <Box component="section" className="game-area">

      <table className="game-table">
        <tbody>
          {board.map((row, i) => (
              <tr className="game-table-row" key={i}>
                {row.map((col, j) => (
                  <td className="game-table-cell" key={j}></td>
                ))}
              </tr>
          ))}
        </tbody> 
      </table>

    </Box>
  )
} 