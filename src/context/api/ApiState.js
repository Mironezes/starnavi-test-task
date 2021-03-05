import React, {useReducer} from 'react'
import {GAME_RESET, GET_GAME_MODES, SET_ACTIVE_SQUARE} from '../actionTypes'
import {ApiContext} from './apiContext'
import {apiReducer} from './apiReducer'
import axios from 'axios'

 
export const ApiState = ({children}) => {

  const initialState = {
    gameModesList: {},
    activeSquares: [], 
    isGameStarted: false
  }

  const [state, dispatch] = useReducer(apiReducer, initialState)

  const getGameModes = async () => {
    const response = await axios.get("https://demo1030918.mockable.io/")

    dispatch({
      type: GET_GAME_MODES,
      payload: response.data
    })   
  }

  const setActiveSquare = async (item) => {
    dispatch({
      type: SET_ACTIVE_SQUARE,
      payload: item
    })   
  }



  const resetGame = () => dispatch({
    type: GAME_RESET
  })

  const {gameModesList, activeSquares, isGameStarted} = state

  return(
    <ApiContext.Provider 
      value={{gameModesList, activeSquares, isGameStarted, getGameModes, setActiveSquare, resetGame}}>
      {children}
    </ApiContext.Provider>
  )
}