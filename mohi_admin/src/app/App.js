import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../auth/AuthActions';

class Entry extends React.Component {
  render() {
    return(
      <div className='container'>
        <header>MoHI Admin</header>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    access_token: state.access_token
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...actions}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Entry);

export default App;
