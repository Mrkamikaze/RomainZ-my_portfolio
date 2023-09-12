import React from "react";
import "./about_me_popup.css";

export default function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div className="aboutmetooltip" style={show ? { visibility: "visible" } : {}}>
        Preview : <br/>
        - subject 1 : explanation 1 <br/>
        - subject 2 : explanation 2 <br/>
        - subject 3 : explanation 3 <br/>
        - subject 4 : explanation 4 <br/>
        - subject 5 : explanation 5 <br/>
        <span className="aboutmetooltip-arrow" />
      </div>
      <div
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
}