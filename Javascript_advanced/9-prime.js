function countPrimeNumbers() {
    const primes = [];
  
    for (let i = 2; i <= 100; i++) {
      let isPrime = true;
      let end = Math.sqrt(i);
  
      for (let j = 2; j <= end; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    return primes;
  }
  
  const tO = performance.now();
  const primes = countPrimeNumbers();
  console.log(primes.length);
  console.log(
    `Execution time of printing countPrimeNumbers was ${
      performance.now() - tO
    } milliseconds`
  );