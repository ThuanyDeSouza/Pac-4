import Styled from 'styled-components';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TextComponent from './components/Text';
import Home from './pages/home';
import Main from './pages/main';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
