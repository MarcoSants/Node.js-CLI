const yargs = require("yargs");
const {
  builderAdd,
  commandAdd,
  describeAdd,
  handlerAdd
} = require("./features/add");

yargs.command({
  command: commandAdd,
  describe: describeAdd,
  builder: builderAdd,
  handler: async args => handlerAdd(args)
});

yargs.parse();
