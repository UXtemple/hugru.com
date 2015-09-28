export default {
  background: {},
  props: {
    'patternId': ':patternId'
  },
  title(getState, props) {
    return getState().patterns.byId[props.patternId].name;
  },
  type: 'Pattern'
};
