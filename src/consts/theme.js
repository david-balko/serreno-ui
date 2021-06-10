import { createMuiTheme } from "@material-ui/core";

const cssConstants = {
  header: {
    height: 74,
  },
  sideBar: {
    idealWidth: 242
  },
  mainView: {
    idealWidth: 242
  },
  graphView: {
    yAxisWidth: 60,
    marginRight: 24
  }
}

const theme = createMuiTheme({
  spacing: 5,
  palette: {
    background: '#2a2d56',
    events: {
      main: '#c5fbb4',
      background: 'rgba(197, 251, 180, 0.3)'
    },
    uo: {
      main: '#facd91',
      line: '#facd91',
      background: '#facd91',
    },
    iap: {
      main: '#7fd6fe',
      line: '#08a9f0'
    },
    temp: {
      main: '#e5a8fb',
      line: '#e5a8fb'
    },
    headers: '#171b3e'
  },
  typography: {
    body1: {
      lineHeight: 1,
      fontSize: 30,
      fontWeight: 'bold'
    },
    body2: {
      lineHeight: 1,
      fontSize: 24,
      fontWeight: 'bold'
    },
    subtitle1: {
      lineHeight: 1,
      fontSize: 30,
    },
    subtitle2: {
      lineHeight: 1,
      fontSize: 24,
    },
    h1: {
      lineHeight: 0.9,
      fontSize: 170,
      fontWeight: 'bold'
    },
    h2: {
      lineHeight: 1,
      fontSize: 62,
      fontWeight: 'bold'
    },
    fontFamily: `Calibri, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  },
});

export { theme, cssConstants }