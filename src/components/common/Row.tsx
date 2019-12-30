import React from "react";

interface Props {
  className: string;
}

const Row: React.FC<Props> = props => {
  return <div className={`row ${props.className}`}>{props.children}</div>;
};

export default Row;