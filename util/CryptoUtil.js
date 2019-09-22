"use strict";

const crypto = require('crypto'), algorithm = 'aes-256-ctr', password = '5q4U0r1';

const CryptoUtil = {};

CryptoUtil.encrypt = function(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

CryptoUtil.decrypt = function(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

module.exports = CryptoUtil;