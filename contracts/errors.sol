// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CustomErrors {
  error InvalidSender(address sender);
  error InvalidReceiver(address receiver);
  error InsufficientBalance(address sender, uint256 senderBalance, uint256 amount);
}