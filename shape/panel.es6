export default {
  background: {},
  props: {
    'patternId': ':patternId',
    'shapeId': ':shapeId'
  },
  title(getState, props) {
    const { patterns, shapes } = getState();
    return `${patterns.byId[props.patternId].name} ${shapes.byId[props.shapeId].name}`;
  },
  type: 'Shape'
};
