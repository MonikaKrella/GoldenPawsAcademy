import { DummyIntroText } from "../../data/dummy/dummy-intro";
import PageTitle from "../../reusable-components/PageTitle/PageTitle";
import Textbox from "../../reusable-components/Textbox/Textbox";

const DummyIntro = () => {
    return (
        <div>
            <PageTitle title = {DummyIntroText.pageTitle} />
            <Textbox text = {DummyIntroText.intro} />
        </div>
    );
};

export default DummyIntro;