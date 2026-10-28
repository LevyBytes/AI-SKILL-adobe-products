# setExecutionMode

23.2

**async** : _Promise_`<void>`

Use execution mode while debugging a plugin. It is available only
when developer mode is enabled.

This example enables stack traces for failed batchPlay commands.
When stack traces are enabled, an error result descriptor from a
batchPlay request includes a stacktrace property. Use that property when
reporting bugs to Adobe.

```javascript
await core.setExecutionMode({ enableErrorStacktraces: true });
```

This example enables console warnings for rejected promises:

```javascript
await core.setExecutionMode({ logRejections: true });
```

### Parameters

| Name | Type |
| --- | --- |
| `options` | _object_ |
| `options.enableErrorStacktraces?` | _boolean_ |
| `options.logRejections?` | _boolean_ |
