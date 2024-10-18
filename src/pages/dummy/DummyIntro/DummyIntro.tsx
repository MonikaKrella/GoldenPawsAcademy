import { useTranslation } from 'react-i18next';

import PageTitle from '../../../reusable-components/PageTitle/PageTitle';
import Textbox from '../../../reusable-components/Textbox/Textbox';

const DummyIntro = () => {
  const { t } = useTranslation('dummyIntro');
  return (
    <div>
      <PageTitle title={t('title')} />
      <Textbox text={t('intro')} />
    </div>
  );
};

export default DummyIntro;
