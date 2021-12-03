import './App.css';
import { dataDay1, getNumberOfIncrements, getNumberOfSlidingWindowIncrements } from './Day1';
import { dataDay2, getDirection, getDirectionWithAim } from './Day2';
import { dataDay3 , getGammaAndEpsilon, getLifeSupportRating} from './Day3';

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
        <p>
          Day 2 A: {getDirection(dataDay2)}
        </p>
        <p>
          Day 2 B: {getDirectionWithAim(dataDay2)}
        </p>
        <p>
          Day 3 A: {getGammaAndEpsilon(dataDay3)}
        </p>
        <p>
          Day 3 B: {getLifeSupportRating(dataDay3)}
        </p>
      </header>
    </div>
  );
}

export default App;
