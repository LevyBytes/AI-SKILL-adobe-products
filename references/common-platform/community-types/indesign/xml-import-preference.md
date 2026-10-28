# XMLImportPreference

Community declaration reference: InDesign/2023.

Preferences controlling XML import.

```typescript
declare class XMLImportPreference extends Preference {
    /**
    - When true, an XSLT file is used to transform the XML.
      */
      allowTransform: boolean
    /**

    - When true, imported XML is linked to its source file. When false, the file is embedded.
      */
      createLinkToXML: boolean
    /**

    - When true, incoming elements without matches in the existing structure are ignored. Note: Valid only when import style is merge.
      */
      ignoreUnmatchedIncoming: boolean
    /**

    - When true, existing content remains when matching XML content contains only whitespace, such as a carriage return or tab character. Note: Valid only when import style is merge.
      */
      ignoreWhitespace: boolean
    /**

    - When true, CALS tables are imported as InDesign tables.
      */
      importCALSTables: boolean
    /**

    - Method used to incorporate imported XML content into the document.
      */
      importStyle: XMLImportStyles
    /**

    - When true, text is imported into tables whose tags match placeholder tables and cells. Note: Valid only when import style is merge.
      */
      importTextIntoTables: boolean
    /**

    - When true, import targets the selected XML element. When false, import starts at the root element.
      */
      importToSelected: boolean
    /**

    - When true, existing document elements or placeholders lacking XML file matches are deleted. Note: Valid only when import style is merge.
      */
      removeUnmatchedExisting: boolean
    /**

    - When true, repeated text elements take formatting from placeholder text. Note: Valid only when import style is merge.
      */
      repeatTextElements: boolean
    /**

    - XSLT file name. Restriction: allow transform must be true.
      */
      transformFilename: File | XMLTransformFile
    /**

    - Stylesheet parameters are supplied as name/value-pair entries using [[name, value], [name, value], ...]. Return can be: ordered array with name:String and value:String.
      */
      transformParameters: any[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
