import './App.css';

import Weather from './weather';
import Forecast from './forecast';
function App() {
  
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather/>
      <section className='app'>
        <Forecast />
      </section>
    </div>
  );
}

export default App;

