// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Counter{
    uint256 public number =0;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function add(uint256 x)  public {
        // 如果是owner就继续，否则报错
        require(msg.sender == owner ,"not owner");
        number += x ;
    }

}