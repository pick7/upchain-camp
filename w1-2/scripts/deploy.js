// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const proxyUrl = "http://127.0.0.1:7890" // change to yours, With the global proxy enabled, change the proxyUrl to your own proxy link. The port may be different for each client.
const { ProxyAgent, setGlobalDispatcher } = require("undici")
const {etherscan} = require("../hardhat.config");
const proxyAgent = new ProxyAgent(proxyUrl)
setGlobalDispatcher(proxyAgent)

async function main() {
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.deployed();
  counter.v
  console.log( ` deployed success ${counter.address} ` );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
