import { AppHeader } from './components/AppHeader/AppHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './consts/theme';



function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppHeader />
          <AppRouter />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
