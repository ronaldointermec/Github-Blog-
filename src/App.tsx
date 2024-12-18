import { ThemeProvider } from 'styled-components'
import { Outlet } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { IssuesProvider } from './contexts/IssuesContext'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme} >
      <GlobalStyle />
      <IssuesProvider>
        <Header />
        <Outlet />
      </IssuesProvider>
    </ThemeProvider>
  )
}

