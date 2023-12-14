import { platformText } from "../../data/platform";
import PageTitle from "../../reusable-components/PageTitle/PageTitle";
import Step from "../../reusable-components/Step/Step";
import Textbox from "../../reusable-components/Textbox/Textbox";
import Tip from "../../reusable-components/Tip/Tip";

const Platform = () => {
    return (
        <div>
            <PageTitle title = {platformText.title} />
            <Textbox text = {platformText.intro} />
            <Textbox text = {platformText.equipment} />
            <Step stepNumber={1} text={platformText.step1} />
            <Step stepNumber={2} text={platformText.step2} />
            <Step stepNumber={3} text={platformText.step3} />
            <Step stepNumber={4} text={platformText.step4} />
            <Step stepNumber={5} text={platformText.step5} />
            <Tip text = {platformText.tip1} />
        </div>
    );
};

export default Platform;