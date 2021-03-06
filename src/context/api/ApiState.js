import React, {useReducer} from 'react'
import {GAME_RESET, SET_GAME_MODE, GET_GAME_MODES, SET_ACTIVE_SQUARE, REMOVE_ACTIVE_SQUARE} from '../actionTypes'
import {ApiContext} from './apiContext'
import {apiReducer} from './apiReducer'
import axios from 'axios'

 
export const ApiState = ({children}) => {

  const initialState = {
    gameModesList: {},
    currentGameSize: 0,
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

  const setCurrentGameMode = async (item) => {
    
    dispatch({
      type: SET_GAME_MODE,
      payload: item
    })   
  }


  const setActiveSquare = async (item) => {
    dispatch({
      type: SET_ACTIVE_SQUARE,
      payload: item
    })   
  }

  const removeActiveSquare = async (item) => {
    dispatch({
      type: REMOVE_ACTIVE_SQUARE,
      payload: item
    })   
  }



  const resetGame = () => dispatch({
    type: GAME_RESET
  })

  const {gameModesList, activeSquares, currentGameSize, isGameStarted} = state

  return(
    <ApiContext.Provider 
      value={{gameModesList, activeSquares, currentGameSize, isGameStarted,  getGameModes, setCurrentGameMode, setActiveSquare, removeActiveSquare, resetGame}}>
      {children}
    </ApiContext.Provider>
  )
}