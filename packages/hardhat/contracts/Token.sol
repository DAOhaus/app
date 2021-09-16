// SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;

import "./20/ERC20.sol";
import "./utils/Ownable.sol";

contract Token is Ownable, ERC20 {
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

  function mint(address account, uint256 value) public onlyOwner {
    _mint(account, value);
  }
  
  function burn(address account, uint256 value) public onlyOwner {
    _burn(account, value);
  }

  function setName(string memory newName) public onlyOwner {
    _name = newName;
  }
  function setSymbol(string memory newSymbol) public onlyOwner {
    _symbol = newSymbol;
  }
  function setDocumentURI(string memory newURI) public onlyOwner {
    documentURI = newURI;
  }
}
