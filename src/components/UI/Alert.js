import React from 'react'
import {useContext} from 'react'
import { AlertContext } from '../../context/alert/alertContext'
import Alert from '@material-ui/lab/Alert'

export const AlertModal = () => {

  const {alert, hideAlert} = useContext(AlertContext)

  if(!alert) return null

  return (
    <Alert severity="error" onClick={hideAlert}>{alert.text}</Alert>
  )
  
}