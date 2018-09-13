import React, { Component } from "react";
import { findDOMNode } from "react-dom";
export default class ContentEditable extends Component {
  render() {
    return (
      <div
        onInput={this.emitChange.bind(this)}
        onBlur={this.emitChange.bind(this)}
        contentEditable
        dangerouslySetInnerHTML={{ __html: this.props.html }}
      />
    );
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.html !== findDOMNode(this).innerHTML;
  }

  emitChange() {
    console.log(this);
    var html = findDOMNode(this).innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({
        target: {
          value: html
        }
      });
    }
    this.lastHtml = html;
  }
}
