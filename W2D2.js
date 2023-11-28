var smallerStringA1 = 'abcd';
var smallerStringB1 = 'efg';
var expected = 'efgabcd';

var smallerStringA2 = 'sunnyside up eggs';
var smallerStringB2 = 'biscuits and gravy';
var expected = 'sunnyside up eggsbiscuits and gravy';

/**
 * Combine two given strings together with the smaller string being added
 * in the fron. If they are the same length, the first string will be
 * added to the front.
 * @returns {string} The combined strings.
 */
function combineSmallerStringFirst(stringA,stringB) {
  var stringC = [];
  if (stringA.length <= stringB.length){
    stringC = stringA + stringB
  }
  else{
    stringC = stringB + stringA
}
  console.log(stringC)
    return stringC
  

  }



combineSmallerStringFirst(smallerStringA2,smallerStringB2)

/*****************************************************************/

var stringToRepeat1 = 'Birria Tacos';
var numberToRepeat1 = 5;
var repeatedExpected =
  'Birria TacosBirria TacosBirria TacosBirria TacosBirria Tacos';

var stringToRepeat2 = 'margherita pizza';
var numberToRepeat2 = 2;
var repeatedExpected = 'margherita pizzamargherita pizza';

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @returns {string} The given string repeated the specified amount of times.
 */
function stringRepeat(stringToRepeat,numberToRepeat) {
  var newString = [];
  for (var i=0;i<numberToRepeat;i++){
    newString += stringToRepeat

  }
  console.log(newString);
  return(newString);
}

stringRepeat(stringToRepeat2,numberToRepeat2);

/*****************************************************************/

var wordArray = [
  'shawn',
  'jim',
  'tyler',
  'heidi',
  'john',
  'alfredo',
  'michael',
];

/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 *    How are we keeping track of the longest word?
 */
function findLongestWord(wordArray) {
    var counter = wordArray[0]
  for (var i=1;i<wordArray.length;i++){
    if (wordArray[i].length >= wordArray[i-1].length){
    var counter = wordArray[i]
    }
  }
  console.log(counter);
  return(counter);
}

findLongestWord(wordArray);

/*****************************************************************/

/** BONUS *********************************************************/

var rangeA1 = 10;
var rangeB1 = 15;
var rangeExpected = 75;
/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @returns {number} The sum of the given range, inclusive.
 */
function inclusiveRangeSum(rangeA,rangeB) {
  var sum = 0;
  for(var i = 0; i <= (rangeB-rangeA);i++){
    sum = sum + (10+i);

  }
  console.log(sum);
  return(sum);

}

inclusiveRangeSum(rangeA1,rangeB1);