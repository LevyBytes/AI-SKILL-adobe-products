# XMPMetaConstructor

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

```typescript
interface XMPMetaConstructor {
    /** Creates a blank object instance. */
    new (): XMPMetaInstance
    /**

    - @param packet XML file text or XMP packet text.
      */
      new (packet: string): XMPMetaInstance
    /**
    - @param buffer UTF-8 or UTF-16 bytes containing XML file data
    - or XMP packet data. This array comes from calling `serializeToArray`
    - on an `XMPMeta` instance.
      */
      new (buffer: number[]): XMPMetaInstance
    /**
    - @param prefix Namespace prefix.
    - @example XMPMeta.getNamespacePrefix('xmp'); // 'http://ns.adobe.com/xap/1.0/'
      */
      getNamespaceURI(prefix: string): string
    /**
    - @param uri Namespace URI.
    - @example XMPMeta.getNamespacePrefix('http://ns.adobe.com/xap/1.0/'); // 'xmp:'
      */
      getNamespacePrefix(uri: string): string
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
