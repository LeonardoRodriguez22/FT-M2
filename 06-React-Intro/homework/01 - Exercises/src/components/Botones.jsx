import React from "react";

class Botones extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={() => alert(this.props.alerts.m1)}>Modulo 1</button>
        <button onClick={() => alert(this.props.alerts.m2)}>Modulo 2</button>
      </div>
    );
  }
}

export default Botones;
