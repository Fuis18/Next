import React, { useEffect, useState, useRef } from "react";
import "./clock.css";

export default function ClockPicker() {
  const isActive = () => {
    if (focused) return "active";
    if (disabled) return "disabled";
    return "active";
  };
  const [pressed, setPressed] = useState(false);
  return (
    <div className="time_picker_container">
      <div
        className={`react_times_button ${
          pressed ? "pressDown" : ""
        } time_picker_preview ${isActive}`}
      >
        <div className="wrapper">
          <div className="preview_container">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <path d="M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zM25 14h-3v12l10.49 6.3L34 29.84l-9-5.34z"></path>
            </svg>
            {`12 : 30`}
          </div>
        </div>
      </div>
      <div className="outside_container active">
        <div className="modal_container time_picker_modal_container">
          <div className="time_picker_modal_header">
            <span className="time_picker_header active">13</span>
            <span className="time_picker_header_delivery">:</span>
            <span className="time_picker_header active">20</span>
          </div>
          <div className="picker_container">
            <div className="picker_pointer_container">
              <div
                className="picker_point point_inner"
                style={{ transform: "translateX(-50%) rotate(0deg)" }}
              >
                <div
                  className="point_wrapper"
                  style={{ transform: "rotate(0deg)" }}
                >
                  0
                </div>
              </div>
              <div
                className="picker_point point_inner"
                style={{transform: "translateX(-50%) rotate(30deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-30deg)"}}
                >
                  1
                </div>
              </div>
              <div
                className="picker_point point_inner"
                style={{transform: "translateX(-50%) rotate(60deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-60deg)"}}
                >
                  2
                </div>
              </div>
              <div
                className="picker_point point_inner"
                style={{transform: "translateX(-50%) rotate(90deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-90deg)"}}
                >
                  3
                </div>
              </div>
              <div
                className="picker_point point_inner"
                style={{transform: "translateX(-50%) rotate(120deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-120deg)"}}
                >
                  4
                </div>
              </div>
              <div
                className="picker_point point_inner"
                style={{transform: "translateX(-50%) rotate(150deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-150deg)"}}
                >
                  5
                </div>
              </div>
              <div
                className="picker_point point_inner"
                style={{transform: "translateX(-50%) rotate(180deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-180deg)"}}
                >
                  6
                </div>
              </div>
              <div
                className="picker_point point_inner"
                style={{transform: "translateX(-50%) rotate(210deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-210deg)"}}
                >
                  7
                </div>
              </div>
              <div
                className="picker_point point_inner"
                style={{transform: "translateX(-50%) rotate(240deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-240deg)"}}
                >
                  8
                </div>
              </div>
              <div
                className="picker_point point_inner"
                style={{transform: "translateX(-50%) rotate(270deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-270deg)"}}
                >
                  9
                </div>
              </div>
              <div
                className="picker_point point_inner"
                style={{transform: "translateX(-50%) rotate(300deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-300deg)"}}
                >
                  10
                </div>
              </div>
              <div
                className="picker_point point_inner"
                style={{transform: "translateX(-50%) rotate(330deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-330deg)"}}
                >
                  11
                </div>
              </div>
              <div
                className="picker_point point_outter"
                style={{transform: "translateX(-50%) rotate(0deg)"}}
              >
                <div className="point_wrapper" style={{transform: "rotate(0deg)"}}>
                  12
                </div>
              </div>
              <div
                className="picker_point point_outter"
                style={{transform: "translateX(-50%) rotate(30deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-30deg)"}}
                >
                  13
                </div>
              </div>
              <div
                className="picker_point point_outter"
                style={{transform: "translateX(-50%) rotate(60deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-60deg)"}}
                >
                  14
                </div>
              </div>
              <div
                className="picker_point point_outter"
                style={{transform: "translateX(-50%) rotate(90deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-90deg)"}}
                >
                  15
                </div>
              </div>
              <div
                className="picker_point point_outter"
                style={{transform: "translateX(-50%) rotate(120deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-120deg)"}}
                >
                  16
                </div>
              </div>
              <div
                className="picker_point point_outter"
                style={{transform: "translateX(-50%) rotate(150deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-150deg)"}}
                >
                  17
                </div>
              </div>
              <div
                className="picker_point point_outter"
                style={{transform: "translateX(-50%) rotate(180deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-180deg)"}}
                >
                  18
                </div>
              </div>
              <div
                className="picker_point point_outter"
                style={{transform: "translateX(-50%) rotate(210deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-210deg)"}}
                >
                  19
                </div>
              </div>
              <div
                className="picker_point point_outter"
                style={{transform: "translateX(-50%) rotate(240deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-240deg)"}}
                >
                  20
                </div>
              </div>
              <div
                className="picker_point point_outter"
                style={{transform: "translateX(-50%) rotate(270deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-270deg)"}}
                >
                  21
                </div>
              </div>
              <div
                className="picker_point point_outter"
                style={{transform: "translateX(-50%) rotate(300deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-300deg)"}}
                >
                  22
                </div>
              </div>
              <div
                className="picker_point point_outter"
                style={{transform: "translateX(-50%) rotate(330deg)"}}
              >
                <div
                  className="point_wrapper"
                  style={{transform: "rotate(-330deg)"}}
                >
                  23
                </div>
              </div>
            </div>
            <div className="picker_handler">
              <div
                className="picker_pointer animation"
                style={{height: 107.5 + "px", top: 22.5 + "px", transform: "translateX(-50%) rotate(360deg)"}}
              >
                <div
                  className="pointer_drag draggable"
                  style={{transform: "rotate(-360deg)"}}
                >
                  12
                </div>
              </div>
              <div className="picker_center"></div>
            </div>
            <div className="picker_handler">
              <div className="picker_pointer animation">
                <div className="pointer_drag draggable">12</div>
              </div>
              <div className="picker_center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
