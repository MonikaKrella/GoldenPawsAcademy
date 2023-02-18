import { toyPlayText } from '../../data/toyplay';
import Step from '../../reusable-components/Step/Step';
import Tip from '../../reusable-components/Tip/Tip';
import Video from '../../reusable-components/Video/Video';

const ToyPlay = () => {
  return (
    <div>
      <h2>{toyPlayText.title}</h2>
      <p>{toyPlayText.basic}</p>
      <p>{toyPlayText.equipment}</p>
      <Step text={toyPlayText.step1} stepNumber={1} />
      <Tip text={toyPlayText.tip1} />
      <Tip text={toyPlayText.tip2} />
      <Tip text={toyPlayText.tip3} />
      <Step text={toyPlayText.step2} stepNumber={2} />
      <Step text={toyPlayText.step3} stepNumber={3} />
      <Video url="https://www.youtube.com/embed/ObNwQZZzBJU" />
      <Video url="https://www.youtube.com/embed/qkO8RdlISp4" />
    </div>
  );
};

export default ToyPlay;
