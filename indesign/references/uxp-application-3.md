# Application (part 3)

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Application — Instance

> **select**( Mixed **selectableItems**, SelectionOptions **existingSelection** )
>
> Selects the specified object or objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | selectableItems | Objects to select; accepts Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator. |
| SelectionOptions | existingSelection | Selection state for the Application relative to previously selected objects. (Optional) |

> **applyShortcutSet**( String **name** )
>
> Applies a shortcut set file by name. Supplying no string applies the default shortcut set.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Shortcut set. (Optional) |

> **applyWorkspace**( String **name** )
>
> Applies the named workspace.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Workspace. (Optional) |

> **applyMenuCustomization**( String **name** )
>
> Applies the named menu customization set. An empty string resets all menus and colorization (Show Full Menus). Supplying no string applies the default menu set.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Menu customization set. (Optional) |

> **togglePanelSystemVisibility**()
>
> Shows or hides all panels together.
> Mixed **open**( Mixed **from**, Boolean **showingWindow**, OpenOptions **openOption** )
>
> Opens a document, book, or library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | File path or paths for the document, book, or library; accepts File or Array of Files. |
| Boolean | showingWindow | When true, opens the document in a window. When false, opens it without displaying a window. (Optional) |
| OpenOptions | openOption | Document opening mode. (Optional) |

> **quit**( SaveOptions **saving** )
>
> Exits the application.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SaveOptions | saving | How open-document changes are handled before quit. (Optional) |

> any **doScript**( Mixed **script**, ScriptLanguage **language**, any **withArguments**, UndoModes **undoMode**, String **undoName** )
>
> Executes the script as one transaction in the requested language.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | script | Script to run; accepts File, String or JavaScript Function. |
| ScriptLanguage | language | Script language. When omitted, the language used to call this method is used. (Optional) |
| any | withArguments | Argument array passed to the script. (Optional) |
| UndoModes | undoMode | Undo behavior for this script. (Optional) |
| String | undoName | Undo step name used for entire script undo mode. (Optional) |

> **activate**()
>
> Brings the application to the front-most or active window state.
> **cascadeWindows**()
>
> Cascades every document window.
> String **internalMethod**( String **internalParameter1**, String **internalParameter2** )
>
> Internal use only: black-box method reserved for the InDesign Engineering team.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | internalParameter1 | First internal parameter |
| String | internalParameter2 | Second internal parameter |

> Boolean **deleteCloudDocument**( String **assetReference** )
>
> Deletes the cloud document identified by the supplied reference.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | assetReference | Reference to the asset |

> Document **openCloudDocument**( String **assetReference**, Boolean **showingWindow** )
>
> Opens the cloud document identified by the supplied reference.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | assetReference | Reference to the asset |
| Boolean | showingWindow | When true, opens the document in a window. When false, opens it without displaying a window. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Assigns the specified value to the label keyed by the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |

> String **findKeyStrings**( String **for** )
>
> Looks up the current-locale string in the internal string localization database and returns the matching locale-independent string or strings.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | for | String to search for. |

> String **translateKeyString**( String **for** )
>
> Converts a key string into localized form according to the current application locale.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | for | Key string to translate |

> **undo**()
>
> Reverses the last action.
> **redo**()
>
> Reapplies the last reversed action.
> **tileWindows**()
>
> Tiles every document window.
> **generateIDMLSchema**( File **to**, Boolean **packageFormat** )
>
> Generates an IDML schema.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Folder path for the schema. |
| Boolean | packageFormat | When true, generates schema for package format (multiple files). The default value is false. (Optional) |

> **cancelAllTasks**()
>
> Cancels every background task.
> TaskState **waitForAllTasks**()
>
> Waits until every background task finishes.
> **setApplicationPreferences**( Mixed **applicationPreferences** )
>
> Sets preferences for the application.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | applicationPreferences | IDML defaults file or enumeration; accepts File or LanguageAndRegion enumerator. |

> String **toSource**()
>
> Creates source text that, when executed, returns the Application.
> Application **getElements**()
>
> Builds an object-reference array from the specifier.
> String **toSpecifier**()
>
> Returns the specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Deletes the event listener registration.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
