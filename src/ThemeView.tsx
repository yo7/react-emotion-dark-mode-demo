import * as React from 'react'
import css from '@emotion/css'
import { Theme, useTheme } from './ThemeProvider'

export const ThemeView: React.FC = () => {
  const { mode, toggleTheme } = useTheme()

  return (
    <div
      css={(theme: Theme) => css`
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background-color: ${theme.bgColor};
      `}
    >
      <div
        css={(theme: Theme) => css`
          font-size: 4rem;
          font-style: italic;
          font-family: serif;
          font-weight: bold;
          color: ${theme.textColor};
        `}
      >
        {mode === 'light' ? 'Light Theme' : 'Dark Theme'}
      </div>
      <button
        onClick={toggleTheme}
        css={css`
          margin-top: 5rem;
          font-size: 1.5rem;
          color: #fff;
          background-color: #7841e2;
          padding: 0.5rem;
          border-radius: 5px;
        `}
      >
        toggle theme!
      </button>
    </div>
  )
}
