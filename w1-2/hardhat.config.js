require("@nomicfoundation/hardhat-toolbox");

const proxyUrl = "http://127.0.0.1:7890" // change to yours, With the global proxy enabled, change the proxyUrl to your own proxy link. The port may be different for each client.
const { ProxyAgent, setGlobalDispatcher } = require("undici")
const proxyAgent = new ProxyAgent(proxyUrl)
setGlobalDispatcher(proxyAgent)
const dotenv = require("dotenv")
dotenv.config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: process.env.RPC_URL,
      chainId: 5,
      accounts: [process.env.GOERLI_PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY
    }
  }
};