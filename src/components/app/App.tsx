import React, { Component } from "react";
import "./App.scss";

import AddNew from "../add-new/";
import List from "../list";

import Row from "../common/Row";

import Task from "../../models/task";

interface State {
  tasks: Task[];
}

class App extends Component<{}, State> {
  state = {
    tasks: []
  };
  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleSubmit(item: Task) {
    const tasks = [...this.state.tasks, item];
    this.setState({ tasks });
  }
  render() {
    return (
      <div className="App container">
        <Row className="addNew">
          <AddNew onSubmit={this.handleSubmit} />
        </Row>
        <Row className="list">
          <List tasks={this.state.tasks} />
        </Row>
      </div>
    );
  }
}

export default App;
