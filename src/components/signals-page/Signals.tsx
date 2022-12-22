import { signalsText } from '../../data/signals';

const Signals = () => {
  return (
    <div>
      <h2>{signalsText.title}</h2>
      <p>{signalsText.confirmation}</p>
      <p>{signalsText.release}</p>
      <p>{signalsText.play}</p>
    </div>
  );
};

export default Signals;
