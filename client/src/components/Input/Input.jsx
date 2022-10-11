import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../features/input/inputSlice';
import s from './Input.module.scss';

export const Input = ({ type, placeholder }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.input.value);

  return (
    <>
      <input
        onChange={(e) => {
          dispatch(setValue(e.target.value));
        }}
        value={value}
        className={s.input}
        type={type || 'text'}
        placeholder={placeholder || '🤔 Write something...'}
      />
    </>
  );
};
