import React, { useState, useEffect } from "react";
import { Input, Button, Tab, List } from "semantic-ui-react";
import {useContractReader} from "eth-hooks";
import { ConsoleSqlOutlined } from "@ant-design/icons";

export default ({userProvider, writeContracts,readContracts, tx, address}) => {
  const [url, setUrl] = useState();
  const [tokenListReady, setTokenListReady] = useState(false);
  const [tokenList, setTokenList] = useState([]);

  let tokenIdsList = useContractReader(readContracts, "NFT", "getOwnerToTokenIds", [address]);

  const getTokenList = ()=>
  {
    if(tokenIdsList )
    {
      let arr = [];
      for (let id in tokenIdsList)
        arr.push(readContracts.NFT.tokenURI(id));
      Promise.all(arr).then((res)=>{
        let i = -1;
        let list = tokenIdsList.map((id)=>{
          return {id:id,uri:res[++i]}
        });
        setTokenList(list);
        setTokenListReady(true);
      })
    }
  }

  useEffect(()=>{
    getTokenList()
  },[tokenIdsList])

  useEffect(()=>{
    getTokenList()
  },[])

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
          {/* {JSON.stringify(tokenList)} */}
          <List celled >
            {
              tokenList.map((token)=>{
                return (
                  <List.Item >
                    <List.Header as='a' style={{textDecoration:"none"}}>NFT #{token.id}</List.Header>
                    <List.Description >
                      Document URI : <a style={{textDecoration:"none", textAlign:"left"}} href={token.uri}>{token.uri}</a>
                    </List.Description>
                  </List.Item>
                );
              })
            } 
          </List>
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
