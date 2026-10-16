# _AddControlPropertiesStaticText

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Properties accepted when creating a StaticText.
@param name Unique control name.
@param multiline false, the default, shows one text line. true allows multiple lines, with wrapping inside the control width.
@param scrolling false, the default, prevents scrolling of the displayed text. true enables vertical scrolling with Up Arrow and Down Arrow, and implies multiline=true.
@param truncate middle or end chooses where characters are removed and replaced with an ellipsis when the title is too wide for its reserved space. none removes trailing characters without adding an ellipsis if the text still does not fit.

```typescript
interface _AddControlPropertiesStaticText {
    name?: string
    multiline?: boolean
    scrolling?: boolean
    truncate?: _Truncate
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
