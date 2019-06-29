# Node.js-CLI

A base CLI application built with Node.js.

Base structure for be creating CLI applications with node.
Ready to use.
With simple exemples.

By Marco Antonio Santo.
Alias: MarcoSantss.

## Examples

const yargs = require("yargs");

// node src/index.js Hello --title="Wow"

// Getting arguments without libraries
console.log("process.argv:");
console.log(process.argv[2]);
console.log(process.argv[3]);

// Using yargs
console.log("\n\nyargs:");
console.log(yargs.argv);
console.log(yargs.argv.title);
