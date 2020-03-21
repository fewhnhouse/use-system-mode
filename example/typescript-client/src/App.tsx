import React from 'react'
import { useSystemMode } from '@fe.whnhouse/use-system-mode'

const App = () => {
  const mode = useSystemMode()
  console.log(mode)
  return (
    <div>
      <h1>System Mode:{mode}</h1>
    </div>
  )
}

export default App
