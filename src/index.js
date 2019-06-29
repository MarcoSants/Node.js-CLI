const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a new password collection",
  builder: {
    t: {
      describe: "Title",
      demandOption: true,
      type: "string"
    }
  },
  handler: args => {
    console.log("hi", args);
  }
});

yargs.parse();
