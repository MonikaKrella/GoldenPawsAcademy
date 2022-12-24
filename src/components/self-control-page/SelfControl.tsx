import { selfcontrolText } from '../../data/selfcontrol';
import Step from '../../reusable-components/Step/Step';
import Video from '../../reusable-components/Video/Video';

const SelfControl = () => {
  return (
    <div>
      <h2>{selfcontrolText.title}</h2>
      <p>{selfcontrolText.basic}</p>
      <p>{selfcontrolText.examples}</p>
      <Step text={selfcontrolText.step1} stepNumber={1} />
      <Step text={selfcontrolText.step2} stepNumber={2} />
      <Step text={selfcontrolText.step3} stepNumber={3} />
      <Video url="https://www.youtube.com/embed/GMkHunu-_jo" />
    </div>
  );
};

export default SelfControl;
