import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from '../redux/CartSlice.jsx';
import { categories } from '../data/plants.js';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="page-shell catalog-page">
      <section className="page-intro">
        <p className="eyebrow">Find your new favorite</p>
        <h1>Plants for every space</h1>
        <p>Thoughtful greenery, ready to make yourself at home.</p>
      </section>
      {categories.map((category) => (
        <section className="plant-category" key={category.name} aria-labelledby={`category-${category.name}`}>
          <div className="category-heading"><div><h2 id={`category-${category.name}`}>{category.name}</h2><p>{category.description}</p></div><span className="category-count">{category.plants.length} plants</span></div>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const added = addedIds.has(plant.id);
              return (
                <article className="plant-card" key={plant.id}>
                  <img className="plant-image" src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="plant-card-body">
                    <div className="plant-card-title"><h3>{plant.name}</h3><span className="plant-price">${plant.price.toFixed(2)}</span></div>
                    <p>{plant.detail}</p>
                    <button className={`button add-button${added ? ' is-added' : ''}`} type="button" disabled={added} onClick={() => dispatch(addItem(plant))}>
                      {added ? 'Added to Cart ✓' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
