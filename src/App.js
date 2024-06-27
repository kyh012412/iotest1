import './App.css';
import { Route, Routes } from 'react-router-dom';
import Root from './pages/Root';
import Links from './components/Links';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      app
      <Routes>
        <Route path="" element={<Root></Root>}></Route>
        <Route path="root" element={<>root</>}></Route>
        <Route path="path1" element={<>path1</>}></Route>
        <Route path="path2" element={<>path2</>}></Route>
        <Route path="path3" element={<>path3</>}></Route>
      </Routes>
      <Links />
    </div>
  );
}

export default App;
