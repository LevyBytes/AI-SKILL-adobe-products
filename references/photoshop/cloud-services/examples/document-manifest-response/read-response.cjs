const response = require("./response-metadata.json");
const graphics = require("./graphic-layers.json");
const headline = require("./headline-layer.json");
response.outputs[0].layers = [graphics[0], headline, ...graphics.slice(1)];
if (require.main === module) process.stdout.write(JSON.stringify(response, null, 2) + "\n");
module.exports = response;
