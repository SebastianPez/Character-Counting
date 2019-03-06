function countLetters(str) {
  var noSpaces = str.split(' ').join("");
  var strCounted = {};
  for (var i = 0; i < noSpaces.length; i ++) {
    keyVar = noSpaces[i];
    if (strCounted[keyVar] === undefined) {
      strCounted[keyVar] = 1;
    } else {
      strCounted[keyVar] += 1;
    }
  }
  return strCounted;
}

console.log(countLetters("lighthouse in the house"));