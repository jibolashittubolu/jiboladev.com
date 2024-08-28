import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from 'react'




const ThemeContextProvider = () => {
  
    const darkTheme = createTheme({
        palette: {
          mode: 'dark', //default theme
          primary: {
            main: '#90caf9',
          },
          secondary: {
            main: '#f48fb1',
          },
         // add other properties here…
        },
      });

      
    return (
    <div>
        ThemeContext
    </div>
  )
}

export default ThemeContextProvider