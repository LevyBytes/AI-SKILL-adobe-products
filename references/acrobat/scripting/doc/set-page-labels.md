# setPageLabels

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader |

Fixes the numbering scheme for the named page and every page after it, up until the next page that carries its own label.

See also getPageLabel.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | (optional) The 0-based index of the page to be labeled. |
| aLabel | (optional) An array holding three required entries [cStyle, cPrefix, nStart ]: cStyle sets the page-numbering style. Options are:<br><br>D: decimal numbering<br><br>R or r: roman numbering, upper or lower case<br><br>A or a: alphabetic numbering, upper or lower case For the precise definitions of these styles, see the PDF Reference.<br><br>cPrefix is a string placed ahead of the numeric part of the page label. - nStart is the ordinal at which page numbering starts. Leave it out and numbering is stripped from the named page and the ones after it up to the next specified label. aLabel may not be null. |

Example 1: across the document's ten pages, give the first three lowercase roman numerals, the next five plain numbers beginning at 1, and the final two an “Appendix-” prefix with alphabetics.

```javascript
this.setPageLabels(0, [ "r", "", 1]);
this.setPageLabels(3, [ "D", "", 1]);
this.setPageLabels(8, [ "A", "Appendix-", 1]);
var s = this.getPageLabel(0);
for (var i = 1; i < this.numPages; i++)
    s += ", " + this.getPageLabel(i);
console.println(s);
```

The example will produce the following output on the console:

```javascript
i, ii, iii, 1, 2, 3, 4, 5, Appendix-A, Appendix-B
```

Example 2: strip every page label out of a document.

```javascript
for (var i = 0; i < this.numPages; i++) {
    if (i + 1 != this.getPageLabel(i)) {
        // Page label does not match ordinal page number.
        this.setPageLabels(i);
    }
}
```
