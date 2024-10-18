import './app.scss';

import { Route, Routes } from 'react-router-dom';

import DummyIntro from './pages/dummy/DummyIntro/DummyIntro';
import EyeContact from './components/eye-contact-page/EyeContact';
import GoAround from './pages/basics/GoAround';
import HandTarget from './components/hand-target-page/HandTarget';
import Heel from './components/heel-page/Heel';
import Heelwork from './components/heelwork-page/Heelwork';
import HomePage from './components/home-page/HomePage';
import InBuildPage from './components/in-build-page/InBuildPage';
import Layout from './layout/layout/Layout';
import LooseLeash from './components/loose-leash-page/LooseLeash';
import Mistakes from './components/mistakes-page/Mistakes';
import Platform from './components/platform-page/Platform';
import Positions from './components/positions-page/Positions';
import Recall from './components/recall-page/Recall';
import RecallWhistle from './pages/dummy/RecallWhistle/RecallWhistle';
import Rewards from './components/rewards-page/Rewards';
import RunToToy from './components/run-to-toy-page/RunToToy';
import SelfControl from './components/self-control-page/SelfControl';
import Signals from './components/signals-page/Signals';
import Stay from './components/stay-page/Stay';
import StopWhistle from './pages/dummy/StopWhistle/StopWhistle';
import Tools from './components/tools-page/Tools';
import ToyPlay from './components/toy-play-page/ToyPlay';
import TrainingSessions from './components/training-sessions-page/TrainingSessions';
import UpbringingTraining from './components/upbringing-training-page/UpbringingTraining';
import { HuntingWhistle } from './pages/dummy/HuntingWhistle/HuntingWhistle';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signals" element={<Signals />} />
          <Route path="/sessions" element={<TrainingSessions />} />
          <Route path="/eye-contact" element={<EyeContact />} />
          <Route path="/self-control" element={<SelfControl />} />
          <Route path="/toy-play" element={<ToyPlay />} />
          <Route path="/recall" element={<Recall />} />
          <Route path="/loose-leash" element={<LooseLeash />} />
          <Route path="/heel" element={<Heel />} />
          <Route path="/heelwork" element={<Heelwork />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/target" element={<HandTarget />} />
          <Route path="/run-to-toy" element={<RunToToy />} />
          <Route path="/round" element={<GoAround />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/position-movement" element={<InBuildPage />} />
          <Route path="/stop-run" element={<InBuildPage />} />
          <Route path="/stick" element={<InBuildPage />} />
          <Route path="/training" element={<UpbringingTraining />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/mistakes" element={<Mistakes />} />
          <Route path="/punishments" element={<InBuildPage />} />
          <Route path="/dummy" element={<DummyIntro />} />
          <Route path="/stop-whistle" element={<StopWhistle />} />
          <Route path="/recall-whistle" element={<RecallWhistle />} />
          <Route path="/hunting-whistle" element={<HuntingWhistle />} />
          <Route path="/*" element={<InBuildPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
