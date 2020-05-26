import React from "react";

export const Page: React.FunctionComponent = (props) => {
  return (
    <div className="page">
      <div className="wrapper">{props.children}</div>
    </div>
  );
};
