# JavaScript APIs - Annotation

An Acrobat annotation is what this object models. You can produce one either with Acrobat's annotation tool or programmatically through the Doc object's addAnnot method.

You first have to tie an annotation to a JavaScript variable before you can work with it; a Doc object method such as getAnnot does that binding:

```javascript
var a = this.getAnnot(0, "Important");
```

With that variable a in hand, the script gains control over the annotation called "Important" sitting on page 1 (pages count from 0). The snippet that follows, for instance, saves the annotation's type into the variable thetype and then reassigns its author to "John Q. Public".

```javascript
var thetype = a.type;          // read property
a.author = "John Q. Public";   // write property
```

The Doc object's getAnnots method offers a second route to reach an Annotation object.

Note

From Adobe Reader 5.1 onward, every annotation property except contents is readable. Whether you may write to these properties hinges on the Comments document rights, signaled by the C icon.

Note

What scripting calls annotations show up in the Acrobat interface under the label comments .
