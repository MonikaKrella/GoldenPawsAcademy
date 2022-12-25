import { Link } from 'react-router-dom';
import { SidebarData } from '../../types/layout-data';
import style from './sidebar.module.scss';

interface IProp {
  sidebarData: SidebarData[];
}

const Sidebar = ({ sidebarData }: IProp) => {
  return (
    <div className={style.wrapper}>
      <div className={style.items_container}>
        {sidebarData.map((item, index) => {
          return (
            <div key={index} className={style.item}>
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
