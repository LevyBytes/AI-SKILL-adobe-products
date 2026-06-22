# Lines, Link Metadata, Link Resource Rendition Type, Link Status ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Lines; LinkMetadata; LinkResourceRenditionType; LinkStatus; Link; LinkedPageItemOption; LinkedStoryOption; LinkingPreference — Instance; Links; ListAlignment.

## Lines

Collection containing Line objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Shows how many elements the Line contains.
> Line **item**( Mixed **index** )
>
> Gets the Line identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> Line **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Lines included in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Line, index, or name marking the range start. Accepts: Line, Long Integer or String. |
| Mixed | to | Line, index, or name marking the range end. Accepts: Line, Long Integer or String. |

> Line **firstItem**()
>
> Gets the first Line in the collection.
> Line **lastItem**()
>
> Gets the final Line in the collection.
> Line **middleItem**()
>
> Gets the middle Line in the collection.
> Line **previousItem**( Line **obj** )
>
> Gets the Line whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Line | obj | Line positioned after the desired Line. |

> Line **nextItem**( Line **obj** )
>
> Gets the Line whose index comes after the specified Line in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Line | obj | Line whose index comes before the desired Line. |

> Line **anyItem**()
>
> Gets any Line in the collection.
> Line **everyItem**()
>
> Gets every Line in the collection.
> String **toSource**()
>
> Produces a string that, when run, returns the Line.
> Line **[]**( Number **index** )
>
> Gets the Line at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## LinkMetadata

MetaData values describing the link source file.

### Instance

> _Read Only_
>
> String **author**
>
> Document author.
> _Read Only_
>
> String **description**
>
> LinkMetadata description.
> _Read Only_
>
> String **jobName**
>
> Job name.
> _Read Only_
>
> CopyrightStatus **copyrightStatus**
>
> Document copyright status.
> _Read Only_
>
> String **copyrightNotice**
>
> Copyright-notice text.
> _Read Only_
>
> String **copyrightInfoURL**
>
> URL for the file containing the linked copyright statement.
> _Read Only_
>
> String **keywords**
>
> Keywords associated with the document.
> _Read Only_
>
> String **serverURL**
>
> Document location on the asset management server.
> _Read Only_
>
> Date **modificationDate**
>
> Document's latest modification date.
> _Read Only_
>
> Date **creationDate**
>
> Date the document was created.
> _Read Only_
>
> String **documentTitle**
>
> Document title.
> _Read Only_
>
> String **creator**
>
> Application name that created the document.
> _Read Only_
>
> String **format**
>
> Document format.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Link **parent**
>
> LinkMetadata parent (a Link).
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> Object **properties**
>
> Property used to set several values in one operation.

### Methods

> String **getProperty**( String **namespace**, String **path** )
>
> Retrieves the XMP property value tied to the specified path.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | namespace | Property namespace. |
| String | path | Specified path. |

> Number **countContainer**( String **namespace**, String **path** )
>
> Counts items in the container.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | namespace | Container namespace. |
| String | path | Path to the container. |

> String **toSource**()
>
> Produces a string that, when run, returns the LinkMetadata.
> LinkMetadata **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
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

## LinkResourceRenditionType

Rendition type assigned to the link resource.

### Class

> _Read Only_
>
> Number **FPO** = 1281781871
>
> The link resource uses FPO rendition.
> _Read Only_
>
> Number **ACTUAL** = 1282372201
>
> The link resource uses original rendition.

## LinkStatus

Options describing link status.

### Class

> _Read Only_
>
> Number **NORMAL** = 1852797549
>
> The link is normal.
> _Read Only_
>
> Number `LINK_OUT_OF_DATE` = 1819242340
>
> A newer file version is present on disk.
> _Read Only_
>
> Number `LINK_MISSING` = 1819109747
>
> The linked file was moved, renamed, or deleted.
> _Read Only_
>
> Number `LINK_EMBEDDED` = 1282237028
>
> The document contains the embedded file.
> _Read Only_
>
> Number `LINK_INACCESSIBLE` = 1818848865
>
> The url link cannot be reached.

## Link

A placed-file link.

### Class

