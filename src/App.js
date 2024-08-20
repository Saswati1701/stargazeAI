import './App.css';
import Home from './containers/Home';
import LandingPage from './containers/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { navigation } from './routes';
import Navbar from './components/Navbar';
import Features from './containers/Features';
import Roadmap from './containers/Roadmap';
import Learn from './containers/Learn';
import ButtonGradient from './components/ButtonGradient';


function App() {
  return (
      <div className="App">
        <Navbar/>
        <div>
        {navigation.map((item)=>(
          item.component
        ))}
        </div>
        <ButtonGradient/>
      </div>
  );
}

export default App;
