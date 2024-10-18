import { useTranslation } from 'react-i18next';

import PageTitle from '../../../reusable-components/PageTitle/PageTitle';
import Step from '../../../reusable-components/Step/Step';
import Textbox from '../../../reusable-components/Textbox/Textbox';
import Tip from '../../../reusable-components/Tip/Tip';

const StopWhistle = () => {
  const { t } = useTranslation('stopWhistle');
  return (
    <div>
      <PageTitle title={t('title')} />
      <Textbox text={t('intro')} />
      <Step stepNumber={1} text={t('step1')} />
      <Step stepNumber={2} text={t('step2')} />
      <Step stepNumber={3} text={t('step3')} />
      <Step stepNumber={4} text={t('step4')} />
      <Step stepNumber={5} text={t('step5')} />
      <Step stepNumber={6} text={t('step6')} />
      <Tip text={t('tip1')} />
      <Tip text={t('tip2')} />
    </div>
  );
};

export default StopWhistle;
