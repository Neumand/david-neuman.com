// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import 'hardhat/console.sol';

contract Guestbook {
  uint256 totalSigns;
  string[] messages;

  constructor() {
    console.log('Initializing the guestbook!');
  }

  function sign(string memory message) public {
    totalSigns += 1;
    messages.push(message);
    console.log('%s has signed the guestbook!', msg.sender);
  }

  function getTotalSigns() public view returns (uint256) {
    console.log('%d people signed the guestbook!', totalSigns);
    return totalSigns;
  }

  function getAllMessages() public view returns (string [] memory) {
    console.log('All messages:');
    for (uint256 i = 0; i < messages.length; i++) {
      console.log(messages[i]);
    }
    return messages;
  }
}
