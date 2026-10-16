# _AddControlPropertiesEditText

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Creation properties for an EditText.
@param name Unique control name.
@param multiline When false, which is the default, the control shows one text line. When true, it shows multiple lines and wraps text within the control width.
@param borderless When true, the control is rendered without a border. The default is false.
@param scrollable Applies only to multiline elements. When true, the default, the text field includes a vertical scrollbar that becomes enabled once content exceeds the visible area. When false, no vertical scrollbar is shown; if content no longer fits, the arrow keys can move the text up and down.
@param readonly When false, which is the default, the control accepts text input. When true, it accepts no input and only displays the contents of the text property.
@param noecho When false, which is the default, input text is displayed. When true, input text is hidden, as used for password fields.
@param enterKeySignalsOnChange When false, which is the default, the control signals onChange after editable text changes and the control loses keyboard focus, such as when the user tabs to another control, clicks outside it, or types Enter. When true, the control signals onChange only after the editable text changes and the user types Enter; other keyboard-focus changes do not signal the event.
@param wantReturn In ScriptUI Version 6.0 or later, this applies only to multiple line edit controls. A true value makes RETURN/ENTER act as text input and move the cursor to the following line. Default: false.

```typescript
interface _AddControlPropertiesEditText {
    name?: string
    multiline?: boolean
    borderless?: boolean
    scrollable?: boolean
    readonly?: boolean
    noecho?: boolean
    enterKeySignalsOnChange?: boolean
    wantReturn?: boolean
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
