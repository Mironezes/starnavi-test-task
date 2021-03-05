import {React} from 'react'
import {Select, FormControl, Button, InputLabel, MenuItem, Box} from '@material-ui/core'


export const ModePicker = (gameModesList) => {


  console.log(gameModesList)

  const inputHander = () => {

  }


  return (
    <Box component="section" className="mode-picker">
      <FormControl className="mode-picker__select" variant="outlined" size="small">
        <InputLabel>Pick the game mode</InputLabel>
        <Select
          onChange={inputHander}
        >
          {/* {gameModesList.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            )
          })} */}
        </Select>
      </FormControl>
      <Button className="mode-picker__button" size="small" variant="contained" color="primary">START</Button>
    </Box>
  )
} 