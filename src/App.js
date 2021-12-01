import './App.css';
import { dataDay1, getNumberOfIncrements, getNumberOfSlidingWindowIncrements } from './Day1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Day 1 A: {getNumberOfIncrements(dataDay1)}
        </p>
        <p>
          Day 1 B: {getNumberOfSlidingWindowIncrements(dataDay1)}
        </p>
      </header>
    </div>
  );
}

export default App;
