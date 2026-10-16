# Required input in a custom script

By default, the system passes a string argument named `"params"`; the script must parse it before reading its attributes.

- **params** - Details describing how the reserved input params should be handled.

| Parameter | Required | Description |
| --- | --- | --- |
| `targetDocument` | Yes | Illustrator document name to process. |
| `outputFolderPath` | Yes | Folder path where generated files are written. |
| `zip` | No | Use only for zipped assets. |
| `fontFolderPath` | No | Font folder location; requires the `zip` param. |

```jsonc
{
    "assets": [
        {"path": "template.ai"},
        {"path": "assets.zip"},
        /* additional records or fields omitted */
    ],
    "params": {
        "targetDocument": "template.ai",
        "outputFolderPath": "results",
        "zip": "assets.zip",
        "assetDataFolderPath" : "assets/pngData"
        /* additional records or fields omitted */
    }
}
```

Partial shape: add the omitted content required by your actual request. The comment is not a request value.

To use this argument, have the script parse `"params"` and pull out the values for `targetDocument` and `outputFolderPath`.

Revise existing scripts so argument handling works as expected:

**Fetching params passed to the script**

```javascript
var arg1 = paramsMap.targetDocument;
var arg2 = paramsMap.outputFolderPath;
// Some processing
```

Inside the script, every value supplied under `"params"` is available through `"paramsMap".<paramKey>`.
