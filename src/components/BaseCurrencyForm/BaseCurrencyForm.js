import { useState } from 'react';
import './BaseCurrencyForm.css';

function BaseCurrencyForm() {

  const [isCurrentCurrency, setIsCurrentCurrency] = useState('USD');

  function handleCheck(evt) {
    setIsCurrentCurrency(evt.target.id);
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
            checked={(isCurrentCurrency === 'USD') ? true : false}
          />
          <label className='currency__label' htmlFor="USD">USD</label>
          <input
            className='currency__input'
            type='radio'
            id='RUB'
            name='currency'
            onChange={handleCheck}
            checked={(isCurrentCurrency === 'RUB') ? true : false}
          />
          <label className='currency__label' htmlFor="RUB">RUB</label>
        </fieldset>
        <p className='currency__description'>Курсы</p>
        <div className='currency__fieldset'>1 USD = 63.49 RUB</div>
        <div className='currency__fieldset'>1 EUR = 72.20 RUB</div>
      </form>
      <hr className='line line_place_currency'></hr>
      <p className='currency__base'>Базовая валюта: {isCurrentCurrency}</p>
    </section>
  );
};

export default BaseCurrencyForm;
