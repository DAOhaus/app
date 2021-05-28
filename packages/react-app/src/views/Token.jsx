/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import ChartistGraph from 'react-chartist';
import { Input, Dropdown } from 'semantic-ui-react'
import { Contract } from 'components'
import styled from "styled-components"
import { toBN, fromWei } from 'helpers/numbers'
import { useParams } from 'react-router-dom';
import { useExternalContractLoader } from 'hooks'
import erc20abi from 'contracts/Token.abi.js'

const ContractWrapper = styled.div`
  max-width: 750px;
  margin: auto;
  margin-top: 30px;
`

const Square = styled.a`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  border: 1px dashed gray;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    box-shadow: 2px 2px 5px gray;
  }
`

export default function Token({
  address: userAddress,
  blockExplorer,
  userProvider
}) {
  const {address} = useParams();
  const [state, setState] = useState({address});
  const contract = useExternalContractLoader(userProvider, address, erc20abi)
  useEffect(()=>{
    if (contract && !state.name && !state.isFetching){
      setContractInfo()
      setState({...state,isFetching: true})
    }
  })
  async function setContractInfo() {
    const name = await contract?.name()
    const symbol = await contract?.symbol()
    const totalSupply = await contract?.totalSupply()
    const documentURI = await contract?.documentURI()
    const owner = await contract?.owner()
    setState({
      name,
      symbol,
      totalSupply: fromWei(toBN(totalSupply), 'ether'),
      documentURI,
      owner,
      isFetching: false
    })
  }

  if (contract && userAddress && !state.name){
    setContractInfo()
  }

  const dropdownOptions = [
    { key: '20', text: 'erc20', value: '21' },
    { key: '1155', text: 'erc1155', value: '1155' },
    { key: 'dao', text: 'DAO', value: 'mol' },
  ]


  return <div className="p20 mt20">
    <div className="flex justify-content-between mauto mb20" style={{maxWidth: "750px", padding: '25px'}}>
    <Square target="_blank" href={state.documentURI}>Documents 📑</Square>
    <Square>Stake 🏦</Square>
    <Square>Vote ⚖</Square>
    </div>
    <Input
      className="mb5 w100p maxw700"
      label="Name"
      value={state.name}
      placeholder='Token Name'
    />
    <Input
      className="mb5 w100p maxw700"
      label="Symbol"
      value={state.symbol}
      placeholder='123L'
    />
    <Input
      className="mb5 w100p maxw700"
      label="Total Supply"
      value={state.totalSupply}
      placeholder='50'
    />
    <div>
    </div>
      {userAddress?.toLowerCase() === state?.owner?.toLowerCase() &&
      <ContractWrapper>
        <h2>Admin Tools 🛠</h2>
        <Contract
          name="Token"
          hideInputs={[
            'decimals', 
            'renounceOwnership', 
            'allowance', 
            'approve', 
            'decreaseAllowance', 
            'increaseAllowance'
          ]}
          signer={userProvider?.getSigner()}
          provider={userProvider}
          address={state.address}
          hideCardTitle
          blockExplorer={blockExplorer}
        />
      </ContractWrapper>
}
  </div>;
}
