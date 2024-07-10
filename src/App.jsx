import "./App.css"
import React from 'react'
import Menu from "./components/Menu/Menu"

function App() {
  return (
    <div className="root-adjustifier">
      <div className="body">
        <div className="menu-adjustifier">
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default App