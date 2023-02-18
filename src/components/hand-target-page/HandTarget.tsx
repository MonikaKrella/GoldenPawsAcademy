import { handTargetText } from '../../data/hand-taget';
import PageTitle from '../../reusable-components/PageTitle/PageTitle';
import Step from '../../reusable-components/Step/Step';
import Textbox from '../../reusable-components/Textbox/Textbox';
import Tip from '../../reusable-components/Tip/Tip';

const HandTarget = () => {
  return (
    <div>
      <PageTitle title={handTargetText.pageTitle} />
      <Textbox text={handTargetText.into} />
      <Step stepNumber={1} text={handTargetText.step1} />
      <Step stepNumber={2} text={handTargetText.step2} />
      <Step stepNumber={3} text={handTargetText.step3} />
      <Step stepNumber={4} text={handTargetText.step4} />
      <Tip text={handTargetText.tip} />
    </div>
  );
};

export default HandTarget;
