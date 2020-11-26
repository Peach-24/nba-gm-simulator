import Header from './Header';
import CurrentRoster from './CurrentRoster';
import AvailablePlayers from './AvailablePlayers';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />

      <CurrentRoster />
      <AvailablePlayers />
    </div>
  );
}

export default App;
