import { React } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <NavLink to='/' className='header__link hover'>Конвертер валют</NavLink>
      <NavLink to='/rates' className='header__link hover'>Текущие курсы</NavLink>
    </header>
  );
};

export default Header;
