import {BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;