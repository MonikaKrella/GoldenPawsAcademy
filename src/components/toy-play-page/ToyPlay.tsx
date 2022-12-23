import { toyPlayText } from '../../data/toyplay';
import Step from '../../reusable-components/Step/Step';
import Tip from '../../reusable-components/Tip/Tip';
import VideoLink from '../../reusable-components/VideoLink/VideoLink';

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
      <VideoLink link="https://youtu.be/qkO8RdlISp4" text="VIDEO" />
    </div>
  );
};

export default ToyPlay;
