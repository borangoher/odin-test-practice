class Vertex {
  constructor(coord, connections = [], visited = false, parent = null) {
    this.coord = coord;
    this.connections = connections;
    this.visited = visited;
    this.parent = parent;
  }
}

const _isOOB = (x, y) => {
  if (x > 8 || x < 1 || y > 8 || y < 1) {
    return true;
  } else {
    return false;
  }
};

const createBoard = () => {
  let vertices = [];
  let x, y;
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
      let newVertex = new Vertex([i, j]);

      x = i - 2;
      y = j - 1;
      if (!_isOOB(x, y)) {
        newVertex.connections.push([x, y]);
      }

      x = i - 1;
      y = j - 2;
      if (!_isOOB(x, y)) {
        newVertex.connections.push([x, y]);
      }

      x = i + 1;
      y = j - 2;
      if (!_isOOB(x, y)) {
        newVertex.connections.push([x, y]);
      }

      x = i + 2;
      y = j - 1;
      if (!_isOOB(x, y)) {
        newVertex.connections.push([x, y]);
      }

      x = i + 2;
      y = j + 1;
      if (!_isOOB(x, y)) {
        newVertex.connections.push([x, y]);
      }

      x = i + 1;
      y = j + 2;
      if (!_isOOB(x, y)) {
        newVertex.connections.push([x, y]);
      }

      x = i - 1;
      y = j + 2;
      if (!_isOOB(x, y)) {
        newVertex.connections.push([x, y]);
      }

      x = i - 2;
      y = j + 1;
      if (!_isOOB(x, y)) {
        newVertex.connections.push([x, y]);
      }

      vertices.push(newVertex);
    }
  }

  return vertices;
};

const _computeIndex = ([x, y]) => {
  return (x - 1) * 8 + y - 1;
};

const BFS = (board, start, end) => {
  let q = [];
  let v, ind;
  let pathFound = false;
  board[_computeIndex(start)].visited = true;
  board[_computeIndex(start)].parent = null;
  q.push(board[_computeIndex(start)]);

  while (q !== []) {
    v = q.shift();

    if (v.coord[0] === end[0] && v.coord[1] === end[1]) {
      pathFound = true;
      break;
    }

    for (connection of v.connections) {
      ind = _computeIndex(connection);
      if (board[ind].visited === false) {
        board[ind].parent = v;
        board[ind].visited = true;
        q.push(board[ind]);
      }
    }
  }

  let path = [];
  let current = v;
  if (pathFound) {
    path.push(current.coord);
    while (current.parent !== null) {
      current = current.parent;
      path.push(current.coord);
    }
    console.log(path.reverse());
  } else {
    console.log("No path found.");
  }
};

let a = createBoard();
BFS(a, [1, 1], [4, 4]);
