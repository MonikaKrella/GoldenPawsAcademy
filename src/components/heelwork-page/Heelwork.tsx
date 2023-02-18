import { heelworkText } from '../../data/heelwork';
import PageTitle from '../../reusable-components/PageTitle/PageTitle';
import Step from '../../reusable-components/Step/Step';
import Textbox from '../../reusable-components/Textbox/Textbox';
import Tip from '../../reusable-components/Tip/Tip';

const Heelwork = () => {
  return (
    <div>
      <PageTitle title={heelworkText.pageTitle} />
      <Textbox text={heelworkText.intro} />
      <Textbox text={heelworkText.basic} />
      <Step text={heelworkText.step1} stepNumber={1} />
      <Tip text={heelworkText.step1_tip} />
    </div>
  );
};

export default Heelwork;
