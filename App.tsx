
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Treasury from './pages/Treasury';
import Security from './pages/Security';
import Intelligence from './pages/Intelligence';
import PersonalAccount from './pages/PersonalAccount';
import BusinessAccount from './pages/BusinessAccount';
import Enterprise from './pages/Enterprise';
import Developers from './pages/Developers';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Guides from './pages/Guides';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Policy from './pages/Policy';
import Sustainability from './pages/Sustainability';
import PlaceholderPage from './pages/PlaceholderPage';
import CreateAccount from './pages/CreateAccount';
import ScrollToTopButton from './components/ScrollToTopButton';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
    const timer = setTimeout(() => setTransitioning(false), 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`transition-all duration-700 ${transitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen flex flex-col ${isDark ? 'dark' : ''}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <ScrollToTopButton />
        <main className="flex-grow">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/treasury" element={<Treasury />} />
              <Route path="/security" element={<Security />} />
              <Route path="/intelligence" element={<Intelligence />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/start-personal" element={<PersonalAccount />} />
              <Route path="/start-business" element={<BusinessAccount />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resources" element={<Guides />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/press" element={<Press />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="*" element={<PlaceholderPage />} />
            </Routes>
          </PageWrapper>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
