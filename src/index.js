import React, { Component } from "react";
import { render } from "react-dom";
import TodoListTemplate from "./Components/TodoListTemplate";

class App extends Component {
  id = 4;
  state = {
    input: "",
    pickColor: "#888888",
    todo: [
      { id: 0, todoName: "react 공부", fontColor: "#ff7575", checked: true },
      { id: 1, todoName: "숙제하기", fontColor: "#7cb5ec", checked: false },
      { id: 2, todoName: "양치하기", fontColor: "#62c144", checked: false },
      { id: 3, todoName: "일기쓰기", fontColor: "#888888", checked: false }
    ]
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = () => {
    const { input, todo, pickColor } = this.state;

    this.setState({
      input: "",
      todo: todo.concat({
        id: this.id++,
        todoName: input,
        fontColor: pickColor,
        checked: false
      })
    });
  };

  handlePress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = id => {
    const { todo } = this.state;
    const index = todo.findIndex(todos => todos.id === id);

    const selected = todo[index];
    const nextTodo = [...todo];

    nextTodo[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todo: nextTodo
    });
  };

  handleRemove = id => {
    const { todo } = this.state;

    this.setState({
      todo: todo.filter(todos => todos.id !== id)
    });
  };

  handleColorChange = color => {
    const { todo } = this.state;
    let colorSet = "";

    switch (color) {
      case "red":
        colorSet = "#ff7575";
        break;
      case "blue":
        colorSet = "#7cb5ec";
        break;
      case "green":
        colorSet = "#62c144";
        break;
      case "black":
        colorSet = "#888888";
        break;
      default:
        colorSet = "#888888";
        break;
    }

    this.setState({
      pickColor: colorSet
    });
  };

  render() {
    const { todo, input, pickColor } = this.state;
    const {
      handleCreate,
      handleChange,
      handlePress,
      handleToggle,
      handleRemove,
      handleColorChange
    } = this;

    return (
      <div>
        <TodoListTemplate
          todo={todo}
          onCreate={handleCreate}
          onChange={handleChange}
          onPress={handlePress}
          onToggle={handleToggle}
          onRemove={handleRemove}
          value={input}
          onColorChange={handleColorChange}
          pickColor={pickColor}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
