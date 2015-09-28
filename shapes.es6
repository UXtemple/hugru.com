const FIXED = {
  byId: {
    'hook': {
      id: 'hook',
      image: '/shapes/hook.jpg',
      name: 'hook'
    },
    'straight': {
      id: 'straight',
      image: '/shapes/straight.jpg',
      name: 'Straight'
    },
    'wrapper': {
      id: 'wrapper',
      image: '/shapes/wrapper.jpg',
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
