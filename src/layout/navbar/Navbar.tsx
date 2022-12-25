import { NavbarData } from '../../types/layout-data';
import style from './navbar.module.scss';
import NavbarTab from './NavbarTab';

interface IProp {
  navbarData: NavbarData[];
  handleOnClick: (index: number) => void;
}

const Navbar = ({ navbarData, handleOnClick }: IProp) => {
  return (
    <div className={style.container}>
      <div className={style.brand_box}></div>
      <div className={style.tab_container}>
        {navbarData.map((data) => {
          return (
            <NavbarTab
              title={data.title}
              onClick={handleOnClick}
              index={data.index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
