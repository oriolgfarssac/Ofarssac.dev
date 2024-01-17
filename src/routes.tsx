import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './pages/About Me/App';
import Skills from './pages/Skills/skills';

const MyRoutes = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<h1>ERROR 404</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
