import { Navigate, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs.jsx';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-shade" />
      <section className="landing-content" aria-labelledby="welcome-title">
        <p className="eyebrow">A little nature goes a long way</p>
        <h1 id="welcome-title">Paradise Nursery</h1>
        <p className="landing-lede">Make room for a greener, happier home.</p>
        <AboutUs />
        <a className="button button-light landing-button" href="/plants">Get Started <span aria-hidden="true">→</span></a>
      </section>
      <p className="photo-credit">Grow something wonderful.</p>
    </main>
  );
}

function ShopLayout({ children }) {
  return <><Navbar />{children}</>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ShopLayout><ProductList /></ShopLayout>} />
      <Route path="/cart" element={<ShopLayout><CartItem /></ShopLayout>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
