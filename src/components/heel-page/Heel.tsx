import { heelText } from '../../data/heel';
import PageTitle from '../../reusable-components/PageTitle/PageTitle';
import Textbox from '../../reusable-components/Textbox/Textbox';
import Video from '../../reusable-components/Video/Video';
import VideoLink from '../../reusable-components/VideoLink/VideoLink';

const Heel = () => {
  return (
    <div>
      <PageTitle title={heelText.title} />
      <p>{heelText.intro}</p>
      <Textbox text={heelText.method1_step1} title={heelText.mathod1Title} />
      <Textbox text={heelText.method1_step2} />
      <Video url={'https://www.youtube.com/embed/HTVbN7U_lEE'} />
      <Video url={'https://www.youtube.com/embed/E3RFoJ4nvCQ'} />
      <Textbox text={heelText.method2_step1} title={heelText.method2Title} />
      <Textbox text={heelText.method2_step2} />
      <Textbox text={heelText.method2_step3} />
      <Textbox text={heelText.method2_step4} />
      <VideoLink
        link="https://youtube.com/shorts/eRkihBY2YUU?feature=share"
        text="LINK"
      />
      <Textbox text={heelText.method3_step1} title={heelText.method3Title} />
      <Textbox text={heelText.method3_step2} />
      <Video url={'https://www.youtube.com/embed/rJ3T4QCMWjc'} />
      <Textbox
        text={heelText.allMethods_tip1}
        title={heelText.allMethods_tipsTitle}
      />
    </div>
  );
};

export default Heel;
