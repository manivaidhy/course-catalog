import React from "react";
import ReactDOM from "react-dom";
import Courses from './courses.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.coursesElement = React.createRef();
  }

  render() {
    return (
        <Courses ref={this.coursesElement} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
