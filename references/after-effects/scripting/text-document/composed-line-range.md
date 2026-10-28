# TextDocument.composedLineRange()

textDocument.composedLineRange(composedLineIndexStart, [signedComposedLineIndexEnd])

Note

This functionality was added in After Effects 24.3

### Description

Hands back a ComposedLineRange range-accessor instance for the Text layer.

The constructor arguments are retained on the instance and never change; if the TextDocument contents shift, the instance may raise exceptions on access until those contents return to a state where the range is valid once more.

Call ComposedLineRange.toString() to see the parameters it was built with.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| composedLineIndexStart | Unsigned integer | Starts at zero, must be the less than the number of composed lines in the TextDocument object. |
| signedComposedLineIndexEnd | Signed integer. | Optional. When omitted, it resolves to (composedLineIndexStart + 1). A value of -1 makes the ComposedLineRange object resolve it on access to the final composed line of the TextDocument object. signedComposedLineIndexEnd has to exceed composedLineIndexStart and be no greater than the number of composed lines in the TextDocument object. |

Throws an exception if the parameters would result in an invalid range.

Keep in mind that composed lines are static, so later edits to the TextDocument object instance that alter its length can leave the composed-line data stale.

### Returns

An instance of ComposedLineRange object
