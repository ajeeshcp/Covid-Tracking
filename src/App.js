
import './App.css';
import Home from "./pages/Home"
import MiniDrawer from './component/Main';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Statewise from './pages/Statewise';
import Districtwise from './pages/Districtwise';
import About from './pages/About';


function App() {
  return (
    <div className="App">
        <Router>
          <MiniDrawer>
              <Route exact path="/">
                <Home />
              </Route> 
              <Route path="/statewise">
                <Statewise />
              </Route> 
              <Route path="/districtwise">
                <Districtwise />
              </Route> 
              <Route path="/about">
                <About />
              </Route> 
              
          </MiniDrawer>
        </Router>
    </div>
  );
}

export default App;
