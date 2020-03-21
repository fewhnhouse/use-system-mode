import { useState } from 'react'

export function useSystemMode() {
  const [mode, setMode] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  )
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    setMode(e.matches ? 'dark' : 'light')
  })
  return mode
}

export function useIsDarkMode() {
  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    setDarkMode(e.matches)
  })
  return darkMode
}
