# SpriteSheetExporter.layoutFormat

Community declaration reference: Animate/22.0.

Defines the metadata format used for the sprite sheet. Available values come from the Sprite Sheet Plugin directory, and "JSON" (JavaScript Object Notation) is one possible value. A script supplies the layout format ID string so it can match one of the .jsfl files for the Sprite Sheet plugin in flashroot/Common/Configuration/Sprite Sheet Plugins. Those files use the layoutformat.plugin.jsfl naming pattern, and the string you pass is set to layoutformat. For example, layoutFormat can be "Starling", "cocos2D v2", or "cocos2D v3".

```typescript
declare class SpriteSheetExporter extends Item {
    layoutFormat: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
