import React from 'react'
import './App.css'
import AppContainer from './components/AppContainer'
import TodoInput from './components/TodoInput'
import AppRow from './components/AppRow'
import TodoAppHeader from './components/TodoAppHeader'
import TodoItem from './components/TodoItem'

function App() {
  // const dummyItems = new Array(6)
  return (
    <main>
      {/*zet het in het midden */}
      <AppContainer>
        {/*geeft padding aan de randen */}
        <AppRow>
          <TodoAppHeader />

          <TodoInput />

          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </AppRow>
      </AppContainer>
    </main>
  )
}
export default App
