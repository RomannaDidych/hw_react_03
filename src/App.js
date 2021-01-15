import "./App.css";
import Timer from "./Components/Timer";

function App() {
  return (
    <div className="App">
      <Timer
        timer={{
          time: 5000,
          timeTick: 535,
          autostart: false,
        }}
      />
      <Timer
        timer={{
          time: 10000,
          timeTick: 1000,
          autostart: true,
        }}
      />
    </div>
  );
}

export default App;

