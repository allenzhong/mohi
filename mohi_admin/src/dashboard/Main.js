import React from 'react';
import '../../style/custom.css';

class Main extends React.Component {
  render () {
    return(
      <div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
export default Main;
