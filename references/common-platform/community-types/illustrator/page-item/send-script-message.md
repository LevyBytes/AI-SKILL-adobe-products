# PageItem.sendScriptMessage

Community declaration reference: Illustrator/2022.

Send a script message to the requested plugin.
@param pluginName Plugin that receives the message.
@param messageSelector Functionality selected for execution.
@param inputString Data passed as an encoded string.

```typescript
declare class PageItem {
    sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
