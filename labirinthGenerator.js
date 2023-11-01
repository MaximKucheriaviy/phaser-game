const { log } = require("console");
const file = require("fs/promises");
const arrayPushZero = (array = [], conut = 1) => {
  for (let i = 0; i < conut; i++) {
    array[array.length - 1].push(0);
  }
};

const arrayPushOne = (array = [], conut = 1) => {
  for (let i = 0; i < conut; i++) {
    array[array.length - 1].push(1);
  }
};

const maze = [];

const pushLine = (line = []) => {
  let triger = true;
  maze.push([]);
  line.forEach((item) => {
    if (triger) {
      arrayPushOne(maze, item);
    } else {
      arrayPushZero(maze, item);
    }
    triger = !triger;
  });
};

pushLine([31]);
pushLine([1, 7, 1, 7, 1, 3, 1, 1, 1, 7, 1]);
pushLine([3, 1, 1, 1, 5, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 7]);
pushLine([1, 3, 1, 7, 1, 5, 1, 3, 1, 3, 1, 3, 1]);
pushLine([1, 1, 17, 1, 5, 1, 1, 1, 1, 1, 1]);
pushLine([1, 1, 1, 7, 1, 5, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1]);
pushLine([1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3]);
pushLine([1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 5, 1, 3, 1]);
pushLine([3, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 3, 1, 1]);
pushLine([1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 7, 1, 3, 1, 1, 1]);
pushLine([5, 1, 3, 1, 3, 1, 9, 1, 3, 1, 3]);
pushLine([1, 3, 1, 7, 1, 7, 1, 3, 1, 1, 1, 3, 1]);
pushLine([1, 1, 7, 1, 5, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3]);
pushLine([1, 1, 1, 5, 1, 1, 1, 3, 1, 3, 1, 9, 1, 1, 1]);
pushLine([1, 1, 1, 1, 5, 1, 3, 1, 9, 1, 5, 1, 1]);
pushLine([1, 1, 1, 11, 1, 3, 1, 9, 1, 1, 1]);
pushLine([1, 1, 11, 1, 1, 1, 5, 1, 1, 1, 3, 1, 1, 1, 1]);
pushLine([1, 3, 1, 9, 1, 7, 1, 3, 1, 3, 1]);
pushLine([1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
pushLine([1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 5, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
pushLine([3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1, 1, 5, 1, 3]);
pushLine([1, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 5, 1, 3, 1]);
pushLine([13, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1]);
pushLine([1, 3, 1, 9, 1, 1, 1, 3, 1, 5, 1, 1, 1, 1, 1]);
pushLine([1, 1, 5, 1, 3, 1, 7, 1, 1, 1, 5, 1, 3]);
pushLine([1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1]);
pushLine([1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1]);
pushLine([1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1]);
pushLine([1, 1, 1, 1, 3, 1, 1, 1, 7, 1, 3, 1, 1, 1, 1, 1, 1, 1, 3]);
pushLine([1, 1, 1, 5, 1, 13, 1, 3, 1, 3, 1]);
pushLine([31]);
console.log(maze);

const write = async () => {
  await file.writeFile("./maze.json", JSON.stringify(maze));
};

write();
