raw_input=[1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,23,13,27,1,10,27,31,2,31,6,35,1,5,35,39,1,39,10,43,2,9,43,47,1,47,5,51,2,51,9,55,1,13,55,59,1,13,59,63,1,6,63,67,2,13,67,71,1,10,71,75,2,13,75,79,1,5,79,83,2,83,9,87,2,87,13,91,1,91,5,95,2,9,95,99,1,99,5,103,1,2,103,107,1,10,107,0,99,2,14,0,0];

loop1:
for (let noun=0;noun<100;noun++) {
loop2:
  for (let verb=0;verb<100;verb++) {
    input = raw_input.slice();

    input[1]=noun;
    input[2]=verb;

    instr_ptr = 0;
    halt = false;

    while (!halt) {
      par1 = input[instr_ptr+1];
      par2 = input[instr_ptr+2];
      store = input[instr_ptr+3];
      switch(input[instr_ptr]) {
        case 1:
          input[store] = input[par1] + input[par2];
          break;
        case 2:
          input[store] = input[par1] * input[par2];
          break;
        case 99:
          halt = true;
          break;
      }
      instr_ptr = instr_ptr + 4;
    }

    if (input[0] === 19690720) {
      console.log("noun = ", noun);
      console.log("verb = ", verb);
      console.log("result = ", 100 * noun + verb)
      // 6417
      break loop1;
    }
  }
}