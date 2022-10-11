import { useState } from 'react';
import s from './ButtonNext.module.scss';

export const ButtonNext = ({ status }) => {
  const [click, setClick] = useState(false);

  const btnClickHandler = () => {
    setClick(true);

    setTimeout(() => {
      setClick(false);
    }, 300);
  };

  return (
    <button
      type='button'
      className={`${s.button} ${click ? s.btnclick : ''} ${
        status ? s.green : s.red
      }`}
      onClick={btnClickHandler}
    >
      <span>Наступне</span>
    </button>
  );
};
