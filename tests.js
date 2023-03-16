// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function(){
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when true', function(){
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when false', function(){
        expect(sayHello(false)).toBe("Hello, World!")
    });
});
describe('isFive', function(){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return true when passed 5', function(){
        expect(isFive(5 || "5")).toBe(true)
    });
});
describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when executed with 2', function(){
        expect(isEven(2)).toBe(true)
    });
    it('should return true when executed with -4', function(){
        expect(isEven(-4)).toBe(true)
    });
    it('should return true when executed with 8', function(){
        expect(isEven(8)).toBe(true)
    });
    it('should return false when executed with 3', function(){
        expect(isEven(3)).toBe(false)
    });
    it('should return false when executed with banana', function(){
        expect(isEven("banana")).toBe(false)
    });
    it('should return false when executed with Infinity', function(){
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when called with boolean input', function(){
        expect(isEven('boolean')).toBe(false)
    });
    it('should return false when called without input', function(){
        expect(isEven()).toBe(false)
    });
});
describe('isVowel',function(){
    it('should be a defined function', function(){
        expect(typeof(isVowel)).toBe('function')
    });
    it('should return a boolean when called', function(){
        expect(typeof isVowel()).toBe('boolean')
    });
    it('should return true when passed "a"', function (){
        expect(isVowel('a')).toBe(true)
    });
    it('should return true when passed "A"', function () {
        expect(isVowel('A')).toBe(true)
    });
    it('should return false when passed "y"', function () {
        expect(isVowel('y')).toBe(false)
    });
    it('should return false when passed 4', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false when passed a boolean', function () {
        expect(isVowel(true || false)).toBe(false)
    });
    it('should return false when passed "banana"', function () {
        expect(isVowel('banana')).toBe(false)
    });
    it('should return false when executed blank', function () {
        expect(isVowel((null))).toBe(false)
    });
});
