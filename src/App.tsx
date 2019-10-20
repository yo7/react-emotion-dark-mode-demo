import { Global } from '@emotion/core'
import 'modern-normalize/modern-normalize.css'
import * as React from 'react'
import { globalStyle } from './styles/global'
import { ThemeView } from './ThemeView'
import { ThemeProvider } from './ThemeProvider'

export const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider>
        <ThemeView />
      </ThemeProvider>
    </>
  )
}
