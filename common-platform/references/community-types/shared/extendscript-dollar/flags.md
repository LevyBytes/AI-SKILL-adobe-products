# $.flags

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Reads or changes low-level debug output flags.
Values are combined with logical AND bit masks:
0x0002 (2): Writes each executing line together with its line number.
0x0040 (64): Turns on very frequent garbage collection. Ordinarily, collection begins after object growth passes a threshold since the previous collection. With this flag, ExtendScript attempts collection after nearly every statement. Performance drops sharply, but the behavior helps diagnose objects that may be released too early.
0x0080 (128): Logs all calls, their argument lists, and the returned value.
0x0100 (256): Turns on extended error handling (see strict).
0x0200 (512): Activates localization support for the toString method, matching the localize property.

```typescript
interface $ {
    flags: number
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
