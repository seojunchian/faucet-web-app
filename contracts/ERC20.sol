// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ERC20Errors} from "./ERC20Errors.sol";

contract ERC20 is ERC20Errors {
  mapping(address account => uint256) private _balances;

  event Transfer(address indexed from, address indexed to, uint256 value);

  uint256 private _totalSupply;
  string private _name;
  string private _symbol;

  constructor(string memory name_, string memory symbol_) {
    _name = name_;
    _symbol = symbol_;
    _mint(msg.sender, 10000000000000000000000000);
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

  function _update(address from, address to, uint256 value) internal virtual {
    if (from == address(0)) {
      _totalSupply += value;
    } else {
      uint256 fromBalance = _balances[from];
      if (fromBalance < value) {
        revert ERC20InsufficientBalance(from, fromBalance, value);
      }
      unchecked {
        _balances[from] = fromBalance - value;
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

  function _mint(address account, uint256 value) internal {
    if (account == address(0)) {
      revert ERC20InvalidReceiver(address(0));
    }
    _update(address(0), account, value);
  }
}