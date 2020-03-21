import React from 'react'
import { useSystemMode, useIsDarkMode } from '@fe.whnhouse/use-system-mode'

const App = () => {
  const mode = useSystemMode()
  const darkMode = useIsDarkMode()
  return (
    <div style={{ width: '100vw', height: '100vh', background: darkMode ? '#2f3542' : 'white', padding: 20 }}>
      <h1 style={{ color: darkMode ? 'white' : 'black' }}>System Mode: {mode}</h1>
      <h2 style={{ color: darkMode ? 'white' : 'black' }}>Dark Mode: {darkMode ? 'On' : 'Off'}</h2>
    </div>
  )
}

export default App
