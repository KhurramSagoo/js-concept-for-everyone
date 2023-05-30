function countingValleys(steps, path) {
    let valleyCount = 0;
    let currentLevel = 0;
  
    for (let i = 0; i < steps; i++) {
      const step = path[i];
  
      if (step === 'U') {
        currentLevel++;
      } else if (step === 'D') {
        currentLevel--;
  
        if (currentLevel === -1) {
          valleyCount++;
        }
      }
    }
  
    return valleyCount;
  }
  
  const steps = 8;
  const path = 'UDDDUDUU';
  const valleys = countingValleys(steps, path);

  