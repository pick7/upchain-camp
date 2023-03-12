const { expect } = require("chai");
const hre = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

async function deployCounter() {
    const Counter = await hre.ethers.getContractFactory("Counter");
    return await Counter.deploy();
}

describe("Counter", function () {
    let counter;

    // 准备工作
    before(async () => {
        counter = await deployCounter();
    });

    it("add success", async function () {
        // call 一下 add 方法，输出tx 信息
        // let txData = await counter.add(1)
        // console.log(JSON.stringify(txData))
        expect(await counter.add(1));
    });

    it("add fail", async function () {
        // 创建一个随机地址
        const wallet = ethers.Wallet.createRandom();
        // 使用随机地址调用add
        expect(await counter.connect(wallet).add(1));
    });
});