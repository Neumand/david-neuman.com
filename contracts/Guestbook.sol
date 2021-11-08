// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import 'hardhat/console.sol';

contract Guestbook {
  uint256 totalSignCount;
  struct Sign {
    address signer;
    string message;
    uint256 timestamp;
  }
  Sign[] signs;

  event SignGuestbook(address indexed from, uint256 timestamp, string message);

  constructor() {
    console.log('Initializing the guestbook!');
  }

  function sign(string memory _message) public {
    console.log('%s has signed the guestbook!', msg.sender);
    totalSignCount += 1;
    signs.push(Sign(msg.sender, _message, block.timestamp));
    emit SignGuestbook(msg.sender, block.timestamp, _message);
  }

  function getTotalSignCount() public view returns (uint256) {
    return totalSignCount;
  }

  function getAllSigns() public view returns (Sign[] memory) {
    return signs;
  }
}
