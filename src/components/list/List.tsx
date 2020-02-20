import React, { Component } from "react";

import Task from "../../models/task";

import ListItem from "../list-item";
import "./List.scss";

interface Props {
  tasks: Task[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
}

class List extends Component<Props> {
  render() {
    const { tasks, onCheck, onDelete, onDone } = this.props;
    if (tasks.length === 0) {
      return <span className="text-danger ml-3 mt-3">No Items</span>;
    }
    return (
      <ol className="list-group mt-3 w-100">
        {tasks.map(({ id, title, important, done }) => (
          <ListItem
            title={title}
            important={important}
            done={done}
            id={id}
            key={id}
            onCheck={onCheck}
            onDelete={onDelete}
            onDone={onDone}
          />
        ))}
      </ol>
    );
  }
};

export default List;