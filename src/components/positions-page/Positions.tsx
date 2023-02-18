import { positionsText } from '../../data/positions';
import PageTitle from '../../reusable-components/PageTitle/PageTitle';
import Textbox from '../../reusable-components/Textbox/Textbox';

const Positions = () => {
  return (
    <div>
      <PageTitle title={positionsText.title} />
      <Textbox text={positionsText.intro} />
    </div>
  );
};

export default Positions;
