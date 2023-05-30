function sockMerchant(n, ar) {
    const frequencyMap = {};
    let pairs = 0;
  
    for (let i = 0; i < n; i++) {
      const color = ar[i];
  
      if (frequencyMap[color]) {
        frequencyMap[color]++;
      } else {
        frequencyMap[color] = 1;
      }
    }
  
    for (const color in frequencyMap) {
      const count = frequencyMap[color];
      pairs += Math.floor(count / 2);
    }
  
    return pairs;
  }
  
  const n = 9;
  const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  const matchingPairs = sockMerchant(n, socks);
  