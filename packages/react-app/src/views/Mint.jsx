import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";

export default ({userProvider, contracts, tx}) => {
  console.log('!', contracts)
  // const contractConfig = useContractConfig();
  // const readContracts = useContractLoader(userProvider, contractConfig);
  const [url, setUrl] = useState();
  const handleClick = () => {
    // window.alert(`web3 tx here with ${url}`);
    tx(contracts.NFT.mint(url));
  };
  return (
    <div className="flex justify-content-center mauto w300 mt20">
      <div className=" flex column">
        <Input className="mb10" onChange={e => setUrl(e.target.value)} placeholder="NFT URL" value={url} />
        <Button primary onClick={handleClick}>
          Deploy
        </Button>
      </div>
    </div>
  );
};
