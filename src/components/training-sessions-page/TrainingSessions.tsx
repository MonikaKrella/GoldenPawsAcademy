import { trainingSessionsText } from '../../data/training-sessions';
import PageTitle from '../../reusable-components/PageTitle/PageTitle';
import Step from '../../reusable-components/Step/Step';
import Textbox from '../../reusable-components/Textbox/Textbox';
import Tip from '../../reusable-components/Tip/Tip';

const TrainingSessions = () => {
  return (
    <div>
      <PageTitle title={trainingSessionsText.title} />
      <Textbox text={trainingSessionsText.basic} />
      <Step text={trainingSessionsText.puppy1} stepNumber={1} />
      <Step text={trainingSessionsText.puppy2} stepNumber={2} />
      <Step text={trainingSessionsText.puppy3} stepNumber={3} />
      <Tip text={trainingSessionsText.tip} />
      <Textbox text={trainingSessionsText.trainingPlaces} />
      <Tip text={trainingSessionsText.tip2} />
      <Textbox text={trainingSessionsText.generalization} />
    </div>
  );
};

export default TrainingSessions;
