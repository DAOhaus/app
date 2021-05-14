import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <div style={{borderBotton: '1px solid'}}>
      <PageHeader title="legt" subTitle="legal governance tokens" style={{ cursor: "pointer" }} />
    </div>
  );
}
