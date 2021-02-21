import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'

const $count = createStore(0)
const increase = createEvent()

$count.on(increase, (v) => v + 1) 

$count.watch((val) => {
  console.log(val)
})

function App() {
  const count = useStore($count)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => increase()}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
