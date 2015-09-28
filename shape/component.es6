import { Action, Panel } from 'panels-ui';
import { FONT } from '../style';
import { connect } from 'react-redux';
import React from 'react';
import Subscribe from './subscribe';

export const Shape = props => (
  <Panel width={props.width}>
    <h1 style={style.title}>{props.pattern.name}</h1>
    <h2 style={style.subtitle}>{props.shape.name}</h2>

    <Subscribe pattern={props.pattern.id} shape={props.shape.id} />
  </Panel>
);


const style = {
  action: {
    active: {
      width: '320px'
    },
    base: {
      marginTop: 20,
      width: '300px'
    }
  },
  callout: {
    fontFamily: FONT,
    marginTop: 10,
    textAlign: 'center'
  },
  title: {
    fontSize: 26,
    marginBottom: 10,
    marginTop: 35,
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: FONT,
    fontSize: 15,
    marginTop: 20,
    textTransform: 'uppercase'
  }
}

function mapStateToProps(state, props) {
  return {
    pattern: state.patterns.byId[props.patternId],
    shape: state.shapes.byId[props.shapeId]
  };
}

export default connect(mapStateToProps)(Shape);
