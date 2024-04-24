import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import Shop from './Pages/Shop';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<Shop />} />
          
        </Routes>
      
    </Router>
  );
}

export default App;
