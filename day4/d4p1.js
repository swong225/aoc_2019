var answer = 0;

min=245182;
max=790572;

for (var i=min; i <= max; i++) {
  num = i;
  var digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = parseInt(num / 10);
  }
  digits.reverse();

  adjacent_equal = false;
  never_decreases = true;

  // check if adjacents equal
  for (var j=0; j<digits.length; j++) {
    if (digits[j] === digits[j+1]) {
      adjacent_equal = true;
      break;
    }
  }

  if (adjacent_equal) {
    // check if digits never decrease
    for (var j=0; j<digits.length; j++) {
      if (digits[j] > digits[j+1]) {
        never_decreases = false;
        break;
      }
    }

    if (adjacent_equal && never_decreases) {
      answer++;
    }
  }
}

console.log("answer = ", answer)
//1099 unique satisfy