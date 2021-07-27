import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header(props) {
  return (
    <div className="flex justify-content-between align-items-center p20 text-align-left" style={{ borderBottom: "1px solid lightGray" }}>
      <div>
        <span className="mr20 font-size-30">
          {/* <img src={logo} className="w50" alt="balance" /> */}
        </span>
        <Link to="/mint"> <Highlight className="mr10">Mint</Highlight> </Link>
        <Link to="/token"> <Highlight color="blue" className="mr10">Manage</Highlight> </Link>
        <Link to="/explore"> <Highlight color="yellow">Explore</Highlight> </Link>
      </div>
      <div>
        <Account {...props} />
    </div>
    </div>
  );
}
