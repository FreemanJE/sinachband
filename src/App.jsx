import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Vocals from './routes/Vocals';
import Guitar from './routes/Guitar'
import Bass from './routes/Bass'
import Drums from './routes/Drums'
import Navigation from './routes/Navigation'
import Footer from './Footer'
import './App.css';

const App = () => {

  return (
    <main>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="home" element={<Home />} /> */}
        {/* <Route path="sinach" element={<Home />} /> */}
        <Route path="vocals" element={<Vocals />}>
          <Route index element={
            <main style={{ padding: '1rem' }}>
              <h2>Team</h2>
            </main>
          } />
        </Route>
        <Route path="guitar" element={<Guitar />} />
        <Route path="bass" element={<Bass />} />
        <Route path="drums" element={<Drums />} />
        <Route path="*" element={<Home />} />
        {/* <Footer /> */}

      </Routes>
      <Footer />

    </main>

  );
}

export default App;

