// SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;

import "./20/ERC20.sol";
import "./utils/Ownable.sol";

contract Token is Ownable, ERC20 {
  string public documentURI;
  struct member {
    bool locked;
  }
  mapping(address => uint256) public _votes;
  mapping(address => member) public _members;

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
  // user locks tokens to signal ownership change
  function stakeVote(address account) public {
    require(_members[msg.sender].locked == false, "Must not already have staked");
    _votes[account] = _votes[account] + balanceOf(msg.sender);
    _members[msg.sender].locked = true;
  }
  // cancels & unlockes tokens
  function unstakeVote() public {
    require(_members[msg.sender].locked, "Must have already voted to resind votes");
    _votes[msg.sender] = _votes[msg.sender] - balanceOf(msg.sender);
    _members[msg.sender].locked = false;
  }
  // when >50% token holders signal, trigger is allowed to transfer and unlocks  
  function setNewOwner(address account) public {
    require(_votes[account] > totalSupply()/2, "Must have over 50%");
    _setOwner(account);
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
