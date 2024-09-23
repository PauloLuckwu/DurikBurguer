import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Router from './Router';

function App() {
  return (
      <BrowserRouter>
        <Router/>
        <Toaster/>
      </BrowserRouter>
  );
}

export default App;
