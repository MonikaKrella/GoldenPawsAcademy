import style from './page-title.module.scss';

interface IProp {
  title: string;
}

const PageTitle = ({ title }: IProp) => {
  return <h2>{title}</h2>;
};

export default PageTitle;
