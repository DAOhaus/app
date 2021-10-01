import React, { useState, useEffect } from "react";
import { 
  Input, 
  Button, 
  Tab, 
  List, 
  Radio,
  Loader, 
  Dimmer, 
  Segment, 
  Modal,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
} from "semantic-ui-react";
import {useContractReader} from "eth-hooks";
import {
} from 'semantic-ui-react'

export default ({userProvider, writeContracts,readContracts, tx, address}) => {
  const [url, setUrl] = useState();

  const [tokenListReady, setTokenListReady] = useState(false);
  const [tokenList, setTokenList] = useState([]);
  const [newUrl, setNewUrl] = useState("")
  const [searchBy, setSearchBy] = useState("owner");
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(0); // 0 for initial // 1 for searching // 2 for done searching
  const [searchResults, setSearchResults] = useState([]); // 0 for initial // 1 for searching // 2 for done searching

  const tokenIdsList = useContractReader(readContracts, "NFT", "getOwnerToTokenIds", [address],1000);

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

  const handleMintCallback = (props) => {
    console.log('!', props)
  }

  const handleClick = async () => {
    const promise = await tx(writeContracts.NFT.mint(url), handleMintCallback);
    console.log('!promise', promise) 
  };

  const handleSearch = async () =>    
  {
    setSearching(1);
    let tokenIds = []
    if (searchBy === "tokenID")
      tokenIds.push(parseInt(searchQuery));
    else if(searchBy === "owner")
      tokenIds = await readContracts.NFT.getOwnerToTokenIds(searchQuery);
    let list = tokenIds.map(async (id)=>{
      return {id: id, uri: await readContracts.NFT.tokenURI(id)}
    });
    Promise.all(list).then(res=>{
      setSearchResults(res);
      setSearching(2);
    })
  }
  const panes = [
    {
      menuItem : "Mint an NFT",
      render : () =>
        <Tab.Pane>
          <Input onChange={e => setUrl(e.target.value)} placeholder="NFT URL" value={url} />
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
                    <List.Content floated='right'>
                      <Modal
                        trigger={<Button>Edit</Button>}
                        header={'Enter new tokenURI for NFT #'+token.id}
                        content={          
                          <Input style={{width:"90%",margin:"10px 5%"}} value={newUrl} onChange={e => setNewUrl(e.target.value)} placeholder="new uri"/>
                        }
                        actions={[
                          {content: 'Cancel',onClick:(e,data)=>{setNewUrl("")}},
                          {content: 'Update URI',
                            onClick:async(e,data)=>{
                              await tx(writeContracts.NFT.setTokenURI(token.id, newUrl));
                              setNewUrl("");
                            }}]}
                        size="tiny"
                      />
                    </List.Content>
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
    {
      menuItem : "Search",
      render : () =>
        <Tab.Pane>
          <Radio
            className="mb10"
            label='By owner'
            value='owner'
            checked={searchBy === 'owner'}
            onChange={(e, { value }) => setSearchBy(value)}
          />
          <br/>
          <Radio 
            className="mb10"
            label='By tokenID'
            value='tokenID'
            checked={searchBy === 'tokenID'}
            onChange={(e, { value }) => setSearchBy(value)}
          />
          <br/>
          <Input className="mb10" onChange={e => setSearchQuery(e.target.value)} placeholder={searchBy} value={searchQuery} />

          <Button primary onClick={handleSearch}>
            Search
          </Button>

          <Segment style={{minHeight:"100px"}}>
            {searching == 1 && 
              <Dimmer active inverted >
                <Loader inverted active>Loading</Loader>
              </Dimmer>
            }
            {searching == 2 && 
              <List celled >
                {
                  searchResults.map((token)=>{
                    let i=0;
                    return (
                      <List.Item key={i++}>
                        <List.Header as='a' style={{textDecoration:"none"}}>NFT #{token.id}</List.Header>
                        <List.Description >
                          Document URI : <a style={{textDecoration:"none", textAlign:"left"}} href={token.uri}>{token.uri}</a>
                        </List.Description>
                      </List.Item>
                    );
                  })
                } 
              </List>
            }
          </Segment>
        </Tab.Pane>
    },
  ]
  return (
    <div className="flex justify-content-center mauto w500 mt20">
      <div className="flex column p20 w100p">
        <Segment placeholder>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon>
                  <Icon name='building outline mb20' />
                  Single Title NFT
                  {/* <p className="t">
                    Most Common.
                    This will mint a NFT pointing to the asset's documents.
                    Best if you want the property to be used in Defi or want to transfer title via token. 
                  </p> */}
                </Header>
                <Button primary>Create</Button>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name='users' />
                  Partnership 
                </Header>
                <Button primary>Create</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        {/* <Tab panes={panes} className="w100p" /> */}
      </div>
    </div>
  );
};
