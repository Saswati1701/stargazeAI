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
import Features from './containers/Features';
import Roadmap from './containers/Roadmap';
import Learn from './containers/Learn';


function App() {
  return (
      <div className="App">
        <Navbar/>
        {navigation.map((item)=>(
          item.component
        ))}
          
      </div>
  );
}

export default App;
