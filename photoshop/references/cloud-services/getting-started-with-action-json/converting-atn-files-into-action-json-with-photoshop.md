# Converting ATN files into actionJSON with Photoshop

1. Open Windows → Actions to show the action panel.
2. Select **Load action**.
3. Choose the action to convert to actionJSON.
4. Click **Copy as Javascript**.
5. Paste the contents into any text editor.
6. Edit the file to remove the extra actions obj blocks. The code sample below shows the pattern.

Afterward, the action can be used in your payload.

The next sample shows Action JSON produced by Photoshop's **Copy as Javascript** command:

The complete program is in the [upstream source](https://raw.githubusercontent.com/AdobeDocs/cis-photoshop-api-docs/4ce2f82cce1d5b7db9955690bef6394e96df0901/src/pages/features/index.md).

Trim the JavaScript to the actions only: delete the rest and copy the array containing `_obj` from the `command` variable. It will resemble this example.

```json
[
 {"_obj":"make","_target":[{"_ref":"snapshotClass"}],"from":{"_property":"currentHistoryState","_ref":"historyState"},
 "using":{"_enum":"historyState","_value":"fullDocument"}},
 {"_obj":"feather","radius":{"_unit":"pixelsUnit","_value":5.0}},
 {"_obj":"copyToLayer"},
 {"_obj":"show","null":[{"_enum":"ordinal","_ref":"layer","_value":"targetEnum"}],"toggleOptionsPalette":true},
 {"_obj":"make","_target":[{"_ref":"layer"}]},
 {"_obj":"fill","mode":{"_enum":"blendMode","_value":"normal"},"opacity":{"_unit":"percentUnit","_value":100.0},"using":{"_enum":"fillContents","_value":"white"}},
 {"_obj":"move","_target":[{"_enum":"ordinal","_ref":"layer","_value":"targetEnum"}],"to":{"_enum":"ordinal","_ref":"layer","_value":"previous"}}
]
```

Find [details about actionJSON at Photoshop API, `batchPlay`](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/media/batchplay/).
