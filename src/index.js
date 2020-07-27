import React from "react";
import ReactDOM from "react-dom";
import Sidebar from './sidebar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sidebarElement = React.createRef();
  }

  render() {
    return (
        <Sidebar ref={this.sidebarElement} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
