pragma solidity >=0.5.2 <0.8.0;

import "./ERC20.sol";
import "./Ownable.sol";

contract Token is Ownable, ERC20 {
  string public name;
  string public symbol;
  uint8 public decimals;
  constructor (string memory name_, string memory symbol_, uint256 supply_) public {
    name = name_;
    symbol = symbol_;
    decimals = 18;
    _mint(msg.sender, supply_);
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
}
