# Link a set of properties

For linking in After Effects, the pick whip is the tool you drag and drop. Press and hold the spiral icon beside the expression to drop into selection mode. As you drag toward another property, a whip trails from your cursor, and letting go over a property targets whatever sits beneath it, with the expression syntax written for you.

Property links are the route for tying a group of properties together across layers and compositions:

Pick a single property or a group of them and run Edit > Copy With Property Links or Edit > Copy With Relative Property Links.

Now paste those properties onto whatever layer you like within a composition. Once pasted, they stay wired to the layer they were copied from, so whatever changes on the source property carries through to every pasted property-link instance.

(or)

A whole layer can likewise be copied with property links and pasted, yielding duplicates that track every change on the original.

Here is what comes out when a layer's Position property is copied using the Copy With Relative Property Links command:

```javascript
thisComp.layer("control_layer").transform.position
```

And here is what comes out when that same Position property is copied using the Copy With Property Links command:

```javascript
comp("source_comp").layer("control_layer").transform.position
```
