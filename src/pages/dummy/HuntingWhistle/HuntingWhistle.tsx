import { useTranslation } from 'react-i18next';

import PageTitle from '../../../reusable-components/PageTitle/PageTitle';
import Textbox from '../../../reusable-components/Textbox/Textbox';

export const HuntingWhistle = () => {
  const { t } = useTranslation('huntingWhistle');
  return (
    <div>
      <PageTitle title={t('title')} />
      <Textbox text={t('intro')} />
    </div>
  );
};
