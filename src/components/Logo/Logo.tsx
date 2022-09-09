import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/img/logo.png';
import styles from './Logo.module.scss';

const Logo: FC = () => {
  const { t } = useTranslation();

  return (
    <Link to="/" className={styles.logo}>
      <img src={logoImg} alt="" />
      <div>
        <h1>Pizza Shop</h1>
        <p>{t('logoTitle')}</p>
      </div>
    </Link>
  );
};

export default Logo;
