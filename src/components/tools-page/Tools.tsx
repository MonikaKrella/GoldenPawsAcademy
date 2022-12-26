import { toolsText } from '../../data/tools';
import PageTitle from '../../reusable-components/PageTitle/PageTitle';

const Tools = () => {
  return (
    <div>
      <PageTitle title={toolsText.title} />
      <p>{toolsText.voice}</p>
      <p>{toolsText.clicker}</p>
      <p>{toolsText.whistle}</p>
    </div>
  );
};

export default Tools;
