import('three.js');

function equalRealS(x, y) {
  var diff = (x - y) * (x - y);
  diff = Math.sqrt(diff);

  if (diff < 0.00000001)
    return true;
  else {
    return false;
  }
}

//console.log("\n\n Testing functions \n\n");
//console.log("Equal Fucntion\n given x = 0.3432 and y = 0.3431\nAre they equal?");
//
//var x = 0.3432;
//var y = 0.3431;
//var ret = equalRealS(x, y);
//
//console.log(ret + "\n\n");
