import React, {useReducer} from 'react'
import { SHOW_ALERT, HIDE_ALERT } from '../actionTypes'
import { AlertContext } from './alertContext'
import { alertReducer } from './alertReducer'


export const AlertState = ({children}) => {
  const [state, dispatch] = useReducer(alertReducer, null)

  const hideAlert = () => dispatch({type: HIDE_ALERT})

  const showAlert = (text, type = "secondary") => {
    dispatch({
      type: SHOW_ALERT,
      payload: {type, text}
    })
  }

  return (
    <AlertContext.Provider value={{hideAlert, showAlert, alert: state}}>
      {children}
    </AlertContext.Provider>
  )

}