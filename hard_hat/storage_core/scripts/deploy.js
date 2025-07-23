const hre = require("hardhat");

async function main() {
  console.log("Deploying Storage contract to Core Testnet2...");

  // Get the contract factory
  const Storage = await hre.ethers.getContractFactory("Storage");

  // Deploy the contract
  const storage = await Storage.deploy();

  // Wait for deployment to complete
  await storage.waitForDeployment();

  const contractAddress = await storage.getAddress();
  
  console.log("✅ Storage contract deployed successfully!");
  console.log("Contract address:", contractAddress);
  console.log("Network:", hre.network.name);
  console.log("Deployer:", (await hre.ethers.getSigners())[0].address);
  console.log("Explorer URL: https://scan.test.btcs.network/address/" + contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:");
    console.error(error);
    process.exit(1);
  });