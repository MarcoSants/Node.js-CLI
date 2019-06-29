const yargs = require("yargs");
const { builderAdd, commandAdd, describeAdd } = require("./features/add");
const handlerAdd = require("./features/add/handler");

yargs.command({
  command: commandAdd,
  describe: describeAdd,
  builder: builderAdd,
  handler: async args => handlerAdd(args)
});

yargs.parse();
