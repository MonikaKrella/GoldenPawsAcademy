import { looseLeashText } from '../../data/loose-leash';
import PageTitle from '../../reusable-components/PageTitle/PageTitle';

const LooseLeash = () => {
  return (
    <div>
      <PageTitle title={looseLeashText.title} />
      <p>{looseLeashText.description}</p>
      <p>{looseLeashText.theory}</p>
    </div>
  );
};

export default LooseLeash;
