# The `script.jsx` file

For a given endpoint, the script author places the custom attributes and values in the _script.jsx_ file within the custom script bundle.

Script execution uses these attributes:

| Attribute | Input Request Mapping | Description |
| --- | --- | --- |
| `assets` | assets->destination field | List of input assets, such as .ai, .pdf, .jpeg, and similar files. |
| `params` | params | User inputs or arguments consumed inside the script. |
| `jobID` | Auto-generated | Job ID. |
| `workingFolder` | Auto-generated | Job working folder. It serves as the base directory where all assets and scripts are downloaded (for example c:\\baseFolder\\assets). |

Examples are available in [Custom Script Guide](../custom-script-guide/reference-index.md).
