// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract LogitechToken {

  mapping(address => uint256) _balances;
  function balanceOf(address _account) public view returns (uint256) {
    return _balances[_account];
  }

  uint256 private _totalSupply;
  function totalSupply() public view returns (uint256) {
    return _totalSupply;
  }

  string private _name;
  function name() public view returns (string memory) {
    return _name;
  }
  
  string private _symbol;
  function symbol() public view returns (string memory) {
    return _symbol;
  }

  constructor(string memory name_, string memory symbol_) {
    _name = name_;
    _symbol = symbol_;
  }

  function transfer(address owner, address to, uint256 value) public view {
    value -= _balances[owner];
    value += _balances[to];
  }

}
