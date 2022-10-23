import { useState } from 'react';
import { useSelector } from 'react-redux';
import './ConverterForm.css';

function ConverterForm() {

  const [isInputValue, setIsInputValue] = useState('');
  const [isValidationError, setIsValidationError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isConversionResult, setIsConversionResult] = useState('');

  const exchangeRates = useSelector(state => state.getRates.rates);

  function handleChangeSearch(evt) {
    setIsValidationError(evt.target.validationMessage);
    setIsInputValue(evt.target.value);
    setIsValid(evt.target.closest("form").checkValidity());
  };

  function onSubmitSearch(evt) {
    evt.preventDefault();
    if (!isValid) {
      setIsValidationError('Заполните это поле');
      return;
    }
    const array = isInputValue.toLocaleUpperCase().split(' ');
    if (exchangeRates[array[1]] === undefined || exchangeRates[array[3]] === undefined) {
      setIsConversionResult('Валюта не найдена');
      return;
    }
    const result =
      `${array[0]} ${array[1]} = ${(array[0] * exchangeRates[array[3]] / exchangeRates[array[1]]).toFixed(2)} ${array[3]}`;
    setIsConversionResult(result);
    setIsInputValue('');
    setIsValid(false);
  };

  return (
    <section className='converter'>
      <h1 className='title'>Конвертер валют</h1>
      <p className='converter__description'>Введите текст в виде 15 usd in rub</p>
      <form
        className={`converter__form ${isValidationError && 'convert__form-error'}`}
        onSubmit={onSubmitSearch}
        noValidate
      >
        <div className='converter__find-icon'></div>
        <div className='converter__input-wrapper'>
          <input
            className='converter__input'
            type='text'
            required
            pattern='^([0-9]{1,}[\s]{1}[a-z]{3}[\s]{1}[i]{1}[n]{1}[\s]{1}[a-z]{3})?$'
            autoComplete='off'
            placeholder='100 USD in EUR'
            value={isInputValue}
            onChange={handleChangeSearch}
          />
          <div
            className={`converter__button ${isValid ? 'hover-btn' : 'converter__button_disabled'}`}
            onClick={onSubmitSearch}
          >
          </div>
        </div>
      </form>
      <div className='converter__error'>{isValidationError}</div>
      <hr className='line'></hr>
      <p className='converter__result'>{isConversionResult}</p>
    </section>
  );
};

export default ConverterForm;
