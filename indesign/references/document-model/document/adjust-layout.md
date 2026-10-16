# adjustLayout

> **adjustLayout**( Object **adoptTo**, Page **affectedPages** )
>
> Changes the existing layout for new page size, bleed, and margin values. The first argument is a plain object whose key/value pairs identify affected properties. Allowed keys are width, height, bleedInside, bleedTop, bleedOutside, bleedBottom, leftMargin, topMargin, rightMargin, bottomMargin. Values may be decimal numbers in Pt units or strings that carry measurement values such as '1 in'. Only properties that require updates need to be supplied. When individual pages are handled instead of the whole document, bleed changes do not apply. E.g. - app.activeDocument.adjustLayout(\{width:'600px', leftMargin: '1in'}), app.activeDocument.adjustLayout(\{rightMargin:'1in'}, app.activeDocument.spreads[0].pages), app.activeDocument.spreads[0].pages[0].adjustLayout(\{width:'400px', leftMargin: '10px'})

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | adoptTo | Object containing the change values; details are in the function definition. |
| Page | affectedPages | Page collection to modify (optional). Calling this function from Page makes this argument ineffective. (Optional) |
