# Paradise Nursery

A responsive plant-shop experience built with React, Redux Toolkit, and React Router. Browse houseplants by category, add them to your cart, change quantities, remove items, and view live totals.

## Run locally

```bash
npm install
npm run dev
```

## Features

- Welcome landing page with company information and a photographic background
- Three houseplant categories with six plants in each category
- Product cards with photos, names, prices, and add-to-cart controls
- Shared navigation between Home, Plants, and Cart
- Redux-powered cart quantities, item totals, and order total
- Quantity controls, item removal, and a checkout placeholder

## Main project files

- `src/App.jsx` — routes and landing page
- `src/App.css` — application and landing-page styles
- `src/components/AboutUs.jsx` — company information
- `src/redux/CartSlice.jsx` — shopping-cart Redux slice
- `src/components/ProductList.jsx` — plant catalog
- `src/components/CartItem.jsx` — shopping-cart page
