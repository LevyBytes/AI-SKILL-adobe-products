# Result value

`batchPlay` returns a promise. Photoshop rejects that promise when the batchPlay command itself is invalid, such as when the arguments are wrong. This call is an example of a batchPlay rejection:

```javascript
action.batchPlay(true, {});
```

The first argument in this example is incorrect. `batchPlay` expects a descriptor list there, not a boolean. In this kind of case, the promise is rejected with an appropriate error message. The call above produces this rejection:

Example rejected-promise diagnostic:

```text
[[PromiseState]]: "rejected"
[[PromiseResult]]: Error: Argument 1 has an invalid type. Expected type: array actual type: boolean
```

A batchPlay command can also fail when Photoshop cannot process an otherwise valid command. This usually happens when the requested target element is missing.

The earlier [hide the active layer](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/batchplay.md#hidelayerexample) example fails if no documents are open, because there is then no target layer for the command to hide. In such cases, the `batchPlay` promise resolves successfully and returns an error message in list form.

```json
[
  {
    "_obj": "error",
    "message": "The object “current document” is not currently available.",
    "result": -25922
  }
]
```

The returned list elements correspond to the action descriptor list sent to batchPlay. The first returned item is the result for the first action descriptor, and the sequence continues in order. Returned element properties are:

- `_obj: string`. Holds "Error"
- `message: string`. Contains a localized error message
- `result: number`. Contains a Photoshop internal error code. A value of "0" means "no error". -128 indicates that the user cancelled the operation. Other values are possible.
