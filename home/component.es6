import { Action, Panel } from 'panels-ui';
import { FONT } from '../style';
import { connect } from 'react-redux';
import React from 'react';


export const PatternCard = props => (
  <Action href={`${props.id}/`} activeStyle={style.action.active} hoverStyle={style.action.active} 
    style={style.action.base}>
    <img src={props.image} alt={props.name} />
    <button>Use</button>
  </Action>
);

export const Home = props => (
  <Panel width={props.width}>
    <h1 style={style.title}>Hugru is a custom made shaping cast for Sugru</h1>

    <h2 style={style.subtitle}>First</h2>
    <p style={style.callout}>Choose the pattern for your custom made Hugru below.</p>

    {props.patterns.list.map(pattern => <PatternCard {...props.patterns.byId[pattern]} />)}
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
    patterns: state.patterns
  };
}

export default connect(mapStateToProps)(Home);
