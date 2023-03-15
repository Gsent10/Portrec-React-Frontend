import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Unit from './components/pages/Unit';
import Wards from './components/pages/Wards';
import Lga from './components/pages/Lga';
import Upload from './components/pages/Upload';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Homepage />} />
        <Route path="pollingunit">
          <Route path=":unitId" element={<Unit />} />
        </Route>
        <Route path="/wards" element={<Wards />} />
        <Route path="/lga" element={<Lga />} />
        <Route path="/upload" element={<Upload />} />
      </Route>
    </Routes>
  );
}

export default App;
