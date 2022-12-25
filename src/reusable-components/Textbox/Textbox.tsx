import style from './textbox.module.scss';

interface IProp {
  text: string;
  title?: string;
}

const Textbox = ({ text, title }: IProp) => {
  return (
    <div className={style.container}>
      {title && <h5>{title}</h5>}
      <p>{text}</p>
    </div>
  );
};

export default Textbox;
