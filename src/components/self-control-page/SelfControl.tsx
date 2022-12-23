import { selfcontrolText } from '../../data/selfcontrol';
import Step from '../../reusable-components/Step/Step';
import VideoLink from '../../reusable-components/VideoLink/VideoLink';

const SelfControl = () => {
  return (
    <div>
      <h2>{selfcontrolText.title}</h2>
      <p>{selfcontrolText.basic}</p>
      <p>{selfcontrolText.examples}</p>
      <Step text={selfcontrolText.step1} stepNumber={1} />
      <Step text={selfcontrolText.step2} stepNumber={2} />
      <Step text={selfcontrolText.step3} stepNumber={3} />
      <VideoLink link="https://youtu.be/GMkHunu-_jo" text="VIDEO" />
    </div>
  );
};

export default SelfControl;
