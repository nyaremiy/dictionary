import { useState } from 'react';
import s from './ButtonCheck.module.scss';

export const ButtonCheck = () => {
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
      className={`${s.button} ${click ? s.btnclick : ''} `}
      onClick={btnClickHandler}
    >
      <span>Перевірити</span>
    </button>
  );
};
