import React from "react";

import Task from "../../models/task";

interface Props {
  tasks: Task[];
}

const List: React.FC<Props> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default List;