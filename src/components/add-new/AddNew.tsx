import React, { Component } from "react";

import "./AddNew.scss";
import Task from "../../models/task";

interface Props {
  onSubmit: (item: Task) => void;
}
interface State {
  id: number;
  title: string;
}
class AddNew extends Component<Props, State> {
  state = {
    id: 0,
    title: ""
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
    this.setState(({ id }) => ({
      id: id + 1,
      title: ""
    }));
    const { id } = this.state;
    const newItem = { id, title };
    this.props.onSubmit(newItem);
  }
  render() {
    return (
      <>
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            autoFocus
            onChange={this.onChange}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-1">
          <button className="btn btn-success" onClick={this.onSubmit}>
            +
          </button>
        </div>
        <div className="col-12 col-md-6 col-lg-1">
          <button className="btn btn-danger" onClick={this.onClear}>
            Clear
          </button>
        </div>
      </>
    );
  }
};

export default AddNew;