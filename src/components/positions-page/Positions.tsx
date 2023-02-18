import { positionsText } from '../../data/positions';
import PageTitle from '../../reusable-components/PageTitle/PageTitle';
import Textbox from '../../reusable-components/Textbox/Textbox';

const Positions = () => {
  return (
    <div>
      <PageTitle title={positionsText.title} />
      <Textbox text={positionsText.intro} />
      <Textbox title={positionsText.sitTitle} text={positionsText.sitText} />
      <Textbox title={positionsText.downTitle} text={positionsText.downText} />
      <Textbox title={positionsText.stayTitle} text={positionsText.stayText} />
    </div>
  );
};

export default Positions;
