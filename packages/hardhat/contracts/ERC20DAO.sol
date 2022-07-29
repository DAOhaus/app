// SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;

import "./20/ERC20.sol";
import "./utils/Ownable.sol";

contract ERC20DAO is Ownable, ERC20 {
  string public documentURI;
  struct member 
  {
    string name;
    uint8 percentage;
    address locatedAt;
  }
  constructor (
    string memory name_, 
    string memory symbol_, 
    string memory documentURI_, 
    address[] memory members, 
    uint256[] memory amounts
  ) ERC20(name_, symbol_, 18)
  {
    documentURI = documentURI_;
    for(uint256 i = 0; i < members.length; i++) {
      _mint(members[i], amounts[i]);
    }
  }

  // modifier massApproval(uint price) {}

  function mint_owner(address account, uint256 value) public onlyOwner { _mint(account, value); }
  function burn_owner(address account, uint256 value) public onlyOwner { _burn(account, value); }
  function setName_owner(string memory newName) public onlyOwner { _name = newName; }
  function setSymbol_owner(string memory newSymbol) public onlyOwner { _symbol = newSymbol; }
  function setDocumentURI_owner(string memory newURI) public onlyOwner { documentURI = newURI; }
  function stakeForChange(address newOwner, uint256 value) public {
  }

  // function mint_owner(address account, uint256 value) public onlyOwner { _mint(account, value); }
}
