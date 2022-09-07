import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/img/logo.png';
import styles from './Logo.module.scss';

const Logo: FC = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logoImg} alt="" />
      <div>
        <h1>Pizza Shop</h1>
        <p>лучшая пицца</p>
      </div>
    </Link>
  );
};

export default Logo;
