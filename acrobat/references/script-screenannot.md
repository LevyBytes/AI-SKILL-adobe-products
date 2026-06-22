# Screenannot, Search

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ScreenAnnot; search.

## ScreenAnnot

### JavaScript APIs — ScreenAnnot

On the page as rendered on screen, a ScreenAnnot stands for a screen annotation — a rectangular region inside a PDF. To drive multimedia playback, Renditions and RenditionActions can be attached to that ScreenAnnot.

Note

Within the Acrobat 6.0 (and Later) Compatible Media JavaScript API sits the ScreenAnnot object. Under that scheme, multimedia content leans on whatever multimedia player the host operating system can find and start on the user's machine. From Acrobat 9.0 (and Later) onward, Flash video (FLV) and Flash applications (SWF) are handled natively and may be embedded into a PDF or streamed to it. Because Flash is supported natively, playback stays dependable across platforms. There is no need for an extra media player or a particular codec.

The rich media annotations introduced with Acrobat 9.0 (and Later) replace Acrobat 6.0 (and Later) Compatible Media. For that reason, anyone authoring PDFs that carry multimedia is urged strongly to adopt the rich media annotations of Acrobat 9 (and Later). For the JavaScript side of rich media annotations, consult the AnnotRichMedia object.

### ScreenAnnot properties

### altText

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

String

R

| --- | --- | --- | --- | --- | --- |

Holds the annotation's alternate-text string; if none was set, this is an empty string.

Example: Fetch an annotation and print its altText into the debug console.

```
var annot = this.media.getAnnot({ nPage:0, cAnnotTitle: "myScreen" });
console.println( "annot.altText = " + annot.altText );
```

### alwaysShowFocus

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

By default a screen annotation toggles a focus rectangle on and off to signal whether it holds the keyboard focus. Set this property to true and the focus rectangle stays drawn even while the annotation lacks focus. The point of this is docked media playback: the annotation's focus rectangle can stay on screen although the keyboard focus has actually moved to the media player.

The PDF file does not store this property. Any change you make lasts only for the current session.

### display

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Behaves the same as the display property on the Field object.

The PDF file does not store this property. Any change you make lasts only for the current session.

Example: Make the annotation invisible.

```
var annot = this.media.getAnnot({ nPage:0, cAnnotTitle: "myScreen" });
annot.display = display.hidden;
```

### doc

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Doc

R

| --- | --- | --- | --- | --- | --- |

Points back to the document in which the screen annotation lives.

### events

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Events object

R/W

| --- | --- | --- | --- | --- | --- |

Holds an Events object that gathers up the EventListeners bound to a screen annotation.

The PDF file does not store this property. Any change you make lasts only for the current session.

Example: Build a basic focus EventListener.

```
var annot = this.media.getAnnot({ nPage:0, cAnnotTitle: "myScreen" });
var myFocusEvent = {
    onFocus: function () {
        console.println("Focusing...");
    }
};
annot.events.add( myFocusEvent );
```

To detach this EventListener afterward, run the code below.

```
annot.events.remove( myFocusEvent );
```

### extFocusRect

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Array of 4 Numbers

R/W

| --- | --- | --- | --- | --- | --- |

The focus rectangle a screen annotation paints ordinarily wraps just the annotation itself. Supply extFocusRect and the annotation merges its own rectangle with extFocusRect, then paints the focus rectangle around that combined region.

The PDF file does not store this property. Any change you make lasts only for the current session.

### innerDeviceRect

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Array of 4 Numbers

R

| --- | --- | --- | --- | --- | --- |

Together with outerDeviceRect, this property fixes the inner and outer rectangles of the screen annotation as drawn in the page view that is currently showing.

Example: Read back the innerDeviceRect.

```
annot = this.media.getAnnot({ nPage:0, cAnnotTitle: "myScreen" });
console.println("annot.innerDeviceRect = "
    + annot.innerDeviceRect.toSource() );
```

### noTrigger

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

When this is true, the Acrobat user interface can no longer trigger the screen annotation. Ordinarily a click on a screen annotation kicks off a media player; this property shuts that behavior off.

The PDF file does not store this property. Any change you make lasts only for the current session.

Example: Drive the media clip from form buttons instead, so disable interaction on the annotation.

```
annot = this.media.getAnnot({ nPage:0, cAnnotTitle: "myScreen" });
annot.noTrigger = true;
```

### outerDeviceRect

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Array of 4 Numbers

R8

| --- | --- | --- | --- | --- | --- |

