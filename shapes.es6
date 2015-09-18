const FIXED = {
  byId: {
    'hook': {
      id: 'hook',
      image: '/hook.jpg',
      name: 'hook'
    },
    'straight': {
      id: 'straight',
      image: '/straight.jpg',
      name: 'Straight'
    },
    'wrapper': {
      id: 'wrapper',
      image: '/wrapper.jpg',
      name: 'wrapper'
    }
  },
  list: [
    'straight',
    'hook',
    'wrapper'
  ]
};

export function reducer(state=FIXED, action) {
  return state;
}
