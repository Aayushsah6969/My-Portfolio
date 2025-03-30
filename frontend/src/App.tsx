import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blogs from './pages/Blogs';
import OneBlog from './pages/OneBlog';
import ErrorPage from './components/Error';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <TechStack />
              <Projects />
              <Clients />
              <Contact />
            </main>
          } />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/oneblog/:id" element={<OneBlog />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;