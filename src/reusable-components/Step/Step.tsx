import style from './step.module.scss';

interface IProp {
  text: string;
  stepNumber: number;
}

const Step = ({ text, stepNumber }: IProp) => {
  return (
    <div className={style.container}>
      <div className={style.step_number}>{stepNumber}</div>
      <div>{text}</div>
    </div>
  );
};

export default Step;
