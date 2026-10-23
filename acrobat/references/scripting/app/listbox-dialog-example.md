# List-box dialog example

Example 3: This example uses a list box.

[List-box dialog implementation](https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsapiref/JS_API_AcroJS.html#execdialog).

Then execute

```javascript

app.execDialog(dialog3);
```

Swapping the `type: "list_box"` line above for `type: "popup"` and stripping out the height value turns this same example into one driven by a pop-up control instead of a list box.

Related: [app.execDialog](exec-dialog.md).
