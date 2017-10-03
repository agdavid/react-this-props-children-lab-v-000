// Code ThemedDecoration Component Here

import React, { Component, Children, cloneElement } from 'react';

export default class ThemedDecorations extends Component {
  render() {
    const childrenWithExtraProp = Children.map(this.props.children, child => cloneElement(child, {
      className: this.props.theme
      })
    );

    return (
        <div>
          {childrenWithExtraProp}
        </div>
    );
  }
}
