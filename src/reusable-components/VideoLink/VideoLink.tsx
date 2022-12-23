import style from './videoLink.module.scss';

interface IProp {
  link: string;
  text: string;
}

const VideoLink = ({ link, text }: IProp) => {
  return (
    <div className={style.container}>
      <a href={link}>{text}</a>
    </div>
  );
};

export default VideoLink;
