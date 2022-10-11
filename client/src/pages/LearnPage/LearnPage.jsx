import { MainBox } from '../../components/MainBox/MainBox';
import s from './LearnPage.module.scss';

export const LearnPage = () => {
  return (
    <div className={s.main}>
      <div className={`container ${s.wrap}`}>
        <div className={s.box}>
          <MainBox />
        </div>
      </div>
    </div>
  );
};
