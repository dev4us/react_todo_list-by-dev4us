import React, { Component } from "react";

class TodoListBox extends Component {
  render() {
    const { todo, onToggle, onRemove } = this.props;

    const todoMap = todo.map(({ id, todoName, fontColor, checked }) => (
      <div className="item-frame" key={id} onClick={() => onToggle(id)}>
        <div
          className="remove-mark"
          onClick={e => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div
          className={`item-name ${checked && "checked"}`}
          style={{ color: fontColor }}
        >
          {todoName}
        </div>
        <div className={checked ? "check-mark" : "check-mark-none"}>✓</div>
      </div>
    ));

    return <div>{todoMap}</div>;
  }
}

export default TodoListBox;
