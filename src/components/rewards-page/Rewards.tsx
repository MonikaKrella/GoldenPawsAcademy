import PageTitle from '../../reusable-components/PageTitle/PageTitle';
import Step from '../../reusable-components/Step/Step';
import Textbox from '../../reusable-components/Textbox/Textbox';
import Tip from '../../reusable-components/Tip/Tip';
import { rewardsText } from '../../data/rewards';

const Rewards = () => {
  return (
    <div>
      <PageTitle title={rewardsText.title} />
      <p>{rewardsText.intro}</p>
      <Textbox title={rewardsText.foodTitle} text={''} />
      <Step text={rewardsText.foodText} stepNumber={1} />
      <Tip text={rewardsText.tipFood} />
      <Step text={rewardsText.foodText2} stepNumber={2} />
      <Tip text={rewardsText.tipFood2} />
      <Textbox title={rewardsText.toysTitle} text={''} />
      <Step text={rewardsText.toysText} stepNumber={1} />
      <Textbox title={rewardsText.socialTitle} text={''} />
      <Step text={rewardsText.socialText} stepNumber={1} />
      <Tip text={rewardsText.socialTip} />
      <Textbox title={rewardsText.environmentTitle} text={''} />
      <Step text={rewardsText.environmentText} stepNumber={1} />
    </div>
  );
};

export default Rewards;
