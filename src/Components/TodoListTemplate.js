import React, { Component } from "react";
// Backend import
import TodoListInput from "./TodoListInput";
import TodoListBox from "./TodoListBox";
import ColorPicker from "./ColorPicker";

// Frontend import
import "../Css/main.css";

class TodoListTemplate extends Component {
  render() {
    const {
      onCreate,
      onChange,
      onPress,
      value,
      onToggle,
      onRemove,
      onColorChange,
      todo,
      pickColor
    } = this.props;
    return (
      <div>
        <div className="template">
          <div className="template-header">오늘의 할일</div>
          <TodoListInput
            onCreate={onCreate}
            onChange={onChange}
            onPress={onPress}
            value={value}
            pickColor={pickColor}
          />
          <ColorPicker onColorChange={onColorChange} pickColor={pickColor} />
          <TodoListBox todo={todo} onToggle={onToggle} onRemove={onRemove} />
        </div>
      </div>
    );
  }
}

export default TodoListTemplate;
