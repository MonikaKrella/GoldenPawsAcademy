import Layout from './layout/layout/Layout';
import './app.scss';
import { Route, Routes } from 'react-router-dom';
import SelfControl from './components/self-control-page/SelfControl';
import Signals from './components/signals-page/Signals';
import EyeContact from './components/eye-contact-page/EyeContact';
import ToyPlay from './components/toy-play-page/ToyPlay';
import Recall from './components/recall-page/Recall';
import HomePage from './components/home-page/HomePage';
import InBuildPage from './components/in-build-page/InBuildPage';
import LooseLeash from './components/loose-leash-page/LooseLeash';
import UpbringingTraining from './components/upbringing-training-page/UpbringingTraining';
import Tools from './components/tools-page/Tools';
import Heel from './components/heel-page/Heel';
import TrainingSessions from './components/training-sessions-page/TrainingSessions';
import Rewards from './components/rewards-page/Rewards';

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
          <Route path="/heelwork" element={<InBuildPage />} />
          <Route path="/stay" element={<InBuildPage />} />
          <Route path="/target" element={<InBuildPage />} />
          <Route path="/run-to-toy" element={<InBuildPage />} />
          <Route path="/round" element={<InBuildPage />} />
          <Route path="/platform" element={<InBuildPage />} />
          <Route path="/position-movement" element={<InBuildPage />} />
          <Route path="/stop-run" element={<InBuildPage />} />
          <Route path="/stick" element={<InBuildPage />} />
          <Route path="/training" element={<UpbringingTraining />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/mistakes" element={<InBuildPage />} />
          <Route path="/punishments" element={<InBuildPage />} />
          <Route path="/*" element={<InBuildPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
