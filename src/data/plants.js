const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const categories = [
  {
    name: 'Easy-care favorites',
    description: 'Low-fuss greenery for every kind of plant parent.',
    plants: [
      { id: 'snake-plant', name: 'Snake Plant', price: 24.99, image: photo('photo-1593691509543-c55fb32e5cee'), detail: 'Sculptural, resilient leaves that thrive in indirect light.' },
      { id: 'zz-plant', name: 'ZZ Plant', price: 29.99, image: photo('photo-1632207691143-643e2a72c2e9'), detail: 'Glossy foliage and a wonderfully forgiving nature.' },
      { id: 'pothos', name: 'Golden Pothos', price: 18.5, image: photo('photo-1600411832986-5a4476b64a1c'), detail: 'A trailing classic with cheerful, heart-shaped leaves.' },
      { id: 'spider-plant', name: 'Spider Plant', price: 16.99, image: photo('photo-1572688484438-313a6e50c333'), detail: 'A bright, lively plant that grows happily in most rooms.' },
      { id: 'peace-lily', name: 'Peace Lily', price: 27.5, image: photo('photo-1593691509543-c55fb32e5cee'), detail: 'Elegant deep-green leaves bring a calm feel to your space.' },
      { id: 'jade-plant', name: 'Jade Plant', price: 21, image: photo('photo-1509423350716-97f9360b4e09'), detail: 'A compact, long-lived succulent with rounded leaves.' },
    ],
  },
  {
    name: 'Statement plants',
    description: 'Bold shapes and beautiful leaves that make a room.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 39.99, image: photo('photo-1614594975525-e45190c55d0b'), detail: 'Iconic split leaves bring a tropical statement indoors.' },
      { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', price: 54.99, image: photo('photo-1509423350716-97f9360b4e09'), detail: 'A sculptural indoor tree with oversized violin-shaped leaves.' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 34.5, image: photo('photo-1597055181300-d5a8b7e5d4f4'), detail: 'Upright growth and rich, polished foliage.' },
      { id: 'bird-paradise', name: 'Bird of Paradise', price: 64, image: photo('photo-1593691509543-c55fb32e5cee'), detail: 'Dramatic, upright leaves for a sunny corner.' },
      { id: 'calathea', name: 'Calathea Orbifolia', price: 42, image: photo('photo-1497250681960-ef046c08a56e'), detail: 'Broad, softly striped leaves with a tropical presence.' },
      { id: 'dracaena', name: 'Dracaena Marginata', price: 37.5, image: photo('photo-1485955900006-10f4d324d411'), detail: 'A graceful, architectural silhouette for your home.' },
    ],
  },
  {
    name: 'Pet-friendly picks',
    description: 'Lovely leafy companions selected with pets in mind.',
    plants: [
      { id: 'parlor-palm', name: 'Parlor Palm', price: 26.99, image: photo('photo-1597055181300-d5a8b7e5d4f4'), detail: 'A compact palm that adds a soft, tropical touch.' },
      { id: 'boston-fern', name: 'Boston Fern', price: 22.5, image: photo('photo-1572688484438-313a6e50c333'), detail: 'Feathery, arching fronds bring refreshing texture.' },
      { id: 'calathea-prayer', name: 'Prayer Plant', price: 28, image: photo('photo-1497250681960-ef046c08a56e'), detail: 'Decorative patterned foliage that folds up at night.' },
      { id: 'african-violet', name: 'African Violet', price: 19.99, image: photo('photo-1485955900006-10f4d324d411'), detail: 'A sweet, colorful bloomer for a bright windowsill.' },
      { id: 'haworthia', name: 'Haworthia', price: 14.5, image: photo('photo-1509423350716-97f9360b4e09'), detail: 'A small, distinctive succulent for a sunny desk.' },
      { id: 'peperomia', name: 'Peperomia', price: 20, image: photo('photo-1600411832986-5a4476b64a1c'), detail: 'An easygoing plant with charming, textured leaves.' },
    ],
  },
];
