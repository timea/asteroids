
import { Routes, Route } from "react-router-dom";
import Navigation from './client/components/Navigation';
import Footer from './client/components/Footer';
import NoMatch from './client/pages/NoMatch';
import Home from './client/pages/Home';
import Favorites from './client/pages/Favorites';

export default function App() {
  return (
    <>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      <Footer />
    </>
  );
}