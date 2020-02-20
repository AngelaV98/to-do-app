import React from "react";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="col-12">
      <h3>{title}</h3>
    </div>
  );
};

export default Header;