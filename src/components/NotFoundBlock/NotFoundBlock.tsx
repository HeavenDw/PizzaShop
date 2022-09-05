import React, { FC } from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: FC = () => {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <h1>Ничего не найдено! :C</h1>
    </div>
  );
};

export default NotFoundBlock;
