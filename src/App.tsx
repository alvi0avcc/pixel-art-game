import { Routes, Route } from 'react-router';
import './App.css';
import { Wrapper } from '@components/Wrapper/Wrapper';
import HomePage from '@pages/HomePage/HomePage';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import About from '@pages/About/About';
import Page404 from '@pages/Page404/Page404';

const App = () => {
  return (
    <ErrorBoundary>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Wrapper>
    </ErrorBoundary>
  );
};

export default App;
