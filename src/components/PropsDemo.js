import React from "react";

const PropsDemo = (props) => {
  return (
    <div>
      <a href="/" className="avatar">
        <img src={props.pic} alt="picture" />
      </a>
      <div>
        <a href="/" className="name">
          {props.name}
        </a>
        <div className="metadata">{props.date}</div>
        <div className="text">{props.message}</div>
      </div>
    </div>
  );
};

export default PropsDemo;
