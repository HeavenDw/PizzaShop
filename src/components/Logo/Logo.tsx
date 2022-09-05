import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/img/logo.png';

const Logo: FC = () => {
  return (
    <Link to="/" className="header__logo">
      <img src={logoImg} alt="" />
      <div>
        <h1>Pizza Shop</h1>
        <p>best pizza in galaxy</p>
      </div>
    </Link>
  );
};

export default Logo;
