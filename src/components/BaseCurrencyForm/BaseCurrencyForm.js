import { useSelector, useDispatch } from 'react-redux';
import { defineLang } from '../../actions/actionCreator';
import './BaseCurrencyForm.css';

function BaseCurrencyForm() {

  const currentCurrency = useSelector(state => state.defineCurrency.currency);
  const exchangeRates = useSelector(state => state.getRates.rates);
  const dispatch = useDispatch();

  function handleCheck(evt) {
    dispatch(defineLang({ currency: evt.target.id }));
  };

  return (
    <section className='currency'>
      <h1 className='title'>Текущие курсы валют</h1>
      <form className='currency__form'>
        <p className='currency__description'>Базовая валюта</p>
        <fieldset className='currency__fieldset'>
          <input
            className='currency__input'
            type='radio'
            id='USD'
            name='currency'
            onChange={handleCheck}
            checked={(currentCurrency === 'USD') ? true : false}
          />
          <label className='currency__label' htmlFor="USD">USD</label>
          <input
            className='currency__input'
            type='radio'
            id='RUB'
            name='currency'
            onChange={handleCheck}
            checked={(currentCurrency === 'RUB') ? true : false}
          />
          <label className='currency__label' htmlFor="RUB">RUB</label>
        </fieldset>
        <p className='currency__description'>Курсы</p>
        <div className='currency__fieldset'>
          1 {currentCurrency === 'RUB'
            ? `USD = ${exchangeRates.RUB.toFixed(2)} RUB`
            : `RUB = ${(exchangeRates.USD / exchangeRates.RUB).toFixed(2)} USD`}
        </div>
        <div className='currency__fieldset'>
          1 EUR = {currentCurrency === 'RUB'
            ? `${(exchangeRates.RUB / exchangeRates.EUR).toFixed(2)} RUB`
            : `${(exchangeRates.USD / exchangeRates.EUR).toFixed(2)} USD`}
        </div>
      </form>
      <hr className='line line_place_currency'></hr>
      <p className='currency__base'>Базовая валюта: {currentCurrency}</p>
    </section>
  );
};

export default BaseCurrencyForm;
