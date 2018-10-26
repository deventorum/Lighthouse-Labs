var assert = require('chai').assert
var luhnAlg = require('../luhnAlgor.js');

describe("Luhn Algorithm", function() {
  it("should return true if a number is a valid credit card number", function() {
    var num = 79927398713;
    var result = luhnAlg(num);
    assert.isTrue(result);
  });
  
  it("should return false if a number is not a number", function() {
    var num = 'seven';
    var result = luhnAlg(num);
    assert.isFalse(result);
  });

  it("should return false if a number is not a valid credit card number", function() {
    var num = 79727398713;
    var result = luhnAlg(num);
    assert.isFalse(result);
  });


  /* it("should return false if a word is NOT a palindrome", function() {
    var word = "not";
    assert.isFalse(isPalindrome(word));
  });
  
  it("should return true if a phrase is a palindrome", function() {
    var phrase = "a man a plan a canal panama";
    assert.isTrue(isPalindrome(phrase));
  });
  
  it("should return false if a phrase is NOT a palindrome", function() {
    var phrase = "this is not a palindrome"
    assert.isFalse(isPalindrome(phrase));
  }); */
});