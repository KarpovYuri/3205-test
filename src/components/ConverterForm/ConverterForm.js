import { useState } from 'react';
import './ConverterForm.css';

function ConverterForm() {

  const [isSearchValue, setIsSearchValue] = useState('');
  const [isValidationError, setIsValidationError] = useState('');
  const [isValid, setIsValid] = useState(false);

  function handleChangeSearch(evt) {
    setIsValidationError(evt.target.validationMessage);
    setIsSearchValue(evt.target.value);
    setIsValid(evt.target.closest("form").checkValidity());
  };

  function onSubmitSearch(evt) {
    evt.preventDefault();
    if (!isValid) return;
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
            placeholder='100 USD in EUR'
            value={isSearchValue}
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
      <p className='converter__result'>Результат конвертации</p>
    </section>
  );
};

export default ConverterForm;
