import paw from '../../assets/goldens.jpg';
import style from './home.module.scss';

const HomePage = () => {
  return (
    <div className={style.container}>
      <img src={paw} alt="Golden paw" height={300} />
      <h1>Goldenkowa Edukacja</h1>
    </div>
  );
};

export default HomePage;
