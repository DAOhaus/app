// SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;

import "./721/ERC721.sol";
import "./utils/Ownable.sol";

contract NFT is ERC721, Ownable{
    
    uint8 private tokensCount;

    mapping(uint256 => string) private tokenIdToURI;
    mapping(address => uint8[]) public ownerToTokenIds;
    
    constructor (
        string memory name_, 
        string memory symbol_ 
    )
    ERC721(name_, symbol_)
    {
        tokensCount = 0;
    }

    function getOwnerToTokenIds(address owner) public view returns(uint8[] memory)
    {   
        return ownerToTokenIds[owner];
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory)
    {
        require(_exists(_tokenId), "ERC721Metadata: URI query for nonexistent token");
        return tokenIdToURI[_tokenId];
    }

    function setTokenURI(uint256 tokenId, string memory documentURI) public {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        require(ownerOf(tokenId) == msg.sender, "Only owner of token can update URI");

        delete tokenIdToURI[tokenId];
        tokenIdToURI[tokenId] = documentURI;
    }

    function mint(string memory _tokenURI) public onlyOwner
    {   
        _mint(msg.sender, tokensCount);
        tokenIdToURI[tokensCount] = _tokenURI;
        ownerToTokenIds[msg.sender].push(tokensCount);
        tokensCount++;
    }

    function adminTransfer(address to, uint256 tokenId) public onlyOwner
    {
        require(_exists(tokenId), "token doesnt exist");
        for(uint256 i = 0; i < ownerToTokenIds[msg.sender].length; i++)
        {
            if (ownerToTokenIds[msg.sender][i] == tokenId)
            {   
                for (uint j = i; j < ownerToTokenIds[msg.sender].length - 1; j++)
                    ownerToTokenIds[msg.sender][j] = ownerToTokenIds[msg.sender][j+1];
                ownerToTokenIds[msg.sender].pop();
                break;
            }
        }
        ownerToTokenIds[to].push(uint8(tokenId));
        _transfer(msg.sender, to, tokenId);
    }

}
