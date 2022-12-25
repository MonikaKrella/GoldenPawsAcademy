import { signalsText } from '../../data/signals';
import Textbox from '../../reusable-components/Textbox/Textbox';

const Signals = () => {
  return (
    <div>
      <h2>{signalsText.title}</h2>
      <Textbox text={signalsText.confirmation} title="POTWIERDZENIE" />
      <Textbox text={signalsText.release} title="ZWOLNIENIE" />
      <Textbox text={signalsText.play} title="HASŁO NA ZABAWĘ" />
    </div>
  );
};

export default Signals;
