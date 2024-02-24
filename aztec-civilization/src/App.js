import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Agricultura from './Models/Agricultura';
import { Suspense, useRef } from 'react';
import LoaderScreen from './components/LoaderScreen';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/agricultura' element={
            <>
              <Suspense fallback={<LoaderScreen />}>
                <Canvas id="three-canvas-container" camera={{ position: [1, 10, 2.5], fov: 50 }} shadows>
                  <Agricultura />
                </Canvas>
                <div className="dot" />
              </Suspense>

            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
