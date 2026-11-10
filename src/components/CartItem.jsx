import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, selectCartItems, selectCartTotal, updateQuantity } from '../redux/CartSlice.jsx';

const currency = (amount) => `$${amount.toFixed(2)}`;

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  return (
    <main className="page-shell cart-page">
      <section className="page-intro cart-intro"><p className="eyebrow">Your little indoor garden</p><h1>Shopping Cart</h1><p>Review your plants and make them feel at home.</p></section>
      {items.length === 0 ? (
        <section className="empty-cart"><span className="empty-cart-icon" aria-hidden="true">🪴</span><h2>Your cart is ready to grow</h2><p>Explore the collection and find a plant you love.</p><Link className="button" to="/plants">Continue Shopping</Link></section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Items in your shopping cart">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-info"><h2>{item.name}</h2><p>Unit price: {currency(item.price)}</p><button className="text-button remove-button" type="button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button></div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button type="button" aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity <= 1} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                  <span aria-live="polite">{item.quantity}</span>
                  <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>
                <strong className="line-total">{currency(item.price * item.quantity)}</strong>
              </article>
            ))}
            <Link className="continue-link" to="/plants">← Continue Shopping</Link>
          </section>
          <aside className="order-summary"><h2>Order summary</h2><div className="summary-line"><span>Plants ({items.reduce((count, item) => count + item.quantity, 0)} items)</span><span>{currency(total)}</span></div><div className="summary-line"><span>Delivery</span><span className="free-label">Free</span></div><div className="summary-total"><span>Total</span><strong>{currency(total)}</strong></div><button className="button checkout-button" type="button" onClick={() => setCheckoutMessage('Coming Soon — checkout will be available soon!')}>Checkout</button>{checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}</aside>
        </div>
      )}
    </main>
  );
}
