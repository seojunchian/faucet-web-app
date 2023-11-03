// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LogitechToken is ERC20{
    constructor() ERC20("DevToken", "DVT"){
        _mint(msg.sender, 1000*10**18);
    }
}