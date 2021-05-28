pragma solidity >=0.5.2 <0.8.0;

import "./ERC20.sol";
import "./Ownable.sol";

contract Token is Ownable, ERC20 {
  string public name;
  string public symbol;
  uint8 public decimals;
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
  ) public {
    name = name_;
    symbol = symbol_;
    documentURI = documentURI_,
    decimals = 18;
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
    name = newName;
  }
  function setSymbol(string memory newSymbol) public onlyOwner {
    symbol = newSymbol;
  }
  function setDocumentURI(string memory newURI) public onlyOwner {
    documentURI = newURI;
  }
}
