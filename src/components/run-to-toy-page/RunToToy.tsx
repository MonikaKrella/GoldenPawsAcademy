import { runToToyText } from '../../data/run-to-toy';
import PageTitle from '../../reusable-components/PageTitle/PageTitle';
import Video from '../../reusable-components/Video/Video';

const RunToToy = () => {
  return (
    <div>
      <PageTitle title={runToToyText.title} />
      <Video url={'https://www.youtube.com/embed/ekcJi7DrzWU'} />
    </div>
  );
};

export default RunToToy;
