import React, { useState, useEffect } from "react";
import { Input, Button, Tab } from "semantic-ui-react";
import {useContractReader} from "eth-hooks";


async function getTokenUris(readContracts,arr)
{
  this.uri;
  if(arr && arr.map)
    return arr.map((e)=>{
      readContracts.NFT.tokenURI(e).then(val => {this.uri = val;})
      return {id:e,uri:this.uri};
    });
  return []
}

export default ({userProvider, writeContracts,readContracts, tx}) => {
  console.log('!', writeContracts)
  // const contractConfig = useContractConfig();
  // const readContracts = useContractLoader(userProvider, contractConfig);
  const [url, setUrl] = useState();
  const [tokenListReady, setTokenListReady] = useState(false);


  const handleClick = () => {
    // window.alert(`web3 tx here with ${url}`);
    tx(writeContracts.NFT.createDocument(url));
  };

  const panes = [
    {
      menuItem : "Mint an NFT",
      render : () =>
        <Tab.Pane>
          <Input className="mb10" onChange={e => setUrl(e.target.value)} placeholder="NFT URL" value={url} />
          <Button primary onClick={handleClick}>
            Deploy
          </Button>
        </Tab.Pane>
    },
    {
      menuItem : "My tokens",
      render : () =>
        <Tab.Pane loading={!tokenListReady}>
        </Tab.Pane>
    },
  ]
  return (
    <div className="flex justify-content-center mauto w300 mt20">
      <div className=" flex column">
        <Tab panes={panes}/>
      </div>
    </div>
  );
};
