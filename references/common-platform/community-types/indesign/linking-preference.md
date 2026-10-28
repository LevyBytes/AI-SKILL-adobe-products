# LinkingPreference

Community declaration reference: InDesign/2023.

Preferences for linking.

```typescript
declare class LinkingPreference extends Preference {
    /**
    - When true, link states are checked when a document opens.
      */
      checkLinksAtOpen: boolean
    /**

    - When true, missing links are searched for when a document opens.
      */
      findMissingLinksAtOpen: boolean
    /**

    - Experimental: preference that enables auto tagging for items created through http based links.
      */
      httpLinksAutoTagAssetsPreference: boolean
    /**

    - Experimental: rendition type used for http link.
      */
      httpLinksRenditionType: LinkResourceRenditionType
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
