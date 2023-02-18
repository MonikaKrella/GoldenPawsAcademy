import { stayText } from '../../data/stay';
import PageTitle from '../../reusable-components/PageTitle/PageTitle';
import Step from '../../reusable-components/Step/Step';
import Textbox from '../../reusable-components/Textbox/Textbox';
import Tip from '../../reusable-components/Tip/Tip';

export const Stay = () => {
  return (
    <div>
      <PageTitle title={stayText.title} />
      <Textbox text={stayText.intro} />
      <Step stepNumber={1} text={stayText.step1} />
      <Step stepNumber={2} text={stayText.step2} />
      <Step stepNumber={3} text={stayText.step3} />
      <Tip text={stayText.tip} />
    </div>
  );
};

export default Stay;
