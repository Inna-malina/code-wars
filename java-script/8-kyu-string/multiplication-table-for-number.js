// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
// For example, a multiplication table (string) for number == 5 looks like below:


function multiTable(number) {
  let res = [];
  for(let i = 1; i <=10; i++){
    res.push(`${i} * ${number} = ${i*number}`);
  }
  return res.join('\n');
}

multiTable(2);