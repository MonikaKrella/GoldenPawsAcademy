import { Link } from 'react-router-dom';
import style from './sidebar.module.scss';
import { SidebarData } from './SidebarData';

const Sidebar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.items_container}>
        {SidebarData.map((item, index) => {
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
