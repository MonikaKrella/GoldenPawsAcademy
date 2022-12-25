import { useNavigate } from 'react-router-dom';
import style from './sidebarLink.module.scss';

interface IProp {
  title: string;
  path: string;
}

const SidebarLink = ({ title, path }: IProp) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(path);
  };

  return (
    <div className={style.container}>
      <div className={style.link} onClick={() => onClick()}>
        {title}
      </div>
    </div>
  );
};

export default SidebarLink;
