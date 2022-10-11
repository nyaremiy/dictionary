import { Input } from '../Input/Input';
import s from './MainBox.module.scss';
import { ButtonCheck } from './../ButtonCheck/ButtonCheck';
import { useEffect, useState } from 'react';
import { ListWord } from './../../localStorage/ListWord.js';
import { useSelector, useDispatch } from 'react-redux';
import { setValue } from '../../features/input/inputSlice';
import { ButtonNext } from '../ButtonNext/ButtonNext';

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const MainBox = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState(ListWord[0]);
  const [status, setStatus] = useState(false);
  const [btnCheck, setbtnCheck] = useState(true);
  const inputValue = useSelector((state) => state.input.value);

  const mainWordForTranslate = () => {
    const random = getRandomArbitrary(0, ListWord.length - 1).toFixed(0);
    if (word.id === ListWord[random].id) {
      mainWordForTranslate();
    } else {
      setWord(ListWord[random]);
    }
  };

  const checkWord = () => {
    setTimeout(() => {
      word.wordUa.some((item) => {
        if (inputValue.toLowerCase() === item.toLowerCase()) {
          setStatus(true);
          setbtnCheck(false);
          return;
        }
      });
      setbtnCheck(false);
    }, 300);
  };

  const btnNextWordHandler = () => {
    setTimeout(() => {
      dispatch(setValue(''));
      mainWordForTranslate();
      setStatus(false);
      setbtnCheck(true);
    }, 300);
  };

  useEffect(() => {
    mainWordForTranslate();
  }, []);

  return (
    <div className={s.main}>
      <div className={s.wrap}>
        <div className={s.title}>🐱‍👤 Переклади українською...</div>
        <div className={s.word}>
          {word.wordEn[getRandomArbitrary(0, word.wordEn.length - 1)]}
        </div>
        <div className={s.input}>
          <Input />
        </div>
        <div
          className={s.btn}
          onClick={btnCheck ? checkWord : btnNextWordHandler}
        >
          {btnCheck ? <ButtonCheck /> : <ButtonNext status={status} />}
        </div>
        <div
          className={`${s.message} ${btnCheck ? '' : status ? s.green : s.red}`}
        >
          {!btnCheck
            ? status
              ? 'Молодець! 😃'
              : `Упсс.. Нажаль невірно😒( \n Правильна відповідь: [${word.wordUa}]`
            : ''}
        </div>
      </div>
    </div>
  );
};
