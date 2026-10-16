# Flash.getThemeFontInfo

Community declaration reference: Animate/22.0.

Reports either the font Style or the font Size used for drawing UI text at the requested size.
@returns String containing either the font style or font size for the specified size.
@param infoType String containing one of the following:
fontStyle - yields the font style for the supplied size parameter.
fontSize - yields the font size for the supplied size parameter.
@param size String specifying either "large" or "small".

```typescript
declare class Flash {
    getThemeFontInfo(infoType: string, size: string): string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
