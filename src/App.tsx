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
import HeelPosition from './components/heel-position-page/HeelPosition';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signals" element={<Signals />} />
          <Route path="/eye-contact" element={<EyeContact />} />
          <Route path="/self-control" element={<SelfControl />} />
          <Route path="/toy-play" element={<ToyPlay />} />
          <Route path="/recall" element={<Recall />} />
          <Route path="/loose-leash" element={<LooseLeash />} />
          <Route path="/heel" element={<HeelPosition />} />
          <Route path="/heelwork" element={<InBuildPage />} />
          <Route path="/stay" element={<InBuildPage />} />
          <Route path="/target" element={<InBuildPage />} />
          <Route path="/run-to-toy" element={<InBuildPage />} />
          <Route path="/round" element={<InBuildPage />} />
          <Route path="/platform" element={<InBuildPage />} />
          <Route path="/position-movement" element={<InBuildPage />} />
          <Route path="/stop-run" element={<InBuildPage />} />
          <Route path="/stick" element={<InBuildPage />} />
          <Route path="/training" element={<InBuildPage />} />
          <Route path="/tools" element={<InBuildPage />} />
          <Route path="/rewards" element={<InBuildPage />} />
          <Route path="/mistakes" element={<InBuildPage />} />
          <Route path="/punishments" element={<InBuildPage />} />
          <Route path="/*" element={<InBuildPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
