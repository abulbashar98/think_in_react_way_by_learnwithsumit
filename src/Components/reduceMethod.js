

/*-------------------------*\
  Array.prototype.reduce()
\*------------------------*/


const array = [1, 2, 3, 4, 5];

const initialvalue = 0;

const reducer = (accumulator, currentValue) => {
  return accumulator + currentValue;
}


const sum = array.reduce(reducer, initialvalue);
console.log(sum);


//====> 15