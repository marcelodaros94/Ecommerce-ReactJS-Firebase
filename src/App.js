import './App.css';
import AppRouter from './components/AppRouter/AppRouter'
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