Together with innerDeviceRect, this property fixes the inner and outer rectangles of the screen annotation as drawn in the page view that is currently showing.

### page

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Number

R

| --- | --- | --- | --- | --- | --- |

Gives the page number within the PDF file where the screen annotation sits.

### player

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

ScreenAnnot

R/W

| --- | --- | --- | --- | --- | --- |

Points to the MediaPlayer tied to a screen annotation. Only a ScreenAnnot object that is hooked up to a MediaPlayer carries this property. Its value gets assigned by MediaPlayer.open, or by anything that reaches open by way of another call, for instance app.media.openPlayer.

### rect

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

All

Array of 4 Numbers

R/W

| --- | --- | --- | --- | --- | --- |

Expresses the screen annotation's rectangle in default user coordinates. Writing to this property marks the PDF file dirty, and the fresh value is persisted whenever the PDF file is saved. The change also propagates to innerDeviceRect and outerDeviceRect, which are recomputed for the new rectangle.

Example: Nudge the annotation's location by a small amount.

```
var annot = this.media.getAnnot({ nPage:0, cAnnotTitle: "myScreen" });
var aRect = annot.rect;
aRect[0] += 10;
aRect[2] += 10;
annot.rect = aRect;
```

### ScreenAnnot methods

### hasFocus

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Reports whether the screen annotation is the one holding the keyboard focus at the moment.

Returns

Boolean

### setFocus

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Moves the keyboard focus onto the screen annotation. Whenever it is safe, the focus is assigned synchronously — that is, before setFocus hands control back. When a synchronous assignment is unsafe (say, the property is altered from inside an on event method), the outcome hinges on bAllowAsync:

When true, the focus gets assigned asynchronously while the application is idle.

When false or left out, nothing changes about the focus.

What comes back is true if the work happened synchronously, and false if it had to be put off and handled asynchronously instead.

Parameters

Parameter

Description

bAllowAsync

(optional) A Boolean value that determines the behavior of setFocus when it is not safe to set the focus synchronously. If true, the focus will be set asynchronously during idle time. If false or omitted, the focus remains unchanged. The default is false.

| --- | --- |

Returns

Boolean

## search

### JavaScript APIs — search

A static object, search reaches the capabilities supplied by the Acrobat Search plug-in. That plug-in has to be present for the search object to do anything (refer to available).

Consult as well the Index object, which several of the search object's methods hand back.

Output from query calls shows up in Acrobat's Find dialog box.

Note

Indexes built by Acrobat 7.0 do not work with the search engines in Acrobat 5.0 or any earlier release. On top of that, on the Mac OS platform Acrobat 7.0 cannot search indexes that were produced by Acrobat 5.0 and earlier.

### search properties

### attachments

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Controls whether PDF file attachments get searched together with the base document. It defaults to false.

On the Mac OS platform, this property has no effect when a document is searched from inside the Safari web browser; consequently attachments go unsearched within Safari.

### available

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Yields true once the Search plug-in has loaded and querying is possible. Before running a query or otherwise touching the search object, a script writer ought to test this Boolean.

Example: Confirm the search object is present and ready.

```
if (typeof search != "undefined" && search.available) {
    search.query("Cucumber");
}
```

### bookmarks

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether bookmarks fall within the scope of the query. It defaults to false.

### docInfo

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether the document information falls within the scope of the query. It defaults to false.

### docText

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether the document text falls within the scope of the query. It defaults to true.

### docXMP

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether document-level XMP metadata falls within the scope of the query. It defaults to false.

### ignoreAccents

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether accents and diacriticals are disregarded as the query term is searched. It defaults to false.

### ignoreAsianCharacterWidth

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether the Kana characters within the document have to match the search query exactly. It defaults to false.

### indexes

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

Yes

All

Array

R

| --- | --- | --- | --- | --- | --- |

Holds an array of every Index object the search engine can currently reach.

Note

(Acrobat 7.0) Reaching this property is possible only inside a batch or console event. Refer to Privileged context. A treatment of JavaScript events lives in the event object.

Example: Walk through every index and print out each one's name.

```
for (var i = 0; i < search.indexes.length; i++) {
    console.println("Index[" + i + "]=", search.indexes[i].name);
}
```

### jpegExif

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether EXIF data carried by JPEG images inside the PDF document gets searched. It defaults to false.

### legacySearch

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Note

From Acrobat 10.0 forward, this property is deprecated. It will return false at all times, and only read access is granted.

