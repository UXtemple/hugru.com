const FIXED = {
  byId: {
    'carbon-fiber': {
      id: 'carbon-fiber',
      image: '/patterns/carbon-fiber.jpg',
      name: 'Carbon fiber'
    },
    'picnic': {
      id: 'picnic',
      image: '/patterns/picnic.jpg',
      name: 'Picnic'
    },
    'waves': {
      id: 'waves',
      image: '/patterns/waves.jpg',
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
