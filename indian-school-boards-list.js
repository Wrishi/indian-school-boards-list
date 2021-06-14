'use strict'

var data = require('./data.json');


var boardNameMap = {};
var boardCodeMap = {};
data.forEach(function(board) {
  boardNameMap[board.board.toLowerCase()] = board.code;
  boardCodeMap[board.code.toLowerCase()] = board.board;
});

module.exports = BoardList;
function BoardList() {
  if (!(this instanceof BoardList)) return new BoardList();
};

BoardList.prototype.getBoardCode = function getBoardCode(name) {
  return boardNameMap[name.toLowerCase()];
};

BoardList.prototype.getBoardName = function getBoardNames(code) {
  return boardCodeMap[code.toLowerCase()];
};

BoardList.prototype.getBoardNames = function getBoardNames() {
  return data.map(function(board) {
    return board.board;
  });
};

BoardList.prototype.getBoardCodes = function getBoardCodes() {
  return data.map(function(board) {
    return board.code;
  });
};

BoardList.prototype.getData = function getData() {
  return data;
};