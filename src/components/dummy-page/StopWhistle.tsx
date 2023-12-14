import { stopWhistleText } from "../../data/dummy/stop-whistle";
import PageTitle from "../../reusable-components/PageTitle/PageTitle";
import Step from "../../reusable-components/Step/Step";
import Textbox from "../../reusable-components/Textbox/Textbox";
import Tip from "../../reusable-components/Tip/Tip";

const StopWhistle = () => {
    return (
        <div>
            <PageTitle title = {stopWhistleText.pageTitle} />
            <Textbox text = {stopWhistleText.intro} />
            <Step stepNumber={1} text={stopWhistleText.step1} />
            <Step stepNumber={2} text={stopWhistleText.step2} />
            <Step stepNumber={3} text={stopWhistleText.step3} />
            <Step stepNumber={4} text={stopWhistleText.step4} />
            <Step stepNumber={5} text={stopWhistleText.step5} />
            <Step stepNumber={6} text={stopWhistleText.step6} />
            <Tip text={stopWhistleText.tip1} />
            <Tip text={stopWhistleText.tip2} />
        </div>
    );
};

export default StopWhistle;