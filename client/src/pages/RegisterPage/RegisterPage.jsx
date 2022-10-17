import s from './RegisterPage.module.scss';
import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../../features/auth/authSlice';
import { LearnPage } from '../../pages/LearnPage/LearnPage';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, \n Pass: ${pass}`);
    axios
      .post(' http://localhost:4444/auth/reg', {
        email: email,
        password: pass
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === 'success') {
          dispatch(setAuth(true));
        }
        // setEmail('');
        // setPass('');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return auth ? (
    <LearnPage />
  ) : (
    <div className={s.main}>
      <div className={`container ${s.wrap}}`}>
        <form className={s.form} onSubmit={(e) => submitFormHandler(e)}>
          <h2 className={s.title}>Реєстрація</h2>
          <label className={s.lb}>
            <input
              type='email'
              className={s.input}
              placeholder='емайл@ем.com'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label className={s.lb}>
            <input
              type='password'
              className={s.input}
              placeholder='пароль'
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
          </label>
          <button className={s.btn} type='submit'>
            <span>Зареєстрватися</span>
          </button>
          <div className={s.haveac}>Уже є акаунт? Ввійти</div>
        </form>
      </div>
    </div>
  );
};
