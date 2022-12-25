import style from './navbarTab.module.scss';

interface IProp {
  title: string;
  index: number;
  onClick: (index: number) => void;
}

const NavbarTab = ({ title, onClick, index }: IProp) => {
  return (
    <div className={style.container}>
      <button className={style.button} onClick={() => onClick(index)}>
        {title}
      </button>
    </div>
  );
};

export default NavbarTab;
