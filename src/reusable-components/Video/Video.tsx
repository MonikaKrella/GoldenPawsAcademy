interface IProp {
  url: string;
}

const Video = ({ url }: IProp) => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default Video;
