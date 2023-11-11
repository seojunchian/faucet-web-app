// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ILogitech} from "./ILogitech.sol";

contract Logitech is ILogitech {
  mapping(address account => uint256) private _balances;
  uint256 private _totalSupply;
  string private _name;
  string private _symbol;

  constructor(string memory name_, string memory symbol_) {
    _name = name_;
    _symbol = symbol_;
    mint(msg.sender, 10000000000000000000000000);
  }

  function name() public view virtual returns (string memory) {
    return _name;
  }

  function symbol() public view virtual returns (string memory) {
    return _symbol;
  }

  function totalSupply() public view virtual returns (uint256) {
    return _totalSupply;
  }

  function balanceOf(address account) public view virtual returns (uint256) {
    return _balances[account];
  }

  function transferFrom(address from, address to, uint256 amount) internal {
    if(from == address(0)) {
      revert InvalidSender(from);
    }
    if(to == address(0)) {
      revert InvalidReceiver(to);
    }
    update(from, to, amount);
  }

  function update(address from, address to, uint256 value) internal virtual {
    if (from == address(0)) {
      _totalSupply += value;
    } else {
      if (_balances[from] < value) {
        revert InsufficientBalance(from, _balances[from], value);
      }
      unchecked {
        _balances[from] -= value;
      }
    }

    if (to == address(0)) {
      unchecked {
        _totalSupply -= value;
      }
    } else {
      unchecked {
        _balances[to] += value;
      }
    }
    emit Transfer(from, to, value);
  }

  function mint(address to, uint256 amount) internal {
    if (to == address(0)) {
      revert InvalidReceiver(address(0));
    }
    update(address(0), to, amount);
  }
}