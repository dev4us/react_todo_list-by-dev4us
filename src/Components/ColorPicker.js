import React, { Component } from "react";

class ColorPicker extends Component {
  render() {
    const { onColorChange, pickColor } = this.props;

    return (
      <div>
        <div className="colorPicker-frame">
          <div
            className={`colorBox redBox ${
              pickColor === "#ff7575" ? "active" : ""
            }`}
            onClick={() => onColorChange("red")}
          />
          <div
            className={`colorBox blueBox ${
              pickColor === "#7cb5ec" ? "active" : ""
            }`}
            onClick={() => onColorChange("blue")}
          />
          <div
            className={`colorBox greenBox ${
              pickColor === "#62c144" ? "active" : ""
            }`}
            onClick={() => onColorChange("green")}
          />
          <div
            className={`colorBox blackBox ${
              pickColor === "#888888" ? "active" : ""
            }`}
            onClick={() => onColorChange("black")}
          />
        </div>
      </div>
    );
  }
}

export default ColorPicker;
