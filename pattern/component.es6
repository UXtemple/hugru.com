import { Action, Panel } from 'panels-ui';
import { FONT } from '../style';
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
    <h1 style={style.title}>{props.pattern.name}</h1>
    <h2 style={style.subtitle}>Next</h2>
    <p style={style.callout}>Select how you want the Sugru to be shaped and add your message.</p>

    {props.shapes.list.map(shape => <ShapeCard patternId={props.pattern.id} {...props.shapes.byId[shape]} />)}
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
    shapes: state.shapes
  };
}

export default connect(mapStateToProps)(Pattern);
