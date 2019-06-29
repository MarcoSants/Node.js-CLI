var names = [];

const addName = async name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      names.push(name);
      if (!names.length) reject(console.log("Something went wrong :("));
      else resolve(console.log("Added with successful!"));
    }, 2000);
  });
};

module.exports = addName;
