const addName = require("./../../../db/data");

const handlerAdd = async args => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      addName(args.name);
    }, 2000);
  });
};

module.exports = handlerAdd;
