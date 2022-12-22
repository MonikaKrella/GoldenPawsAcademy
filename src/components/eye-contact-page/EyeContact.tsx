import { eyeContactText } from '../../data/eye-contact';

const EyeContact = () => {
  return (
    <div>
      <h2>{eyeContactText.title}</h2>
      <p>{eyeContactText.basic}</p>
      <p>{eyeContactText.step1}</p>
      <p>{eyeContactText.step2}</p>
      <p>{eyeContactText.step3}</p>
      <p>{eyeContactText.step4}</p>
      <p>{eyeContactText.step5}</p>
      <p>{eyeContactText.step6}</p>
    </div>
  );
};

export default EyeContact;
