# Hyperlinks.add

Community declaration reference: InDesign/2023.

Creates a hyperlink.
@param hyperlinkSource Hyperlinked object.
@param hyperlinkDestination Hyperlink target; may be HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination, HyperlinkURLDestination, ParagraphDestination, or an ordered array with fileName:String, then volumn:String, then directoryId:Long Integer, then dataLinkClassId:Long Integer, then destinationUid:Long Integer.
@param withProperties Starting property values for this Hyperlink instance.

```typescript
declare class Hyperlinks {
    add(hyperlinkSource: HyperlinkPageItemSource | HyperlinkTextSource | CrossReferenceSource, hyperlinkDestination: any, withProperties: object): Hyperlink
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
