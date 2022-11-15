import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { objLinkItems } from './data/objLinks';
import logo from './images/logo.svg';
import LandingPage from './pages/landing_page/LandingPage';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <>
      <Header itemsArray={objLinkItems} logo={logo} />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>

      <Footer itemsArray={objLinkItems} />
    </>
  );
}

export default App;
