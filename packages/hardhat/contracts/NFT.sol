// SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;

import "./721/ERC721.sol";
import "./utils/Ownable.sol";
import "hardhat/console.sol";

contract NFT is ERC721, Ownable{
    
    uint8 private tokensCount;

    mapping(uint256 => string) private tokenIdToURI;
    mapping(address => uint8[]) public ownerToTokenIds;
    
    constructor (
        string memory name_, 
        string memory symbol_ 
    )ERC721(name_, symbol_){ }

    function documentsByOwner(address owner) public view returns (uint8[] memory) { return ownerToTokenIds[owner]; }
    function setDocumentURI_owner(uint256 tokenId, string memory documentURI) public onlyOwner {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        delete tokenIdToURI[tokenId];
        tokenIdToURI[tokenId] = documentURI;
    }

    function mint_owner(address to, string memory _tokenURI) internal onlyOwner
    {
        _mint(to, tokensCount);
        tokenIdToURI[tokensCount] = _tokenURI;
        ownerToTokenIds[to].push(tokensCount);
        tokensCount++;
    }
}

