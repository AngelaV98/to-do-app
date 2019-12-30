import React, { Component } from "react";

import "./AddNew.scss";
import Task from "../../models/task";

interface Props {
  onSubmit: (item: Task) => void;
}
interface State {
  id: number;
  title: string;
  important: boolean;
  done: boolean;
}
class AddNew extends Component<Props, State> {
  state = {
    id: 1,
    title: "",
    important: false,
    done: false
  };
  constructor(props: Props) {
    super(props);
    this.onClear = this.onClear.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onClear() {
    this.setState({ title: "" });
  }
  onChange(e: any) {
    this.setState({ title: e.target.value });
  }
  onSubmit() {
    const { title } = this.state;
    if (title) {
      this.setState(({ id }) => ({
        id: id + 1,
        title: ""
      }));
      const { id } = this.state;
      const newItem = { id, title, important: false, done: false };
      this.props.onSubmit(newItem);
    }
  }
  render() {
    return (
      <>
        <div className="col-12 col-lg-10 mt-1">
          <input
            type="text"
            className="form-control"
            autoFocus
            onChange={this.onChange}
            value={this.state.title}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-1 mt-1">
          <button className="btn btn-success" onClick={this.onSubmit}>
            <i className="fa fa-plus" />
          </button>
        </div>
        <div className="col-12 col-md-6 col-lg-1 mt-1">
          <button className="btn btn-danger" onClick={this.onClear}>
            <i className="fa fa-refresh" />
          </button>
        </div>
      </>
    );
  }
};

export default AddNew;