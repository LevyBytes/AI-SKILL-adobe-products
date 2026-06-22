# Word Rtf Import Preference

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Word RTF import preference settings.

## Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object of the WordRTFImportPreference (a Application).
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Boolean **importAsStaticEndnotes**
>
> When true, endnotes are brought in as static text. Otherwise they remain live endnotes
> Boolean **preserveLocalOverrides**
>
> When true, character formatting is retained in text after its formatting is removed. Note: applies when remove formatting is true.
> Boolean **importUnusedStyles**
>
> When true, unused styles are imported.
> ResolveStyleClash **resolveCharacterStyleClash**
>
> Setting used to manage style name conflicts.
> ResolveStyleClash **resolveParagraphStyleClash**
>
> Setting used when paragraph styles have matching names and conflicts must be resolved.
> Boolean **preserveGraphics**
>
> When true, inline graphics are preserved.
> Boolean **preserveTrackChanges**
>
> When true, comments and edits from the imported file are preserved.
> Boolean **importFootnotes**
>
> When true, footnotes are imported.
> Boolean **importEndnotes**
>
> When true, endnotes are imported.
> Boolean **useTypographersQuotes**
>
> When true, straight quotes and apostrophes in imported text are converted to typographic quotation marks and apostrophes.
> ConvertPageBreaks **convertPageBreaks**
>
> Setting for handling manual page breaks.
> Boolean **importIndex**
>
> When true, the index is imported.
> Boolean **importTOC**
>
> When true, the table of contents is imported.
> Boolean **removeFormatting**
>
> When true, text and table formatting are removed.
> ConvertTablesOptions **convertTablesTo**
>
> Policy used to convert tables after their formatting is removed. Note: applies when remove formatting is true.
> Boolean **convertBulletsAndNumbersToText**
>
> When true, bullets and numbers become embedded characters during import. When false, InDesign renders the bullets and numbers.
> Object **properties**
>
> Property for assigning multiple properties in one operation.

### Methods

> String **toSource**()
>
> Produces a string that, when executed, returns the WordRTFImportPreference.
> WordRTFImportPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
