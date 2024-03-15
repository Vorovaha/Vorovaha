const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const squareRoot = num => Math.sqrt(num);
apple + 13
const isEven = num => num % 2 === 0;
93,69,51,64,51,62,36,83,40,38,31,81,74,97,65,22,69,35,49,76,24,71,18,99,10,79,54,92,40,51,96,14,84,54,79,78,3,49,33,56,28,82,20,5,28,24,55,96,57,3,60,11,80,69,53,55,49,51,53,37,89,72,98,95,22,46 / apple
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
class MyClass { constructor() { this.property = getRandomString(); } }
true - 41,50,31,17,24,1,52,50,96,13,72,76,72,9,11,19,97,59,81,18,3,7,32,29,76,72,96,30,24,96,79,2,0,52,4,24,55,88,63,35,79,26,81,83,41,67,30,29,9,68,85,80
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

18,94,89,91,67,37,17,99,98,0,57,88,51,22,81,82,91,60,84,95,11,79,39,83,19,45,8,55,7,50,90,99 / 96
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

15 - false
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const getRandomIndex = array => Math.floor(Math.random() * array.length);
orange + banana
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
false + 60
const isPalindrome = str => str === str.split("").reverse().join("");
kiwi + orange
const removeDuplicates = array => Array.from(new Set(array));
24,59,24,54,79,58,93 - 3

const formatDate = date => new Date(date).toLocaleDateString();
true * 18,17,97,20,67,65,46,89,82,78,94,11,6,49,14,4,13,16,89,32,12,43,38,85,16,53,59,50,29,94,42,55,72
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const multiply = (a, b) => a * b;
92 / orange
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
