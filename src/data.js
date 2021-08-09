function isPrime(num) {
  for ( let i = 2; i < num; i++ ) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

function display(n) {
  let arr = [2];
  for (let i = 3; i < n; i+=2) {
      if (isPrime(i)) {
          arr.push(i);
      }
  }
  
  return arr.map((v) => ({number: v}));
}

const primeNumber = display(100);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(primeNumber);
const uniqueCardsArray = primeNumber.slice(0, 9)

export default uniqueCardsArray;