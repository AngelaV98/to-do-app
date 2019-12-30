import React, { Component } from "react";

import "./ListItem.scss";

interface Props {
  id: number | undefined;
  title: string | undefined;
  important: boolean;
  done: boolean;
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
}

class ListItem extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.onCheck = this.onCheck.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onDone = this.onDone.bind(this);
  }
  private onCheck() {
    const { id } = this.props;
    if (id) {
      this.props.onCheck(id);
    }
  }
  private onDelete() {
    const { id } = this.props;
    if (id) {
      this.props.onDelete(id);
    }
  }

  private onDone() {
    const { id } = this.props;
    if (id) {
      this.props.onDone(id);
    }
  }

  render() {
    const { id, title, important, done } = this.props;
    const classList = `${important ? "text-danger important" : ""}${
      done ? "done" : ""
    }`;
    return (
      <li
        key={id}
        className={`list-group-item d-flex justify-content-between align-items-center ${classList}`}
      >
        {title}
        <span>
          <button className="btn btn-primary" onClick={this.onCheck}>
            <i className="fa fa-info" />
          </button>
          <button className="btn btn-success ml-1" onClick={this.onDone}>
            <i className="fa fa-check" />
          </button>
          <button className="btn btn-danger ml-1" onClick={this.onDelete}>
            <i className="fa fa-remove" />
          </button>
        </span>
      </li>
    );
  }
};

export default ListItem;