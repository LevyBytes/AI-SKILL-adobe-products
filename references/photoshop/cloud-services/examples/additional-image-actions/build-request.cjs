const request = require("./request-settings.json");
request.options.actionJSON = [
    ...require("./place-image-action.json"),
    ...require("./create-selection-mask-actions.json"),
    ...require("./align-and-deselect-actions.json")
];
if (require.main === module) process.stdout.write(JSON.stringify(request, null, 2) + "\n");
module.exports = request;
