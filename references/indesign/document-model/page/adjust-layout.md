# adjustLayout

> **adjustLayout**( Object **adoptTo**, Page **affectedPages** )
>
> Recomputes the current layout from supplied page size, bleed, and margin settings. Pass the first parameter as a plain object whose key/value pairs name affected properties. Allowed keys: width, height, bleedInside, bleedTop, bleedOutside, bleedBottom, leftMargin, topMargin, rightMargin, bottomMargin. Values may be decimal Pt numbers or measurement strings such as '1 in'. Include only the properties that should change. For calls aimed at individual pages rather than the whole document, bleed updates are ignored. E.g. - app.activeDocument.adjustLayout(\{width:'600px', leftMargin: '1in'}), app.activeDocument.adjustLayout(\{rightMargin:'1in'}, app.activeDocument.spreads[0].pages), app.activeDocument.spreads[0].pages[0].adjustLayout(\{width:'400px', leftMargin: '10px'})

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | adoptTo | Values to change; see the function definition for details |
| Page | affectedPages | Page objects that receive the change (optional). Ignored for Page-level calls (Optional) |
