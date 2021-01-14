import './App.css';
import Timer from './Components/Timer';

function App() {
  return (
    <div className="App">
      <Timer timer={{
              time: 5000,
              timeTick: 1000,
              autostart: false
            }} />  
    </div>
  );
}

export default App;

