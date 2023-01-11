import { rewardsText } from '../../data/rewards';
import PageTitle from '../../reusable-components/PageTitle/PageTitle';
import Step from '../../reusable-components/Step/Step';
import Textbox from '../../reusable-components/Textbox/Textbox';
import Tip from '../../reusable-components/Tip/Tip';

const Rewards = () => {
  return (
    <div>
      <PageTitle title={rewardsText.title} />
      <Textbox title={rewardsText.foodTitle} text={''} />
      <Step text={rewardsText.foodText} stepNumber={1} />
      <Tip text={rewardsText.tipFood} />
      <Step text={rewardsText.foodText2} stepNumber={2} />
      <Tip text={rewardsText.tipFood2} />
      <Textbox title={rewardsText.toysTitle} text={''} />
    </div>
  );
};

export default Rewards;
