// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import 'hardhat/console.sol';

contract Guestbook {
  uint256 totalSignCount;
  uint256 private seed;
  struct Sign {
    address signer;
    string message;
    uint256 timestamp;
  }
  Sign[] signs;
  mapping(address => uint256) public lastSignedAt;

  event SignGuestbook(address indexed from, uint256 timestamp, string message);

  constructor() payable {
    console.log('Initializing the guestbook!');
    seed = (block.timestamp + block.difficulty) % 100;
  }

  function sign(string memory _message) public {
    require(
      lastSignedAt[msg.sender] + 30 seconds < block.timestamp,
      'You can only sign the guestbook once every 30 seconds!'
    );
    lastSignedAt[msg.sender] = block.timestamp;
    
    totalSignCount += 1;
    signs.push(Sign(msg.sender, _message, block.timestamp));
    emit SignGuestbook(msg.sender, block.timestamp, _message);

    seed = (block.timestamp + block.difficulty) % 100;
    if (seed <= 50) {
      console.log('%s won!', msg.sender);
      uint256 prizeAmount = 0.0001 ether;
      require(
        prizeAmount <= address(this).balance,
        "Contract doesn't have enough funds!"
      );
      (bool success, ) = (msg.sender).call{value: prizeAmount}('');
      require(success, 'Failed to withdraw money from contract');
    }
  }

  function getTotalSignCount() public view returns (uint256) {
    return totalSignCount;
  }

  function getAllSigns() public view returns (Sign[] memory) {
    return signs;
  }
}
