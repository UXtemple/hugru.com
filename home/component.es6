import { Action, Panel } from 'panels-ui';
import { FONT } from '../style';
import { connect } from 'react-redux';
import React from 'react';


export const PatternCard = props => (
  <Action href={`${props.id}/`} activeStyle={style.action.active} hoverStyle={style.action.active} 
    style={style.action.base}>
    <img src={props.image} alt={props.name} />
    <button style={style.use}>Use</button>
  </Action>
);

export const Home = props => (
  <Panel width={props.width} style={style.panel}>
    <h1 style={style.title}>Hugru is a custom made 3D cast to let you stylise and shape cables you are fixing with Sugru!</h1>
    <p style={style.callout}>To start, select the pattern you like the most (and the font for your custom message).
      We will print those on the inside of the cast for you to use it as a stamp for Sugru.</p>
    {props.patterns.list.map(pattern => <PatternCard {...props.patterns.byId[pattern]} />)}
  </Panel>
);

const style = {
  action: {
    active: {
    },
    base: {
      alignSelf: 'stretch',
      marginTop: 20
    }
  },
  callout: {
    fontFamily: FONT,
    fontSize: 15,
    lineHeight: 1.5,
    marginTop: 10,
    //textAlign: 'center'
  },
  panel: {
    alignItems: 'left'
  },
  title: {
    fontFamily: FONT,
    fontSize: 30,
    marginBottom: 10,
    marginTop: 50,
    //textAlign: 'center'
  }
}

function mapStateToProps(state, props) {
  return {
    patterns: state.patterns
  };
}

export default connect(mapStateToProps)(Home);
