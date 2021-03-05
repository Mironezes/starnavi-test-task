import React from 'react'
import {Container} from '@material-ui/core/'
import {AlertModal} from './components/UI/Alert'
import {Home} from './pages/Home'
import {AlertState} from './context/alert/AlertState'
import {ApiState} from './context/api/ApiState'


function App() {
  return (
    <ApiState>
      <AlertState>
        <main className="page-content">
          <Container maxWidth="md"> 
            <AlertModal alert={{text: '', type: 'danger'}}/>
            <Home />
          </Container>
        </main>
      </AlertState>
    </ApiState>

  )
}

export default App
