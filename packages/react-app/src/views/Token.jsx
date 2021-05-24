/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import ChartistGraph from 'react-chartist';
import { Input, Dropdown } from 'semantic-ui-react'
import { Contract } from 'components'
import styled from "styled-components"

const ContractWrapper = styled.div`
  max-width: 750px;
  margin: auto;
  position: relative;
  top: -250px;
`

var data = {
  labels: ['0x456', '0x123'],
  series: [50, 50]
};

var options = {
  donut: true,
  width: '500px',
  height: '500px',
  donutWidth: 75,
  startAngle: 270,
  total: 200,
};

var type = 'Pie'
export default function Token({
  purpose,
  setPurposeEvents,
  address,
  mainnetProvider,
  userProvider,
  localProvider,
  yourLocalBalance,
  blockExplorer,
  price,
  tx,
  readContracts,
  writeContracts,
}) {
  const [state, setState] = useState({});
  const dropdownOptions = [
    { key: '20', text: 'erc20', value: '21' },
    { key: '1155', text: 'erc1155', value: '1155' },
    { key: 'dao', text: 'DAO', value: 'mol' },
  ]

  return <div className="p20">
    <Input
      className="mb5 w100p maxw700"
      label="Token Address"
      value={readContracts?.Token?.address}
      placeholder='0x1234'
    />
    <div className="relative">
      <span style={{ top: '250px', position: 'relative' }}>603 Miramar</span>
      <ChartistGraph data={data} options={options} type={type} />
    </div>
      <ContractWrapper>
    <Contract
      name="Token"
      signer={userProvider.getSigner()}
      provider={userProvider}
      address={address}
      hideCardTitle
      blockExplorer={blockExplorer}
    />
      </ContractWrapper>
  </div>;
}
