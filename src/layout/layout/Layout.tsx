import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import style from './layout.module.scss';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className={style.layout}>
      <Sidebar />
      <Navbar />
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default Layout;
