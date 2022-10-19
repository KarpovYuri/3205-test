import { Routes, Route } from 'react-router-dom';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import ExchangeRates from '../ExchangeRates/ExchangeRates';
import ErrorPage from '../ErrorPage/ErrorPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={<CurrencyConverter />} />
        <Route path='/rates' element={<ExchangeRates />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
