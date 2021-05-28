import React from "react"
export default (props) => {
    return <div>
        mint
        {/* Start QA PROCESS */}
        Do you know what kind of token you want to mint?
            Yes:    COIN    - ERC20 w/o admin
                    NFT     - ERC721 w/o admin
                    MULTI   - ERC1155 w/o admin
                    DAO     - CUSTOM
            
            No:     Contact form for consultation
    </div>
}