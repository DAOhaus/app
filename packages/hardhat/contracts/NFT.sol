// SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;

import "./721/ERC721Tradable.sol";
import "./utils/Ownable.sol";

contract NFT is ERC721Tradable{
    
    uint8 private tokensCount;

    mapping(uint256 => string) private tokenIdToURI;
    mapping(address => uint8[]) public ownerToTokenIds;
    
    constructor (
        string memory name_, 
        string memory symbol_,
        address _proxyRegistryAddress
    )
        ERC721Tradable(name_, symbol_, _proxyRegistryAddress)
    {}

    function getOwnerToTokenIds(address owner) public view returns(uint8[] memory)
    {   
        return ownerToTokenIds[owner];
    }

    function baseTokenURI() pure public returns (string memory)
    {
        return ("");
    }

    function tokenURI(uint256 _tokenId) public override view returns (string memory)
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

    function mint(string memory _tokenURI) public
    {   
        _mint(msg.sender, tokensCount);
        tokenIdToURI[tokensCount] = _tokenURI;
        ownerToTokenIds[msg.sender].push(tokensCount);
        tokensCount++;
    }

    function adminTransfer(address to, uint256 tokenId) public
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

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        //solhint-disable-next-line max-line-length
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
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
        _transfer(from, to, tokenId);
    }

}