Offers a way to search indexes that Acrobat Catalog generated under Acrobat 5.0 and earlier. Consult the parts of Acrobat Help that cover searching indexes of that kind.

### markup

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether markup (annotations) falls within the scope of the query. It defaults to false.

### matchCase

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether the search query pays attention to letter case. It defaults to false.

### matchWholeWord

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether the search restricts hits to whole words named in the query. As an illustration, with this option turned on, a search for the word "stick" leaves "tick" and "sticky" unhighlighted. It defaults to false.

### maxDocs

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Caps how many documents the search query hands back. It defaults to 100 documents.

### objectMetadata

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether object-level metadata gets searched. This is the very data shown through Tools pane> Interactive objects > Select Object.

It defaults to false.

### proximity

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether, on a search carrying AND Boolean clauses, the ranking of results accounts for how close the words sit to one another. It defaults to false. A fuller treatment of proximity lives in the Search-capability parts of the Acrobat Help.

### proximityRange

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

How far a proximity search reaches, measured in words. The value matters only when the proximity property has been set to true. A fuller treatment of proximity lives in the Search-capability parts of the Acrobat Help.

It defaults to 900 words. Any non-zero positive integer is an acceptable value for this parameter.

### refine

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether the search query carries over the prior query's results and narrows them by the next query. It defaults to false. A fuller treatment of refining queries lives in the Search-capability parts of the Acrobat Help.

### stem

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether the search weighs word stemming (run, runs, running, for example) as it runs. It defaults to false. A fuller treatment of stemming lives in the Search-capability parts of the Acrobat Help.

### wordMatching

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

String

R/W

| --- | --- | --- | --- | --- | --- |

Dictates the way each word of the query is paired against words in the document. The values are:

```
MatchPhrase
MatchAllWords
MatchAnyWord
BooleanQuery (default)
```

This property comes into play only for a query of more than one word. When the active document is being searched, the BooleanQuery option is disregarded.

### search methods

### addIndex

Version (Key)

Save-Prefs

Security

Product

5.0

P

Yes

All

| --- | --- | --- | --- |

Appends the given index onto the roster of searchable indexes.

Note

Starting with Acrobat 8.1, this method indexes pdx files exclusively.

Parameters

Parameter

Description

cDIPath

A device-independent path to an index file on the user's hard drive.

cDIPath

(optional) Whether the index should be selected for searching.

| --- | --- |

Returns

An Index object.

Example: Appends Acrobat's standard help index onto the index list:

```
search.addIndex("/c/program files/adobe/Acrobat 5.0/help/exchhelp.pdx", true);
```

### getIndexForPath

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Scans the index list and returns whichever Index object has a path matching the one supplied.

Parameters

Parameter

Description

cDIPath

A device-independent path to an index file on the user's hard drive.

| --- | --- |

Returns

The Index object whose path corresponds to the specified path.

### query

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

All

| --- | --- | --- | --- |

Looks through the named document or index for the named text. Properties carried on the search object — matchCase, matchWholeWord, stem, and so on — can shape the outcome.

Note

Starting with Acrobat 8.1, when the cDIPath parameter is supplied, this method may run only from the console or within a batch process.

Parameters

Parameter

Description

cQuery

The text for which to search.

cWhere

(optional) Specifies where the text should be searched. Values are: ActiveDoc Folder Index ActiveIndexes The default is ActiveIndexes.

cDIPath

(optional) A device-independent path to a folder or Catalog index on the user's computer. When cWhere is Folder or Index, this parameter is required.

| --- | --- |

Examples

Search for the word "Acrobat".

cWhere

Query

ActiveIndexes

search.query("Acrobat"); // "ActiveIndexes" is the default. search.query("Acrobat", "ActiveIndexes");

ActiveDoc

search.query("Acrobat", "ActiveDoc");

Folder

search.query("Acrobat","Folder","/c/myDocuments"); search.query("Acrobat","Folder",app.getPath("user","documents")); search.query("Acrobat", "Folder", "//myserver/myDocuments");

Index

search.query("Acrobat", "Index", "/c/Myfiles/public/index.pdx");

| --- | --- |

### removeIndex

Version (Key)

Save-Prefs

Security

Product

5.0

P

Yes

All

| --- | --- | --- | --- |

Drops the given Index object from the index list.

Note

Starting with Acrobat 8.1, this method may run only from the console or within a batch process.

Parameters

index

The Index object to remove from the index list.

| --- | --- |
