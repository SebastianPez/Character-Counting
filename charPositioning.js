function charPosition(str) {
  var noSpaces = str.split(" ").join("");
  var strPositioned = {};
  for (var i = 0; i < noSpaces.length; i ++) {
    var keyVar = noSpaces[i];
    if (strPositioned[keyVar] === undefined) {
      strPositioned[keyVar] = i;
    } else {
      strPositioned[keyVar] += ", " + i;
    }
  }
  return strPositioned;
}
console.log(charPosition("lighthouse in the house"));