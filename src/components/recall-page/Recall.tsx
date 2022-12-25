import { recallText } from '../../data/recall';
import Step from '../../reusable-components/Step/Step';
import Tip from '../../reusable-components/Tip/Tip';

const Recall = () => {
  return (
    <div>
      <h2>{recallText.title}</h2>
      <p>{recallText.basic}</p>
      <Step text={recallText.method1} stepNumber={1} />
      <Tip text={recallText.tip1} />
      <p>{recallText.extension1_method1}</p>
      <p>{recallText.extension2_method2}</p>
      <Tip text={recallText.tip2} />
      <Tip text={recallText.tip3} />
      <Step text={recallText.method2} stepNumber={2} />
    </div>
  );
};

export default Recall;
