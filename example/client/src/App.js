import React from 'react'
import { useSystemMode, useIsDarkMode } from '@fe.whnhouse/use-system-mode'

const App = () => {
  const mode = useSystemMode()
  const darkMode = useIsDarkMode()
  console.log(mode)
  return (
    <div>
      <h1>System Mode:{mode}</h1>
      <h2>Dark Mode: {darkMode ? 'On' : 'Off'}</h2>
    </div>
  )
}

export default App
