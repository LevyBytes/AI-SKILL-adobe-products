# batchPlay

Photoshop contains many internal classes and methods, and UXP does not expose every one of them yet. Adobe continues to add interfaces in Photoshop releases. Until a needed capability appears in the current DOM, a plugin or script may be able to reach it through `batchPlay`.

Use BatchPlay when a Photoshop capability is not yet surfaced through the APIs. It submits multiple actions to the Photoshop event queue and returns the results from those actions.

In ExtendScript, the comparable entry point was `executeAction`. The difference is that `executeAction` handled only a single descriptor per call, while UXP's `batchPlay` takes an array of action descriptors. When several Photoshop operations must run sequentially, placing those action descriptors in one `batchPlay` call is usually the right pattern.

ExtendScript supplied classes for building action descriptors, references, and values. With `batchPlay`, those structures are plain JSON objects instead.

See [batchPlay documentation](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/media/batchplay.md) for the details of constructing JSON used with `batchPlay`.
