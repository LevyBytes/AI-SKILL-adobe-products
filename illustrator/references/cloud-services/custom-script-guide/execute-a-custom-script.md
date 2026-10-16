# Execute a custom script

Execution-request assets are downloaded to the local file system under the provided identifiers. Write the custom script so it operates on those locally available files.

The execution request carries a JSON dictionary parameter, and each parameter is delivered to the script while it runs.

Have the script export generated output into `outputFolderPath`. The exported assets are then uploaded to the destination.

Do not include `UI` code in the script, and do not invoke dialogs or popups such as `alert()`.

For complete API information, see [Custom Scripts API (public beta)](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/033ed1d5ffbf17213aefd11b5a39a0da218f8d06/src/pages/api/beta/index.md).
