import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  //you can see the history object
  //console.log(props);

  //this will redirect after 2 seconds
  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 2000);

  return (
    <div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/card/Jonathan" className="ui header">
          Jonathan
        </Link>
        <p>
          Lorem ipsm blablabla blabalbalbla balbalbal balblab l asdf fhdfuiwhef
          hfupwerf fu fheuwp reqpo er hwrh nrpqwen rewpqwern
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/card/React_Router" className="ui header">
          React_Router
        </Link>
        <p>This is a link to React_Router</p>
      </div>
    </div>
  );
};

export default Contact;
