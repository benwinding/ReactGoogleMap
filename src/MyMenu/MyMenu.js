import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import './MyMenu.css';

class MyMenuItem extends Component {
  render() {
    return (
      <div className="menuItem">
        <a id={this.props.menuId} href={this.props.menuHref} >
          <i className={"fa fa-fw menu-item " + this.props.fa} />
          <span>{this.props.menuName}</span>
        </a>
      </div>
    )
  }
}

class MyMenu extends Component {
  render () {
    return (
      <Menu outerContainerId={"outer-container"} pageWrapId={"page-wrap"} >
        <MyMenuItem fa="fa-home" menuHref="#/" menuName="Home" />
        <MyMenuItem fa="fa-map" menuHref="#/map" menuName="Map" />
        <MyMenuItem fa="fa-camera" menuHref="#/image-class" menuName="Imager " />
        <MyMenuItem fa="fa-info" menuHref="#/about" menuName="About" />
      </Menu>
    );
  }
}

export default MyMenu;