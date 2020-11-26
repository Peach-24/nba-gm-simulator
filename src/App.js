import Header from './Header';
import CurrentRoster from './CurrentRoster';
import AvailablePlayers from './AvailablePlayers';
import Budget from './Budget';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Budget />
      <CurrentRoster />
      <AvailablePlayers />
    </div>
  );
}

export default App;
