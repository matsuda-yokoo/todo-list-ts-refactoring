import { createTheme } from '@mui/material/styles'

const AppTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#d87274',
        light: '#ffa2a3',
        dark: '#a34449'
        }
      },
      components: {
        MuiButton: {
          defaultProps: {
            size: 'small', // ボタンのデフォルトのサイズをsmallにする
          },
        },
      },

  })

  export default AppTheme;