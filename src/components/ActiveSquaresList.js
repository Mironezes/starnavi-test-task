import {React, useContext} from 'react'
import {ApiContext} from '../context/api/apiContext'
import {Box, Card} from '@material-ui/core'


export const ActiveSquaresList = () => {
  

  const {activeSquares, isGameStarted} = useContext(ApiContext)

  return(
    <Box component="aside" className="active-squares">
      <h3>Hovered squares</h3>


      <Box className="active-squares-list">
      {isGameStarted 
        ? activeSquares.map(item => {
          return (
            <Card key={item.id} className="active-squares-list-tile">
              <span>{`row ${item.row}, column ${item.column}`}</span>
            </Card>
          )
        })
        : (
          <Card className="active-squares-list-tile">
            <span>Statistics will be available during the game</span>
        </Card>
        )
      }




      </Box>
    </Box>
  )
} 