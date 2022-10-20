import React from "react";
import logo from "../static/logo-square.png";
import { Highlight, Account, ThemeSwitch, Text } from "./";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Dropdown, Button } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";
import { shortenAddress } from "../helpers";
const { version } = require("../../package.json");

const HeaderLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none !important;
`;
const NetworkName = styled.div`
  position: relative;
  left: 0;
  bottom: 7px;
  color: gray;
  font-size: 12px;
`;

// displays a page header

export default function CustomHeader({ address, logoutOfWeb3Modal, loadWeb3Modal, userProvider }) {
  const networkName = userProvider?._network?.name;
  console.log('!', userProvider)

  return (
    <div
      className="header flex justify-content-between align-items-center p20 text-align-left absolute w100p"
      style={{ borderBottom: "1px solid lightGray", height: "70px" }}
    >
      <div className="flex align-items-center">
        <HeaderLink to="/" className="mr20 font-size-30">
          <img src={logo} height="40px" alt="balance" />
        </HeaderLink>
        <HeaderLink to="/mint">
          {" "}
          <Highlight color="red">Mint</Highlight>{" "}
        </HeaderLink>
        {/* <HeaderLink to="/token"> <Highlight color="blue">Manage</Highlight> </HeaderLink> */}
        <HeaderLink to="/explore">
          {" "}
          <Highlight color="yellow">Explore</Highlight>{" "}
        </HeaderLink>
        {process.env !== "production" && (
          <HeaderLink to="/contracts">
            {" "}
            <Highlight color="blue">Contracts</Highlight>{" "}
          </HeaderLink>
        )}
      </div>
      <div className="flex align-items-center">
        <div className="mr10">
          {address 
            ? <div className="relative">
              {shortenAddress(address)}
              <NetworkName>{`on ${networkName === "homestead" ? "mainnet" : networkName} network`}</NetworkName>
            </div> 
            : !userProvider 
              ? <div /> 
              : <Button primary onClick={loadWeb3Modal}>
                  Connect Wallet
              </Button> 
          }
        </div>
        <Dropdown button color="white" className="icon" icon="cog">
          <Dropdown.Menu direction="left">
            <Dropdown.Item text={`v${version}`} />
            {/* <Dropdown.Item text={`swith to ${theme.opposite} mode`} onClick={toggleTheme} /> */}
            {/* <Dropdown.Item> <ThemeSwitch /> </Dropdown.Item> */}
            <Dropdown.Item text="logout" onClick={logoutOfWeb3Modal} />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
