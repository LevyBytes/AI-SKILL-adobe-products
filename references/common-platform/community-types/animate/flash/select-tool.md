# Flash.selectTool

Community declaration reference: Animate/22.0.

Selects a named tool in the Tools panel. Built-in values for toolName include
"arrow", "bezierSelect", "freeXform", "fillXform", "lasso", "pen", "penplus", "penminus", "penmodify", "text", "line", "rect", "oval", "rectPrimitive", "ovalPrimitive", "polystar", "pencil", "brush", "inkBottle", "bucket", "eyeDropper", "eraser", "hand", and "magnifier".
If you or a user creates custom tools, those tool names may also be supplied as the toolName parameter. The tool-name list is stored in this file:
Windows 7: boot drive\Users\username\AppData\Local\Adobe\Flash CC\language\Configuration\Tools\toolConfig.xml
Mac OS X: Macintosh HD/Users/username/Library/Application Support/Adobe/Flash CS3/language/Configuration/Tools/toolConfig.xml
@param toolName String specifying the tool name to select. See "Description" below for acceptable values for this parameter.

```typescript
declare class Flash {
    selectTool(toolName: string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
