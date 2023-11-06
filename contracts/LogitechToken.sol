// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "./errors.sol";

contract LogitechToken is CustomErrors{

  mapping(address => uint256) private _balances;
  uint256 private _totalSupply;
  string private _name;
  string private _symbol;

  event Transfer(address sender, address receiver, uint256 amount);

  constructor(string memory name_, string memory symbol_) {
    _name = name_;
    _symbol = symbol_;
  }

  function balanceOf(address account) internal view returns (uint256) {
    return _balances[account];
  }
  function totalSupply() internal view returns (uint256) {
    return _totalSupply;
  }
  function name() internal view returns (string memory) {
    return _name;
  }
  function symbol() internal view returns (string memory) {
    return _symbol;
  }

  function transfer(address receiver, uint256 amount) internal returns (bool) {
    address owner = msg.sender;
    _transfer(owner, receiver, amount);
    return true;
  }

  function _transfer(address sender, address receiver, uint256 amount) internal {
    if(sender == address(0)) {
      revert InvalidSender(sender);
    }
    if(receiver == address(0)) {
      revert InvalidReceiver(receiver);
    }
    _update(sender, receiver, amount);
  }

  function _update(address sender, address receiver, uint256 amount) internal {
    if(sender == address(0)) {
      _totalSupply += amount;
    } else {
      if(_balances[sender] < amount) {
        revert InsufficientBalance(sender, _balances[sender], amount);
      }
      unchecked {
        _balances[sender] -= amount;
      }
    }
    if(receiver == address(0)) {
      unchecked {
        _totalSupply -= amount;
      }
    } else {
      unchecked {
        _balances[receiver] += amount;
      }
    }
    emit Transfer(sender, receiver, amount);
  }

  function _mint(address receiver, uint256 amount) internal {
    if(receiver == address(0)) {
      revert InvalidReceiver(receiver);
    }
    _update(address(0), receiver, amount);
  }

  function _burn(address sender, uint256 amount) internal {
    if(sender == address(0)) {
      revert InvalidSender(sender);
    }
    _update(sender, address(0), amount);
  }
}
