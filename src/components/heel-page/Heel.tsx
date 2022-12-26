import { heelText } from '../../data/heel';
import PageTitle from '../../reusable-components/PageTitle/PageTitle';
import Textbox from '../../reusable-components/Textbox/Textbox';

const Heel = () => {
  return (
    <div>
      <PageTitle title={heelText.title} />
      <p>{heelText.intro}</p>
      <Textbox text={heelText.method1_step1} title={heelText.mathod1Title} />
      <Textbox text={heelText.method1_step2} />
      <Textbox text={heelText.method2_step1} title={heelText.method2Title} />
      <Textbox text={heelText.method2_step2} />
      <Textbox text={heelText.method2_step3} />
      <Textbox text={heelText.method2_step4} />
      <Textbox text={heelText.method3} title={heelText.method3Title} />
    </div>
  );
};

export default Heel;
