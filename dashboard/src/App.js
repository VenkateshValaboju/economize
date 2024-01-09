import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App flex">
      <Sidebar/>
        
      <Dashboard/>
    </div>
  );
}

export default App;
