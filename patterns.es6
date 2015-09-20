const FIXED = {
  byId: {
    'carbon-fiber': {
      id: 'carbon-fiber',
      image: '/images/carbon-fiber.jpg',
      name: 'Carbon fiber'
    },
    'picnic': {
      id: 'picnic',
      image: '/picnic.jpg',
      name: 'Picnic'
    },
    'waves': {
      id: 'waves',
      image: '/waves.jpg',
      name: 'Waves'
    }
  },
  list: [
    'carbon-fiber',
    'picnic',
    'waves'
  ]
};

export function reducer(state=FIXED, action) {
  return state;
}
