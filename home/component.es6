import { Action, Panel } from 'panels-ui';
import { connect } from 'react-redux';
import React from 'react';
import { FONT } from '../style';

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
    <p>Choose the pattern for your custom made Hugru below.</p>

    <h2>Next</h2>
    <p>Select how you want the Sugru to be shaped and add your message.</p>

    <h2>In return</h2>
    <p>We will produce and send you your Hugru.</p>

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
  title: {
    fontSize: 26,
    marginBottom: 10,
    marginTop: 35,
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: FONT,
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
