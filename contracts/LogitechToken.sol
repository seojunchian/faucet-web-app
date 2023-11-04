// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract LogitechToken {

  string private _name;
  function name() public view returns (string memory) {
    return _name;
  }

  string private _symbol;
  function symbol() public view returns (string memory) {
    return _symbol;
  }

  uint256 private _totalSupply;
  function totalSupply() public view returns (uint256) {
    return _totalSupply;
  }

  mapping(address => uint256) private _balances;
  function balanceOf(address _account) public view returns (uint256) {
    return _balances[_account];
  }

  constructor(string memory name_, string memory symbol_, uint256 totalSupply_) {
    _name = name_;
    _symbol = symbol_;
    _totalSupply = totalSupply_;
    _balances[msg.sender] += totalSupply_;
  }

  mapping(address => mapping (address => uint256)) allowed;

  event Transfer(address sender, address receiver, uint256 numTokens);
  event Approval(address indexed tokenOwner, address indexed spender, uint tokens);

  function transfer(address receiver, uint256 numToken) public returns (bool) {
    require(numToken <= _balances[msg.sender], "Cant send more than the total supply");
    _balances[msg.sender] -= numToken;
    _balances[receiver] += numToken;
    emit Transfer(msg.sender, receiver, numToken);
    return true;
  }

  function approve(address delegate, uint256 numTokens) public returns (bool) {
    allowed[msg.sender][delegate] = numTokens;
    emit Approval(msg.sender, delegate, numTokens);
    return true;
  }

  function allowance(address owner, address delegate) public view returns (uint256) {
    return allowed[owner][delegate];
  }

  function transferFrom(address owner, address buyer, uint numTokens) public returns (bool) {
    require(numTokens <= _balances[owner]);
    require(numTokens <= allowed[owner][msg.sender]);
    _balances[owner] = _balances[owner] - numTokens;
    allowed[owner][msg.sender] = allowed[buyer][msg.sender] - numTokens;
    _balances[buyer] = _balances[buyer] + numTokens;
    emit Transfer(owner, buyer, numTokens);
    return true;
  }
}
