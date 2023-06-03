pragma solidity ^0.8.0;

contract Hello {
  string private message;
  event MessageSet(string newMessage);
  function setMessage(string memory initialMessage) public {
    message = initialMessage;
    emit MessageSet(initialMessage);
  }
  function getMessage() public view returns(string memory) {
   return message;
  }
}