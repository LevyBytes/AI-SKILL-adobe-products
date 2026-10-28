# Reference invalidation

A script reference can throw errors once an object has changed enough that the reference no longer points anywhere valid. The simplest scenarios are easy to reason about. Deleting an object, then touching a reference that still points at it, raises the "Object is Invalid" warning:

```javascript
var layer1 = app.project.item(1).layer(1);
layer1.remove();
alert(layer1.name); // invalid reference to deleted object
```

The same warning fires if you reach for an AE property that lived on an object you already deleted:

```javascript
var layer1 = app.project.item(1).layer(1);
var layer1position = layer1.transform.position;
layer1.remove();
alert(layer1position.value); // invalid reference to property inselected object
```

Trickier is the case of pulling a property out of a property group. Here, After Effects raises "Object is Invalid" the next time you reach for that item or its siblings in the group, since removing one entry shifts everyone's index position. As an example:

```javascript
var effect1 = app.project.item(1).layer(1).effect(1);
var effect2 = app.project.item(1).layer(1).effect(2);
var effect2param = app.project.item(1).layer(1).effect(2).blendWithOriginal;
effect1.remove();
alert(effect2.name); // invalid reference because group index positions have changed
```
