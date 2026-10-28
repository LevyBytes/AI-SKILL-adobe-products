# LinkMetadata

Community declaration reference: InDesign/2023.

Link-source file MetaData properties.

```typescript
declare class LinkMetadata extends Preference {
    /**
    - Document author.
      */
      readonly author: string
    /**

    - URL for the file containing the linked copyright statement.
      */
      readonly copyrightInfoURL: string
    /**

    - Copyright notice text.
      */
      readonly copyrightNotice: string
    /**

    - Document copyright status.
      */
      readonly copyrightStatus: CopyrightStatus
    /**

    - Document creation date.
      */
      readonly creationDate: Date
    /**

    - Application name used to create the document.
      */
      readonly creator: string
    /**

    - LinkMetadata description text.
      */
      readonly description: string
    /**

    - Document title.
      */
      readonly documentTitle: string
    /**

    - Document format.
      */
      readonly format: string
    /**

    - Job name.
      */
      readonly jobName: string
    /**

    - Keywords attached to the document.
      */
      readonly keywords: string[]
    /**

    - Document's latest modification date.
      */
      readonly modificationDate: Date
    /**

    - Asset-management server location for the document.
      */
      readonly serverURL: string
    /**

    - Counts items inside the container.
    - @param namespace Container namespace.
    - @param path Container path.
      */
      countContainer(namespace: string, path: string): number
    /**

    - Reads the XMP property value at the supplied path.
    - @param namespace Property namespace.
    - @param path Requested path.
      */
      getProperty(namespace: string, path: string): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
