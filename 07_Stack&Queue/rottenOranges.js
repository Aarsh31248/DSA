function rottenOranges(grid) {
  let r = grid.length;
  let c = grid[0].length;
  let queue = [];

  // Add all the rotten oranges in the queue
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  let maxMinutes = 0;
  // Mark adjacent nodes as rotten an push inside queue till its not empty
  while (queue.length) {
    let [x, y, level] = queue.shift();

    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, level + 1]);
    }
    if (x < r - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, level + 1]);
    }
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, level + 1]);
    }
    if (y < c - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, level + 1]);
    }

    maxMinutes = Math.max(level, maxMinutes);
  }

  // Check if any fresh is remaining then return -1

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return maxMinutes;
}
// Time = O(m x n), Space = O(m x n)
