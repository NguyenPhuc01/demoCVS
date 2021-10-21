import React, { Component } from "react";

export class Footer2 extends Component {
  render() {
    return (
      <footer
        style={{
          width: "100%",
          borderTop: "1px solid rgba(0, 0, 0, 0.1)",
          background: "#ffffff"
        }}
      >
        <div style={{ textAlign: "center", lineHeight: 5 }}>
          <p>Copyright ©2020 by Computer Vision Vietnam. All Rights Reserved</p>
        </div>
      </footer>
    );
  }
}

export default Footer2;
