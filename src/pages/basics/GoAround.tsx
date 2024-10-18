import { useTranslation } from 'react-i18next';

import PageTitle from '../../reusable-components/PageTitle/PageTitle';
import Step from '../../reusable-components/Step/Step';
import Textbox from '../../reusable-components/Textbox/Textbox';
import Tip from '../../reusable-components/Tip/Tip';

const GoAround = () => {
  const { t } = useTranslation('goAround');
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
      <Step stepNumber={7} text={t('step7')} />
      <Tip text={t('tip1')} />
    </div>
  );
};

export default GoAround;
