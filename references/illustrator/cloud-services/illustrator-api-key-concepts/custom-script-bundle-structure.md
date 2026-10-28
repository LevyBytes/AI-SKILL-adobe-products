# Custom script bundle structure

A basic custom script bundle uses this layout:

```text
custom-script-folder
|------ manifest.json
|------ script.jsx
```

| File | Description | Required |
| --- | --- | --- |
| manifest.json | Manifest for the custom script. This file contains all script details. | YES |
| script.jsx | Main executable for the script. The product script engine runs this script; when the product script engine allows it, the script may rely on additional files in nested directories inside the ZIP file. | YES |
