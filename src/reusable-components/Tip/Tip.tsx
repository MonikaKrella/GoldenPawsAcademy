import style from './tip.module.scss';
import { FaRegLightbulb } from 'react-icons/fa';

interface IProp {
  text: string;
}

const Tip = ({ text }: IProp) => {
  return (
    <div className={style.container}>
      <div className={style.icon}>
        <FaRegLightbulb size={16} />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default Tip;
