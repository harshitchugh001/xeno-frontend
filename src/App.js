
import './App.css';
import Home from './components/home';
import Activate from './components/Activate';
import Contact from './components/contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className="App">

          <Routes>
            <Route key="Home" path='/' exact element={<Home></Home>} />
            <Route path="/auth/activates/:token" exact element={<Activate />} />
            <Route path='/contactlist' exact element={<Contact></Contact>}></Route>
            <Route></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
