import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header({address,logoutOfWeb3Modal, loadWeb3Modal, userProvider}) {
  const networkName = userProvider?._network?.name;
  return (
    <div className="flex justify-content-between align-items-center p20 text-align-left" style={{ borderBottom: "1px solid lightGray" }}>
      <div>
        <span className="mr20 font-size-30">
          {/* <img src={logo} className="w50" alt="balance" /> */}
        </span>
        <HeaderLink to="/mint"> <Highlight color="red">Mint</Highlight> </HeaderLink>
        {/* <HeaderLink to="/token"> <Highlight color="blue">Manage</Highlight> </HeaderLink> */}
        <HeaderLink to="/explore"> <Highlight color="yellow">Explore</Highlight> </HeaderLink>
        {process.env !== 'production' &&
          <HeaderLink to="/contracts"> <Highlight color="blue">Contracts</Highlight> </HeaderLink>
        }
      </div>
      <div className="flex align-items-center">
        <div className="mr10">
          {address 
            ? <div className="relative">{shortenAddress(address)} 
                {networkName !== 'homestead' && <NetworkName>{`on ${userProvider?._network?.name} network`}</NetworkName>}
              </div>
            : <Button primary onClick={loadWeb3Modal}>Connect Wallet</Button>
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
