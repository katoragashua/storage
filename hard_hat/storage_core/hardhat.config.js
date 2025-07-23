require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { CORE_PRIVATE_KEY, CORE_TESTNET_RPC } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.28",
        settings: {
          evmVersion: "shanghai",
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {},
    core_mainnet: {
      url: "https://rpc.coredao.org/",
      accounts: [CORE_PRIVATE_KEY],
      chainId: 1116,
    },
    core_testnet2: {
      url: "https://rpc.test2.btcs.network",
      accounts: [CORE_PRIVATE_KEY],
      chainId: 1114,
    },
  },
  etherscan: {
    apiKey: {
      core_testnet2: process.env.CORE_TEST2_SCAN_KEY,
      core_mainnet: process.env.CORE_MAIN_SCAN_KEY,
    },
    customChains: [
      {
        network: "core_testnet2",
        chainId: 1114,
        urls: {
          apiURL: "https://api.test2.btcs.network/api",
          browserURL: "https://scan.test2.btcs.network/",
        },
        // gasPrice: 20000000000, // Comment this out
        maxFeePerGas: 20000000000, // 20 gwei
        maxPriorityFeePerGas: 2000000000, // 2 gwei
      },
      {
        network: "core_mainnet",
        chainId: 1116,
        urls: {
          apiURL: "https://openapi.coredao.org/api",
          browserURL: "https://scan.coredao.org/",
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
