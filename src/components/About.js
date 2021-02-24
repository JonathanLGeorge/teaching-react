import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
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
  );
};

export default About;
