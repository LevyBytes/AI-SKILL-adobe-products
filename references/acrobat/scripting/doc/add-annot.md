# addAnnot

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | Saved | Yes | Required the right to manipulate comments |

Builds an Annotation object carrying the properties you specify. Any property you leave out is filled in with the default for that annotation type.

Note

(Acrobat 8.0) addAnnot now behaves differently when the author property goes unspecified. Run in an unprivileged context, author defaults to the string undefined; run in a privileged context, the author property defaults to the current user's login name.

Parameters

| Parameter | Description |
| --- | --- |
| object literal | A generic object spelling out the Annotation object's properties, things like type, rect, and page, that you want created. |

Returns

The new Annotation object.

Example 1: This bare-bones example produces a square annotation.

```javascript
var sqannot = this.addAnnot({type: "Square", page: 0});
```

sqannot ends up as a square annotation on the first page (numbering pages from 0).

Example 2: Place a Text annotation carrying assorted properties.

```javascript
var annot = this.addAnnot
({
    page: 0,
    type: "Text",
    author: "A. C. Robat",
    point: [300,400],
    strokeColor: color.yellow,
    contents: "Need a little help with this paragraph.",
    noteIcon: "Help"
});
```

Example 3: Place a Square annotation carrying assorted properties.

```javascript
   var annot = this.addAnnot({
       page: 0,
       type: "Square",
       rect: [0, 0, 100, 100],
       name: "OnMarketShare",
       author: "A. C. Robat",
       contents: "This section needs revision."
});
```

Example 4: An elaborate ink annotation shaped like a three-leaf rose.


```javascript
var inch = 72, x0 = 2*inch, y0 = 4*inch;
var scaledInch = .5*inch;
var nNodes = 60;
var theta = 2*Math.PI/nNodes;
var points = new Array();
for (var i = 0; i <= nNodes; i++) {
    Theta = i*theta;
    points[i] = [x0 + 2*Math.cos(3*Theta)*Math.cos(Theta)*scaledInch,
    y0 + 2*Math.cos(3*Theta)*Math.sin(Theta)*scaledInch];
}
var annot = this.addAnnot({
    type: "Ink",
    page: 0,
    name: "myRose",
    author: "A. C. Robat",
    contents: "Three leaf rose",
    gestures: [points],
    strokeColor: color.red,
    width: 1
});
```
