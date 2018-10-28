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

  it("should return false if a number is not a valid credit card number", function() {
    var num = 79727398713;
    var result = luhnAlg(num);
    assert.isFalse(result);
  });

  it("should return true if a credit card is valid", function() {
    const card = 378705364959450;
    const result = luhnAlg(card);
    assert.isTrue(result);
  });
  
  it("should return true if a card is valid", function() {
    const card = 4024007103594528;
    assert.isTrue(luhnAlg(card));
  });
  
  it("should return true if a card is valid", function() {
    const visa = 344500595291232;
    assert.isTrue(luhnAlg(visa));
  });
  
  it("should return false if a Visa not valid", function() {
    const phrase = 5355098240;
    assert.isFalse(luhnAlg(phrase));

  })
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