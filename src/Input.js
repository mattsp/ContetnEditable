import React, { Component } from "react";
import PropTypes from "prop-types";
import ContentEditable from "./ContentEditable";
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }
  hanldeOnChange(event) {
    const html = event.target.value;
    const parsedHtml = html.replace(/(#)\w+/g, "<div>$1</div>");
    this.setState({ value: parsedHtml });
    console.log(parsedHtml);
  }

  render() {
    return (
      <ContentEditable
        html={this.state.value}
        onChange={this.hanldeOnChange.bind(this)}
      />
    );
  }
}
Input.propTypes = {
  value: PropTypes.string
};
Input.defaultProps = {
  value: "<div>test</div>"
};
