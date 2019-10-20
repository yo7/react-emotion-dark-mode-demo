import * as React from 'react'
import css from '@emotion/css'

export const ThemeView: React.FC = () => {
  return (
    <div
      css={css`
        ${baseStyle};

        background-color: #fefefe;
        color: #333;
      `}
    >
      Light Theme
    </div>
  )
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
