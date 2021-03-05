import React, {useContext, useEffect} from 'react'
import {ApiContext} from '../context/api/apiContext'
import {ModePicker} from '../components/ModePicker'
import {GameTable} from '../components/GameTable'
import {ActiveSquaresList} from '../components/ActiveSquaresList'
import {Grid} from '@material-ui/core'

export const Home = () => {

  const {gameModesList, activeSquares, getGameModes} = useContext(ApiContext)

  useEffect(() => {
    getGameModes()
    return () => {
    }
  }, [])


  return (
    <Grid container>
      <h1>StarNavi Test Task</h1>
      <Grid container spacing={3} direction="row" justify="space-between">
        <Grid item xs={12} sm={8}>
          <ModePicker modes={gameModesList} />
          <GameTable activeSquares={activeSquares} />
        </Grid>

        <Grid item xs={12} sm={4}>
          <ActiveSquaresList activeSquares={activeSquares}/> 
        </Grid>
      </Grid>
    </Grid>
  )
}
