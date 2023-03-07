// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Counter{

    uint256 public number =0;

    function add(uint256 x) public {
        number += x ;
    }

}