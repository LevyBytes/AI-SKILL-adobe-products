# batchPlaySync

23.1

ActionDescriptor[]

Runs `batchPlay` with the supplied commands. In ExtendScript terms,
the matching operation is `executeAction`.

```javascript
const target = { _ref: "layer", _enum: "ordinal", _value: "targetEnum" };
const commands = [{ _obj: "hide", _target: target }];
await action.batchPlay(commands);
```

### Parameters

| Name | Type |
| --- | --- |
| `commands` | ActionDescriptor[] |
| `options?` | [_BatchPlayCommandOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/batchplaycommandoptions.md) |
