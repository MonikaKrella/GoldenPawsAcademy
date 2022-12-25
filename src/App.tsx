import Layout from './layout/layout/Layout';
import './app.scss';
import { Route, Routes } from 'react-router-dom';
import SelfControl from './components/self-control-page/SelfControl';
import Signals from './components/signals-page/Signals';
import EyeContact from './components/eye-contact-page/EyeContact';
import ToyPlay from './components/toy-play-page/ToyPlay';
import Recall from './components/recall-page/Recall';
import HomePage from './components/home-page/HomePage';

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
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
