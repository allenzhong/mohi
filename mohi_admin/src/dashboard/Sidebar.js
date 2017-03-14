import React from 'react';
import SidebarItem from './SidebarItem.js';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  } 

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    let { menus } = this.props;

    return (
      <div className="sidebar">
        <nav className="siderbar-nav">
          <ul className="nav">
            {
              menus.map((menu, index) =>  <SidebarItem key={index} {...menu} />)
            }
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
