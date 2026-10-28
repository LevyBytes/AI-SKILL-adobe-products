# getProps

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | No | C |

Retrieves an annotation’s gathered properties, which makes it handy for duplicating one.

Returns

An object literal listing the annotation’s properties — identical in shape to the one you pass into the addAnnot method of the Doc object.

Example 1: Replicate one annotation onto each page throughout the document.

```javascript
var annot = this.addAnnot({
    page: 0,
    type: "Text",
    rect: [40, 40, 140, 140]
});

// Make a copy of the properties of annot
var copy_props = annot.getProps();

// Now create a new annot with the same properties on every page
var numpages = this.numPages;
for (var i=0; i < numpages; i++) {
    var copy_annot = this.addAnnot(copy_props);
    // but move it to page i
    copy_annot.page=i;
}
```

Example 2: Display all properties and values of an annotation.

```javascript
var a = this.getAnnots(0);     // get all annots on page 0
if ( a != null ) {
    var p = a[0].getProps();     // get the properties of first one
    for ( o in p ) console.println( o + " : " + p[o] );
}
```
