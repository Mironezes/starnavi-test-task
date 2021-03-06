import {React, useState, useContext} from 'react'
import {ApiContext} from '../context/api/apiContext'
import {Box, Card} from '@material-ui/core'


export const ActiveSquaresList = () => {
  

  const {setCurrentGameMode, isGameStarted} = useContext(ApiContext)

  return(
    <Box component="aside" className="active-squares">
      <h3>Hover squares</h3>


      <Box className="active-squares-list">
      {isGameStarted 
        ? (
          <Card className="active-squares-list-tile">
            <span>row 2 col 1</span>
          </Card>
        )
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