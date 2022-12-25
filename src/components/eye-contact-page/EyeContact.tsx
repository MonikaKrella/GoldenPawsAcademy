import { eyeContactText } from '../../data/eye-contact';
import Step from '../../reusable-components/Step/Step';
import Video from '../../reusable-components/Video/Video';

const EyeContact = () => {
  return (
    <div>
      <h2>{eyeContactText.title}</h2>
      <p>{eyeContactText.basic}</p>
      <Step text={eyeContactText.step1} stepNumber={1} />
      <Step text={eyeContactText.step2} stepNumber={2} />
      <Step text={eyeContactText.step3} stepNumber={3} />
      <Step text={eyeContactText.step4} stepNumber={4} />
      <Step text={eyeContactText.step5} stepNumber={5} />
      <Step text={eyeContactText.step6} stepNumber={6} />
      <Video url="https://www.youtube.com/embed/49cV8ddxKFs" />
    </div>
  );
};

export default EyeContact;
