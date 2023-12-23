import majster from '../../assets/majster.png';
import style from './inBuildPage.module.scss'

const InBuildPage = () => {
  return (
  <div className={style.container}>
    <a href="https://golden-paws-academy.vercel.app/">STRONA W BUDOWIE</a>
    <img src={majster} alt="golden majster" height={500} />
  </div>
  
  );
};

export default InBuildPage;
