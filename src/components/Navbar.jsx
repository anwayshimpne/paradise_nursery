import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/CartSlice.jsx';

export default function Navbar() {
  const count = useSelector(selectCartCount);
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Paradise Nursery home"><span className="brand-mark" aria-hidden="true">✿</span><span>Paradise Nursery</span></NavLink>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-link" to="/cart" aria-label={`Cart, ${count} items`}>
          <span aria-hidden="true">🛒</span><span>Cart</span><span className="cart-count">{count}</span>
        </NavLink>
      </nav>
    </header>
  );
}
