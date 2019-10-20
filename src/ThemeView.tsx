import * as React from 'react'
import css from '@emotion/css'
import { ThemeProvider } from 'emotion-theming'

export const ThemeView: React.FC = () => {
  return (
    <ThemeProvider theme={isDarkMode() ? darkTheme : lightTheme}>
      <div
        css={theme => css`
          ${baseStyle};

          background-color: ${theme.bgColor};
          color: ${theme.textColor};
        `}
      >
        Light Theme
      </div>
    </ThemeProvider>
  )
}

const isDarkMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

type Theme = {
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

const baseStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 4rem;
  font-style: italic;
  font-family: serif;
  font-weight: bold;
`