> _Read Only_
>
> String `AFTER_NEW` = afterNew
>
> Fires after a Link is created. It bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_DELETE` = beforeDelete
>
> Fires before a Link is deleted. It bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_DELETE` = afterDelete
>
> Fires after a Link is deleted. It bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_UPDATE` = beforeUpdate
>
> Fires before a Link is updated. It bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_UPDATE` = afterUpdate
>
> Fires after a Link is updated. It bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_EMBED` = beforeEmbed
>
> Fires before a Link is embedded. It bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_EMBED` = afterEmbed
>
> Fires after a Link is embedded. It bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_UNEMBED` = beforeUnembed
>
> Fires before a Link is unembedded. It bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_UNEMBED` = afterUnembed
>
> Fires after a Link is unembedded. It bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_MOVE` = beforeMove
>
> Fires before a Link is relocated from one object to another. It bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_MOVE` = afterMove
>
> Fires after a Link is relocated from one object to another. It bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_ATTRIBUTE_CHANGED` = afterAttributeChanged
>
> Fires when a property value changes on this Link. It bubbles and cannot be canceled.

### Instance

> _Read Only_
>
> VersionState **versionState**
>
> Version Cue state for the file version.
> _Read Only_
>
> EditingState **editingState**
>
> Version Cue editing state for the file.
> _Read Only_
>
> LinkMetadata **linkXmp**
>
> XMP information for the link source file.
> _Read Only_
>
> Number **index**
>
> Link index within the links collection.
> _Read Only_
>
> Mixed **parent**
>
> Object referenced by the link. Can return: Story, Graphic, Movie or Sound.
> _Read Only_
>
> String **assetURL**
>
> Asset URL for the linked object.
> _Read Only_
>
> String **assetID**
>
> Asset ID for the linked object.
> _Read Only_
>
> Boolean **edited**
>
> True indicates the linked object changed in the current document while the source file remains unupdated.
> _Read Only_
>
> String **name**
>
> Link name.
> _Read Only_
>
> Boolean **needed**
>
> True means a link to a full-resolution source file is needed; false means the object is embedded.
> _Read Only_
>
> LinkStatus **status**
>
> Link status.
> _Read Only_
>
> String **linkType**
>
> File type for the linked object.
> _Read Only_
>
> Date **date**
>
> Date and time when the Link was created.
> _Read Only_
>
> Number **size**
>
> Link file size.
> _Read Only_
>
> LinkResourceRenditionType **renditionData**
>
> Rendition data for the link resource.
> _Read Only_
>
> String **linkResourceURI**
>
> URI for the linked resource.
> _Read Only_
>
> String **filePath**
>
> Path to the file; on the Mac OS it is colon-delimited. Can also accept: File.
> _Read Only_
>
> Number **id**
>
> Unique ID for the Link.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> _Read Only_
>
> Preferences **preferences**
>
> Collection of preferences objects.
> _Read Only_
>
> Links **links**
>
> Link collection.
> String **label**
>
> Property that accepts any string value.
> Object **properties**
>
> Property used to set several values in one operation.

### Methods

> **checkIn**( String **versionComments**, Boolean **forceSave** )
>
> Checks in to Version Cue.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | Forces a version save. (Optional) |

> **relink**( Mixed **to** )
>
> Retargets this Link toward another source file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | to | Full path name of the replacement source. Can accept: File or String. |

> **unlink**()
>
> Embeds the source file into the document.
> Link **update**()
>
> Refreshes the link when the source file has changed.
> **unembed**( File **to**, String **versionComments**, Boolean **forceSave** )
>
> Extracts the source file. Without a folder, it links back to the original source file; with a folder, it copies the file there and links to that copy.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Folder where the unembedded file should be copied. (Optional) |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> **replaceWithOriginal**()
>
> Experimental: downloads the original asset and uses it to replace FPO.
> **relinkTextFragmentLink**( String **linkResourceURI**, String **name** )
>
> Experimental: points the text fragment link at a new uri.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | linkResourceURI | Resource URI for the relink target. |
| String | name | Tag name for the key. (Optional) |

> **reinitLink**( String **linkResourceURI** )
>
> Experimental: initializes the link again with a new uri.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | linkResourceURI | Resource URI to use for relinking. |

> **editOriginal**()
>
> Opens the link source file in that source type's default editor.
> **show**()
>
> Selects the link.
> **revealInSystem**()
>
> Opens the containing folder in the file system and selects the link's source file.
> **revealInBridge**()
>
> Opens Adobe Bridge with the link's source file selected.
> **copyLink**( File **to**, String **versionComments**, Boolean **forceSave** )
>
> Copies the link file into the specified location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | File or folder destination for the copy. |
| String | versionComments | Comment attached to this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> **goToSource**()
>
> Opens the source file for SharedContent links in InDesign.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified key with the supplied value as a label entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> String **extractLabel**( String **key** )
>
> Gets the label value tied to the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |

> String **toSource**()
>
> Produces a string that, when run, returns the Link.
> Link **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
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

## LinkedPageItemOption

Link settings for a linked Page Item.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the LinkedPageItemOption (a Application, Document, PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame or EndnoteTextFrame).
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> Boolean **updateLinkWhileSaving**
>
> When true, saving also updates the linked Page Item.
> Boolean **warnOnUpdateOfEditedPageItem**
>
> When true, warns if updating the link would overwrite local edits.
> Boolean **preserveSizeAndShape**
>
> When true, update preserves size and shape edits.
> Boolean **preserveAppearance**
>
> When true, update preserves appearance edits.
> Boolean **preserveInteractivity**
>
> When true, update preserves interactivity edits.
> Boolean **preserveFrameContent**
>
> When true, update preserves frame content edits.
> Boolean **preserveOthers**
>
> When true, update preserves text wrap, hyperLinks, text frame options, and object export settings.
> Object **properties**
>
> Property used to set several values in one operation.

### Methods

> String **toSource**()
>
> Produces a string that, when run, returns the LinkedPageItemOption.
> LinkedPageItemOption **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
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

## LinkedStoryOption

Link settings for a linked story.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier can resolve to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for LinkedStoryOption; possible containers are Application, Document, Story, or XmlStory.
> _Read Only_
>
> Events **events**
>
> Collection holding events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection holding event listeners.
> Boolean **updateWhileSaving**
>
> When true, saving also refreshes the linked story.
> Boolean **warnOnUpdateOfEditedStory**
>
> When true, the update link operation warns before it replaces local edits.
> Boolean **removeForcedLineBreaks**
>
> When true, story creation or update removes forced line breaks.
> Boolean **applyStyleMappings**
>
> When true, linked story creation or update applies style mappings.
> Object **properties**
>
> Use this object to assign several properties in one operation.

### Methods

> String **toSource**()
>
> Builds a string that can be executed to return the LinkedStoryOption.
> LinkedStoryOption **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler value. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## LinkingPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier can resolve to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for LinkingPreference; the container is Application.
> _Read Only_
>
> Events **events**
>
> Collection holding events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection holding event listeners.
> LinkResourceRenditionType **httpLinksRenditionType**
>
> Experimental: rendition type used for an http link.
> Boolean **httpLinksAutoTagAssetsPreference**
>
> Experimental: preference that enables auto tagging for items produced from http based links.
> Boolean **checkLinksAtOpen**
>
> When true, document open checks link states.
> Boolean **findMissingLinksAtOpen**
>
> When true, document open searches for missing links.
> Object **properties**
>
> Use this object to assign several properties in one operation.

### Methods

> String **toSource**()
>
> Builds a string that can be executed to return the LinkingPreference.
> LinkingPreference **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler value. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Links

Collection object for Link entries.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Reports how many elements are in the Link collection.
> Link **item**( Mixed **index** )
>
> Gets the Link for the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Accepts Long Integer or String. |

> Link **itemByName**( String **name** )
>
> Gets the Link matching the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Link **itemByID**( Number **id** )
>
> Gets the Link matching the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Link **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Links included in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Link, index, or name at the range start. Accepts Link, Long Integer, or String. |
| Mixed | to | Link, index, or name at the range end. Accepts Link, Long Integer, or String. |

> Link **firstItem**()
>
> Gets the first Link in the collection.
> Link **lastItem**()
>
> Gets the final Link in the collection.
> Link **middleItem**()
>
> Gets the middle Link in the collection.
> Link **previousItem**( Link **obj** )
>
> Gets the Link whose index is immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Link | obj | Index of the Link that comes after the desired Link. |

> Link **nextItem**( Link **obj** )
>
> Gets the Link whose index comes immediately after the specified Link.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Link | obj | Link positioned before the desired Link. |

> Link **anyItem**()
>
> Gets any Link from the collection.
> Link **everyItem**()
>
> Gets every Link from the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the Link.
> Link **[]**( Number **index** )
>
> Gets the Link at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## ListAlignment

Option set for ListAlignment.

### Class

> _Read Only_
>
> Number `LEFT_ALIGN` = 1818584692
>
> Left alignment.
> _Read Only_
>
> Number `CENTER_ALIGN` = 1667591796
>
> Center alignment.
> _Read Only_
>
> Number `RIGHT_ALIGN` = 1919379572
>
> Right alignment.
