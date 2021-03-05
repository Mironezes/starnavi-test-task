import {GET_GAME_MODES, GAME_RESET, SET_ACTIVE_SQUARE} from "../actionTypes"

  
const handlers = {
  [GET_GAME_MODES]: (state, {payload}) => ({...state, gameModesList: {...payload} }),
  [SET_ACTIVE_SQUARE]: (state, {payload}) => ({...state, activeSquares: [...state.activeSquares, payload] }),
  [GAME_RESET]: state => ({...state, gameModesList: [], activeSquares: [], isGameStarted: false}),

  DEFAULT: state => state
}

export const apiReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state,action)
}