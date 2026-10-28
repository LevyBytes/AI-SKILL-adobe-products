# alternatePresentations

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Object undefined | R |

Points to the document's AlternatePresentation object. Should the machinery for showing alternate presentations be missing, this property reads as undefined.

Through the AlternatePresentation object you reach the document's alternate presentations. Under the PDF language extension, a single document can hold many named alternate presentations. Every alternate presentation of a recognized type gains a matching alternatePresentations property on the document; that property carries the same name as its alternate presentation and points to that presentation's AlternatePresentation object. When the document contains no recognized alternate presentations, this object stays empty (it exposes no properties).

Full details on alternate presentations live in the PDF Reference.

Note

To match the present implementation, give the alternate presentation an ASCII name. So far the only alternate presentation type built is "SlideShow".

For the properties and methods that drive an alternate presentation, look at the AlternatePresentation object.

Example 1: Test whether the AlternatePresentation object is present:

```javascript
if( typeof this.alternatePresentations != "undefined" )
{
    // Assume AlternatePresentations are present
    // List the names of all alternate presentations in the doc
    for ( var ap in this.alternatePresentations ) console.println(ap);
}
```

Example 2: Get the slide show named MySlideShow and start the show.

```javascript
// oMySlideShow is an AlternatePresentation object
oMySlideShow = this.alternatePresentations["MySlideShow"];
oMySlideShow.start();
```
