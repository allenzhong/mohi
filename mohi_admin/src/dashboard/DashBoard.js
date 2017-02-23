import React from 'react';

class DashBoard extends React.Component {
  render() {
    return(
      <div>
        <header>Here is DashBoard</header>
        <button onClick={this.props.signout.bind(this)}>Sign Out</button>
      </div>
    )
  }
}

export default DashBoard;
