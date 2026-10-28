# Application.sendScriptMessage

Community declaration reference: Illustrator/2022.

Sends a script message to the required plugin.
@param pluginName Specifies: Plugin to which message needs to be sent.
@param messageSelector Functionality to execute.
@param inputString String-encoded data to pass.

```typescript
declare class Application {
    sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
