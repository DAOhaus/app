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
  Form,
  Label,
  Search,
} from "semantic-ui-react";
import {useContractReader} from "eth-hooks";
import {
} from 'semantic-ui-react'

const ipfsAPI = require("ipfs-http-client");
const { globSource } = ipfsAPI;
const infura = { host: "ipfs.infura.io", port: "5001", protocol: "https" };
const ipfs = ipfsAPI(infura);


const pushFileToIPFS = async file => {
  try {
    const fileDetails = {
      path: file.name,
      content: file
    }
    const options = {
      wrapWithDirectory: false,
      progress: (prog) => console.log(`received: ${prog}`),
      pin:true
    }
    const response = await ipfs.add(fileDetails, options);
    return response;
  } catch (e) {
    return e;
  }
};
const SingleEntityForm = ({isOpen,onClose,tx,writeContracts, readContracts, setTxData, openTx})=> {

  const [name, setName] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [imageIpfs, setImageIpfs] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState({lat:"",lng:""});
  const [mintERC20, setMintERC20] = useState(false);
  const [metadataIpfs, setMetadataIpfs] = useState("")

  const updateImageIpfs = async (imgPath)=>{

    setImagePath(imgPath)
    pushFileToIPFS(imgPath).then((res)=>{
      //console.log(res)
      if (res.cid)
      {
        setImageIpfs(res.cid.string);
      }
    })
  }

  const handleSubmit = async () => {
    let metadata = {
      "description": "Daohaus NFT - Respresents ownership of physical asset", 
      "external_url": "https://daohaus.org", 
      "image": "ipfs://"+imageIpfs, 
      "name": name,
      "attributes": [
        {
          "trait_type": "Location", 
          "value": location.lat + "," + location.lng
        }, 
        {
          "trait_type": "Area", 
          "value": "250 meter**2"
        }
      ]
    }
    ipfs.add(JSON.stringify(metadata)).then(async (res)=>{
      let tokenId = await readContracts.NFT.totalSupply();
      tokenId = tokenId.toNumber();
      console.log(tokenId);
      let result = await tx(writeContracts.NFT.mint("ipfs://"+res.cid.string),async (update)=>{
        if(update)
        {
          setTxData({...update, tokenId})
          onClose();
        }
      })
      //console.log(result);
    });
  }

  return (
    <Modal
      open={isOpen}
      size="tiny"
      scrollable={true}
    >
      <Modal.Header>Create Single Entity NFT</Modal.Header>
      <Modal.Content className="flex  container">
        <Form size="big">
          
          {/* Image? */}
          <Form.Field>
            <label>Image</label>
            <Segment placeholder className="p20">
              <Header icon as="label" htmlFor="file">
                <Icon name='file outline' />
                Supported types : png, jpg, svg
              </Header>
            </Segment>
            <Input type="file" name="file" id="file" hidden onChange={(e)=>updateImageIpfs(e.target.files[0])}/>
            {imagePath?imagePath.name:null}
          </Form.Field>

          
          {/* Name? */}
          <Form.Field>
            <label>Name</label>
            <Input type="text"  onChange={(e)=>setName(e.target.value)}
              placeholder="Name of the property"
            />
          </Form.Field>

          {/* Description? */}
          <Form.Field>
            <Form.TextArea label='Description' placeholder='Please provide a detailed description of your asset' value={description} onChange={(e)=>setDescription(e.target.value)}/>
          </Form.Field>

          {/* Location? */}
          <Form.Field>
            <label>Location</label>
            <Form.Group  widths="equal">
              <Input type="text"
                placeholder="Latitude"
                value={location.lat}
                onChange={(e)=>setLocation({...location, lat: e.target.value})}
              />
              <Input type="text"
                placeholder="Longitude"
                value={location.lng}
                onChange={(e)=>setLocation({...location, lng: e.target.value})}
              />
            </Form.Group>
          </Form.Field>
          <br/>
          {/* ERC20? */}
          <Form.Field>
            <Grid>
              <Grid.Column width={13}>
                <Form.Field>
                  <label>Mint ERC20 for governance    <Icon name="info circle"/></label>
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={3}>
                <Radio toggle checked={mintERC20} onChange={()=>setMintERC20(!mintERC20)}/>
              </Grid.Column>
            </Grid>
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={()=>onClose()}>Cancel</Button>
        <Button onClick={handleSubmit} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

const TxWaitModal = ({isOpen,txData,onClose, readContracts}) => {
  return (
    <Modal
      open={isOpen}
      size="tiny"
    >
      <Modal.Header>
        <Header as="h1" textAlign="center">
          Transaction {txData.status ? txData.status : "pending"}
        </Header>
      </Modal.Header>

      <Modal.Content style={{minHeight:"400px"}}>

        <Header as ='h5'>
          <strong>Transaction hash : <a target="_blank" href={txData.hash?"https://rinkeby.etherscan.io/tx/"+txData.hash:"#"}style={{color:"blue"}}>{txData.hash ? txData.hash : "Loading ..."}</a></strong> 
        </Header>
        {txData && txData.status != "confirmed" &&  
          <img style={{margin:"auto",marginTop:"120px"}} src="http://www.encephalopathy.or.kr/common/images/loader/ajax-loader/ajax_loader_blue_128.gif" className="ui tiny circular image" />
        }
        {txData && txData.status == "confirmed" &&  
          <div style={{marginTop:"300px"}}>
            <Button size="big" style={{margin:"auto",marginTop:"120px",width:"50%"}} primary target="_blank" href={txData.hash?"https://testnets.opensea.io/assets/"+readContracts.NFT.address+"/"+(txData.tokenId):"#"}>View on opensea</Button>
            <Button size="big" style={{margin:"auto",marginTop:"120px",width:"50%"}}  onClick={onClose}>Close</Button>
          </div>
        } 
      </Modal.Content>
    </Modal>
  )
}

export default ({userProvider, writeContracts,readContracts, tx, address}) => {
  const [singleEntityModal, setSingleEntityModal]  = useState(false);
  const [txLoading, setTxLoading] = useState(false);
  const [txData, setTxData] = useState({})

  useEffect(()=>{
    if(!txData.hash)
      setTxLoading(false)
  },[txData])

  const closeTx = ()=>{
    setTxLoading(false);
  }
  const openTx = ()=>{
    setTxLoading(true);
  }
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
                <Button primary onClick={()=>setSingleEntityModal(true)}>Create</Button>
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
      </div>
      <SingleEntityForm isOpen={singleEntityModal}
        onClose={()=>setSingleEntityModal(false)}
        tx={tx}
        writeContracts={writeContracts}
        readContracts={readContracts}
        userProvider={userProvider} 
        address={address}
        setTxData={(a)=>{setTxData(a),openTx()} }
      />
      <TxWaitModal
        isOpen={txLoading}
        txData={txData}
        onClose={closeTx}
        readContracts={readContracts}
      />
      
    </div>
  );
};
