# ToolBox

Community declaration reference: InDesign/2023.

Tool box tools

```typescript
declare class ToolBox extends Preference {
    /**
    - Emitted for ToolBox property-value changes; it bubbles and cannot be canceled.
      */
      static readonly AFTER_ATTRIBUTE_CHANGED: string
    /**

    - Active tool at the moment.
      */
      currentTool: UITools
    /**

    - Hint for the active tool.
      */
      readonly currentToolHint: string
    /**

    - Icon resource file for the active tool.
      */
      readonly currentToolIconFile: File
    /**

    - Name of the active tool.
      */
      readonly currentToolName: string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
