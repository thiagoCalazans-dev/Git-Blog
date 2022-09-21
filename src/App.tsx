import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Router } from './components/Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {


  return (
    <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
    <Router />
     <GlobalStyle/>
     </ThemeProvider>
     </BrowserRouter>
  )
}


