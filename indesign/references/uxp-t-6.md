# Text Preference, Text Stroke Align

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: TextPreference — Instance; TextStrokeAlign.

## TextPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the TextPreference (a Application or Document).
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Boolean **typographersQuotes**
>
> When true, straight quotes are converted to typographic quotes.
> Boolean **highlightHjViolations**
>
> When true, hyphenation and justification rule violations are highlighted in the text.
> Boolean **highlightKeeps**
>
> When true, paragraphs breaching keep options are highlighted.
> Boolean **highlightSubstitutedGlyphs**
>
> When true, substituted glyphs are highlighted.
> Boolean **highlightCustomSpacing**
>
> When true, custom kerned or tracked characters are highlighted.
> Boolean **highlightSubstitutedFonts**
>
> When true, missing fonts are highlighted.
> Boolean **useOpticalSize**
>
> When true, the correct optical size is selected automatically.
> Boolean **useParagraphLeading**
>
> When true, leading changes made to a text range apply to the whole paragraph. When false, leading changes apply only to that text range.
> Number **superscriptSize**
>
> Superscript sizing percentage relative to font size. (Range: 0 to 200)
> Number **superscriptPosition**
>
> Superscript offset percentage relative to regular leading. (Range: -500 to 500)
> Number **subscriptSize**
>
> Subscript sizing percentage relative to font size. (Range: 0 to 200)
> Number **subscriptPosition**
>
> Subscript offset percentage relative to regular leading. (Range: -500 to 500)
> Number **smallCap**
>
> Small-caps percentage relative to base type size. (Range: 1 to 200; percent value)
> Measurement Unit (Number or String)=any **leadingKeyIncrement**
>
> Leading step bound to option/alt-up arrow keys and option/alt-down arrow keys. (Range: .001 to 100; increment value)
> Measurement Unit (Number or String)=any **baselineShiftKeyIncrement**
>
> Baseline-shift step for option/alt-shift-up arrow keys and option/alt-shift-down arrow keys. (Range: .001 to 100)
> Number **kerningKeyIncrement**
>
> Kerning step per 1000 ems for option/alt-right arrow keys and option/alt-left arrow keys. (Range: 1 to 100)
> Boolean **showInvisibles**
>
> When true, hidden characters are shown.
> Boolean **justifyTextWraps**
>
> When true, text around text wrap objects is justified.
> Boolean **abutTextToTextWrap**
>
> When true, wrapped text skips by leading to the next available increment below text wrap objects.
> Boolean **zOrderTextWrap**
>
> When true, text wrap does not affect text on layers above the layer containing the text wrap object. When false, text wrap applies to text on all visible layers.
> Boolean **linkTextFilesWhenImporting**
>
> When true, placed text files and spreadsheet files are linked. When false, those files are embedded.
> Boolean **highlightKinsoku**
>
> When true, on-screen highlighting identifies kinsoku.
> Boolean **quoteCharactersRotatedInVertical**
>
> When true, in vertical text the Japanese composer uses half-width quotes and rotates them.
> Boolean **smartTextReflowSync**
>
> When this is True and Smart text reflow is enabled, pages are added or deleted synchronously after text reflowing.
> Boolean **shapeIndicAndLatinWithHarbuzz**
>
> When this bool is set to true, shaping of Indic & Latin characters uses the Harfbuzz Shaping engine instead of Lipika.
> Boolean **useNewVerticalScaling**
>
> When true, X and Y scaling are reversed on Roman characters in vertical text.
> Boolean **useCidMojikumi**
>
> When true, the glyph CID is used to get the mojikumi class of the character.
> Boolean **honourTextIndentsWithTextWrap**
>
> When true, indentation is modified for Bulleted Paragraph and Bullets around a Text Wrap object.
> Boolean **enableStylePreviewMode**
>
> When true, character and paragraph styles are highlighted with colored backgrounds.
> Boolean **smartTextReflow**
>
> When true, automatic page adding and deletion is enabled in response to text reflow.
> AddPageOptions **addPages**
>
> Specifies where new pages are inserted in response to overset text.
> Boolean **limitToMasterTextFrames**
>
> Limits pages added during smart text reflow to overridden master text frames.
> Boolean **preserveFacingPageSpreads**
>
> Keeps facing-page left/right page pairing during smart text reflow.
> Boolean **deleteEmptyPages**
>
> Enables automatic deletion of pages that contain empty threaded text frames.
> Object **properties**
>
> Allows several properties to be assigned at the same time.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the TextPreference.
> TextPreference **getElements**()
>
> Produces an object-reference array from the resolved object specifier.
> String **toSpecifier**()
>
> Gets this object's specifier string.
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

## TextStrokeAlign

Options for aligning strokes.

### Class

> _Read Only_
>
> Number `CENTER_ALIGNMENT` = 1936998723
>
> Stroke placement is centered across the path.
> _Read Only_
>
> Number `OUTSIDE_ALIGNMENT` = 1936998735
>
> Stroke placement sits outside the path, similar to a picture frame.
