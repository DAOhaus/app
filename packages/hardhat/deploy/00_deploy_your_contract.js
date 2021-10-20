// deploy/00_deploy_your_contract.js

// const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  // await deploy("YourContract", {
  //   // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
  //   from: deployer,
  //   // args: [ "Hello", ethers.utils.parseEther("1.5") ],
  //   log: true,
  // });

  await deploy("Token", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: [
      "LEGT20",
      "123 East Street",
      "",
      [
        "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
        "0xabbaDE5f941f23a48702197866Bf35B8AdC9Ad69",
      ],
      [20, 21],
    ],
    log: true,
  });

  // await deploy("MultiToken", {
  //   // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
  //   from: deployer,
  //   args: [
  //     "Daohaus",
  //     "haus",
  //     "",
  //     ["0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"],
  //     [5000],
  //   ],
  //   log: true,
  // });
  let openSeaProxyRegistryAddress = "0x0";
  if (network.name === "rinkeby") {
    openSeaProxyRegistryAddress = "0xf57b2c51ded3a29e6891aba85459d600256cf317";
  } else{
    openSeaProxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1";
  }
  await deploy("NFT", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: ["NFT w/ ADMIN", "LEGT-NFT", openSeaProxyRegistryAddress],
    log: true,
  });

  /*
    // Getting a previously deployed contract
    const YourContract = await ethers.getContract("YourContract", deployer);
    await YourContract.setPurpose("Hello");
  
    To take ownership of yourContract using the ownable library uncomment next line and add the 
    address you want to be the owner. 
    // yourContract.transferOwnership(YOUR_ADDRESS_HERE);

    //const yourContract = await ethers.getContractAt('YourContract', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  */

  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */

  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */

  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */
};
module.exports.tags = ["YourContract", "Token", "MultiToken", "LegalDoc"];
