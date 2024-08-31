import './App.css';
import React from 'react';
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Main from './Pages/Main/Main';
function App() {
  return (
    <div className="App">  
    <Routes>
      <Route path='/' element={<Main/>}>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
