import React, { useState, createContext, useContext } from 'react'
import { ThemeProvider as EmotionProvider } from 'emotion-theming'

export const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(isDarkMode() ? 'dark' : 'light')

  const toggleTheme = () => setMode(mode === 'light' ? 'dark' : 'light')

  return (
    <EmotionProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <ThemeContext.Provider
        value={{
          mode,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionProvider>
  )
}

type ThemeMode = 'light' | 'dark'

type ThemeContextType = {
  mode: ThemeMode
  toggleTheme: () => void
}

const defaultContext: ThemeContextType = {
  mode: 'light',
  toggleTheme: () => {},
}

export const ThemeContext = createContext<ThemeContextType>(defaultContext)
export const useTheme = () => useContext(ThemeContext)

const isDarkMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export type Theme = {
  bgColor: string
  textColor: string
}

const lightTheme: Theme = {
  bgColor: '#fefefe',
  textColor: '#333',
}

const darkTheme: Theme = {
  bgColor: '#222',
  textColor: '#aaa',
}
