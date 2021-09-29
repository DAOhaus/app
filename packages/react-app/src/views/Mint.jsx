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

export default ({userProvider, writeContracts,readContracts, tx, address}) => {
  const [url, setUrl] = useState();
  const [tokenListReady, setTokenListReady] = useState(false);
  const updateTokenList = () => {
    const tokenIds = readContracts.NFT.ownerToTokenIds(address)
    console.log('!', tokenIds)
  }



  const handleMintCallback = (props) => {
    console.log('!', props)
  }

  const handleClick = async () => {
    const promise = await tx(writeContracts.NFT.mint(url), handleMintCallback);
    console.log('!promise', promise) 
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
