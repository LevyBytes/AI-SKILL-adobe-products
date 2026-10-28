# Input examples

Below, a request body and script demonstrate opening a document and reading files from `"assets"`:

**Sample input request body**

```json
{
  "assets": [
    {
      "source": {
        "url": "<Pre-signed URL of the document>"
      },
      "destination": "template.ai"
    },
    {
      "source": {
        "url": "<Pre-signed URL of the document>"
      },
      "destination": "assets.zip"
    }
  ],
  "params": {
    "targetDocument": "template.ai",
    "outputFolderPath": "results",
    "zip": "assets.zip",
    "assetDataFolderPath": "assets",
    "someParam": "sampleValue"
  }
}
```

After `assets.zip` is expanded, the folder layout is:

```text
C:\\basefolder\\assets
                  â”œâ”€â”€ pngData/
                  â””â”€â”€ jpegData/
```

**Input request after transformation and before script execution**

```json
{
  "assets": [
    {
      "path": "template.ai"
    }
  ],
  "params": {
    "targetDocument": "C:\\basefolder\\template.ai",
    "outputFolderPath": "C:\\basefolder\\results",
    "assetDataFolderPath": "C:\\basefolder\\assets",
    "someParam": "sampleValue"
  }
}
```

Parameters whose names end in `"FolderPath"` are normalized into absolute paths; `"assetDataFolderPath"` shows that conversion.

**Sample code consuming the transformed input**

```javascript
var inputFile = new File(paramsMap.targetDocument);
var jpegDataPath = paramsMap.assetDataFolderPath + "/jpegData/";
var extraParam = paramsMap.someParam;

if (!inputFile.exists) {
  throw new Error("Input file not found: " + inputFile.fsName);
}

var doc = app.open(inputFile);
var outputFilePath = paramsMap.outputFolderPath + "/result_output.ai";

someProcessing(extraParam, jpegDataPath);

var outputFile = new File(outputFilePath);
doc.exportAsFormat(ExportFileType.ET_AI, outputFile);
doc.close(SaveOptions.DONOTSAVECHANGES);
```

Close the document without saving changes by calling `doc.close(SaveOptions.DONOTSAVECHANGES);`.
