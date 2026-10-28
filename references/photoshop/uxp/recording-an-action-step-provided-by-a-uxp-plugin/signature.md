# Signature

```typescript
async function recordAction({ name: string, methodName: string }, info: Object): Promise<void>;
```

### Arguments

| argument | description |
| --- | --- |
| name | User visible string. The Actions panel shows this value as the Action step name. |
| methodName | Name of top level JavaScript function. The Actions panel calls this method when the recorded Action runs. |
| info | Object with data for the function above. The Action records this object and passes it to the target JavaScript function during playback. Properties in `info` appear in the Actions panel when a property name is recognized. The set of recognized property names can vary across Photoshop versions. To discover known names, locate an Action with the desired name, then use `Copy As JavaScript` to inspect the matching identifier. If some internal properties should stay hidden, add a unique prefix, such as a reverse URL: `com.foo.myProperty`. |
