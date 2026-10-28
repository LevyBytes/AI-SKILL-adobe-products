# suspendHistory

The signature for `suspendHistory` is:

```javascript
executionContext.hostControl.suspendHistory(options);
```

The `options` parameter is an object with the following properties:

| Name | Type | Description |
| --- | --- | --- |
| documentID | number | ID for the document whose history state will be suspended. |
| name | string | Text shown for the history state in the History panel. `suspendHistory` returns a suspension identifier, and that identifier should later be passed to `resumeHistory`. |
