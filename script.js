function utopianTree(n) {
  let height = 1;

  for (let i = 1; i <= n; i++) {
    if (i % 2!== 0) {
      // Spring season: height doubles
      height *= 2;
    } else {
      // Summer season: height increases by 1
      height += 1;
    }
  }

  return height;
}

const N = [3, 0, 1, 4];
function utopianTree(n);