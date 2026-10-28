# Preference

Community declaration reference: InDesign/2023.

Preference object.

```typescript
declare class Preference {
    /**
    - Event listener collection.
      */
      readonly eventListeners: EventListeners
    /**

    - Event collection.
      */
      readonly events: Events
    /**

    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**

    - Preference parent; possible parent classes include Application, Document, Book, DataMerge, XmlStory, Spread, FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting, FindChangeContentTransparencySetting, HtmlItem, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, FormField, Sound, Movie, MediaItem, EPSText, Polygon, GraphicLine, Rectangle, Oval, SplineItem, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Graphic, Group, EndnoteTextFrame, TextFrame, PageItem, PageItemDefault, TransparencySetting, StrokeTransparencySetting, FillTransparencySetting, ContentTransparencySetting, FindObjectPreference, ChangeObjectPreference, Story, TextVariable, TextWrapPreference, Page, Link, ObjectStyle, MasterSpread, NamedGrid, TextDefault, ParagraphStyle, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Text, FindTextPreference, ChangeTextPreference, FindGrepPreference, ChangeGrepPreference, FindTransliteratePreference or ChangeTransliteratePreference.
      */
      readonly parent: any
    /**

    - Property used to set multiple properties together.
      */
      properties: object
    /**

    - Registers an event listener.
    - @param eventType Event type.
    - @param handler Event handler.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**

    - Converts the object specifier into an array of object references.
      */
      getElements(): Preference[]
    /**

    - Unregisters the event listener.
    - @param eventType Registered event type.
    - @param handler Registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Builds a string that returns the Preference if executed.
      */
      toSource(): string
    /**

    - Gets the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
