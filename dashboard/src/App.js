import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
        <Routes>          
          <Route path="/" exact element={<Dashboard/>}/>
          <Route path="/not-found" exact element={<NotFound/>}/>
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
