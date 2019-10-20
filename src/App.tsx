import * as React from 'react'
import { globalStyle } from './styles/global'
import { Global, css } from '@emotion/core'

import 'modern-normalize/modern-normalize.css'

export const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #fefefe;
          font-size: 4rem;
          font-style: italic;
          font-family: serif;
          font-weight: bold;
          color: #333;
        `}
      >
        Light Theme
      </div>
    </>
  )
}
