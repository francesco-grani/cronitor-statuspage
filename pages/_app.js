import { useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components'
import Cookies from 'js-cookie'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-vis/dist/style.css';

import Layouts from '../components/layouts'
import theme, { GlobalStyle, ThemeContext } from '../constants/theme';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // const theme = useContext(ThemeContext);
  const [themeMode, setThemeMode] = useState('dark')

  return (<ThemeContext.Provider value={{
      mode: themeMode,
      toggleMode: () => {
        const newTheme = themeMode === 'dark' ? 'light' : 'dark'
        setThemeMode(newTheme)
        Cookies.set('THEME', newTheme)
      }
    }}>
      <ThemeProvider theme={theme(themeMode)}>
        <GlobalStyle />
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </ThemeProvider>
    </ThemeContext.Provider>)
}

export default MyApp
