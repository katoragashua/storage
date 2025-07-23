require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { ETHERSCAN_API_KEY, ALCHEMY_RPC_URL, SEPOLIA_PRIVATE_KEY } = process.env;
/** @type import('hardhat/config').HardhatUserConfig */

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and store it as the "ALCHEMY_API_KEY"
// configuration variable
// const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Store the private key as the "SEPOLIA_PRIVATE_KEY" configuration
// variable.
// Beware: NEVER put real Ether into testing accounts
// const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

// const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `${ALCHEMY_RPC_URL}`,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
};


