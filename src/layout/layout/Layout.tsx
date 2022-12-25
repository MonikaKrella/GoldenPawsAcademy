import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutModule, NavbarData } from '../../types/layout-data';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import style from './layout.module.scss';
import { LayoutData } from './LayoutData';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const [chosenModule, setChosenModule] = useState<LayoutModule>(LayoutData[0]);
  const navigate = useNavigate();

  const navbarTitles: NavbarData[] = LayoutData.map((module, index) => {
    return { title: module.navbarTitle, index: index };
  });

  const handleChosenMoodule = (index: number) => {
    navigate('/');
    setChosenModule(LayoutData[index]);
  };

  return (
    <div className={style.layout}>
      <Sidebar sidebarData={chosenModule.sidebarData} />
      <Navbar navbarData={navbarTitles} handleOnClick={handleChosenMoodule} />
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default Layout;
