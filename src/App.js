import './App.css';
import Home from './containers/Home';
import LandingPage from './containers/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { navigation } from './constants';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
            {navigation.map((item)=>(
                  <Route key={item.id} path={`/${item.url}`} element={item.component}/>
              ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
