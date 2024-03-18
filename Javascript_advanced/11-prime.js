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
  
  setTimeout(() => {
    const t0 = performance.now();
  
    for (let i = 0; i < 100; i++) {
      countPrimeNumbers();
    }
  
    const t1 = performance.now();
  
    console.log(
      `Execution time of calculating prime numbers 100 times was ${
        t1 - t0
      } milliseconds.`
    );
  }, 0);