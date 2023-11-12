// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./LogitechErrorsAndEvents.sol";

contract Logitech is LogitechErrorsAndEvents {
	mapping(address => uint256) private _balances;

	uint256 private _totalSupply;

	string private _name;
	string private _symbol;

	constructor(string memory name_, string memory symbol_) {
		_name = name_;
		_symbol = symbol_;
		_mint(msg.sender, 1000000000000000000000);
	}

	function name() public view returns (string memory) {
		return _name;
	}

	function symbol() public view returns (string memory) {
		return _symbol;
	}

	function decimals() public pure returns (uint8) {
		return 18;
	}

	function totalSupply() public view returns (uint256) {
		return _totalSupply;
	}

	function balanceOf(address account) public view returns (uint256) {
		return _balances[account];
	}

	function transfer(address to, uint256 amount) public {
		_transfer(msg.sender, to, amount);
	}

	function _transfer(address from, address to, uint256 amount) internal {
		if(from == address(0)) {
			revert InvalidSender(from);
		}
		if(to == address(0)) {
			revert InvalidReceiver(to);
		}
		_update(from, to, amount);
	}

	function _update(address from, address to, uint256 amount) internal {
		if (from == address(0)) {
			_totalSupply += amount;
		} else {
			if (_balances[from] < amount) {
				revert InsufficientBalance(from, _balances[from], amount);
			}
			unchecked {
				_balances[from] -= amount;
			}
		}

		if (to == address(0)) {
			unchecked {
				_totalSupply -= amount;
			}
		} else {
			unchecked {
				_balances[to] += amount;
			}
		}
		emit Transfer(from, to, amount);
	}

	function _mint(address to, uint256 amount) internal {
		if (to == address(0)) {
			revert InvalidReceiver(address(0));
		}
		_update(address(0), to, amount);
	}

	function _burn(address from, uint256 amount) internal {
		if (from == address(0)) {
			revert InvalidSender(from);
		}
		_update(from, address(0), amount);
	}
}