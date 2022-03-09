import React from 'react'
import './App.css'
import AppContainer from './components/AppContainer'
import TodoInput from './components/TodoInput'
import AppRow from './components/AppRow'

function App() {
  return (
    <main>
      {/*zet het in het midden */}
      <AppContainer>
        {/*geeft padding aan de randen */}
        <AppRow>
          <TodoInput />
        </AppRow>
      </AppContainer>
    </main>
  )
}
export default App
