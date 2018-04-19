import React, { Component } from "react";
import "../Css/main.css";

class TodoListInput extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps;
  }
  render() {
    const { pickColor } = this.props;
    return (
      <div>
        <div className="template-input-frame">
          <div className="template-input-box">
            <input
              type="text"
              className="template-input"
              onChange={this.props.onChange}
              onKeyPress={this.props.onPress}
              value={this.props.value}
              style={{ color: pickColor }}
            />
            <button
              className="template-button-save"
              onClick={this.props.onCreate}
            >
              등록
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoListInput;
