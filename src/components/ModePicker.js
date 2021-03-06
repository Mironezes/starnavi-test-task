import {React, useState, useContext} from 'react'
import {ApiContext} from '../context/api/apiContext'
import {Select, FormControl, Button, InputLabel, MenuItem, Box} from '@material-ui/core'


export const ModePicker = (gameModesList) => {

  const {setCurrentGameMode, resetGame, isGameStarted} = useContext(ApiContext)

  let rawData = Object.entries(gameModesList.modes)
  let data = rawData.map((item => ({ name: item[0], field: +Object.values(item[1])})))


  const [mode, setMode] = useState('')

  const selectHandler = (e) => {
    setMode(e.target.value)    
  }

  const submitHandler = () => {
    setCurrentGameMode(mode)
  }

  const resetHanlder = () => {
    resetGame()
    setMode('')
  }


  return (
    <Box component="section" className="mode-picker">
      <FormControl className="mode-picker__select" variant="outlined" size="small" disabled={isGameStarted}>
        <InputLabel>Pick the game mode</InputLabel>
        <Select 
          onChange={selectHandler}
          value={mode}
        >
          {data.map((item, index) => {
            return (
              <MenuItem key={index} value={item.field}>
                {item.name}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <Button onClick={submitHandler} className="mode-picker__button" size="small" variant="contained" color="primary" disabled={!mode || isGameStarted}>START</Button>
      <Button onClick={resetHanlder} className="mode-picker__button" size="small" variant="contained" color="secondary" disabled={!isGameStarted}>Reset</Button>
    </Box>
  )
} 