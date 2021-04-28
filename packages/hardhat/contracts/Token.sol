pragma solidity >=0.5.2 <0.8.0;

import "./ERC20.sol";
import "./Ownable.sol";

contract Token is Ownable, ERC20 {
  constructor(uint256 supply) public {
    _mint(msg.sender, supply);
  }

  function mint(address account, uint256 value) public onlyOwner {
    _mint(account, value);
  }
  
  function burn(address account, uint256 value) public onlyOwner {
    _burn(account, value);
  }
}
