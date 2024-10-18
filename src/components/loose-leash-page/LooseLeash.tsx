import PageTitle from '../../reusable-components/PageTitle/PageTitle';
import Step from '../../reusable-components/Step/Step';
import Tip from '../../reusable-components/Tip/Tip';
import { looseLeashText } from '../../data/loose-leash';

const LooseLeash = () => {
  return (
    <div>
      <PageTitle title={looseLeashText.title} />
      <p>{looseLeashText.intro}</p>
      <p>{looseLeashText.theory}</p>
      <h4>Metody na codzienne spacery</h4>
      <Step text={looseLeashText.method1} stepNumber={1} />
      <Step text={looseLeashText.method2} stepNumber={2} />
      <Tip text={looseLeashText.tip1} />
      <h4>Treningi wspomagające</h4>
      <Step text={looseLeashText.trening1} stepNumber={1} />
      <Step text={looseLeashText.trening2} stepNumber={2} />
      <Tip text={looseLeashText.tip2} />
      <Step text={looseLeashText.trening3} stepNumber={3} />
    </div>
  );
};

export default LooseLeash;
