import { Action, Panel } from 'panels-ui';
import { connect } from 'react-redux';
import React from 'react';

export const ShapeCard = props => (
  <Action href={`${props.id}/`} activeStyle={style.action.active} hoverStyle={style.action.active} 
    style={style.action.base}>
    <img src={props.image} alt={props.name} />
    <button>Use</button>
  </Action>
);

export const Pattern = props => (
  <Panel width={props.width}>
    <h1>{props.pattern.name}</h1>
    {props.shapes.list.map(shape => <ShapeCard patternId={props.pattern.id} {...props.shapes.byId[shape]} />)}
  </Panel>
);


const style = {
  action: {
    active: {
      width: '100%'
    },
    base: {
      width: '80%'
    }
  }
}


function mapStateToProps(state, props) {
  return {
    pattern: state.patterns.byId[props.patternId],
    shapes: state.shapes
  };
}

export default connect(mapStateToProps)(Pattern);
