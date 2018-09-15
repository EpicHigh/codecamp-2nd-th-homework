function dfs(x, y) {
  const map = [];
  let firstPos = 0;
  let secondPos = 0;
  while (firstPos <= x) {
    while (firstPos % 2 === 0) {
      if (firstPos === x && secondPos === y) {
        return map;
      } else {
        map.push([firstPos, secondPos++]);
        if (secondPos === y) {
          map.push([firstPos++, secondPos]);
        }
      }
    }
    while (firstPos % 2 === 1) {
      if (firstPos === x && secondPos === y) {
        map.push([firstPos++, secondPos]);
        return map;
      } else {
        map.push([firstPos, secondPos--]);
        if (secondPos === 0) {
          map.push([firstPos++, secondPos]);
        } else if (firstPos > x) {
          map.pop();
          return map;
        }
      }
    }
  }
}

console.log(dfs(4, 4));
