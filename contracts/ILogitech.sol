// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface ILogitech {
  error InvalidSender(address sender);
  error InvalidReceiver(address receiver);
  error InsufficientBalance(address sender, uint256 balance, uint256 needed);
  error InsufficientAllowance(address spender, uint256 allowance, uint256 needed);
  error InvalidApprover(address approver);
  error InvalidSpender(address spender);
  event Transfer(address indexed from, address indexed to, uint256 value);
}