import React from 'react';
import { Link } from 'react-router';

class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { icon, href, title, badge } = this.props;

    return (
      <li className='nav-item'>
        <Link to={ href } className='nav-link' activeClassName='active'>
          {
            icon ? ( <i className={ icon }></i> ) : ""
          }
          { title }
          { 
            badge ? (<span className='badge badge-info'>{ badge }</span>) : ""
          }
        </Link>
      </li>
    )
  } 
}

export default SidebarItem;
