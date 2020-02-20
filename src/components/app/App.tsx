import React, { Component } from "react";

import Task from "../../models/task";

import Row from "../common/Row";

import AddNew from "../add-new/";
import List from "../list";

import "./App.scss";
import Header from "../header";

interface State {
  tasks: Task[];
}

class App extends Component<{}, State> {
  state = { tasks: [] };

  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }
  private handleSubmit(item: Task) {
    const tasks = [...this.state.tasks, item];
    this.setState({ tasks });
  }
  private handleCheck(id: number) {
    const { tasks } = this.state;
    if (tasks) {
      const newTasks = [...tasks];
      newTasks.forEach((item: Task) => {
        if (item.id === id) {
          item.important = !item.important;
        }
        return item;
      });
      this.setState({ tasks: newTasks });
    }
  }
  private handleDelete(id: number) {
    const { tasks } = this.state;
    if (tasks) {
      const newTasks = tasks.filter((item: Task) => item.id !== id);
      this.setState({ tasks: newTasks });
    }
  }

  private handleDone(id: number) {
    const { tasks } = this.state;
    if (tasks) {
      const newTasks = [...tasks];
      newTasks.forEach((item: Task) => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      });
      this.setState({ tasks: newTasks });
    }
  }
  render() {
    const { tasks } = this.state;
    return (
      <div className="App container">
        <Row className="header">
          <Header title="ToDo List" />
        </Row>
        <Row className="addNew">
          <AddNew onSubmit={this.handleSubmit} />
        </Row>
        <Row className="list">
          <List
            tasks={tasks}
            onCheck={this.handleCheck}
            onDelete={this.handleDelete}
            onDone={this.handleDone}
          />
        </Row>
      </div>
    );
  }
}

export default App;
