import { SidebarData } from '../../types/layout-data';
import style from './sidebar.module.scss';
import SidebarLink from './SidebarLink';

interface IProp {
  sidebarData: SidebarData[];
}

const Sidebar = ({ sidebarData }: IProp) => {
  return (
    <div className={style.wrapper}>
      <div className={style.items_container}>
        {sidebarData.map((item, index) => {
          return (
            <SidebarLink title={item.title} path={item.path} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
