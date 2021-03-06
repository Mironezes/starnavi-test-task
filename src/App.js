import React from 'react'
import {Container} from '@material-ui/core/'
import {Home} from './pages/Home'
import {ApiState} from './context/api/ApiState'


function App() {
  return (
    <ApiState>
        <main className="page-content">
          <Container maxWidth="md"> 
            <Home />
          </Container>
        </main>
    </ApiState>

  )
}

export default App
