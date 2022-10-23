import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import ExchangeRates from '../ExchangeRates/ExchangeRates';
import ErrorPage from '../ErrorPage/ErrorPage';
import { defineLang, getRates } from '../../actions/actionCreator';
import api from '../../utils/Api';
import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const lang = window.navigator.language || navigator.userLanguage;
    if (lang === 'ru-RU' || lang === 'ru') dispatch(defineLang({ currency: 'RUB' }));
    else dispatch(defineLang({ currency: 'USD' }));
    api.getExchangeRates()
      .then((exchangeRates) => dispatch(getRates({ rates: exchangeRates.rates })))
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
