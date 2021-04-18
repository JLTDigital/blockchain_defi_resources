import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeView from './views/HomeView'

function App() {
  return (
    <Router>
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeView} exact />
        </Container>
      </main>
    </Router>
  );
}

export default App;
